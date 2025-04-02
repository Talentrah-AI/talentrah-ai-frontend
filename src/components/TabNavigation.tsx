'use client';

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { mockJobs } from '@/components/data/mockJobs';
import { savedJobs } from '@/components/data/savedJobs';
import { draftJobs } from '@/components/data/draftJobs';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select2';

interface Tab {
  id: string;
  label: string;
}

interface TabNavigationProps {
  onSearch?: (query: string) => void;
  onFilter?: (value: string) => void;
  setFilteredJobs: (jobs: any[]) => void;
  setTabJobs: (jobs: any[]) => void;
  tabJobs: any[];
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  onSearch,
  setFilteredJobs,
  setTabJobs,
  tabJobs,
}) => {
  const [activeTab, setActiveTab] = useState('applied');
  const [searchQuery, setSearchQuery] = useState('');

  const [filter, setFilter] = useState('All');

  const tabs: Tab[] = [
    { id: 'applied', label: 'Applied jobs' },
    { id: 'saved', label: 'Saved jobs' },
    { id: 'draft', label: 'Draft' },
  ];
  useEffect(() => {
    // Update tabJobs whenever activeTab changes
    if (activeTab === 'applied') {
      setTabJobs(mockJobs);
    } else if (activeTab === 'saved') {
      setTabJobs(savedJobs);
    } else if (activeTab === 'draft') {
      setTabJobs(draftJobs);
    }
  }, [activeTab]);

  useEffect(() => {
    const filtered = tabJobs.filter((job) => {
      const matchesTitle = job.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilter =
        filter === 'All' ||
        (filter === 'Applied with AI' && job.status === 'Applied with AI') ||
        (filter === 'Applied manually' && job.status === 'Applied manually');

      return matchesTitle && matchesFilter;
    });

    setFilteredJobs(filtered);
  }, [searchQuery, filter, tabJobs]);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 text-[#414A53]">
      <div className="w-[235px] h-[36px] gap-2 rounded-[12px] p-[5px] flex bg-white shadow-[0px_4px_15px_0px_#1B20200D]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`font-normal text-xs leading-4 tracking-normal pt-[5px] pr-[5px] pb-[5px] pl-[5px] rounded-[5px] ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-[#0967D2] to-[#09CBD2] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex w-[438px]  gap-4">
        <div className="flex items-center w-[438px] h-[32px] gap-1 text-sm border-none rounded-lg focus:outline-none !important focus:border-none bg-white rounded-[12px] focus:ring-0">
          <Search className="  h-4 w-4 text-gray-400 m-[5px]" />
          {/* <img src="/icons/search.png" alt="" /> */}
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              onSearch?.(e.target.value);
            }}
            className="  h-[32px] bg-white focus:border-none "
          />
        </div>

        <div className="relative flex items-center text-sm border-none rounded-lg px-3 py-2 bg-white  w-[120px] h-[32px] overflow-hidden">
          <img src="/icons/filter.png" alt="Filter" className="h-4 w-4 mr-2" />

          <Select
            onValueChange={(value) => setFilter(value)}
            defaultValue="All"
          >
            <SelectTrigger>
              <SelectValue>{filter}</SelectValue>
            </SelectTrigger>

            <SelectContent className="text-[#08121D] w-[181px] h-[166px] p-[4px]">
              {['All', 'Applied with AI', 'Applied manually'].map((option) => (
                <SelectItem
                  key={option}
                  value={option}
                  className="focus:text-[#08121D] w-[165px] h-[50px] rounded-[12px] border-[0.5px] gap-[10px] pt-[15px] pr-[20px] pb-[15px] pl-[20px] border-none"
                >
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
