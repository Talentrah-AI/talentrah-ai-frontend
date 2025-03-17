import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

interface FilterBadgeProps {
  label: string;
  onRemove: () => void;
}

function FilterBadge({ label, onRemove }: FilterBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className=" px-[10px] py-[5px] gap-[8px] 
           rounded-[6px] bg-[#EFF0F2] 
           font-[Gabarito] font-normal text-[12px] leading-[16px] 
           tracking-[0px] text-[#515D68] flex items-center"
    >
      {label}
      <button
        onClick={onRemove}
        className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
      >
        <X className="h-3 w-3" />
      </button>
    </Badge>
  );
}

function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <button
      className={`${
        isActive
          ? " px-[10px] py-[5px] gap-[5px] rounded-[6px]   bg-gradient-to-r from-[#0967D2] to-[#09CBD2] font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-white"
          : " px-[10px] py-[5px]  gap-[5px] rounded-[6px] font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#717A84]"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export function JobTabs() {
  const [activeTab, setActiveTab] = useState("recommended");

  return (
    <div className="mb-6 rounded-[12px] bg-white p-4 w-[1142px] flex flex-col gap-[10px]">
      <div className="flex flex-row justify-between items-center mb-6">
        <div className="flex w-[375px] h-[36px] gap-[5px] rounded-[12px] p-[5px] bg-white shadow-md">
          <Tab
            label="Recommended"
            isActive={activeTab === "recommended"}
            onClick={() => setActiveTab("recommended")}
          />
          <Tab
            label="Top matched"
            isActive={activeTab === "top-matched"}
            onClick={() => setActiveTab("top-matched")}
          />
          <Tab
            label="Most recent"
            isActive={activeTab === "most-recent"}
            onClick={() => setActiveTab("most-recent")}
          />
          <Tab
            label="Saved jobs"
            isActive={activeTab === "saved-jobs"}
            onClick={() => setActiveTab("saved-jobs")}
          />
        </div>
        <div>
          <Button
            variant="link"
            className="rounded-[12px] p-[5px] bg-white shadow-md flex items-center gap-2"
          >
            <Image src="/sort.svg" alt="sort" width={16} height={16} />
            <span className="font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#414A53]">
              Advance filters
            </span>
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto">
        <span className="font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#08121D]">
          Filters
        </span>
        <FilterBadge label="UI/UX Designer" onRemove={() => {}} />
        <FilterBadge label="Product Designer" onRemove={() => {}} />
        <FilterBadge label="Hybrid" onRemove={() => {}} />
        <FilterBadge label="Full-time" onRemove={() => {}} />
        <FilterBadge label="Lagos, Nigeria" onRemove={() => {}} />
        {/* <FilterBadge label="Senior" onRemove={() => {}} /> */}
        <Button
          variant="outline"
          className="w-[31px] h-[26px] px-[8px] py-[5px] gap-[10px] 
           rounded-[4px] bg-[#0967D2] hover:bg-[#0967D2] 
           font-[Gabarito] font-medium text-[12px] leading-[16px] 
           tracking-[0px] text-white hover:text-white"
        >
          +5
        </Button>
      </div>
    </div>
  );
}
