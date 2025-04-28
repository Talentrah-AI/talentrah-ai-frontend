'use client';

import { JobCard } from '@/components/JobCard';
import { useJobStore } from '@/store/useJobStore';
import { JOBS, Job } from '@/data/mockJobData/job';


export function JobList() {
  const { 
    activeTab, 
    savedJobs, 
    toggleSaveJob, 
    searchResults, 
    searchQuery,
    setupFormData: formData 
  } = useJobStore();

  // Filter jobs based on active tab and search
  const filteredJobs = (searchResults || JOBS).filter((job) => {
    // If we're showing search results, they're already filtered by search query
    if (!searchResults && searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        job.title.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.jobType.toLowerCase().includes(query);
      
      if (!matchesSearch) return false;
    }

    // Apply tab filters
    switch (activeTab) {
      case 'saved':
        return savedJobs.includes(job.id);
      case 'top-matched':
        return job.matchPercentage >= 90;
      case 'recent':
        return job.daysAgo <= 7;
      case 'recommended':
        // For recommended tab, apply form data filters if available
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

  // Show different messages based on the context
  const renderEmptyState = () => {
    if (searchQuery && filteredJobs.length === 0) {
      return (
        <div className="flex items-center justify-center h-[400px]">
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="font-gabarito font-normal text-[16px] leading-[20px] text-[#08121D]">
              No matching jobs found
            </p>
            <p className="font-[Gabarito] font-normal text-[12px] leading-4 tracking-[0px] text-center text-[#717A84]">
              Try adjusting your search criteria or browse our recommended jobs.
            </p>
          </div>
        </div>
      );
    }

    if (activeTab === 'saved' && savedJobs.length === 0) {
      return (
        <div className="flex items-center justify-center h-[400px]">
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="font-gabarito font-normal text-[16px] leading-[20px] text-[#08121D]">
              No jobs saved yet
            </p>
            <p className="font-[Gabarito] font-normal text-[12px] leading-4 tracking-[0px] text-center text-[#717A84]">
              Save jobs you&apos;re interested in so you can easily apply later.
              Start browsing and save jobs with a single click!
            </p>
          </div>
        </div>
      );
    }

    if (activeTab === 'recommended' && formData && filteredJobs.length === 0) {
      return (
        <div className="flex items-center justify-center h-[400px]">
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="font-gabarito font-normal text-[16px] leading-[20px] text-[#08121D]">
              No matched jobs found
            </p>
            <p className="font-[Gabarito] font-normal text-[12px] leading-4 tracking-[0px] text-center text-[#717A84]">
              We couldn&apos;t find any jobs matching your preferences. Try adjusting your job loop criteria.
            </p>
          </div>
        </div>
      );
    }

    if (filteredJobs.length === 0) {
      return (
        <div className="flex items-center justify-center h-40 text-gray-500">
          No matching jobs found
        </div>
      );
    }

    return null;
  };

  return (
    <div className="space-y-4">
      {renderEmptyState() || (
        filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            jobId={job.id}
            {...job}
            matchQuality={job.matchQuality as 'Good' | 'Fair' | 'Excellent' | 'Bad'}
            isSaved={savedJobs.includes(job.id)}
            onSave={() => toggleSaveJob(job.id)}
          />
        ))
      )}
    </div>
  );
}
