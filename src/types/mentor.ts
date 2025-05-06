export interface MentorProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  linkedin: string;
  website: string;
  avatar: string;
  stats: {
    totalMentoringTime: string;
    sessionsCompleted: string;
    averageAttendance: string;
  };
  bio: string;
  topAreas: string[];
}

export interface MentorBackgroundData {
  expertise: string[];
  disciplines: string[];
  languages: string[];
  experience: {
    role: string;
    company: string;
    period: string;
    description: string;
  }[];
}

export interface TimeSlot {
  time: string;
  status: "available" | "booked";
}

export interface DayAvailability {
  date: string;
  slots: TimeSlot[];
}

export type MentorAvailabilityData = {
  [key: string]: DayAvailability[];
};
