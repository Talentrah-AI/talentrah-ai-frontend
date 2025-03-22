'use client'

import { useState } from "react";
import { ArrowLeft, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from '@/assets/images/logo.png';
import Empty from '@/assets/images/EmptyState.png';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-[#EAF1FB] p-4">
      {/* Centered Card */}
      <div className="flex flex-col items-center justify-center flex-1 w-full">
        <div className="min-h-screen flex flex-col rounded-2xl w-full bg-white">
        <div className="flex justify-between items-center px-8 py-6">
        <Link href='/' >  
        <Image src={Logo} 
          alt="Talentrah Logo"
          width={70}
          height={70} 
          className="h-10" 
          />
        </Link>
              <button className="flex items-center text-gray-500 text-sm">
                <LogOut size={16} className="mr-1" /> Logout
              </button>
            </div>
          {/* Inner content wrapper to keep things small and centered */}
          <div className="flex justify-center items-center mb-1">
          <Image src={Empty} 
          alt="email"
          width={120}
          height={70} 
          className="h-27" />
            
          </div>
          <div className="max-w-sm mx-auto">
            <h2 className="text-xl font-semibold text-center">Email Sent</h2>
            <p className="text-gray-500 text-xs text-center mb-4">
             We have sent you an email at <b>JaneDoe@gmail.com.</b> Check your
            inbox and follow instruction to reset your password. 

            <br/>
            <br/>
            <small>Did not receive an email?<Link href='' className="text-blue-500">Resend link</Link></small><br />
            <small>Wrong email?<Link href='/reset_password' className="text-blue-500">Change Email Address</Link></small>
            </p>
            
            
          </div>
        </div>
      </div>

      {/* Footer outside the card */}
      <footer className="text-gray-500 text-xs text-center py-4">
        © 2025 Talentrah. All rights reserved | <a href="#" className="underline">Terms & Conditions</a> | <a href="#" className="underline">Privacy Policy</a>
      </footer>
    </div>
  );
}
