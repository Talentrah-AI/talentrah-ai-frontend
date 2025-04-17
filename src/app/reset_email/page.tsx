'use client';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/logo.png';
import Empty from '@/assets/images/EmptyState.png';

export default function ForgotPassword() {

  return (
    <div className="flex flex-col items-center justify-start gap-5 bg-Lblueshade-02  w-full max-w-[1440px] mx-auto p-5 md:pt-12 pt-8">
      {/* Centered Card */}

      <div className="rounded-2xl bg-white p-4 flex flex-col items-start justify-start md:gap-8 gap-16 w-full h-[764px]">
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
        <div className="w-full flex flex-col justify-start items-center gap-0 max-w-[580px] mx-auto md:px-14 px-2.5 py-9">
          <div className="flex justify-center items-center mb-1">
            <Image
              src={Empty}
              alt="email"
              width={165}
              height={132}
              className="md:w-[165px] w-[137px] md:h-[132px] h-[109px]"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-3.5">
            <h2 className="md:text-[26px] text-xl leading-none font-medium text-center text-black">
              Email Sent
            </h2>
            <p className="text-lightGrey-05 md:text-base text-sm text-center mb-4 leading-tight">
              We have sent you an email at{' '}
              <b className="text-black">JaneDoe@gmail.com.</b> Check your inbox
              and follow instruction to reset your password.
              <br />
              <br />
              <small className="text-xs mb-2">
                Did not receive an email?{' '}
                <Link href="" className="text-primary">
                  Resend link
                </Link>
              </small>
              <br />
              <small className="text-xs">
                Wrong email?{' '}
                <Link href="/reset_password" className="text-primary">
                  Change Email Address
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>

      {/* Footer outside the card */}
      <footer className="text-gray-500 text-xs text-center py-4">
        © 2025 Talentrah. All rights reserved |{' '}
        <a href="#" className="underline">
          Terms & Conditions
        </a>{' '}
        |{' '}
        <a href="#" className="underline">
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}
