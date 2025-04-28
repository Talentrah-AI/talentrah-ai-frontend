'use client';
import React, { useState, useCallback } from 'react';
import JobCard from '@/components/JobTrackerCard';
import TabNavigation from './TabNavigation';
import Pagination from './Pagination';
import { JOBS } from '@/data/mockJobData/job';
import { useJobStore } from '@/store/useJobStore';

const itemsPerPage = 7;

const JobListView: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {savedJobs, appliedJobs, draftJobs, activeTab, toggleSaveJob, toggleDraftJob, removeAppliedJob} = useJobStore();

  const filteredJobs = JOBS.filter((job) => {
    switch (activeTab) {
      case 'saved':
        return savedJobs.includes(job.id);
      case 'applied':
        return appliedJobs.includes(job.id);
      case 'draft':
        return draftJobs.includes(job.id);
      default:
        return false;
    }
  })

  const getJobAction = useCallback((jobId: string) => {
    return {
      delete: ()=> {
        switch (activeTab) {
          case 'saved' : return toggleSaveJob(jobId);
          case 'applied' : return removeAppliedJob(jobId);
          case 'draft' : return toggleDraftJob(jobId);
          default: return;
        }
      },
      toggle: ()=> {
        switch (activeTab) {
          case 'saved' : return toggleSaveJob(jobId);
          default: return;
        }
      },
    }
  }, [toggleSaveJob, removeAppliedJob, toggleDraftJob, activeTab]);

  

  // Calculate total pages
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  // Get the jobs for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full h-[946px] rounded-tl-[24px] rounded-tr-[24px] bg-[#F8F8F8]">
      <div className="flex flex-col w-[1132px] h-[844px] mx-auto border">
        <h1 className="mt-4 font-gabarito font-medium text-[16px] leading-[20px] tracking-[0px]">
          My Jobs
        </h1>
        <div className="mt-6">
          <TabNavigation />
        </div>
        <div className="h-[756px] space-y-4 mt-4">
          {currentJobs.map((job) => (
            <JobCard key={job.id} job={job} actions={getJobAction(job.id)} />
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default JobListView;
