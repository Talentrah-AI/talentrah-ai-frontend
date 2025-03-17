'use client';

import React, { useState } from 'react';
import Image from '@node_modules/next/image';
import { Eye, EyeOff, Globe, Loader2, ChevronDown } from 'lucide-react';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  //for lang user can chose there lang lke english, 
  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "de",   name: "German" },
    { code: "py",   name: "Portuguese" },
    { code: "ru",   name: "Russian" },
    { code: "jp",   name: "Japanese"},
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // for default to English
  const [isOpen, SetIsOpen] = useState(false);

  const handleSelect = (language) => {
      setSelectedLanguage(language);
      SetIsOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-blue-600">
      {/* Left Section */}
      <div className="hidden md:flex flex-1 p-8 flex flex-col justify-between text-white">
        <div>
          <div className="flex items-center gap-2">
          <Image
             src="/Talentrah.png"
             width={50}
             height={50}
             alt="Picture of the author"
              />          
          </div>
          
          <div className="mt-32">
            <h1 className="text-3xl font-bold leading-tight">
              Welcome Back! Secure Your Next Job with AI
            </h1>
            <p className="mt-6 text-lg opacity-90">
              Log in to build powerful resumes, craft standout cover letters, and apply to jobs effortlessly—all in one place
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-blue-500/30 p-6 rounded-xl backdrop-blur-sm">
          <p className="text-lg">
            "This platform made creating my resume effortless! The AI suggestions were spot on, and my resume now looks more professional than ever"
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">Sarah Mitchell</h3>
              <p className="text-sm opacity-75">UX Designer, Adobe</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[600px] bg-white p-12 flex flex-col justify-center">
        <div className='flex justify-end mb-8'>
          {/* Button to open dropdown */}
          <button className='flex items-center gap-2 text-gray-600 hover:text-gray-900' onClick={() => SetIsOpen(!isOpen)} >
            <Globe className='w-4 h-4' />
            {selectedLanguage.name}
            <ChevronDown className='w-4 h-4' />
            </button>
            {/* for dropdown */}
            {isOpen && (
              <div className='absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg'>
                {languages.map((lang) =>(
                  <button key={lang.code} className='block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200'
                  onClick={() => handleSelect(lang)} >
                    {lang.name}
                  </button>
                ))}
                </div>
            )}
        </div>
        {/* <div className="flex justify-end mb-8">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <Globe className="w-4 h-4" />
            English
          </button>
        </div> */}

        <div>
          <h2 className="text-3xl font-bold text-gray-900">Login</h2>
          <p className="mt-2 text-gray-600">
            Welcome back! Ready to continue your job search?
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••••••••"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
              <div className="flex justify-end mt-2">
                <a
                  href="/reset_password"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Reset password
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>
            
            {/* for the social media */}
            <div className="grid grid-cols-2 gap-4"> 
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                  alt="Google"
                  className="w-5 h-5 object-contain"
                />
                Continue with Google
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <img
                  src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                  alt="LinkedIn"
                  className="w-5 h-4 object-contain"
                />
                Continue with LinkedIn
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
              Create a new account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}