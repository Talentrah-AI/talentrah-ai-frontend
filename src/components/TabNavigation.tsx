'use client';

import React, { useEffect, useState } from 'react';
import { ArrowDownIcon, ChevronDown, Search } from 'lucide-react';
import { useJobStore } from '@/store/useJobStore';
import Image from 'next/image';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select2';



const TabNavigation: React.FC = () => {
  const {activeTab, setActiveTab} = useJobStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('All');
  const selectRef = React.useRef<HTMLDivElement>(null);

  const options = [
    { value: 'All', label: 'All' },
    { value: 'Applied with AI', label: 'Applied with AI' },
    { value: 'Applied manually', label: 'Applied manually' },
  ];

  //close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
    setOpen(false);
  };
  

  return (
    <div className="w-full flex items-center justify-between gap-4">
      <div className="w-[252px] rounded-[12px] p-[5px] flex items-center gap-2 bg-white shadow-[0px_4px_15px_0px_#1B20200D]">
        <button
          className={`font-medium text-[12px] leading-[16px] tracking-[0px] px-[10px] py-[5px] rounded-[6px] ${
            activeTab === 'applied'
              ? 'bg-gradient-to-r from-[#0967D2] to-[#09CBD2] text-white'
              : 'text-[#717A84] hover:bg-gray-100'
          }`}
          onClick={() => setActiveTab('applied')}
        >
          Applied jobs
        </button>
        <button
          className={`font-medium text-[12px] leading-[16px] tracking-[0px] px-[10px] py-[5px] rounded-[6px] ${
            activeTab === 'saved'
              ? 'bg-gradient-to-r from-[#0967D2] to-[#09CBD2] text-white'
              : 'text-[#717A84] hover:bg-gray-100'
          }`}
          onClick={() => setActiveTab('saved')}
        >
          Saved jobs
        </button>
        <button
          className={`font-medium text-[12px] leading-[16px] tracking-[0px] px-[10px] py-[5px] rounded-[6px] ${
            activeTab === 'draft'
              ? 'bg-gradient-to-r from-[#0967D2] to-[#09CBD2] text-white'
              : 'text-[#717A84] hover:bg-gray-100'
          }`}
          onClick={() => setActiveTab('draft')}
        >
          Draft
        </button>
      </div>

      <div className="flex w-[438px] gap-4">
        <div className="flex items-center w-[312px] h-[32px] gap-1 text-sm border-none rounded-lg focus:outline-none !important focus:border-none bg-white rounded-[12px] focus:ring-0">
          <Search className="h-4 w-4 text-gray-400 m-[5px]" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              onSearch?.(e.target.value);
            }}
            className="w-full bg-white focus:outline-none !important focus:border-none"
          />
        </div>


        <div className="w-60" ref={selectRef}>
            <div 
              className="flex gap-2 items-center justify-between w-full h-[32px] p-2  rounded-lg bg-white cursor-pointer text-truncate"
              onClick={() => setOpen(!open)}
            >
            
                <Image src="/icons/filter.png" width={16} height={16} alt="filter" />
             
              <div className="flex-grow text-truncate font-normal text-[12px]">
                {selectedOption}
              </div>
              <ChevronDown className="size-4 opacity-50" />
            </div>
        
            {open && (
              <div className="absolute z-10 w-56 mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto">
                {options.map((option) => (
                  <div
                    key={option.value}
                    className="p-2 cursor-pointer hover:bg-gray-100 text-[12px] font-normal text-[#717A84]"
                    onClick={() => handleSelectChange(option.value)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
      </div>

          






       
        </div>
      </div>
  
  );
};

export default TabNavigation;






   {/* <Image src="/icons/filter.png" alt="icon" width={16} height={16} /> */}
          {/* <Select
            onValueChange={(value) => setFilter(value)}
            defaultValue="All"
          >
            <SelectTrigger className="w-full h-[32px]">
              <SelectValue>{filter}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {['All', 'Applied with AI', 'Applied manually'].map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select> */}