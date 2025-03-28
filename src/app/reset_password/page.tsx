'use client';

import { useState } from 'react';
import { ArrowLeft, LogOut } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/logo.png';

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>('');

  return (
    <div className="flex flex-col items-center justify-start gap-5 bg-Lblueshade-02  w-full max-w-[1440px] mx-auto p-5 md:pt-12 pt-8">
      {/* Centered Card */}

      <div className="rounded-2xl bg-white p-4 flex flex-col items-start justify-start md:gap-8 gap-16 w-full h-[764px]">
        {/* Header */}
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <Image
              src={Logo}
              alt="Talentrah Logo"
              width={105}
              height={52}
              className="md:w-[105px] w-[75px] md:h-[52px] h-[37px]"
            />
          </Link>

          <button className="flex items-center text-lightGrey-05 md:text-sm text-xs hover:underline">
            <LogOut size={18} className="mr-1" /> Logout
          </button>
        </div>

        {/* Inner content wrapper to keep things small and centered */}
        <div className="w-full flex flex-col justify-start items-start max-w-[510px] mx-auto gap-10">
          <div className="w-full flex flex-col justify-start items-center gap-2">
            <h2 className="md:text-[26px] text-xl leading-none font-medium text-center text-black">
              Forgot password?
            </h2>
            <p className="text-lightGrey-05 md:text-base text-sm leading-none text-center">
              Enter your email below, and we&apos;ll send you a link to reset
              it.
            </p>
          </div>
          <form className="w-full flex flex-col justify-start items-start gap-0">
            <label className="block md:text-base text-sm font-medium text-black mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:text-base text-sm"
            />
            <button className="w-full bg-primary text-white py-3 rounded-lg font-medium mt-4 md:mb-6 mb-4 md:text-base text-sm">
              <Link href="reset_email">Send link</Link>
            </button>
            <Link
              href="/login"
              className="w-full flex items-center justify-center border py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-100 md:text-base text-sm"
            >
              <ArrowLeft className="mr-2 md:size-4 size-3" />
              <p>Go back </p>
            </Link>
          </form>
        </div>
      </div>

      {/* Footer outside the card */}
      <footer className="text-gray-500 text-xs text-center py-4">
        &copy; 2025 Talentrah. All rights reserved |{' '}
        <Link href="/" className="underline">
          Terms & Conditions
        </Link>{' '}
        |{' '}
        <Link href="/" className="underline">
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
}
