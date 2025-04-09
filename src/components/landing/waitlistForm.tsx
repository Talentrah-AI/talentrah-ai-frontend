'use client';

import { interestList } from '@/data/landing/waitlistInterest';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export const WaitlistForm = () => {
  const [waitlistInterest, setWaitlistInterest] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <form className="w-full flex flex-col justify-center items-center gap-1.5 max-w-[350px]">
      <input
        type="email"
        name="email"
        id="email"
        className="py-3 px-3.5 w-full border border-[#B0B5BB] rounded-xl outline-none sm:text-sm text-xs placeholder:text-[#B0B5BB]/70 text-white"
        placeholder="Enter your email address "
      />
      <div
        role="button"
        className="w-full relative"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Select your primary interest"
      >
        <input
          type="text"
          className="py-3 px-3.5 w-full border border-[#B0B5BB] rounded-xl outline-none sm:text-sm text-xs placeholder:text-[#B0B5BB]/70 text-white cursor-pointer"
          name="interest"
          id="interest"
          placeholder="Select your primary interest"
          readOnly // Used readOnly to make it non-editable visually
          value={waitlistInterest}
        />
        <ChevronDown
          className={`absolute top-2.5 right-2 stroke-[#B0B5BB] cursor-pointer transition-all duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      {isOpen && (
        <div className="w-full border border-[#B0B5BB] rounded-xl sm:text-sm text-xs flex flex-col justify-start items-start text-white overflow-hidden">
          {interestList.map((interest) => (
            <button
              type="button"
              key={interest}
              className="w-full px-4 py-3 text-left hover:bg-lightGrey cursor-pointer transition-colors duration-200 ease-in-out"
              onClick={() => {
                setWaitlistInterest(interest);
                setIsOpen(false);
              }}
            >
              {interest}
            </button>
          ))}
        </div>
      )}
      <button
        type="button"
        className="sm:text-sm text-xs text-white py-3.5 px-5 bg-primary rounded-xl cursor-pointer whitespace-nowrap w-full"
      >
        Join Talenrah&apos;s waitlist
      </button>
    </form>
  );
};
