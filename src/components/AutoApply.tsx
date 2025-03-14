import { Switch } from "@/components/ui/switch";
import { X } from "lucide-react";

export function AutoApply() {
  return (
    <div className="border px-[12px] py-[6px]  rounded-[12px] bg-[#E6F0FB] flex items-center justify-between">
      <p className="text-[#0967D2] text-[12px] leading-[16px] font-[Gabarito] font-normal">
        Turn on auto-apply, and AI will submit applications for you based on
        your job preferences—saving you time and effort.
      </p>
      <div className="flex items-center gap-4">
        <Switch />
        <button className=" text-[#64748B]">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
