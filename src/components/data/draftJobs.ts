import { Job } from "@/types/Jobs";

export const draftJobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    jobPref: "TechCorp Inc.",
    location: "Lagos",
    type: "Full-time",
    seniority: "Mid-level",
    description:
      "We're looking for a frontend developer proficient in React and TypeScript.",
    appliedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    status: "Applied with AI",
    applicationStatus: "Applied",
    method: "Company Website",
    url: "https://example.com/job/1",
    imageURL: "/images/a3101d0b927b83e23d1c1d92d6f910f0.png",
  },
  {
    id: "2",
    title: "Senior UX Designer",
    jobPref: "Design Studios",
    location: "New York, NY",
    type: "Contract",
    seniority: "Senior",
    description:
      "Join our team of talented designers creating beautiful digital experiences.",
    appliedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    status: "Applied with AI",
    applicationStatus: "Interview",
    method: "LinkedIn",
    url: "https://example.com/job/2",
    imageURL: "/images/b715d05c9c809379feae8943ac02547e.png",
  },
];
