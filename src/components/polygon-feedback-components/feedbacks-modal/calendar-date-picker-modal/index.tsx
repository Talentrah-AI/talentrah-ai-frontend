'use client';

import React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface CalendarDatePickerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectDate: (date: Date) => void;
  currentMonth?: Date;
}

export function CalendarDatePicker({
  open,
  onOpenChange,
  onSelectDate,
  currentMonth: initialMonth,
}: CalendarDatePickerProps) {
  const [currentMonth, setCurrentMonth] = useState(initialMonth || new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1; // Adjust for Monday as first day of week
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const handleSelectDate = (day: number) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    setSelectedDate(date);
  };

  const handleDone = () => {
    if (selectedDate) {
      onSelectDate(selectedDate);
    }
    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days: React.ReactNode[] = [];
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected =
        selectedDate &&
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();

      days.push(
        <button
          key={day}
          className={`h-8 w-8 rounded-md flex items-center justify-center text-sm ${
            isSelected ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
          }`}
          onClick={() => handleSelectDate(day)}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 max-w-xs">
        <div className="p-0">
          <div className="flex flex-col">
            <div className="flex items-center justify-between p-4">
              <button onClick={handlePrevMonth} className="text-gray-600">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="text-center font-medium">
                {monthNames[currentMonth.getMonth()]}{' '}
                {currentMonth.getFullYear()}
              </div>
              <button onClick={handleNextMonth} className="text-gray-600">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="px-4 pb-4">
              <div className="grid grid-cols-7 gap-1">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="h-8 flex items-center justify-center text-sm font-medium text-gray-600"
                  >
                    {day}
                  </div>
                ))}
                {renderCalendar()}
              </div>
            </div>

            <div className="flex border-t p-3 mt-2">
              <button
                className="flex-1 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="flex-1 rounded-md px-3 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700"
                onClick={handleDone}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
