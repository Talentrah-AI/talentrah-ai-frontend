"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 bg-white", className)}
      classNames={{
        months: "flex flex-col space-y-4",
        month: "space-y-4",
        caption: "flex justify-between items-center mb-4 px-2 h-10 relative",
        caption_label:
          "text-base font-semibold text-[#414A53] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
        nav: "flex items-center justify-between w-full",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-8 w-8 bg-transparent p-0 text-[#414A53] hover:bg-[#F3F4F6] border-none rounded-full flex items-center justify-center"
        ),
        nav_button_previous: "",
        nav_button_next: "",
        table: "w-full border-collapse space-y-1",
        head_row: "flex justify-between mb-2",
        head_cell: "text-[#414A53] w-9 font-medium text-sm text-center",
        row: "flex w-full mt-2 justify-between",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-transparent",
        day: "pt-[9px] pb-[7px] px-[4px] w-full font-normal text-[#414A53] hover:bg-[#F3F4F6] focus:bg-[#0967D2] focus:text-white rounded-[8px]",
        day_selected:
          "bg-[#0967D2] text-white hover:bg-[#0967D2] hover:text-white rounded-[8px] font-medium",
        day_today: "bg-[#F3F4F6] text-[#414A53] rounded-[8px]",
        day_outside: "text-[#9CA3AF] opacity-50",
        day_disabled: "text-[#9CA3AF] opacity-30",
        day_range_middle: "aria-selected:bg-transparent",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
