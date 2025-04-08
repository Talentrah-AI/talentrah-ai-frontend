<<<<<<< HEAD
import { JobCard } from '@/components/JobCard';
import Image from 'next/image';
import { useState } from 'react';
=======
import { JobCard } from "@/components/JobCard";
>>>>>>> b7a5e52850faecb387c63a04dac16b6be2b06078

// Sample job data
const JOBS = [
  {
<<<<<<< HEAD
    id: '1',
    title: 'Senior UI/UX Designer',
    company: 'Company A',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    remote: true,
    seniorityLevel: 'Senior',
    experience: '2+ years Experience',
    description:
      'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
    matchPercentage: 82,
    matchQuality: 'Good',
    daysAgo: 4,
    applicants: 200,
    companyLogo: '/company-a.png',
    category: 'recommended',
  },
  {
    id: '2',
    title: 'Senior UI/UX Designer',
    company: 'Company B',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    remote: true,
    seniorityLevel: 'Senior',
    experience: '2+ years Experience',
    description:
      'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
    matchPercentage: 60,
    matchQuality: 'Fair',
    daysAgo: 5,
    applicants: 200,
    companyLogo: '/company-b.png',
    category: 'recommended',
  },
  {
    id: '3',
    title: 'Senior UI/UX Designer',
    company: 'Company C',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    remote: true,
    seniorityLevel: 'Senior',
    experience: '2+ years Experience',
    description:
      'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
    matchPercentage: 95,
    matchQuality: 'Excellent',
    daysAgo: 5,
    applicants: 200,
    companyLogo: '/company-c.png',
    category: 'top-matched',
  },
  {
    id: '4',
    title: 'Senior UI/UX Designer',
    company: 'Company D',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    remote: true,
    seniorityLevel: 'Senior',
    experience: '2+ years Experience',
    description:
      'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
    matchPercentage: 82,
    matchQuality: 'Good',
    daysAgo: 5,
    applicants: 200,
    companyLogo: '/company-d.png',
    category: 'recommended',
  },
  {
    id: '5',
    title: 'Senior UI/UX Designer',
    company: 'Company D',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    remote: true,
    seniorityLevel: 'Senior',
    experience: '2+ years Experience',
    description:
      'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
    matchPercentage: 82,
    matchQuality: 'Good',
    daysAgo: 5,
    applicants: 200,
    companyLogo: '/company-d.png',
    category: 'recent',
  },
  {
    id: '6',
    title: 'Senior UI/UX Designer',
    company: 'Company D',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    remote: true,
    seniorityLevel: 'Senior',
    experience: '2+ years Experience',
    description:
      'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
    matchPercentage: 82,
    matchQuality: 'Good',
    daysAgo: 5,
    applicants: 200,
    companyLogo: '/company-d.png',
    category: 'recent',
  },
  {
    id: '7',
    title: 'Senior UI/UX Designer',
    company: 'Company D',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    remote: true,
    seniorityLevel: 'Senior',
    experience: '2+ years Experience',
    description:
      'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
    matchPercentage: 82,
    matchQuality: 'Good',
    daysAgo: 5,
    applicants: 200,
    companyLogo: '/company-d.png',
    category: 'recent',
  },
  {
    id: '8',
    title: 'Senior UI/UX Designer',
    company: 'Company D',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    remote: true,
    seniorityLevel: 'Senior',
    experience: '2+ years Experience',
    description:
      'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
    matchPercentage: 82,
    matchQuality: 'Good',
    daysAgo: 5,
    applicants: 200,
    companyLogo: '/company-d.png',
    category: 'recent',
  },
  {
    id: '9',
    title: 'Senior UI/UX Designer',
    company: 'Company D',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    remote: true,
    seniorityLevel: 'Senior',
    experience: '2+ years Experience',
    description:
      'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
    matchPercentage: 90,
    matchQuality: 'Excellent',
    daysAgo: 5,
    applicants: 200,
    companyLogo: '/company-d.png',
    category: 'top-matched',
  },
  {
    id: '10',
    title: 'Senior UI/UX Designer',
    company: 'Company D',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    remote: true,
    seniorityLevel: 'Senior',
    experience: '2+ years Experience',
    description:
      'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
    matchPercentage: 92,
    matchQuality: 'Excellent',
    daysAgo: 5,
    applicants: 200,
    companyLogo: '/company-d.png',
    category: 'top-matched',
  },
  {
    id: '11',
    title: 'Senior UI/UX Designer',
    company: 'Company D',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    remote: true,
    seniorityLevel: 'Senior',
    experience: '2+ years Experience',
    description:
      'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
    matchPercentage: 92,
    matchQuality: 'Excellent',
    daysAgo: 5,
    applicants: 200,
    companyLogo: '/company-d.png',
    category: 'top-matched',
  },
  {
    id: '12',
    title: 'Senior UI/UX Designer',
    company: 'Company D',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    remote: true,
    seniorityLevel: 'Senior',
    experience: '2+ years Experience',
    description:
      'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
    matchPercentage: 82,
    matchQuality: 'Good',
    daysAgo: 5,
    applicants: 200,
    companyLogo: '/company-d.png',
    category: 'recommended',
  },
  {
    id: '13',
    title: 'Senior UI/UX Designer',
    company: 'Company D',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    remote: true,
    seniorityLevel: 'Senior',
    experience: '2+ years Experience',
    description:
      'This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...',
    matchPercentage: 82,
    matchQuality: 'Good',
    daysAgo: 5,
    applicants: 200,
    companyLogo: '/company-d.png',
    category: 'recommended',
  },
];

