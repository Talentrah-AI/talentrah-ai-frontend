'use client';
import logo from '@/assets/images/logo.png';
import { navbarItems } from '@/data/landing/navbar';
import { AlignJustify, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export const Navbar = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 40);
    };
    if (typeof window !== 'undefined') {
      setIsScroll(window.scrollY > 40);
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  
  return (
    <nav
      className={`fixed left-[50%] -translate-x-[50%] w-[95%] flex justify-between items-center z-30 font-gabarito rounded-2xl py-2.5 px-4 transition-all duration-500 ${
        isScroll
          ? 'md:max-w-[876px] max-w-[90%] bg-white shadow-nav top-9'
          : 'md:max-w-[1200px] max-w-full bg-transparent shadow-none top-3'
      }`}
    >
      <Link href={'/'}>
        <Image
          src={logo}
          alt="logo"
          width={84}
          height={42}
          className="md:w-[84px] md:h-[42px] w-[60px] h-[30px]"
        />
      </Link>
      <section className="items-center justify-center hidden gap-6 px-4 py-3 text-base font-normal text-black md:flex">
        {navbarItems.map((link, index) => (
          <Link href={link.link} key={index} className="whitespace-nowrap">
            {link.title}
          </Link>
        ))}
      </section>
      <section className="items-center justify-center hidden gap-6 md:flex">
        <Link href={"/"} className="text-sm font-normal text-primary border border-primary rounded-lg py-2.5 px-8 bg-transparent cursor-pointer">
          Login
        </Link>
        <Link href={"/"} className="text-sm font-normal text-white bg-primary border border-primary rounded-lg py-2.5 px-4 whitespace-nowrap cursor-pointer">
          Get started for free
        </Link>
      </section>
      <div className="flex cursor-pointer md:hidden" onClick={()=> setIsOpen(prev => !prev)}>
        {isOpen ? <X className="sm:size-7 size-5" /> : <AlignJustify className="sm:size-7 size-5" />}
      </div>
      <NavMobile isOpen={isOpen}/>
    </nav>
  );
};

interface NavMobileProps{
  isOpen: boolean
}
const NavMobile = ({isOpen}: NavMobileProps) => {
  return (
    <section className="absolute md:hidden flex flex-col items-start justify-start px-2 py-6 top-14 w-full bg-white rounded-[12px] shadow-card transition-all duration-300" style={{right: isOpen ? 0 : "-200%"}}>
      {navbarItems.map((link, index) => (
        <Link
          href={link.link}
          key={index}
          className="whitespace-nowrap px-5 py-3.5 border-b-[0.5px] border-b-light-grey-02/50 w-full text-base text-black"
        >
          {link.title}
        </Link>
      ))}
      <section className="flex flex-col items-start justify-start w-full gap-4">
        <Link href={"/"} className="text-sm font-normal text-white bg-primary border border-primary rounded-lg py-2.5 px-4 whitespace-nowrap w-full text-center">
          Get started for free
        </Link>
        <Link href={"/"} className="text-sm font-normal text-primary border border-primary rounded-lg py-2.5 px-8 bg-transparent w-full text-center">
          Login
        </Link>
      </section>
    </section>
  );
};
