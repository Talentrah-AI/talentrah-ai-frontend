"use client";

import React, { useState } from "react";
import { DateEntry as DateEntryComponent } from "./DateEntry";
import { mockDateEntries } from "@/data/mock/mentorAvailability";
import { DateEntry } from "@/types/types";

export default function SetDate() {
  const [dateEntries, setDateEntries] = useState<DateEntry[]>(mockDateEntries);

  const handleDelete = (id: string) => {
    setDateEntries((entries) => entries.filter((entry) => entry.id !== id));
  };

  const handleTimeSlotClick = (entryId: string, slotIndex: number) => {
    setDateEntries((entries) =>
      entries.map((entry) => {
        if (entry.id === entryId) {
          const newTimeSlots = [...entry.timeSlots];
          newTimeSlots[slotIndex] = {
            ...newTimeSlots[slotIndex],
            isBooked: !newTimeSlots[slotIndex].isBooked,
          };
          return { ...entry, timeSlots: newTimeSlots };
        }
        return entry;
      })
    );
  };

  return (
    <div className=" items-center">
      <div className="w-full max-w-2xl bg-white ">
        <div className="flex items-center justify-between gap-[17px] mb-8">
          <h1 className="text-[#717A84] text-[12px] ">Set dates</h1>
          <div className="flex items-center gap-[15px] text-[12px]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-200"></div>
              <span className="text-black text-[10px]">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <span className="text-black text-[10px]">Booked</span>
            </div>
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          {dateEntries.map((entry) => (
            <DateEntryComponent
              key={entry.id}
              entry={entry}
              onDelete={() => handleDelete(entry.id)}
              onTimeSlotClick={(slotIndex) =>
                handleTimeSlotClick(entry.id, slotIndex)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
