// src/components/LoadingSpinner.tsx
import React from 'react';

interface LoadingSpinnerProps {
  message?: string; // Optional prop with a default value
}

export function LoadingSpinner({ message = "Matching your profile with relevant job post..." }: LoadingSpinnerProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="absolute w-[32px] h-[32px] border-[3px] border-[#9DEAED] rounded-full"></div>
          <div className="w-[32px] h-[32px] border-[3px] border-[#07A2A8] border-t-transparent border-l-transparent border-r-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-[16px] text-white text-center">
          {message}
        </p>
      </div>
    </div>
  );
}