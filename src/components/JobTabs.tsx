'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useModal } from '@/context/ModalContext';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import AdvancedFilterModal from './modal/AdvancedFilterModal';

interface JobTabsProps {
  activeTab: 'recommended' | 'saved' | 'recent' | 'top-matched';
  setActiveTab: (
    tab: 'recommended' | 'saved' | 'recent' | 'top-matched'
  ) => void;
}

interface FilterBadgeProps {
  label: string;
  onRemove: () => void;
}

function FilterBadge({ label, onRemove }: FilterBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className="px-[10px] py-[5px] gap-[8px] rounded-[6px] bg-[#EFF0F2] 
           font-[Gabarito] font-normal text-[12px] leading-[16px] 
           tracking-[0px] text-[#515D68] flex items-center"
    >
      {label}
      <button
        onClick={onRemove}
        className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
      >
        <X className="h-3 w-3 cursor-pointer" />
      </button>
    </Badge>
  );
}

export function JobTabs({ activeTab, setActiveTab }: JobTabsProps) {
  const { openModal } = useModal();

  // User details and filters
  const initialFilters = [
    'UI Designer',
    'Product Designer',
    'Intermediate',
    'Senior',
    'Nigeria',
    'Canada',
    'Full-time',
    'Hybrid',
    'Remote',
    'Contract',
  ];

  const [filters, setFilters] = useState(initialFilters);

  // Function to remove a filter
  const removeFilter = (filterToRemove: string) => {
    setFilters(filters.filter((filter) => filter !== filterToRemove));
  };

  // Display only first 5 filters
  const displayedFilters = filters.slice(0, 5);
  const remainingFilters = filters.length - displayedFilters.length;

  return (
    <div className="bg-[#FFFFFF] rounded-[12px] p-4 w-[800px]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2 bg-white rounded-xl shadow-md w-[400px] h-[36px] p-2">
          <button
            className={`px-3 py-1.5 rounded-md text-[12px] font-medium transition-colors flex items-center justify-center text-center whitespace-nowrap ${
              activeTab === 'recommended'
                ? 'bg-gradient-to-r from-[#0967D2] to-[#09CBD2] text-white'
                : 'text-[#717A84] hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('recommended')}
          >
            Recommended
          </button>
          <button
            className={`px-3 py-1.5 rounded-md text-[12px] font-medium transition-colors flex items-center justify-center text-center whitespace-nowrap ${
              activeTab === 'top-matched'
                ? 'bg-gradient-to-r from-[#0967D2] to-[#09CBD2] text-white'
                : 'text-[#717A84] hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('top-matched')}
          >
            Top matched
          </button>
          <button
            className={`px-3 py-1.5 rounded-md text-[12px] font-medium transition-colors flex items-center justify-center text-center whitespace-nowrap ${
              activeTab === 'recent'
                ? 'bg-gradient-to-r from-[#0967D2] to-[#09CBD2] text-white'
                : 'text-[#717A84] hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('recent')}
          >
            Most recent
          </button>
          <button
            className={`px-3 py-1.5 rounded-md text-[12px] font-medium transition-colors flex items-center justify-center text-center whitespace-nowrap ${
              activeTab === 'saved'
                ? 'bg-gradient-to-r from-[#0967D2] to-[#09CBD2] text-white'
                : 'text-[#717A84] hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('saved')}
          >
            Saved jobs
          </button>
        </div>

        {/* Advance filters button */}
        <div className="flex gap-2 bg-white rounded-xl shadow-md w-[150px] h-[36px] p-4">
          <button
            onClick={() => openModal('advancedFilter')}
            className="flex items-center gap-2 text-[#414A53]"
          >
            <Image src="/sort.svg" alt="sort" width={16} height={16} />
            <span className="text-[14px] font-medium">Advance filters</span>
          </button>
        </div>
      </div>

      {/* Filters section */}
      <div className="flex items-center gap-2">
        <span className="text-[#414A53] font-medium text-[12px]">Filters</span>
        <div className="flex flex-wrap gap-2">
          {displayedFilters.map((filter) => (
            <FilterBadge
              key={filter}
              label={filter}
              onRemove={() => removeFilter(filter)}
            />
          ))}
          {remainingFilters > 0 && (
            <Button
              variant="outline"
              className="h-[26px] px-[8px] py-[5px] rounded-[6px] 
               bg-[#0967D2] hover:bg-[#0967D2] text-white hover:text-white
               font-medium text-[12px] leading-[16px]"
            >
              +{remainingFilters}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
