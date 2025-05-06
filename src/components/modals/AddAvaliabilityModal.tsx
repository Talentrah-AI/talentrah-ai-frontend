"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { X, ChevronLeft, ChevronRight, ChevronDown, Plus } from "lucide-react";
import "react-day-picker/dist/style.css";

interface TimeRange {
  start: string;
  end: string;
}

export function AddAvailabilityModal() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTimezone, setSelectedTimezone] = useState("UTC");
  const [timeRanges, setTimeRanges] = useState<TimeRange[]>([
    { start: "09:00", end: "17:00" },
  ]);

  const timeOptions = Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 2);
    const minute = i % 2 === 0 ? "00" : "30";
    return `${hour.toString().padStart(2, "0")}:${minute}`;
  });

  const handleAddTimeRange = () => {
    setTimeRanges([...timeRanges, { start: "09:00", end: "17:00" }]);
  };

  const handleRemoveTimeRange = (index: number) => {
    setTimeRanges(timeRanges.filter((_, i) => i !== index));
  };

  const handleTimeChange = (
    index: number,
    field: "start" | "end",
    value: string
  ) => {
    const newTimeRanges = [...timeRanges];
    newTimeRanges[index][field] = value;
    setTimeRanges(newTimeRanges);
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <Dialog.Content className="fixed top-0 right-0 h-[100vh]  w-[437px] bg-white shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-300">
        <div className="flex flex-col h-full text-[12px]">
          <div className="">
            <div className="flex justify-between items-start p-6 border-none">
              <div>
                <Dialog.Title className="text-[20px] text-black font-bold">
                  Set your availability
                </Dialog.Title>
                <Dialog.Description className="text-gray-600 mt-2">
                  Select the dates and times you're available to connect. This
                  helps mentees book sessions that fit your schedule seamlessly.
                </Dialog.Description>
              </div>
              <Dialog.Close className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-5 h-5" />
              </Dialog.Close>
            </div>

            <div className="flex-1 p-4 space-y-3">
              {/* Calendar */}
              <div className="rounded-lg border border-[#EFF0F2] w-[398px] h-[284px] text-[12px]">
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  showOutsideDays
                  className="mx-auto text-black"
                  classNames={{
                    months: "flex flex-col space-y-4",
                    month: "space-y-4 text-black",
                    caption:
                      "flex justify-between items-center px-2 h-10 relative",
                    caption_label:
                      "text-base font-semibold text-[#414A53] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
                    nav: "flex items-center justify-between w-full",
                    nav_button:
                      "h-8 w-8 bg-transparent p-0 text-[#414A53] hover:bg-[#F3F4F6] border-none rounded-full flex items-center justify-center",

                    nav_button_previous: "",
                    nav_button_next: "",
                    table: " grid justify-center w-full",
                    head_row: "flex ",
                    head_cell:
                      "text-black font-bold rounded-md w-9 font-normal text-[0.8rem] h-9 flex items-center justify-center",
                    row: "flex w-full ",
                    cell: "text-center text-sm relative [&:has([aria-selected])]:bg-blue-50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 h-9 w-9 p-0 flex items-center justify-center text-black rounded-sm",
                    day: "h-[32px] w-[48px] px-[5px] font-normal flex items-center justify-center rounded-[8px] [&:has([aria-selected])]:bg-[#0967D2] text-[12px]",
                    day_selected:
                      "bg-blue-600 text-white hover:bg-[#0967D2] hover:text-white focus:bg-[#0967D2] focus:text-white rounded-md",
                    day_today: "bg-gray-100 rounded-md",
                    day_outside: "text-gray-400 opacity-50",
                    day_disabled: "text-gray-400 opacity-50",
                    day_hidden: "invisible",
                  }}
                  components={{
                    IconLeft: () => <ChevronLeft className="h-4 w-4" />,
                    IconRight: () => <ChevronRight className="h-4 w-4" />,
                  }}
                />
              </div>

              {/* Timezone Picker */}
              <div className="space-y-2 text-black flex justify-between">
                <div className="gap-[4px]">
                  <label className="block text-[16px] font-semibold">
                    Timezone
                  </label>
                  <p className="text-black text-[12px] mb-2">
                    Select your timezone
                  </p>
                </div>
                <Select.Root
                  value={selectedTimezone}
                  onValueChange={setSelectedTimezone}
                >
                  <Select.Trigger className="inline-flex items-center justify-between w-full px-[10px] py-[5px]  border rounded-[12px] hover:bg-gray-50 w-[255px] h-[36]">
                    <Select.Value />
                    <Select.Icon>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content className="bg-white rounded-[12px] border shadow-lg text-black">
                      <Select.Viewport className="p-2">
                        <Select.Item
                          value="UTC"
                          className="flex items-center px-4 py-2 text-[12px] hover:bg-gray-100 rounded cursor-pointer outline-none"
                        >
                          <Select.ItemText>(UTC+00:00) UTC</Select.ItemText>
                        </Select.Item>
                        <Select.Item
                          value="America/Los_Angeles"
                          className="flex items-center px-4 py-2 text-[12px] hover:bg-gray-100 rounded cursor-pointer outline-none"
                        >
                          <Select.ItemText>
                            (UTC-08:00) Pacific Time
                          </Select.ItemText>
                        </Select.Item>
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </div>

              {/* Time Ranges */}
              <div>
                <div className="flex justify-between items-end">
                  <div className="space-y-4 text-black">
                    <div>
                      <h3 className="text-[16px] font-semibold">
                        What hours are you available?
                      </h3>
                    </div>
                    {timeRanges.map((range, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <Select.Root
                          value={range.start}
                          onValueChange={(value) =>
                            handleTimeChange(index, "start", value)
                          }
                        >
                          <Select.Trigger className="inline-flex items-center justify-between px-4 py-3 text-[12px] border rounded-lg hover:bg-gray-50 w-[64px] h-[28px]">
                            <Select.Value />
                            <Select.Icon>
                              <ChevronDown className="h-4 w-4 opacity-50" />
                            </Select.Icon>
                          </Select.Trigger>
                          <Select.Portal>
                            <Select.Content className="bg-white rounded-lg border shadow-lg m-0 text-black">
                              <Select.Viewport className="p-2 max-h-[300px] overflow-auto">
                                {timeOptions.map((time) => (
                                  <Select.Item
                                    key={time}
                                    value={time}
                                    className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 rounded cursor-pointer outline-none"
                                  >
                                    <Select.ItemText>{time}</Select.ItemText>
                                  </Select.Item>
                                ))}
                              </Select.Viewport>
                            </Select.Content>
                          </Select.Portal>
                        </Select.Root>

                        <span className="text-gray-500">—</span>

                        <Select.Root
                          value={range.end}
                          onValueChange={(value) =>
                            handleTimeChange(index, "end", value)
                          }
                        >
                          <Select.Trigger className="inline-flex items-center justify-between px-4 py-3 text-[12px] border rounded-lg hover:bg-gray-50  w-[64px] h-[28px]">
                            <Select.Value />
                            <Select.Icon>
                              <ChevronDown className="h-4 w-4 opacity-50" />
                            </Select.Icon>
                          </Select.Trigger>
                          <Select.Portal>
                            <Select.Content className="bg-white rounded-lg border shadow-lg text-black">
                              <Select.Viewport className="p-2 max-h-[300px] overflow-auto">
                                {timeOptions.map((time) => (
                                  <Select.Item
                                    key={time}
                                    value={time}
                                    className="flex items-center px-4 py-2 text-[12px] hover:bg-gray-100 rounded cursor-pointer outline-none"
                                  >
                                    <Select.ItemText>{time}</Select.ItemText>
                                  </Select.Item>
                                ))}
                              </Select.Viewport>
                            </Select.Content>
                          </Select.Portal>
                        </Select.Root>

                        {timeRanges.length > 1 && (
                          <button
                            onClick={() => handleRemoveTimeRange(index)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleAddTimeRange}
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 w-[64px] h-[30px] rounded-[12px] bg-[#E6F0FB] py-[7px] px-[10px] self-end"
                  >
                    <Plus className="w-4 h-4" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" border-none bg-white mt-[70px] px-[5px]">
            <div className="flex gap-4">
              <Dialog.Close className="flex-1 px-[30px] py-[5px] border-[0.5px] rounded-lg hover:bg-gray-50 font-medium text-[#717A84] text-[16px]">
                Cancel
              </Dialog.Close>
              <button className="flex-1 px-[30px] py-[5px] border-[0.5px] bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-[16px]">
                Apply
              </button>
            </div>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
