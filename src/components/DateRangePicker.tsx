import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DateRangePickerProps {
  date: DateRange | undefined;
  onDateChange: (date: DateRange) => void;
}

export function DateRangePicker({ date, onDateChange }: DateRangePickerProps) {
  const [tempDate, setTempDate] = React.useState<DateRange | undefined>(date);
  const [isFromOpen, setIsFromOpen] = React.useState(false);
  const [isToOpen, setIsToOpen] = React.useState(false);

  const handleFromDone = () => {
    if (tempDate?.from) {
      onDateChange({ from: tempDate.from, to: tempDate?.to || tempDate.from });
    }
    setIsFromOpen(false);
  };

  const handleToDone = () => {
    if (tempDate?.to) {
      onDateChange({ from: tempDate?.from || tempDate.to, to: tempDate.to });
    }
    setIsToOpen(false);
  };

  const handleFromCancel = () => {
    setTempDate(date);
    setIsFromOpen(false);
  };

  const handleToCancel = () => {
    setTempDate(date);
    setIsToOpen(false);
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-[#414A53]">From:</span>
        <Popover open={isFromOpen} onOpenChange={setIsFromOpen}>
          <PopoverTrigger asChild>
            <Button
              className={cn(
                "w-[104px] h-[36px] gap-0.5 rounded-lg border-none border-opacity-50 py-2.5 px-3 text[12px] text-[#B0B5BB] bg-white",
                !date?.from && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                format(date.from, "MMM dd, yyyy")
              ) : (
                <span>Select date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-[362px]  rounded-[18px] bg-white border-[0.5px] border-[#EFF0F2] shadow-[0px_5px_15px_0px_rgba(27,32,32,0.1)] p-0"
            align="start"
          >
            <div className="flex flex-col items-center justify center ">
              <Calendar
                initialFocus
                mode="single"
                defaultMonth={date?.from}
                selected={tempDate?.from}
                onSelect={(day) => {
                  setTempDate((prev) => ({
                    from: prev?.from || day,
                    to: prev?.to || day,
                  }));
                }}
                numberOfMonths={1}
              />
              <div className="flex justify-between p-3 border-none w-full text[#515D68]">
                <Button
                  className="w-[155px] h-[50px] flex gap-2 rounded-sm border p-[16px_24px]  border border-[#EFF0F2] hover:bg-[#0967D2] hover:text-white"
                  onClick={handleFromCancel}
                >
                  Cancel
                </Button>
                <Button
                  className="w-[155px] h-[50px] flex gap-2 rounded-sm border border-[#EFF0F2]  p-[16px_24px] hover:bg-[#0967D2] hover:text-white"
                  onClick={handleFromDone}
                >
                  Done
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-[#414A53]">To:</span>
        <Popover open={isToOpen} onOpenChange={setIsToOpen}>
          <PopoverTrigger asChild>
            <Button
              className={cn(
                "w-[104px] h-[36px] gap-0.5 rounded-lg border-none border-opacity-50 py-2.5 px-3 bg-white",
                !date?.to && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.to ? (
                format(date.to, "MMM dd, yyyy")
              ) : (
                <span>Select date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-[362px]  rounded-[18px] bg-white border-[0.5px] border-[#EFF0F2] shadow-[0px_5px_15px_0px_rgba(27,32,32,0.1)] p-2"
            align="start"
          >
            <div className="flex flex-col items-center justify center">
              <Calendar
                initialFocus
                mode="single"
                defaultMonth={date?.to}
                selected={tempDate?.to}
                onSelect={(day) => {
                  setTempDate((prev) => ({ from: prev?.from || day, to: day }));
                }}
                numberOfMonths={1}
                disabled={(day) => (date?.from ? day < date.from : false)}
              />
              <div className="flex justify-between p-3 border-none w-full text[#515D68]">
                <Button
                  className="w-[155px] h-[50px] flex gap-2 rounded-sm border p-[16px_24px]  border border-[#EFF0F2] hover:bg-[#0967D2] hover:text-white"
                  onClick={handleFromCancel}
                >
                  Cancel
                </Button>
                <Button
                  className="w-[155px] h-[50px] flex gap-2 rounded-sm border border-[#EFF0F2]  p-[16px_24px] hover:bg-[#0967D2] hover:text-white"
                  onClick={handleFromDone}
                >
                  Done
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
