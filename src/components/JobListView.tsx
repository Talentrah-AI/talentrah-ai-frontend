'use client';
import React, { useState, useEffect } from 'react';
import { mockJobs } from '@/components/data/mockJobs'; // Adjust the path as necessary
import JobCard from '@/components/JobTrackerCard'; // Adjust the path as necessary
import TabNavigation from './TabNavigation';
import Pagination from './Pagination';

const itemsPerPage = 7;

const JobListView: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tabJobs, setTabJobs] = useState<any[]>(mockJobs);
  const [filteredJobs, setFilteredJobs] = useState(tabJobs);

  useEffect(() => {
    setFilteredJobs(tabJobs);
    setCurrentPage(1); // Reset to first page when tab changes
  }, [tabJobs]);

  const handleDelete = (id: string) => {
    setFilteredJobs(filteredJobs.filter((job) => job.id !== id));
  };
  // calculate total pages
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  // Get the jobs for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-[1200px] h-[946px] top-[64px] left-[2px] rounded-tl-[24px] rounded-tr-[24px] bg-[#F8F8F8] p-[10px]">
      <div className="w-[1132px] h-[844px] top-3 left-3 gap-10 mx-auto">
        <h1 className="font-gabarito font-500 text-[16px] leading-[20px] tracking-[0px] bg-custom text-custom text-black">
          My Jobs
        </h1>
        <div className=" font-gabarito w-[1132px]">
          <TabNavigation
            setFilteredJobs={setFilteredJobs}
            setTabJobs={setTabJobs}
            tabJobs={tabJobs}
          />
        </div>
        <div className="block w-[1132px] h-[756px] gap-3 space-y-4 font-gabarito">
          {currentJobs.map((job) => (
            <JobCard key={job.id} job={job} onDelete={handleDelete} />
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage} // Pass the function to change the page
      />
    </div>
  );
};

export default JobListView;
