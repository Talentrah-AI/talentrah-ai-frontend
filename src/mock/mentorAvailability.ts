import { DateEntry } from "@/types/types";

export const mockDateEntries: DateEntry[] = [
  {
    id: "1",
    date: new Date(2025, 2, 28), // March 28, 2025
    timeSlots: [
      { startTime: "09:00", endTime: "10:00", isBooked: false },
      { startTime: "12:00", endTime: "12:30", isBooked: true },
    ],
  },
  {
    id: "2",
    date: new Date(2025, 2, 28),
    timeSlots: [
      { startTime: "09:00", endTime: "10:00", isBooked: false },
      { startTime: "12:00", endTime: "12:30", isBooked: false },
    ],
  },
  {
    id: "3",
    date: new Date(2025, 2, 28),
    timeSlots: [
      { startTime: "09:00", endTime: "10:00", isBooked: true },
      { startTime: "12:00", endTime: "12:30", isBooked: false },
    ],
  },
  {
    id: "4",
    date: new Date(2025, 2, 28),
    timeSlots: [
      { startTime: "09:00", endTime: "10:00", isBooked: false },
      { startTime: "12:00", endTime: "12:30", isBooked: true },
    ],
  },
  {
    id: "5",
    date: new Date(2025, 2, 28),
    timeSlots: [
      { startTime: "09:00", endTime: "10:00", isBooked: false },
      { startTime: "12:00", endTime: "12:30", isBooked: false },
    ],
  },
];
