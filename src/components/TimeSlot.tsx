import React from "react";
import { TimeSlot as TimeSlotType } from "@/types/types";

interface TimeSlotProps {
  slot: TimeSlotType;
  onClick: () => void;
}

export function TimeSlot({ slot, onClick }: TimeSlotProps) {
  return (
    <button
      onClick={onClick}
      className={` w-[87px] h-[32px]  rounded-lg text-sm font-medium transition-colors
        ${
          slot.isBooked
            ? "bg-orange-100 text-orange-700 border-2 border-orange-500"
            : "bg-gray-100 text-gray-700"
        }`}
    >
      {slot.startTime} - {slot.endTime}
    </button>
  );
}
