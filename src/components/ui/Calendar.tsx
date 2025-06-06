import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

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
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="h-8"></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(
      <button
        key={i}
        className={`h-8 w-8 rounded-full hover:bg-indigo-700 flex items-center justify-center transition-colors ${
          i === currentDate.getDate() ? 'bg-indigo-600' : ''
        }`}
      >
        {i}
      </button>
    );
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 hover:bg-indigo-800 px-3 py-2 rounded-md transition-colors"
      >
        <span>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-indigo-900 rounded-lg shadow-lg p-4 w-64 z-50">
          <div className="flex items-center justify-between mb-4">
            <button onClick={previousMonth} className="p-1 hover:bg-indigo-800 rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="font-medium">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </span>
            <button onClick={nextMonth} className="p-1 hover:bg-indigo-800 rounded-full">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
              <div key={index} className="text-xs font-medium text-indigo-300">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;




































// "use client"

// import * as React from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { DayPicker } from "react-day-picker"
// import "react-day-picker/dist/style.css"
// import { cn } from "@/lib/utils"

// type CalendarProps = React.ComponentProps<typeof DayPicker>

// function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
//   return (
//     <DayPicker
//       showOutsideDays={showOutsideDays}
//       className={cn("p-3", className)}
//       classNames={{
//         months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
//         month: "space-y-4",
//         caption: "flex justify-center pt-1 relative items-center",
//         caption_label: "text-sm font-medium",
//         nav: "space-x-1 flex items-center",
//         nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
//         nav_button_previous: "absolute left-1",
//         nav_button_next: "absolute right-1",
//         table: "w-full border-collapse space-y-1",
//         head_row: "flex",
//         head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
//         row: "flex w-full mt-2",
//         cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent",
//         day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
//         day_selected: "bg-primary text-primary-foreground hover:bg-primary/90",
//         day_today: "bg-accent text-accent-foreground",
//         day_outside: "text-muted-foreground opacity-50",
//         ...classNames,
//       }}
//       components={{
//         IconLeft: () => <ChevronLeft className="h-4 w-4" />,
//         IconRight: () => <ChevronRight className="h-4 w-4" />,
//       }}
//       {...props}
//     />
//   )
// }

// Calendar.displayName = "Calendar"

// export { Calendar }
