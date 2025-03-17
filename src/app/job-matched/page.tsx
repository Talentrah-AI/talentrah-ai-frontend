'use client';

import { useState } from 'react';
import { JobCard } from '@/components/JobCard';
import { JobTabs } from '@/components/JobTabs';
import { UserProfile } from '@/components/UserProfile';

export default function JobMatchedPage() {
  // Sample matched jobs data
  const matchedJobs = [
    {
      id: '1',
      title: 'Senior UI/UX Designer',
      company: 'Design Co',
      location: 'Lagos, Nigeria',
      jobType: 'Full-time',
      remote: true,
      seniorityLevel: 'Senior',
      experience: '2+ years Experience',
      description: 'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
      matchPercentage: 95,
      matchQuality: 'Excellent' as const,
      daysAgo: 4,
      applicants: 200,
      companyLogo: '/company-logo-1.svg'
    },
    {
      id: '2',
      title: 'Senior UI/UX Designer',
      company: 'Wave',
      location: 'Lagos, Nigeria',
      jobType: 'Full-time',
      remote: true,
      seniorityLevel: 'Senior',
      experience: '2+ years Experience',
      description: 'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
      matchPercentage: 95,
      matchQuality: 'Excellent' as const,
      daysAgo: 4,
      applicants: 200,
      companyLogo: '/company-logo-2.svg'
    },
    {
      id: '3',
      title: 'Senior UI/UX Designer',
      company: 'Xend',
      location: 'Lagos, Nigeria',
      jobType: 'Full-time',
      remote: true,
      seniorityLevel: 'Senior',
      experience: '2+ years Experience',
      description: 'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
      matchPercentage: 95,
      matchQuality: 'Excellent' as const,
      daysAgo: 4,
      applicants: 200,
      companyLogo: '/company-logo-3.svg'
    },
    {
      id: '4',
      title: 'Senior UI/UX Designer',
      company: 'Design Co',
      location: 'Lagos, Nigeria',
      jobType: 'Full-time',
      remote: true,
      seniorityLevel: 'Senior',
      experience: '2+ years Experience',
      description: 'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
      matchPercentage: 95,
      matchQuality: 'Excellent' as const,
      daysAgo: 4,
      applicants: 200,
      companyLogo: '/company-logo-4.svg'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 w-[824px] h-[946px] rounded-t-[24px] bg-[#F8F8F8] flex flex-col px-4">
          <div className="w-full py-[15px] rounded-t-[24px]">
            <JobTabs />
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-4">
              {matchedJobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <UserProfile />
        </div>
      </div>
    </div>
  );
} 