import React from "react";
import { Calendar } from "lucide-react";

export function StatsCard({
  title,
  value,
  filterLabel,
  icon: Icon,
  iconBg,
}: {
  title: string;
  value: string;
  filterLabel: string;
  icon: React.ElementType;
  iconBg: string;
}) {
  return (
    <div className="w-[370px] h-[122px] rounded-[12px] pt-[15px] pr-[17px] pb-[15px] pl-[17px] shadow items-center bg-white ">
      {/* Left: Icon and Stats */}
      <div className="flex items-center gap-4 flex justify-between">
        <span
          className={`rounded-full w-[34px] h-[34px] flex items-center justify-center ${iconBg}`}
        >
          <Icon className="w-[16px] h-[16px]" />
        </span>
        <button className="flex items-center gap-2 bg-white border-none rounded-[8px] shadow px-4 py-2 text-[12px] font-medium">
          <Calendar className="w-[16px] h-[16px]" />
          {filterLabel}
        </button>
      </div>
      {/* Right: Filter Button */}
      <div>
        <div className="text-[26px] font-bold">{value}</div>
        <div className="text-[12px] text-muted-foreground">{title}</div>
      </div>
    </div>
  );
}
