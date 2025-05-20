'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Menu from '@/icons/Menu.svg';
import Candidates from '@/icons/Candidates.svg';
import Briefcase from '@/icons/Briefcase.svg';
import Call from '@/icons/call.svg';
import Admin from '@/icons/Admin.svg';
import MessageQuestion from '@/icons/message-question.svg';
import Setting from '@/icons/setting.svg';

export function AdminSidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Overview', href: '/admin/overview', icon: Menu },
    { name: 'Candidates', href: '/admin/candidates', icon: Candidates },
    { name: 'Job management', href: '/admin/job-Management', icon: Briefcase },
    { name: 'Mentorship request', href: '/admin/mentorship-request', icon: Call },
    { name: 'Mentors management', href: '/admin/mentors-management', icon: Candidates },
    { name: 'Admin Management', href: '/admin/admin-management', icon: Admin },
    { name: 'Feedbacks management', href: '/admin/feedbacks-management', icon: MessageQuestion },
    { name: 'Settings', href: '/admin/settings', icon: Setting },
  ];

  return (
    <div className="w-[257px] h-screen bg-[#0752A8] flex flex-col justify-between pt-6 px-4 pb-4">
      {/* Top Logo + Nav */}
      <div>
        <div className="mb-6 pl-1">
          <Link href="/admin/overview">
            <Image src="/Polygon 2.png" alt="Polygon Logo" width={120} height={60} priority />
          </Link>
        </div>

        <nav className="flex flex-col gap-3">
          {navItems.map(({ name, href, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={name}
                href={href}
                className={`flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium
                  ${isActive ? 'bg-white text-[#0752A8]' : 'text-white hover:bg-[#0967D2]'}`}
              >
                <span className="w-[18px] h-[18px]">
                  <Icon
                    width={18}
                    height={18}
                    stroke={isActive ? '#0752A8' : '#fff'}
                    fill="none"
                    strokeWidth={2}
                  />
                </span>
                {name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="pl-1">
        <Link href="/admin/login" className="flex items-center gap-2 text-white text-sm hover:opacity-80">
          <Image src="/logout-icon.png" alt="logout" width={18} height={18} />
          Logout
        </Link>
      </div>
    </div>
  );
}