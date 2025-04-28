// src/components/LoadingSpinner.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  message?: string;
  variant?: 'fullscreen' | 'inline';
  size?: 'sm' | 'md' | 'lg';
}

export function LoadingSpinner({
  message = "Matching your profile with relevant job post...",
  variant = 'fullscreen',
  size = 'md'
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-[16px] h-[16px] border-[2px]',
    md: 'w-[32px] h-[32px] border-[3px]',
    lg: 'w-[48px] h-[48px] border-[4px]'
  };

  const spinnerContent = (
    <>
      <div className="relative">
        <div className={cn(
          "absolute border-[#9DEAED] rounded-full",
          sizeClasses[size]
        )}></div>
        <div className={cn(
          "border-[#07A2A8] border-t-transparent border-l-transparent border-r-transparent rounded-full animate-spin",
          sizeClasses[size]
        )}></div>
      </div>
      {message && variant === 'fullscreen' && (
        <p className="text-[16px] text-white text-center">
          {message}
        </p>
      )}
    </>
  );

  if (variant === 'inline') {
    return spinnerContent;
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        {spinnerContent}
      </div>
    </div>
  );
}