'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';

const sidebarLinks = [
  { name: 'Jobs', path: '/jobdashboard', icon: <Search className="h-5 w-5" /> },
  { name: 'Job Tracker', path: '/job-tracker', icon: '/briefcase.svg' },
  { name: 'Resume Builder', path: '/resume-builder', icon: '/Resume.svg' },
  { name: 'Settings', path: '/settings', icon: '/setting-2.svg' },
];

export function Sidebar() {
  const pathname = usePathname();

  // Styles for the navigation links
  const navLinkStyles = `flex items-center pt-[8px] pr-[10px] pb-[8px] pl-[10px] gap-[10px] 
    rounded-[8px] font-['Gabarito'] text-[12px] leading-[16px] tracking-[0px] font-normal`;

  return (
    <div className="w-[257px] h-[1024px] flex flex-col pt-[24px] pr-[16px] pb-[24px] pl-[16px] gap-[10px]">
      <div className="flex flex-col w-[225px] h-[976px] gap-[16px]">
        {/* Logo */}
        <div className="flex justify-between items-center">
          <Link href="/jobdashboard">
            <Image
              src="/Talentrah-2.svg"
              alt="Talentra Logo"
              width={116}
              height={58}
              priority
            />
          </Link>
          <Image src="/grip.svg" alt="grip" width={62} height={42} />
        </div>

        {/* Main Navigation */}
        <nav className="space-y-1 flex-1">
          {sidebarLinks.map((link) => {
            const isActive =
              pathname.startsWith(link.path) ||
              (pathname === '/' && link.path === '/jobdashboard'); // Keeps link active on subroutes

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`${navLinkStyles} ${isActive ? 'bg-[#0967D2] text-white' : 'text-[#717A84]'}`}
              >
                {/* Render either Lucide icon or Image */}
                {typeof link.icon === 'string' ? (
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={16}
                    height={16}
                  />
                ) : (
                  link.icon
                )}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section (Mentorship & Feedback) */}
        <div className="mt-auto flex flex-col space-y-2">
          <Link
            href="/mentorship"
            className={`${navLinkStyles} ${
              pathname.startsWith('/mentorship')
                ? 'bg-[#0967D2] text-white'
                : 'text-[#717A84]'
            }`}
          >
            <Image src="/call.svg" alt="Mentorship" width={16} height={16} />
            <span>Mentorship</span>
          </Link>
          <Link
            href="/feedback"
            className={`${navLinkStyles} ${
              pathname.startsWith('/feedback')
                ? 'bg-[#0967D2] text-white'
                : 'text-[#717A84]'
            }`}
          >
            <Image
              src="/message-question.svg"
              alt="Feedback"
              width={16}
              height={16}
            />
            <span>Feedback</span>
          </Link>

          {/* User Profile */}
          <div
            className="mt-4 flex items-center pt-[8px] pr-[10px] pb-[8px] pl-[10px] gap-[30px] 
            rounded-[8px] shadow-sm drop-shadow-[0px_4px_15px_rgba(41,45,50,0.05)] cursor-pointer"
          >
            <Image
              src="/avatar.svg"
              alt="avatar"
              width={30}
              height={30}
              className="rounded-full"
            />

            <div className="flex-1">
              <p className="font-gabarito font-normal text-[12px] leading-[16px] tracking-[0px] text-[#08121D]">
                Mercy Benjamin
              </p>
              <p className="font-gabarito font-normal text-[10px] leading-[12px] tracking-[0px] text-[#90989F]">
                mercy@gmail.com
              </p>
            </div>
            <Image
              src="/arrow-right.svg"
              alt="arrow-right"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
