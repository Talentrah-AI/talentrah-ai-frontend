export interface TimeSlot {
  startTime: string;
  endTime: string;
  isBooked: boolean;
}

export interface DateEntry {
  id: string;
  date: Date;
  timeSlots: TimeSlot[];
}
