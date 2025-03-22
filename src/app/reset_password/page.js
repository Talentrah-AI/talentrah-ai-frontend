'use client'

import { useState } from "react";
import { ArrowLeft, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from '@/assets/images/logo.png';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-[#EAF1FB]  p-4">
      {/* Centered Card */}
      <div className="flex flex-col items-center justify-center flex-1 w-full">
        <div className="min-h-screen flex flex-col rounded-2xl w-full bg-white">
          {/* Header */}
        <div className="flex justify-between items-center px-8 py-6">
        <Link href='/' >  
        <Image src={Logo} 
          alt="Talentrah Logo"
          width={70}
          height={70} 
          className="h-10" 
          />
        </Link>
          
          <button className="flex items-center text-gray-500 text-sm hover:underline">
            <LogOut size={18} className="mr-1" /> Logout
          </button>
        </div>

          {/* Inner content wrapper to keep things small and centered */}
          <div className="max-w-sm mx-auto">
            
            <h2 className="text-xl font-semibold text-center">Forgot password?</h2>
            <p className="text-gray-500 text-xs text-center mb-6">
              Enter your email below, and we’ll send you a link to reset it.
            </p>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
              <Link href='reset_email'>Send link</Link>
            </button>
            <button className="mt-4 w-full flex items-center justify-center border py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-100">
              <ArrowLeft size={16} className="mr-2" /> 
              <Link href='/' >Go back </Link>
            </button>
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
