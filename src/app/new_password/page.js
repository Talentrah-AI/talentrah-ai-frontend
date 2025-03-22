'use client'

import { useState } from "react";
import { LogOut, EyeOff, Eye } from "lucide-react";
import Link from "next/link";
import Logo from '@/assets/images/logo.png';
import Image from "next/image";

export default function ResetPassword() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword,  setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleReset = () => {
    if (password !== confirmPassword) {
      setError("Passwords don’t match. Please try again");
      return;
    }
    setError("");
    // Proceed with API call or next step
    alert("Password successfully reset!");
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-[#EAF1FB] p-4">
    <div className="flex flex-col items-center justify-center flex-1 w-full">
    <div className="min-h-screen flex flex-col rounded-2xl w-full bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
      <Link href='/' >  
        <Image src={Logo} 
          alt="Talentrah Logo"
          width={70}
          height={70} 
          className="h-10" 
          />
        </Link>
        <button className="flex items-center text-gray-500 text-sm hover:underline">
          <LogOut size={16} className="mr-1" /> Logout
        </button>
      </header>

      {/* Main Form */}
        <div className="max-w-sm mx-auto">
          <h2 className="text-xl font-semibold text-center">Reset password</h2>
          <p className="text-gray-500 text-sm mb-8">
            Enter your new password below to secure your account. <br />
            Make sure it’s strong and easy to remember!
          </p>

          {/* Password Fields */}
          
          <div className="space-y-4">
            {/* New Password */}
            <div className="text-left">
              <label className="block text-sm font-medium mb-1">Enter New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
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
            <div className="text-left">
              <label className="block text-sm font-medium mb-1">Confirm password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
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
          </div>
          {/* </form> */}

          {error && (
            <p className="text-left text-red-500 text-sm mt-2">{error}</p>
          )}

          {/* Reset Button */}
          <button className="mt-6 w-full bg-blue-100 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-200 transition"
            onClick={handleReset}
            >
                <Link href='/login'>
            Reset password
            </Link>
          </button>
        </div>
      {/* </main> */}
    </div>
    </div>

    {/* Footer outside the card */}
    <footer className="text-gray-500 text-xs text-center py-4">
        © 2025 Talentrah. All rights reserved | <a href="#" className="underline">Terms & Conditions</a> | <a href="#" className="underline">Privacy Policy</a>
      </footer>
    </div>
  );
}
