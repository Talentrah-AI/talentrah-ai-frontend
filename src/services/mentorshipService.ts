export interface MentorshipRequest {
  id: string;
  fullName: string;
  email: string;
  mentors: string;
  mentorId: string;
  status: "Pending" | "Accepted" | "Rejected";
  mentorshipType: string;
  signupDate: string;
}

// Mock data for mentorship requests
const mockMentorshipRequests: MentorshipRequest[] = [
  {
    id: "1",
    fullName: "John Doe",
    email: "john.doe@example.com",
    mentors: "Sarah Wilson",
    mentorId: "1",
    status: "Pending",
    mentorshipType: "Career Guidance",
    signupDate: "2025-03-15",
  },
  {
    id: "2",
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    mentors: "Michael Brown",
    mentorId: "2",
    status: "Accepted",
    mentorshipType: "Technical Skills",
    signupDate: "2025-03-10",
  },
  {
    id: "3",
    fullName: "Robert Johnson",
    email: "robert.j@example.com",
    mentors: "Lisa Chen",
    mentorId: "3",
    status: "Pending",
    mentorshipType: "Interview Prep",
    signupDate: "2025-04-02",
  },
  {
    id: "4",
    fullName: "Emily Wilson",
    email: "emily.wilson@example.com",
    mentors: "David Park",
    mentorId: "4",
    status: "Accepted",
    mentorshipType: "Career Guidance",
    signupDate: "2025-04-10",
  },
  {
    id: "5",
    fullName: "Michael Thompson",
    email: "michael.t@example.com",
    mentors: "Jennifer Lopez",
    mentorId: "5",
    status: "Rejected",
    mentorshipType: "Technical Skills",
    signupDate: "2025-03-28",
  },
  {
    id: "6",
    fullName: "Laura Garcia",
    email: "laura.g@example.com",
    mentors: "Robert Smith",
    mentorId: "6",
    status: "Pending",
    mentorshipType: "Resume Review",
    signupDate: "2025-04-15",
  },
  {
    id: "7",
    fullName: "Daniel Lewis",
    email: "daniel.l@example.com",
    mentors: "Emma Davis",
    mentorId: "7",
    status: "Accepted",
    mentorshipType: "Interview Prep",
    signupDate: "2025-04-05",
  },
  {
    id: "8",
    fullName: "Olivia Martinez",
    email: "olivia.m@example.com",
    mentors: "James Wilson",
    mentorId: "8",
    status: "Pending",
    mentorshipType: "Career Guidance",
    signupDate: "2025-03-22",
  },
  {
    id: "9",
    fullName: "William Anderson",
    email: "will.a@example.com",
    mentors: "Sophia Lee",
    mentorId: "9",
    status: "Accepted",
    mentorshipType: "Technical Skills",
    signupDate: "2025-04-12",
  },
  {
    id: "10",
    fullName: "Sophia Taylor",
    email: "sophia.t@example.com",
    mentors: "Daniel Johnson",
    mentorId: "10",
    status: "Pending",
    mentorshipType: "Resume Review",
    signupDate: "2025-04-18",
  },
  {
    id: "11",
    fullName: "James Brown",
    email: "james.b@example.com",
    mentors: "Olivia Williams",
    mentorId: "11",
    status: "Accepted",
    mentorshipType: "Career Guidance",
    signupDate: "2025-03-30",
  },
  {
    id: "12",
    fullName: "Emma Davis",
    email: "emma.d@example.com",
    mentors: "William Johnson",
    mentorId: "12",
    status: "Rejected",
    mentorshipType: "Interview Prep",
    signupDate: "2025-04-08",
  },
];

// Function to get all mentorship requests
export const getMentorshipRequests = (): MentorshipRequest[] => {
  return [...mockMentorshipRequests];
};

// Function to get a mentorship request by ID
export const getMentorshipRequestById = (
  id: string
): MentorshipRequest | undefined => {
  return mockMentorshipRequests.find((request) => request.id === id);
};
