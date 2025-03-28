"use client";
import AuthForm from "@/components/onboarding/Authform";
import AuthLayout from "@/components/onboarding/AuthLayout";
import ReviewSlider from "@/components/onboarding/ReviewSlider";


const Onboarding = () => {
  return (
    <AuthLayout>
      {/* Left Section: Branding & Reviews */}
      <div className="w-full lg:w-1/2 bg-blue-600 text-white rounded-lg my-2 flex flex-col justify-between px-6 sm:px-10 py-8 lg:px-12 lg:py-10 overflow-auto">
        {/* Top Content */}
        <div className="mb-8">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <img src="/Talentrah-2.svg" className="w-24 sm:w-32 mb-4" alt="Talentrah Logo" />
          </div>

          {/* Heading with proper line breaks */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug text-center lg:text-left">
            Land Your Dream Job with <br className="hidden lg:block" /> AI-Powered Resumes & <br className="hidden lg:block" /> Applications
          </h1>

          {/* Subtext */}
          <p className="text-xs sm:text-sm mt-3 text-center lg:text-left">
            Create a professional resume, write compelling cover letters, and apply to jobs effortlessly—with the power of AI. Get hired faster!
          </p>
        </div>

        {/* Review Slider (Placed at the bottom) */}
        <div className="mt-auto hidden lg:block">
          <ReviewSlider />
        </div>
      </div>

      {/* Right Section: Signup Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-6 sm:p-10">
        <AuthForm />
      </div>
    </AuthLayout>
  );
};

export default Onboarding;
