// src/app/(userdashboard)/job-matched/page.tsx
'use client';

import { JobCard } from '@/components/JobCard';
import { JobTabs } from '@/components/JobTabs';
import { UserProfile } from '@/components/UserProfile';
import { useState } from 'react';

export default function JobMatchedPage() {
  const [activeTab, setActiveTab] = useState<
    'recommended' | 'saved' | 'recent' | 'top-matched'
  >('recommended');

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
      description:
        'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
      matchPercentage: 95,
      matchQuality: 'Excellent' as const,
      daysAgo: 4,
      applicants: 200,
      companyLogo: '/company-logo-1.svg',
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
      description:
        'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
      matchPercentage: 95,
      matchQuality: 'Excellent' as const,
      daysAgo: 4,
      applicants: 200,
      companyLogo: '/company-logo-2.svg',
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
      description:
        'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
      matchPercentage: 95,
      matchQuality: 'Excellent' as const,
      daysAgo: 4,
      applicants: 200,
      companyLogo: '/company-logo-3.svg',
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
      description:
        'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
      matchPercentage: 95,
      matchQuality: 'Excellent' as const,
      daysAgo: 4,
      applicants: 200,
      companyLogo: '/company-logo-4.svg',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto pl-3">
      <div className="grid grid-cols-12 gap-6">
        {/* Job List Container */}
        <div className="col-span-8 w-[824px] rounded-t-[24px] bg-[#F8F8F8] flex flex-col px-4">
          <div className="w-[824px] bg-[#F8F8F8] rounded-t-[24px]">
            <div className="w-full py-[15px] rounded-t-[24px] flex justify-center">
              <JobTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="px-4 flex flex-col items-center">
              <div className="space-y-4 w-full flex flex-col items-center">
                {matchedJobs.map((job) => (
                  <JobCard key={job.id} {...job} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* User Profile on the Right */}
        <div className="col-span-4 flex justify-end pr-10">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}
