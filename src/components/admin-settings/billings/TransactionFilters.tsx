import React, { useState } from "react";
import { Calendar, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { DateRangePicker } from "./DateRangePicker";
import { DateRange } from "react-day-picker";

interface TransactionFiltersProps {
  onFilterChange: (filters: any) => void;
}

export const TransactionFilters: React.FC<TransactionFiltersProps> = ({
  onFilterChange,
}) => {
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  // Update fromDate and toDate when dateRange changes
  const handleDateChange = (range: DateRange) => {
    setDateRange(range);
    setFromDate(range.from ? range.from.toISOString() : "");
    setToDate(range.to ? range.to.toISOString() : "");
  };

  const handleApplyFilter = () => {
    onFilterChange({
      status: statusFilter,
      fromDate,
      toDate,
      itemsPerPage,
      searchQuery,
    });
  };

  const handleClearFilter = () => {
    setStatusFilter("");
    setFromDate("");
    setToDate("");
    setDateRange(undefined);
    setSearchQuery("");
    onFilterChange({
      status: "",
      fromDate: "",
      toDate: "",
      itemsPerPage,
      searchQuery: "",
    });
  };

  return (
    <div className="flex flex-wrap gap-4 items-center mb-6 bg-transparent text-[12px]">
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#07A2A8] font-medium">Filter by</span>
      </div>

      {/* Items Per Page Select */}
      <div className="w-[86px] h-[36px] gap-[10px] rounded-[8px] border-[0.5px] pt-[10px] pr-[12px] pb-[10px] pl-[12px] bg-white flex text-[#414A53] border-none">
        <span className="font-normal text-xs leading-4 tracking-normal">
          Show
        </span>
        <Select
          value={String(itemsPerPage)}
          onValueChange={(val) => setItemsPerPage(Number(val))}
        >
          <SelectTrigger className="bg-[#EFF0F2] w-[23px] h-[16px] gap-[10px] rounded-[4px] border-none font-normal text-xs leading-4 tracking-normal text-[#414A53] overflow-visible">
            <SelectValue placeholder={itemsPerPage} />
          </SelectTrigger>
          <SelectContent className="bg-white text-[#90989F] border border-[#EFF0F2] shadow-[0px_5px_15px_0px_#1B20201A]">
            {[5, 10, 25, 50].map((option) => (
              <SelectItem key={option} value={String(option)}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Status Filter Select */}
      <div className="flex items-center gap-2">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full bg-white text-[#414A53] h-[36px] w-[77px] overflow-hidden border-none gap-[10px]">
            <Image
              src="/icons/filter.png"
              alt="filter"
              width={16}
              height={16}
            />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="w-auto h-auto rounded-[10px] border border-[#EFF0F2] p-2 bg-white shadow-[0px_5px_15px_0px_#1B20201A] text-[#90989F]">
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Successful">Successful</SelectItem>
            <SelectItem value="Failed">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Date Filters */}
      <div>
        <DateRangePicker date={dateRange} onDateChange={handleDateChange} />
      </div>

      {/* Action Buttons (unchanged) */}
      <button
        onClick={handleApplyFilter}
        className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm"
      >
        Apply filter
      </button>
      <button
        onClick={handleClearFilter}
        className="text-gray-500 px-4 py-2 text-sm"
      >
        Clear filter
      </button>

      {/* Search (unchanged) */}
      <div className="ml-auto relative ">
        <input
          type="text"
          placeholder="Search"
          className="pl-9 pr-3 py-2 border border-gray-300 rounded-[12px] text-sm w-64 h-[36px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>
  );
};
