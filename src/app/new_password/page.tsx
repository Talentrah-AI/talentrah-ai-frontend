'use client';

import { useState } from 'react';
import { LogOut, EyeOff, Eye } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/assets/images/logo.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function ResetPassword() {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleReset = () => {
    if (password !== confirmPassword) {
      setError("Passwords don't match. Please try again");
      return;
    }
    setError('');
    // Proceed with API call or next step
    alert('Password successfully reset!');
    router.push('/login');
  };

  return (
    <div className="flex flex-col items-center justify-start gap-5 bg-Lblueshade-02  w-full max-w-[1440px] mx-auto p-5 md:pt-12 pt-8">
      <div className="rounded-2xl bg-white p-4 flex flex-col items-start justify-start md:gap-8 gap-16 w-full h-[764px]">
        {/* Header */}
        <header className="flex justify-between items-center w-full">
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
        </header>

        {/* Main Form */}
        <div className="md:max-w-[510px] max-w-[450px] w-full flex flex-col justify-start items-start gap-10 mx-auto">
          <div className="w-full flex flex-col justify-start items-center text-center gap-2">
            <h2 className="md:text-[26px] text-xl font-semibold leading-none">
              Reset password
            </h2>
            <p className="text-lightGrey-05 md:text-base text-xs font-normal leading-none">
              Enter your new password below to secure your account. <br />
              Make sure it&apos;s strong and easy to remember!
            </p>
          </div>
          {/* Password Fields */}

          <form className="w-full flex flex-col justify-start items-start gap-6">
            {/* New Password */}
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <label className="md:text-base text-sm font-normal text-black">
                Enter New Password
              </label>
              <div className="relative w-full">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="*************"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <label className="md:text-base text-sm font-normal text-black">
                Confirm password
              </label>
              <div className="relative w-full">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="*************"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </form>
          {/* </form> */}

          {error && (
            <p className="text-left text-red-500 text-sm mt-2">{error}</p>
          )}

          {/* Reset Button */}
          <button
            className="w-full bg-blue-100 text-primary py-3 rounded-lg font-medium hover:bg-blue-200 transition cursor-pointer"
            onClick={handleReset}
          >
            Reset Password
          </button>
        </div>
        {/* </main> */}
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
