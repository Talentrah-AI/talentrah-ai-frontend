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

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
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

function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <button
      className={`cursor-pointer ${
        isActive
          ? 'px-[10px] py-[5px] gap-[5px] rounded-[6px] bg-gradient-to-r from-[#0967D2] to-[#09CBD2] font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-white'
          : 'px-[10px] py-[5px] gap-[5px] rounded-[6px] font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#717A84]'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export const JobTabs: React.FC<JobTabsProps> = ({
  activeTab,
  setActiveTab,
}) => {
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
  const {openModal} = useModal();


  // Function to remove a filter
  const removeFilter = (filterToRemove: string) => {
    setFilters(filters.filter((filter) => filter !== filterToRemove));
  };

  // Display only first 5 filters
  const displayedFilters = filters.slice(0, 5);
  const remainingFilters = filters.length - displayedFilters.length;

  return (
    <div className="mb-4 rounded-[12px] bg-white p-4 flex flex-col gap-[10px]">
      {/* Tabs */}
      <div className="flex flex-row justify-between items-center mb-6">
        <div className="flex w-[375px] h-[36px] gap-[5px] rounded-[12px] p-[5px] bg-white shadow-md">
          <Tab
            label="Recommended"
            isActive={activeTab === 'recommended'}
            onClick={() => setActiveTab('recommended')}
          />
          <Tab
            label="Top matched"
            isActive={activeTab === 'top-matched'}
            onClick={() => setActiveTab('top-matched')}
          />
          <Tab
            label="Most recent"
            isActive={activeTab === 'recent'}
            onClick={() => setActiveTab('recent')}
          />
          <Tab
            label="Saved jobs"
            isActive={activeTab === 'saved'}
            onClick={() => setActiveTab('saved')}
          />
        </div>

        <div>
          <Button
          onClick={() => openModal( <AdvancedFilterModal /> )}
            variant="outline"
            className="rounded-[12px] p-[5px] bg-white shadow-md flex items-center gap-2 cursor-pointer"
          >
            <Image src="/sort.svg" alt="sort" width={16} height={16} />
            <span className="font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#414A53]">
              Advanced filters
            </span>
          </Button>
        </div>
      </div>

      {/* Filter Badges */}
      <div className="flex items-center gap-2 overflow-x-auto">
        <span className="font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#08121D]">
          Filters
        </span>
        {displayedFilters.map((filter, index) => (
          <FilterBadge
            key={index}
            label={filter}
            onRemove={() => removeFilter(filter)}
          />
        ))}

        {/* Show remaining filter count */}
        {remainingFilters > 0 && (
          <Button
            variant="outline"
            className="w-[31px] h-[26px] px-[8px] py-[5px] gap-[10px] 
             rounded-[4px] bg-[#0967D2] hover:bg-[#0967D2] 
             font-[Gabarito] font-medium text-[12px] leading-[16px] 
             tracking-[0px] text-white hover:text-white"
          >
            +{remainingFilters}
          </Button>
        )}
      </div>

    </div>
  );
};
