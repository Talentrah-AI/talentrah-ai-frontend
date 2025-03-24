import { email, legals, quickLinks, SocialMedia } from "@/data/landing/footerData";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full gap-4 px-5 pt-12 pb-11 bg-background font-gabarito xl:px-0">
      <section className="w-full max-w-[1100px] flex lg:flex-row flex-col justify-between items-start gap-20 pb-11 border-b border-b-light-grey-01">
        <div className="flex flex-col justify-start items-start gap-2 sm:w-[247px] w-full lg:mx-0 mx-auto">
          <Image src={logo} alt="logo" priority width={120} height={60} />
          <p className="text-xs font-normal leading-tight text-lightGrey-05 sm:text-base">
            Your companion, helping you apply smarter, optimize your resume, and
            connect with the right opportunities, faster and easier.
          </p>
        </div>
        <section className="grid grid-cols-2 mx-auto md:grid-cols-4 sm:gap-20 gap-14 lg:mx-0">
          <div className="flex flex-col justify-start items-start gap-2.5">
            <p className="text-base font-medium leading-tight text-black">
              Quick links
            </p>
            <div className="flex flex-col items-start justify-start gap-2">
              {quickLinks.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="text-xs leading-tight text-lightGrey-05"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2.5">
            <p className="text-base font-medium leading-tight text-black">
              Social media
            </p>
            <div className="flex flex-col items-start justify-start gap-2">
              {SocialMedia.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="text-xs leading-tight text-lightGrey-05"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2.5">
            <p className="text-base font-medium leading-tight text-black">
              Legals
            </p>
            <div className="flex flex-col items-start justify-start gap-2">
              {legals.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="text-xs leading-tight text-lightGrey-05"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <p className="text-base font-medium leading-tight text-black">
              Email
            </p>
            <div className="flex flex-col items-start justify-start gap-2 overflow-hidden">
              {email.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="text-xs leading-tight text-lightGrey-05 "
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </section>
      <div className="w-full px-5">
        <p className="text-xs font-normal text-center text-lightGrey-05">
          &copy; 2025 Talentrah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
