'use client';

import React, { useState } from 'react';
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogClose,
  DialogOverlay,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  XIcon,
  ChevronLeft,
  ChevronRight,
  Plus as PlusIcon,
} from 'lucide-react';

interface TimeRange {
  start: string;
  end: string;
}

export function AddAvailabilityModal() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimezone, setSelectedTimezone] = useState<string>('UTC-10:00');
  const [timeRanges, setTimeRanges] = useState<TimeRange[]>([
    { start: '08:00', end: '08:30' },
    { start: '10:20', end: '10:50' },
    { start: '13:00', end: '14:00' },
  ]);

  // Add style to hide chevron
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .select-trigger-icon {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Generate time options from 00:00 to 23:30 in 30-minute increments
  const timeOptions = Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 2);
    const minute = i % 2 === 0 ? '00' : '30';
    return `${hour.toString().padStart(2, '0')}:${minute}`;
  });

  const handleAddTimeRange = () => {
    setTimeRanges([...timeRanges, { start: '09:00', end: '17:00' }]);
  };

  const handleRemoveTimeRange = (index: number) => {
    setTimeRanges(timeRanges.filter((_, i) => i !== index));
  };

  const handleTimeChange = (
    index: number,
    field: 'start' | 'end',
    value: string
  ) => {
    const newTimeRanges = [...timeRanges];
    newTimeRanges[index][field] = value;
    setTimeRanges(newTimeRanges);
  };

  // Calendar navigation
  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  // Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get first day of month (0-6 where 0 is Sunday)
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  // Generate calendar data
  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    // Adjust for Monday as first day of week (0=Sunday, 1=Monday, etc.)
    const firstDayIndex = (firstDayOfMonth + 6) % 7;

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const calendarDays = generateCalendar();
  const monthName = currentDate.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <DialogOverlay className="fixed bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogContent className="fixed  top-0 right-0 h-screen w-[450px] bg-white shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-300 overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col text-[12px] ">
          <div className="w-[395px]">
            <div className="flex justify-between items-start p-4 border-none">
              <div>
                <DialogTitle className="text-[15px] text-black font-bold">
                  Set your availability
                </DialogTitle>
                <DialogDescription className="text-gray-600 text-[10px] mt-2">
                  Select the dates and times you;re available to connect. This
                  helps mentees book sessions that fit your schedule seamlessly.
                </DialogDescription>
              </div>
              <DialogClose asChild>
                <button
                  className="p-2 hover:bg-gray-100 rounded-full"
                  aria-label="Close"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </DialogClose>
            </div>

            <div className="flex-1 p-4 ">
              {/* Custom Calendar */}
              <div className="rounded-lg border border-[#EFF0F2] w-[398px] h-[284px] text-[12px]">
                <div className="flex justify-between items-center p-2">
                  <button
                    onClick={prevMonth}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="font-semibold">{monthName}</div>
                  <button
                    onClick={nextMonth}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 p-1">
                  {weekdays.map((day) => (
                    <div
                      key={day}
                      className="text-center font-medium text-gray-500 text-[10px] py-1"
                    >
                      {day}
                    </div>
                  ))}

                  {calendarDays.map((day, i) => {
                    if (!day) {
                      return <div key={`empty-${i}`} className="h-8" />;
                    }

                    const isSelected =
                      selectedDate &&
                      day.getDate() === selectedDate.getDate() &&
                      day.getMonth() === selectedDate.getMonth() &&
                      day.getFullYear() === selectedDate.getFullYear();

                    return (
                      <button
                        key={day.toString()}
                        onClick={() => setSelectedDate(day)}
                        className={`h-8 w-8 flex items-center justify-center rounded-md text-sm
                          ${isSelected ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}
                        `}
                      >
                        {day.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timezone Picker */}
              <div className="space-y-2 text-black flex justify-between mt-[5px]">
                <div className="gap-[4px]">
                  <label className="block text-[15px] font-semibold">
                    Timezone
                  </label>
                  <p className="text-black text-[9px] mb-2">
                    Select your timezone
                  </p>
                </div>
                <Select
                  value={selectedTimezone}
                  onValueChange={setSelectedTimezone}
                >
                  <SelectTrigger className="inline-flex items-center justify-between w-full px-[10px] py-[5px] border rounded-[12px] hover:bg-gray-50 w-[255px] h-[36px] text-[10px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="UTC-10:00">
                      (UTC-10:00) Pacific Time
                    </SelectItem>
                    <SelectItem value="UTC">(UTC+00:00) UTC</SelectItem>
                    <SelectItem value="America/Los_Angeles">
                      (UTC-08:00) Pacific Time (US)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Time Ranges */}
              <div>
                <div className="flex justify-between items-end">
                  <div className="space-y-4 text-black">
                    <div>
                      <h3 className="text-[15px] font-semibold">
                        What hours are you available?
                      </h3>
                    </div>
                    {timeRanges.map((range, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <Select
                          value={range.start}
                          onValueChange={(value) =>
                            handleTimeChange(index, 'start', value)
                          }
                        >
                          <SelectTrigger className="[&>svg]:hidden inline-flex items-center justify-between px-4 py-3 text-[12px] border rounded-lg hover:bg-gray-50 w-[64px] h-[28px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {timeOptions.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <span className="text-gray-500">→</span>

                        <Select
                          value={range.end}
                          onValueChange={(value) =>
                            handleTimeChange(index, 'end', value)
                          }
                        >
                          <SelectTrigger className="[&>svg]:hidden inline-flex items-center justify-between px-4 py-3 text-[12px] border rounded-lg hover:bg-gray-50 w-[64px] h-[28px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {timeOptions.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <button
                          onClick={() => handleRemoveTimeRange(index)}
                          className="p-2 hover:bg-gray-100 rounded-full"
                          aria-label="Remove time range"
                        >
                          <XIcon className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleAddTimeRange}
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 w-[64px] h-[30px] rounded-[12px] bg-[#E6F0FB] py-[7px] px-[10px] self-end"
                  >
                    <PlusIcon className="w-4 h-4" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-none bg-white mt-[70px] px-[5px]">
            <div className="flex gap-4">
              <DialogClose className="flex-1 px-[30px] py-[5px] border-[0.5px] rounded-lg hover:bg-gray-50 font-medium text-[#717A84] text-[16px]">
                Cancel
              </DialogClose>
              <button className="flex-1 px-[30px] py-[5px] border-[0.5px] bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-[16px]">
                Apply
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </>
  );
}
