'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Eye, EyeOff, Globe, Loader2, ChevronDown } from 'lucide-react';
import Talentrah from '@/assets/images/Talentrah.png';
import ariana from '@/assets/images/ariana.png';
import googleIcon from "@/assets/images/google.svg";
import linkedinIcon from "@/assets/images/linkedinIcon.svg";
import Link from 'next/link';
import { languages, languagesType } from '@/data/login/languages';
import { errorsType } from '@/data/login/checkTypes';
import PopupCard from '@/components/Popcard1';


export default function App() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<errorsType>({});
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // for default to English
  //use iin pop up 
  const [isOpen, SetIsOpen] = useState(false);
  const [vcode, setVcode] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  
  // popup to appear automatically after login every 
  // time, but only when it detects a new or unauthorized device.
  // Use a library like fingerprintjs
  // npm install @fingerprintjs/fingerprintjs


  const handleVerify = () => {
    const enteredCode = vcode.join('');
    const correctCode = '110141'; //replace it with the logic
    if (enteredCode === correctCode) {
      setIsVerified(true);
      setError('');
    }else {
      setError('Invalid code. Please try again')
    }
  };

  const validateForm = () => {
    const newErrors: errorsType = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setIsOpenP(true); //for poping up
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };
  //for lang user can chose there lang lke english,
  const handleSelect = (language: languagesType) => {
    setSelectedLanguage(language);
    SetIsOpen(false);
  };

  // for popcard
  const [isOpenP, setIsOpenP] = useState(false);

  useEffect(() => {
    // Automatically open the popup after a short delay
    const timer = setTimeout(() => setIsOpenP(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleCodeChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
      const newCode = [...vcode];
      newCode[index] = value;
      setVcode(newCode);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    
  };

  

  return (
    <section className="min-h-screen w-full grid md:grid-cols-2 grid-cols-1 bg-white max-w-[1440px] mx-auto">
      {/* Left Section */}
      <div className="hidden md:flex flex-1 flex-col justify-between text-white w-full p-2">
        <div className="bg-login bg-cover rounded-2xl bg-center min-h-screen px-14 py-10 w-full flex flex-col justify-between items-start">
          <div className="w-full flex flex-col justify-start items-start gap-14">
            <Image
              src={Talentrah}
              width={105}
              height={56}
              alt="Picture of Logo"
            />

            <div className="w-full flex flex-col justify-start items-start gap-4">
              <h1 className="text-[44px] font-bold leading-none">
                Welcome Back! Secure Your Next Job with AI
              </h1>
              <p className="text-base font-normal leading-tight">
                Log in to build powerful resumes, craft standout cover letters,
                and apply to jobs effortlessly—all in one place
              </p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="flex flex-col justify-start items-center gap-5">
            <div className="bg-[#3A85DB] p-6 rounded-xl backdrop-blur-md flex flex-col justify-start items-start gap-4">
              <p className="text-base font-normal leading-tight">
                &quot;This platform made creating my resume effortless! The AI
                suggestions were spot on, and my resume now looks more
                professional than ever&quot;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="size-10 rounded-full bg-gray-300 overflow-hidden">
                  <Image
                    src={ariana}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col justify-start items-start gap-1">
                  <h3 className="font-normal text-base leading-none">
                    Ariana Grande
                  </h3>
                  <p className="text-xs text-Lreshade-01 leading-none">
                    Visual Designer, Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:max-w-[510px] max-w-[450px] w-full flex p-5 flex-col justify-start items-start md:py-12 py-8 gap-8 mx-auto">
        <div className="flex justify-end mb-8 w-full relative">
          {/* Button to open dropdown */}
          <button
            className="flex items-center gap-1.5 bg-white shadow-card px-4 py-3 rounded-lg cursor-pointer text-dark-grey-01 text-sm"
            onClick={() => SetIsOpen(!isOpen)}
          >
            <Globe className="size-4 stroke-dark-grey-01" />
            {selectedLanguage.name}
            <ChevronDown className="size-4 stroke-gray-400" />
          </button>
          {/* for dropdown */}
          {isOpen && (
            <div className="absolute md:-right-10 right-0 mt-2 w-40 bg-white shadow-lg rounded-xl top-12 z-10 p-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`block w-full text-left md:text-base text-xs font-normal py-3.5 px-5 border-t border-t-light-grey-01 cursor-pointer rounded-[12px] ${selectedLanguage.name === lang.name ? 'bg-Lblueshade-02 text-black' : 'bg-transparent text-lightGrey-05'}`}
                  onClick={() => handleSelect(lang)}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-10">
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h3 className="md:text-[26px] text-xl font-semibold leading-none">
              Login
            </h3>
            <p className="text-lightGrey-05 md:text-base text-xs font-normal leading-none">
              Welcome back! Ready to continue your job search?
            </p>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-6">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col justify-start items-start gap-6"
            >
              <div className="w-full flex flex-col justify-start items-start gap-1">
                <label
                  htmlFor="email"
                  className="md:text-base text-sm font-normal text-black"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2.5 rounded-lg border md:text-base text-sm ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="w-full flex flex-col justify-start items-start gap-1">
                <label
                  htmlFor="pws"
                  className="md:text-base text-sm font-normal text-black"
                >
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="************"
                    className={`w-full px-4 py-3 rounded-lg border md:text-base text-sm ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-4 text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
                <Link
                  href="/reset_password"
                  className="md:text-base text-sm text-primary ml-auto"
                >
                  Reset password
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer md:text-base text-sm"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-3 h-3 mr-2 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  'Login'
                )}
              </button>

              <span className="w-full text-center uppercase text-xs text-lightGrey-05">
                OR
              </span>

              {/* for the social media */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 px-3 py-3 border border-[#E8EDF2] rounded-lg hover:bg-gray-50 transition cursor-pointer"
                >
                  <Image
                    src={googleIcon}
                    alt="Google"
                    className="w-5 h-5 object-contain"
                    width={20}
                    height={20}
                  />
                  Continue with Google
                </button>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 px-3 py-3 border border-[#E8EDF2] cursor-pointer rounded-lg hover:bg-gray-50 transition"
                >
                  <Image
                    src={linkedinIcon}
                    alt="LinkedIn"
                    className="w-5 h-4 object-contain"
                    width={20}
                    height={20}
                  />
                  Continue with LinkedIn
                </button>
              </div>
            </form>

            <p className="text-center text-sm text-gray-600 w-full">
              Don&apos;t have an account?{' '}
              <Link
                href="/"
                className="text-primary hover:text-blue-800 font-medium"
              >
                Create a new account
              </Link>
            </p>
          </div>
        </div>
      </div>
       
       {/* popup code */}
       {isOpenP && (
       <div className="fixed inset-0 flex items-center justify-center z-50 bg-transparent">
      {/* Content AT THE TOP */}  
      <PopupCard
        isOpen={isOpenP}
        onClose={() => setIsOpenP(false)}
        title="Verify your identity"
      >

        {!isVerified ? (
        <div className="space-y-4">
        {/* <div className="h-3 bg-blue-500 rounded-t-md -mt-6  -mx-6 mb-4 "></div> */}
          <p className="text-gray-600 text-center text-sm">
          We've sent a 6-digit verification code to your registered email/phone. Enter the code below to continue
          </p>
          
          {/* Code input grid */}
          <div className="flex gap-2 justify-between">
            {vcode.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                className={`w-12 h-12 text-center text-xl font-semibold rounded-lg outline-none transition-all
                  border-2 ${error ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"}
                `}
              />
            ))}
          </div>

          {/* Error message */}
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            onClick={handleVerify}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Verify
          </button>

          <p className="text-sm text-gray-500 text-center">
          Didn't receive the code? Resend in 30 seconds <br></br>
           <button className="text-blue-600 hover:text-blue-700">Resend code</button>
          </p>
        </div>
        ) :(
          // Success message block
        <div className="text-center space-y-4">
        <h2 className="font-semibold text-lg">Verification successful!</h2>
        <p className="text-gray-600 text-sm">
          Do you want to remember this device for future logins?
        </p>

        <div className="flex justify-center gap-4">
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-50">
            No, ignore it
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Yes, remember this device
          </button>
        </div>
      </div>
    )}
      </PopupCard>
    </div>
       )}

    </section>
  );
}
