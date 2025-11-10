"use client"
import { EmailTemplate } from '@/components/email-template';
import { resend } from '@/lib/resend';
// import { NextRequest, NextResponse } from 'next/server';
import React from 'react'

function Email() {
  const handleEmailClick = async () =>{
    try {
      const res = await fetch('api/send', {
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          to: ['prince@emb.global'],
          firstName: 'John Doe',
        }) 
      });

      const json = await res.json();
      if(!res.ok){
        throw new Error(json?.error || 'Failed');
      }
        } catch (error) {
    }
  } 

  // const handleClick = async () => {
  //   try {
  //     const {data, error} = await resend.emails.send({
  //       from: 'Acme <onboarding@resend.dev>',
  //       to: ['delivered@resend.dev'],
  //       subject: 'Hello world',
  //       react: EmailTemplate({ firstName: 'John Doe' }),
  //     });
  //     if(error){
  //       return res.status(400).json({error});
  //     }
  //     return res.status(200).json({data});
  //   } catch (error) {
  //     return res.status(500).json({ error });
  //   }
  // } 
  return (
    <div className='flex p-5 m-5 gap-5'>Email
    <button onClick={handleEmailClick} className='border border-black px-2 hover:cursor-pointer'>Sample Mail</button>
    <button className='border border-black px-2 hover:cursor-pointer'>Verification mail</button>
    </div>
  )
}

export default Email