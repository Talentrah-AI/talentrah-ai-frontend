"use client";
import Link from "next/link";
import { useEffect } from "react";

const LinkedInRedirect = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Redirect to LinkedIn OAuth authentication URL
      window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=r_liteprofile%20r_emailaddress`;
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <h1 className="text-center text-lg font-bold text-gray-800">
        GO THROUGH THE LINKEDIN VERIFICATION PROCESS  
        <br />
        TO EXTRACT INFORMATION.
        <br />
        <Link href="/onboarding/jobloop" className="text-green-500 hover:underline">
                  create job loop
                </Link>
      </h1>
    
     
    </div>
  );
};

export default LinkedInRedirect;
