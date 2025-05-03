'use client';

import Image from 'next/image';

export function PremiumButton() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 rounded-lg text-sm font-medium text-blue-600 shadow-sm hover:bg-blue-50">
      <Image src="/crown-2.png" alt="Premium" width={16} height={16} />
      Premium
    </button>
  );
}

export function FreeButton() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-teal-200 rounded-lg text-sm font-medium text-teal-600 shadow-sm hover:bg-teal-50">
      <Image src="/free.png" alt="Freemium" width={16} height={16} />
      Freemium
    </button>
  );
}