interface JobListProps {
  activeTab: 'recommended' | 'recent' | 'top-matched' | 'saved';
}

export const JobList: React.FC<JobListProps> = ({ activeTab }) => {
  const [savedJobs, setSavedJobs] = useState<string[]>([]);

  const toggleSaveJob = (jobId: string) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };
  const filteredJobs =
    activeTab === 'saved'
      ? JOBS.filter((job) => savedJobs.includes(job.id))
      : JOBS.filter((job) => job.category === activeTab);

  return (
    <div>
      {activeTab === 'saved' && savedJobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center absolute top-[400px] left-[490px] w-[378px] h-[197px]">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/EmptyState.svg"
              alt="saved jobs"
              width={165}
              height={50}
            />
          </div>
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
      ) : (
        // <p className="text-center text-gray-500">No jobs saved yet.</p>
        filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            {...job}
            matchQuality={job.matchQuality as 'Good' | 'Fair' | 'Excellent'}
            isSaved={savedJobs.includes(job.id)}
            onSave={() => toggleSaveJob(job.id)}
          />
        ))
      )}
    </div>
    // <div className="">
    //   {filteredJobs.map((job) => (
    //     <JobCard
    //       key={job.id}
    //       {...job}
    //       matchQuality={job.matchQuality as 'Good' | 'Fair' | 'Excellent'}
    //     />
    //   ))}
    // </div>
  );
};
=======
    id: "1",
    title: "Senior UI/UX Designer",
    company: "Company A",
    location: "Lagos, Nigeria",
    jobType: "Full-time",
    remote: true,
    seniorityLevel: "Senior",
    experience: "2+ years Experience",
    description:
      "This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...",
    matchPercentage: 82,
    matchQuality: "Good",
    daysAgo: 4,
    applicants: 200,
    companyLogo: "/company-a.png",
  },
  {
    id: "2",
    title: "Senior UI/UX Designer",
    company: "Company B",
    location: "Lagos, Nigeria",
    jobType: "Full-time",
    remote: true,
    seniorityLevel: "Senior",
    experience: "2+ years Experience",
    description:
      "This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...",
    matchPercentage: 60,
    matchQuality: "Fair",
    daysAgo: 5,
    applicants: 200,
    companyLogo: "/company-b.png",
  },
  {
    id: "3",
    title: "Senior UI/UX Designer",
    company: "Company C",
    location: "Lagos, Nigeria",
    jobType: "Full-time",
    remote: true,
    seniorityLevel: "Senior",
    experience: "2+ years Experience",
    description:
      "This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...",
    matchPercentage: 95,
    matchQuality: "Excellent",
    daysAgo: 5,
    applicants: 200,
    companyLogo: "/company-c.png",
  },
  {
    id: "4",
    title: "Senior UI/UX Designer",
    company: "Company D",
    location: "Lagos, Nigeria",
    jobType: "Full-time",
    remote: true,
    seniorityLevel: "Senior",
    experience: "2+ years Experience",
    description:
      "This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...",
    matchPercentage: 82,
    matchQuality: "Good",
    daysAgo: 5,
    applicants: 200,
    companyLogo: "/company-d.png",
  },
];

export function JobList() {
  return (
    <div className="">
      {JOBS.map((job) => (
        <JobCard
          key={job.id}
          {...job}
          matchQuality={job.matchQuality as "Good" | "Fair" | "Excellent"}
        />
      ))}
    </div>
  );
}
>>>>>>> b7a5e52850faecb387c63a04dac16b6be2b06078
