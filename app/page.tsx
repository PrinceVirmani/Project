"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router =  useRouter();
  return (
    <div>
      <Button className="border border-black p-2 m-5" onClick={()=> router.push('/login')}>Login</Button>
    </div>
  );
}
