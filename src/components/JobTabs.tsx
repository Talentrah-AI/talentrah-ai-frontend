<<<<<<< HEAD
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
=======
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
>>>>>>> b7a5e52850faecb387c63a04dac16b6be2b06078

interface FilterBadgeProps {
  label: string;
  onRemove: () => void;
}

function FilterBadge({ label, onRemove }: FilterBadgeProps) {
  return (
    <Badge
      variant="secondary"
<<<<<<< HEAD
      className="px-[10px] py-[5px] gap-[8px] rounded-[6px] bg-[#EFF0F2] 
           font-[Gabarito] font-normal text-[12px] leading-[16px] 
           tracking-[0px] text-[#515D68] flex items-center"
=======
      className="px-2 py-1 gap-2 rounded-[6px] bg-[#EFF0F2] 
       font-normal text-[12px] text-[#515D68] flex items-center"
>>>>>>> b7a5e52850faecb387c63a04dac16b6be2b06078
    >
      {label}
      <button
        onClick={onRemove}
<<<<<<< HEAD
        className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
      >
        <X className="h-3 w-3 cursor-pointer" />
=======
        className="hover:bg-gray-200 rounded-full p-0.5"
      >
        <X className="h-3 w-3" />
>>>>>>> b7a5e52850faecb387c63a04dac16b6be2b06078
      </button>
    </Badge>
  );
}

<<<<<<< HEAD
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
=======
export function JobTabs() {
  const pathname = usePathname();
  const isJobMatchedPage = pathname === "/job-matched";
  const defaultTab = isJobMatchedPage ? "top-matched" : "recommended";
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="bg-[#FFFFFF] rounded-[12px] p-4 w-[800px]">
      {/* Tabs row */}
      <div className="flex justify-between items-center mb-4">
        {/* Tabs */}
        <div className="flex gap-2 bg-white rounded-xl shadow-md w-[400px] h-[36px] p-2">
          <button
            className={`px-3 py-1.5 rounded-md text-[12px] font-medium transition-colors flex items-center justify-center text-center whitespace-nowrap ${
              activeTab === "recommended"
                ? "bg-gradient-to-r from-[#0967D2] to-[#09CBD2] text-white"
                : "text-[#717A84] hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("recommended")}
          >
            Recommended
          </button>
          <button
            className={`px-3 py-1.5 rounded-md text-[12px] font-medium transition-colors flex items-center justify-center text-center whitespace-nowrap ${
              activeTab === "top-matched"
                ? "bg-gradient-to-r from-[#0967D2] to-[#09CBD2] text-white"
                : "text-[#717A84] hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("top-matched")}
          >
            Top matched
          </button>
          <button
            className={`px-3 py-1.5 rounded-md text-[12px] font-medium transition-colors flex items-center justify-center text-center whitespace-nowrap ${
              activeTab === "most-recent"
                ? "bg-gradient-to-r from-[#0967D2] to-[#09CBD2] text-white"
                : "text-[#717A84] hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("most-recent")}
          >
            Most recent
          </button>
          <button
            className={`px-3 py-1.5 rounded-md text-[12px] font-medium transition-colors flex items-center justify-center text-center whitespace-nowrap ${
              activeTab === "saved-jobs"
                ? "bg-gradient-to-r from-[#0967D2] to-[#09CBD2] text-white"
                : "text-[#717A84] hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("saved-jobs")}
          >
            Saved jobs
          </button>
        </div>

        {/* Advance filters button */}
        <div className="flex gap-2 bg-white rounded-xl shadow-md w-[150px] h-[36px] p-4">
          <div className="flex items-center gap-2 text-[#414A53]">
            <Image src="/sort.svg" alt="sort" width={16} height={16} />
            <span className="text-[14px] font-medium">Advance filters</span>
          </div>
        </div>
      </div>

      {/* Filters section */}
      <div className="flex items-center gap-2">
        <span className="text-[#414A53] font-medium text-[12px]">Filters</span>
        <div className="flex flex-wrap gap-2">
          <FilterBadge label="UI/UX Designer" onRemove={() => {}} />
          <FilterBadge label="Product Designer" onRemove={() => {}} />
          <FilterBadge label="Hybrid" onRemove={() => {}} />
          <FilterBadge label="Full-time" onRemove={() => {}} />
          <FilterBadge label="Lagos, Nigeria" onRemove={() => {}} />
          <FilterBadge label="Senior" onRemove={() => {}} />
          <Button
            variant="outline"
            className="h-[26px] px-[8px] py-[5px] rounded-[6px] 
             bg-[#0967D2] hover:bg-[#0967D2] text-white hover:text-white
             font-medium text-[12px] leading-[16px]"
          >
            +5
          </Button>
        </div>
      </div>
    </div>
  );
}
>>>>>>> b7a5e52850faecb387c63a04dac16b6be2b06078
