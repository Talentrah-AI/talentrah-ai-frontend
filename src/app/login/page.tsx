'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, EyeOff, Globe, Loader2, ChevronDown } from 'lucide-react';
import Talentrah from '@/assets/images/Talentrah.png';
import ariana from '@/assets/images/ariana.png';
import googleIcon from "@/assets/images/google.svg";
import linkedinIcon from "@/assets/images/linkedinIcon.svg";
import Link from 'next/link';
import { languages, languagesType } from '@/data/login/languages';
import { errorsType } from '@/data/login/checkTypes';

export default function App() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<errorsType>({});
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // for default to English
  const [isOpen, SetIsOpen] = useState(false);

  const validateForm = () => {
    const newErrors: errorsType = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
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
                  htmlFor="password"
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
    </section>
  );
}
