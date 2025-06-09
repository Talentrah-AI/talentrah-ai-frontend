import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date | null) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tempDate, setTempDate] = useState<Date | null>(selectedDate);

  useEffect(() => {
    if (selectedDate) {
      setCurrentDate(selectedDate);
      setTempDate(selectedDate);
    }
  }, [selectedDate]);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const days = [];

  // Fill blank spaces for alignment
  for (let i = 0; i < (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1); i++) {
    days.push(<div key={`empty-${i}`} className="h-8"></div>);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const thisDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    const isSelected =
      tempDate &&
      thisDate.toDateString() === tempDate.toDateString();

    days.push(
      <button
        key={i}
        onClick={() => setTempDate(thisDate)}
        className={`h-8 w-8 rounded-sm flex items-center justify-center transition-colors hover:bg-blue-500 ${
          isSelected ? 'bg-blue-500 text-white' : ''
        }`}
      >
        {i}
      </button>
    );
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  return (
    <div className="p-4 w-100 z-50">
      <div className="flex items-center justify-between mb-4">
        <button onClick={previousMonth} className="p-1 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="h-5 w-5 text-black" />
        </button>
        <span className="font-medium text-black">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </span>
        <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded-full">
          <ChevronRight className="h-5 w-5 text-black" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <div key={index} className="text-xs font-medium text-black">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 mb-4">
        {days}
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => onSelectDate(null)} // cancel
          className="px-17 py-3 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={() => tempDate && onSelectDate(tempDate)} // confirm
          className="px-17 py-3 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Calendar;
