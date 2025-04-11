'use client';
import logo from '@/assets/images/logo.png';
import logo_white from '@/assets/images/logo-white.png';
import { navbarItems } from '@/data/landing/navbar';
import { AlignJustify, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export const Navbar = ({ isDark }: { isDark?: boolean }) => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
  // Base class for navbar items
  const baseNavClass =
    'fixed left-[50%] -translate-x-[50%] w-[95%] flex justify-between items-center z-30 font-gabarito rounded-2xl py-2.5 px-4 transition-all duration-500';
  // Dark mode class
  const darkModeClass = 'bg-[#02152A] shadow border border-[#042954]';
  const lightModeClass = 'bg-white shadow-nav border-none';
  // Scroll class for navbar items
  const scrollClass = isScroll
    ? `md:max-w-[876px] max-w-[90%] top-9 ${isDark ? darkModeClass : lightModeClass}`
    : 'md:max-w-[1200px] max-w-full bg-transparent shadow-none top-3 border-none';

  return (
    <nav className={`${baseNavClass} ${scrollClass}`}>
      <Link href={'/'}>
        <Image
          src={isDark ? logo_white : logo}
          alt="logo"
          width={84}
          height={42}
          className="md:w-[84px] md:h-[42px] w-[60px] h-[30px]"
          priority
        />
      </Link>
      <section className="items-center justify-center hidden gap-6 px-4 py-3 text-base font-normal md:flex">
        {navbarItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className={`whitespace-nowrap ${isDark ? 'text-lightGrey-05' : 'text-black'}`}
          >
            {item.title}
          </Link>
        ))}
      </section>
      <section className="items-center justify-center hidden gap-6 md:flex">
        <Link href={"/"} className="text-sm font-normal text-primary border border-primary rounded-lg py-2.5 px-8 bg-transparent cursor-pointer">
          Login
        </Link>
        <Link
          href={'/waitlist'}
          className="text-sm font-normal text-white bg-primary border border-primary rounded-lg py-2.5 px-4 whitespace-nowrap cursor-pointer"
        >
          Get started for free
        </Link>
      </section>
      <button
        type="button"
        className="flex cursor-pointer md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <X
            className={`sm:size-7 size-5 ${isDark ? 'stroke-white' : 'stroke-black'}`}
          />
        ) : (
          <AlignJustify
            className={`sm:size-7 size-5 ${isDark ? 'stroke-white' : 'stroke-black'}`}
          />
        )}
      </button>
      <NavMobile isOpen={isOpen} isDark={isDark} />
    </nav>
  );
};

interface NavMobileProps {
  isOpen: boolean;
  isDark?: boolean;
}
const NavMobile = ({ isOpen, isDark }: NavMobileProps) => {
  return (
    <section
      className={`absolute md:hidden flex flex-col items-start justify-start px-2 py-6 top-14 w-full rounded-[12px] shadow-card transition-all duration-300 ${isDark ? 'bg-[#02152A]' : 'bg-white'}`}
      style={{ right: isOpen ? 0 : '-200%' }}
    >
      {navbarItems.map((item) => (
        <Link
          href={item.href}
          key={item.href}
          className={`whitespace-nowrap px-5 py-3.5 border-b-[0.5px] border-b-light-grey-02/50 w-full text-base ${isDark ? 'text-lightGrey-05' : 'text-black'}`}
        >
          {item.title}
        </Link>
      ))}
      <section className="flex flex-col items-start justify-start w-full gap-4">
        <Link
          href={'/waitlist'}
          className="text-sm font-normal text-white bg-primary border border-primary rounded-lg py-2.5 px-4 whitespace-nowrap w-full text-center"
        >
          Get started for free
        </Link>
        <Link
          href={'/waitlist'}
          className="text-sm font-normal text-primary border border-primary rounded-lg py-2.5 px-8 bg-transparent w-full text-center"
        >
          Login
        </Link>
      </section>
    </section>
  );
};
