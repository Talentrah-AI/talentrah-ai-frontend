import React, { useState } from 'react';
import { Bell, ChevronDown, Globe, Menu } from 'lucide-react';
import { languages, languagesType } from '@/data/login/languages';

const AdminHeader = ({ onToggleSidebar }) => {

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // for default to English
  const [isOpen, SetIsOpen] = useState(false);
  //for lang user can chose there lang lke english,
  const handleSelect = (language: languagesType) => {
    setSelectedLanguage(language);
    SetIsOpen(false);
  };

  const user = {
    name: 'Samuel Favour',
    role: 'Super Admin',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100'
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="flex items-center justify-between px-6 py-3">

      <button onClick={onToggleSidebar} className="text-gray-700">
        <Menu className="w-6 h-6" />
      </button>
        
        <div className="ml-auto flex items-center">
        <button className="mr-6 relative">
            <Bell size={20} className="text-gray-500" />
            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">
              3
            </span>
          </button> 

          <div className="flex items-center mr-6 relative">
            <button
            className="flex items-center gap-2 shadow-card px-4 py-3 rounded-lg cursor-pointer text-dark-grey-01 text-sm"
            onClick={() => SetIsOpen(!isOpen)} 
            >
            <Globe size={20} className="text-gray-500 mr-1" />
            {selectedLanguage.name}
            <ChevronDown size={16} className="text-gray-500 ml-1" />
            </button>
               {/* for dropdown */}
          {isOpen && (
            <div className="absolute md:-right-2 right-0 mt-2 w-40 bg-white shadow-lg rounded-xl top-12 z-10 p-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`block w-full text-left md:text-base text-xs font-normal py-3.5 px-5 border-t border-t-light-grey-01 cursor-pointer rounded-[12px] ${selectedLanguage.name === lang.name ? 'bg-Lblueshade-02 text-black' : 'bg-transparent text-lightGrey-05'}`}
                  onClick={() => handleSelect(lang)}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
          </div>
          
          <div className="flex items-center">
            <img 
              src={user.avatar} 
              alt={user.name}
              className="h-8 w-8 rounded-full object-cover mr-2"
            />
            <div className="text-sm mr-1">
              <div className="font-medium text-gray-800">{user.name}</div>
              <div className="text-xs text-blue-500">{user.role}</div>
            </div>
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;