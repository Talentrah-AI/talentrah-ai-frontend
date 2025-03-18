// src/components/Sidebar.tsx
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const navLinkStyles = `flex items-center pt-[8px] pr-[10px] pb-[8px] pl-[10px] gap-[10px] rounded-[8px] font-['Gabarito'] text-[12px] leading-[16px] tracking-[0px] font-normal`;

  // Define active routes for "Jobs"
  const isJobsActive = pathname === '/dashboard' || pathname === '/job-matched';

  return (
    <div className="w-[257px] h-[1024px] flex flex-col pt-[24px] pr-[16px] pb-[24px] pl-[16px] gap-[10px]">
      <div className="flex flex-col w-[225px] h-[976px] gap-[16px]">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/dashboard" className="">
              <Image
                src="/Talentrah-2.svg"
                alt="Talentra Logo"
                width={116}
                height={58}
                priority
              />
            </Link>
          </div>
          <div>
            <Image src="/grip.svg" alt="grip" width={62} height={42} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <nav className="space-y-1">
            <Link
              href="/dashboard"
              className={`${navLinkStyles} ${
                isJobsActive ? 'bg-[#0967D2] text-white' : 'text-[#717A84]'
              }`}
            >
              <Search className="h-5 w-5" />
              <span>Jobs</span>
            </Link>

            <Link
              href="/job-tracker"
              className={`${navLinkStyles} ${
                pathname === '/job-tracker'
                  ? 'bg-[#0967D2] text-white'
                  : 'text-[#717A84]'
              }`}
            >
              <Image
                src="/briefcase.svg"
                alt="briefcase"
                width={16}
                height={16}
              />
              <span>Job tracker</span>
            </Link>
            <Link
              href="/resume-builder"
              className={`${navLinkStyles} ${
                pathname === '/resume-builder'
                  ? 'bg-[#0967D2] text-white'
                  : 'text-[#717A84]'
              }`}
            >
              <Image src="/Resume.svg" alt="file-text" width={16} height={16} />
              <span>Resume builder</span>
            </Link>
            <Link
              href="/settings"
              className={`${navLinkStyles} ${
                pathname === '/settings'
                  ? 'bg-[#0967D2] text-white'
                  : 'text-[#717A84]'
              }`}
            >
              <Image
                src="/setting-2.svg"
                alt="settings"
                width={16}
                height={16}
              />
              <span>Settings</span>
            </Link>
          </nav>
        </div>

        <div className="mt-auto flex flex-col">
          <div className="space-y-2">
            <Link
              href="/mentorship"
              className={`${navLinkStyles} ${
                pathname === '/mentorship'
                  ? 'bg-[#0967D2] text-white'
                  : 'text-[#717A84]'
              }`}
            >
              <Image src="/call.svg" alt="headphones" width={16} height={16} />
              <span>Mentorship</span>
            </Link>
            <Link
              href="/feedback"
              className={`${navLinkStyles} ${
                pathname === '/feedback'
                  ? 'bg-[#0967D2] text-white'
                  : 'text-[#717A84]'
              }`}
            >
              <Image
                src="/message-question.svg"
                alt="message-square"
                width={16}
                height={16}
              />
              <span>Feedback</span>
            </Link>
          </div>

          <div
            className="mt-4 flex items-center pt-[8px] pr-[10px] pb-[8px] pl-[10px] 
            gap-[30px] rounded-[8px] shadow-sm drop-shadow-[0px_4px_15px_rgba(41,45,50,0.05)] cursor-pointer"
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