import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Search } from 'lucide-react';

export function AdminSidebar() {
  const pathname = usePathname();

  const navLinkStyles = `flex items-center p-4 rounded-lg text-gray-700 hover:bg-gray-200`;

  return (
    <div className="w-[257px] h-[1024px] bg-[#0752A8] flex flex-col pt-[24px] pr-[16px] pb-[24px] pl-[16px] gap-[10px]">
      <div className="flex flex-col w-[225px] h-[976px] gap-[16px]">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/admin/overview" className="">
              <Image
                src="/Logo(white).png"
                alt="Talentra"
                width={116}
                height={58}
                priority
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <nav className="space-y-1">
            <Link
              href="/admin/overview"
              className={`${navLinkStyles} ${
                pathname === '/admin/overview'
                  ? 'bg-white text-[#0752A8]'
                  : 'text-[#717A84]'
              } flex items-center`}
            >
              <Image src="/Menu.svg" alt="menu" width={16} height={16} />
              <span className="ml-2">Overview</span>
            </Link>

            <Link
              href="/admin/candidates"
              className={`${navLinkStyles} ${
                pathname === '/admin/candidates'
                  ? 'bg-[#0967D2] text-white'
                  : 'text-white'
              } flex items-center`}
            >
              <Image
                src="/profile-2user(white).png"
                alt="briefcase"
                width={16}
                height={16}
              />
              <span className="ml-2">Candidates</span>
            </Link>

            <Link
              href="/admin/job-Management"
              className={`${navLinkStyles} ${
                pathname === '/admin/job-Management'
                  ? 'bg-[#0967D2] text-white'
                  : 'text-white'
              } flex items-center`}
            >
              <Image
                src="/briefcasewhite.svg"
                alt="file-text"
                width={16}
                height={16}
              />
              <span className="ml-2">Job Management</span>
            </Link>

            <Link
              href="/admin/mentorship-request"
              className={`${navLinkStyles} ${
                pathname === '/admin/mentorship-request'
                  ? 'bg-[#0967D2] text-white'
                  : 'text-white'
              } flex items-center`}
            >
              <Image
                src="/call(white).png"
                alt="file-text"
                width={16}
                height={16}
              />
              <span className="ml-2">Mentorship Request</span>
            </Link>

            <Link
              href="/admin/mentors-management"
              className={`${navLinkStyles} ${
                pathname === '/admin/mentors-management'
                  ? 'bg-[#0967D2] text-white'
                  : 'text-white'
              } flex items-center`}
            >
              <Image
                src="/profile-2user(white).png"
                alt="file-text"
                width={16}
                height={16}
              />
              <span className="ml-2">Mentors Management</span>
            </Link>

            <Link
              href="/admin/admin-management"
              className={`${navLinkStyles} ${
                pathname === '/admin/admin-management'
                  ? 'bg-[#0967D2] text-white'
                  : 'text-white'
              } flex items-center`}
            >
              <Image src="/ROles.png" alt="file-text" width={16} height={16} />
              <span className="ml-2">Admin Management</span>
            </Link>

            <Link
              href="/admin/feedback-management"
              className={`${navLinkStyles} ${
                pathname === '/admin/feedback-management'
                  ? 'bg-[#0967D2] text-white'
                  : 'text-white'
              } flex items-center`}
            >
              <Image
                src="/message-question(white).png"
                alt="file-text"
                width={16}
                height={16}
              />
              <span className="ml-2">Feedbacks Management</span>
            </Link>

            <Link
              href="/admin/settings"
              className={`${navLinkStyles} ${
                pathname === '/admin/settings'
                  ? 'bg-[#0967D2] text-white'
                  : 'text-white'
              } flex items-center`}
            >
              <Image
                src="/setting-2.png"
                alt="settings"
                width={16}
                height={16}
              />
              <span className="ml-2">Settings</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
