'use-client';
import React, { useState } from 'react';
import { NavItemList } from '@/data/polygon-data/nav-items';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { LogOut } from 'lucide-react';


export default function  SideBar () 
{
  const pathname = usePathname();
  return (
    <aside className="w-full  lg:w-[257px] bg-[#0752A8] text-white p-4  h-full ">
      <div className="h-[70px]">
        <Link href="/admin/overview">
          <img
            src="https://res.cloudinary.com/dk5mfu099/image/upload/v1746014576/polygon_briuj9.png"
            alt="polygon logo"
          />
        </Link>
      </div>
      <ul className="space-y-4 mt-4 flex flex-col ">
        {NavItemList &&
          NavItemList.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link
                href={item.href}
                key={i}
                className={`rounded-[8px]  flex px-[10px] py-3 gap-2 items-center transition-colors duration-300  hover:bg-white hover:text-[#20252A]  ${isActive && i ? 'bg-white text-black' : ''}
                  `}
              >
                <span>{item.icon}</span>
                <span className="text-xs first-letter:capitalize">
                  {item.label}
                </span>
              </Link>
            );
          })}
      </ul>
      {/* Logout
      <div className="ml-2 border mt-auto">
        <Link
          href="/admin/login"
          className="flex items-center gap-2 text-white text-sm hover:opacity-80"
        >
         <LogOut className='w-4 h-4' />
          Logout
        </Link>
      </div> */}
      {/* Logout */}
      <div className="pl-1">
        <Link
          href="/admin/login"
          className="flex items-center gap-2 text-white text-sm hover:opacity-80"
        >
          <Image src="/logout-icon.png" alt="logout" width={18} height={18} />
          Logout
        </Link>
      </div>
    </aside>
  );
};

