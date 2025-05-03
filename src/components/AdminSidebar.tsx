import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export function AdminSidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Overview', href: '/admin/overview', icon: '/menu.png', highlight: true },
    { name: 'Candidates', href: '/admin/candidates', icon: '/profile-2user(white).png' },
    { name: 'Job management', href: '/admin/job-Management', icon: '/briefcasewhite.svg' },
    { name: 'Mentorship request', href: '/admin/mentorship-request', icon: '/call(white).png' },
    { name: 'Mentors management', href: '/admin/mentors-management', icon: '/profile-2user(white).png' },
    { name: 'Admin Management', href: '/admin/admin-management', icon: '/ROles.png' },
    { name: 'Feedbacks management', href: '/admin/feedbacks-management', icon: '/message-question(white).png' },
    { name: 'Settings', href: '/admin/settings', icon: '/setting-2.png' },
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
          {navItems.map(({ name, href, icon, highlight }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={name}
                href={href}
                className={`flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium
                  ${isActive && highlight ? 'bg-white text-[#0752A8]' : ''}
                  ${isActive && !highlight ? 'bg-[#0967D2]' : ''}
                  ${!isActive ? 'text-white hover:bg-[#0967D2]' : ''}
                `}
              >
                <Image src={icon} alt={name} width={18} height={18} />
                {name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="pl-1">
        <Link href="/logout" className="flex items-center gap-2 text-white text-sm hover:opacity-80">
          <Image src="/logout-icon.png" alt="logout" width={18} height={18} />
          Logout
        </Link>
      </div>
    </div>
  );
}
