import React from "react";
import { X } from "lucide-react";
import { DateEntry as DateEntryType } from "@/types/types";
import { TimeSlot } from "./TimeSlot";

interface DateEntryProps {
  entry: DateEntryType;
  onDelete: () => void;
  onTimeSlotClick: (slotIndex: number) => void;
}

export function DateEntry({
  entry,
  onDelete,
  onTimeSlotClick,
}: DateEntryProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="py-2 first:pt-0 border-none">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-[16px] font-bold text-black">
          {formatDate(entry.date)}
        </h2>
        <button
          onClick={onDelete}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Delete date"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      <div className="flex gap-4  text-[12px]">
        {entry.timeSlots.map((slot, index) => (
          <TimeSlot
            key={`${slot.startTime}-${slot.endTime}`}
            slot={slot}
            onClick={() => onTimeSlotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
