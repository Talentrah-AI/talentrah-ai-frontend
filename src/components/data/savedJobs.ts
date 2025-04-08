import { Job } from "@/types/Jobs";
export const savedJobs: Job[] = [
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
  {
    id: "3",
    title: "Full Stack Engineer",
    jobPref: "StartupX",
    location: "San Francisco, CA",
    type: "Full-time",
    seniority: "Senior",
    description:
      "Looking for a full stack engineer to join our rapidly growing team.",
    appliedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(), // 12 days ago
    status: "Applied manually",
    applicationStatus: "Rejected",
    method: "Referral",
    url: "https://example.com/job/3",
    imageURL: "/images/a3101d0b927b83e23d1c1d92d6f910f0.png",
  },
  {
    id: "4",
    title: "Product Manager",
    jobPref: "InnovateCo",
    location: "Austin, TX",
    type: "Full-time",
    seniority: "Mid-level",
    description: "Passionate about creating products that users love? Join us!",
    appliedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    status: "Applied with AI",
    applicationStatus: "Saved",
    method: "N/A",
    url: "https://example.com/job/4",
    imageURL: "/images/b715d05c9c809379feae8943ac02547e.png",
  },
  {
    id: "5",
    title: "DevOps Engineer",
    jobPref: "CloudSys",
    location: "Seattle, WA",
    type: "Full-time",
    seniority: "Senior",
    description:
      "Join our DevOps team to build and maintain cloud infrastructure.",
    appliedAt: new Date().toISOString(), // Today
    status: "Applied manually",
    applicationStatus: "Draft",
    method: "N/A",
    url: "https://example.com/job/5",
    imageURL: "/images/de5a95459d82f536dccfaba13591393e.png",
  },
  {
    id: "6",
    title: "React Native Developer",
    jobPref: "MobileApps Inc.",
    location: "Remote",
    type: "Contract",
    seniority: "Mid-level",
    description:
      "Developing cross-platform mobile applications using React Native.",
    appliedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
    status: "Applied manually",
    applicationStatus: "Offer",
    method: "AngelList",
    url: "https://example.com/job/6",
    imageURL: "/images/a3101d0b927b83e23d1c1d92d6f910f0.png",
  },
];
