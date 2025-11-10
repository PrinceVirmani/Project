import { EmailTemplate } from '@/components/email-template';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const to: string [] = body?.to || ["delivered@resend.dev"];
    const firstName: string = body?.firstName || "John Doe";

    const data = await resend.emails.send({
      from: 'cloudsplit@resend.dev', // use your verified domain/sender in prod
      to,
      subject: 'Hello world',
      react: EmailTemplate({ firstName }),
    })

    return NextResponse.json(data);

  } catch (error: any) {
    return NextResponse.json({ error: error?.message ?? 'Send failed' }, { status: 500 });
  }
}