'use client';

import { X } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useJobStore } from '@/store/useJobStore';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { JOBS } from '@/data/mockJobData/job';

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

export function JobTabs() {
  const { activeTab, setActiveTab, setupFormData: formData, savedJobs } = useJobStore();
  const { openModal } = useModal();

  // Initialize filters from form data when available
  const [filters, setFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (formData) {
      const newFilters = [
        ...formData.jobTitles,
        ...formData.experience,
        ...formData.locations,
        ...formData.jobType,
      ].filter(Boolean);
      setFilters(newFilters);
    }
  }, [formData]);

  // Function to remove a filter
  const removeFilter = (filterToRemove: string) => {
    setFilters(filters.filter((filter) => filter !== filterToRemove));
  };

  // Display only first 5 filters
  const displayedFilters = filters.slice(0, 5);
  const remainingFilters = filters.length - displayedFilters.length;

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const searchResults = JOBS.filter(job => {
      //first apply search query filter
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        job.title.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.jobType.toLowerCase().includes(query);

      if (!matchesSearch) return false;

      //then apply active tab conditions
      switch (activeTab) {
        case 'saved':
          return savedJobs.includes(job.id);
        case 'top-matched':
          return job.matchPercentage >= 90;
        case 'recent':
          return job.daysAgo <= 7;
        case 'recommended':
          // For recommeded tab, applyform data filters if available
          if (formData) {
            const titleMatch = formData.jobTitles.length === 0 || formData.jobTitles.some(title =>
              job.title.toLowerCase().includes(title.toLowerCase())
            );
            if (!titleMatch) return false;
          }
          return true;
        default:
          return true;
      }

    });

    useJobStore.setState({ searchResults });
    setIsSearching(false);
  };

  return (
    <div className="bg-[#FFFFFF] rounded-[12px] p-4 w-[800px]">
      {/* Search Input */}
      <form onSubmit={handleSearch} className="relative mb-4">
        <input
          type="text"
          placeholder="Search for job titles, location, job type"
          className="w-full h-[48px] pl-12 pr-4 rounded-[12px] border border-[#E5E7EB] text-[14px] font-gabarito text-[#717A84] focus:outline-none focus:ring-2 focus:ring-[#0967D2] focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#717A84] h-5 w-5" />
        <Button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-[36px] px-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-[8px]"
          disabled={isSearching}
        >
          {isSearching ? <LoadingSpinner message="" /> : 'Search'}
        </Button>
      </form>

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
