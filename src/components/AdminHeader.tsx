import { useState } from 'react';
import Image from 'next/image';

interface AdminHeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
}

export function AdminHeader({ language, setLanguage }: AdminHeaderProps) {
  const languages = ['English', 'Spanish', 'French'];
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const handleSelect = (lang: string) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white/80 shadow-sm backdrop-blur-md border-b">
      {/* Menu */}
      <div className="flex items-center">
        <button className="p-2">
          <Image src="/drop-menu.png" alt="Menu Dropdown" width={24} height={24} />
        </button>
      </div>

      {/* Right side: Alert + Language + Profile */}
      <div className="flex items-center space-x-4 relative">
        {/* Alert */}
        <button className="p-2 rounded-full bg-white/80 backdrop-blur-md shadow-sm">
          <Image src="/notification.png" alt="notification" width={20} height={20} />
        </button>

        {/* Custom Language Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center px-2 py-1 rounded-lg bg-white/80 backdrop-blur-md shadow-sm space-x-2"
          >
            <Image src="/global.png" alt="Globe Icon" width={16} height={16} />
            <span className="text-sm">{language}</span>
            <Image src="/arrow-down.png" alt="Dropdown Icon" width={16} height={16} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-full bg-white shadow-md rounded-md z-10">
              {languages
                .filter((lang) => lang !== language)
                .map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleSelect(lang)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {lang}
                  </button>
                ))}
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image src="/Ellipse 1.png" alt="User Profile" width={40} height={40} className="rounded-full" />
          <div className="flex flex-col">
            <span>Samuel Favour</span>
            <span className="text-sm text-blue-600">Super Admin</span>
          </div>
          <Image src="/arrow-down.png" alt="Dropdown Icon" width={16} height={16} />
        </div>
      </div>
    </header>
  );
}