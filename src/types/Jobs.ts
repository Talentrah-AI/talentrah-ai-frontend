export interface Job {
  id: string;
  title: string;
  jobPref: string;
  location: string;
  type: string;
  seniority?: string;
  applicationStatus: string;
  method: string;
  appliedAt: string;
  imageURL?: string;
  description?: string;
  status: 'Applied with AI' | 'Applied manually';
  url?: string;
  resumeUrl?: string;
  coverLetterUrl?: string;
}
