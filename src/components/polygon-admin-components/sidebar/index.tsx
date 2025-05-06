import {  NavItemList } from '@/data/polygon-data/nav-items';
import Link from 'next/link';
import React from 'react'

const SideBar = () => {
  return (
    <aside className="w-full hidden lg:w-[257px] bg-[#0752A8] text-white p-4  md:block  ">
      <div className="h-[70px]">
        <img
          src="https://res.cloudinary.com/dk5mfu099/image/upload/v1746014576/polygon_briuj9.png"
          alt="polygon logo"
        />
      </div>
      <ul className="space-y-4 mt-4 flex flex-col ">
        {NavItemList &&
          NavItemList.map((item, i) => (
            <Link
              href={item.href}
              key={i}
              className=" rounded-[8px] flex px-[10px] py-3 gap-2 items-center transition-colors duration-300  hover:bg-white hover:text-[#20252A] "
            >
              <span>{item.icon}</span>
              <span className="text-xs first-letter:capitalize">
                {item.label}
              </span>
            </Link>
          ))}
      </ul>
    </aside>
  );
}

export default SideBar