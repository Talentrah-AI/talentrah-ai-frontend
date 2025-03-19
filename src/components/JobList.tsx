import { JobCard } from "@/components/JobCard";

// Sample job data
const JOBS = [
  {
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