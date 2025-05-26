"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Save } from "lucide-react";
import { toast } from "sonner";

interface UsageCreditSectionProps {
  creditValue: number;
  onCreditChange: (value: number) => void;
}

export default function UsageCreditSection({
  creditValue,
  onCreditChange,
}: UsageCreditSectionProps) {
  const [hasPendingChanges, setHasPendingChanges] = useState(false);
  const [tempCreditValue, setTempCreditValue] = useState(creditValue);

  const handleCreditChange = (value: string) => {
    const numValue = parseInt(value, 10);
    setTempCreditValue(numValue);
    setHasPendingChanges(numValue !== creditValue);
  };

  const handleSave = () => {
    onCreditChange(tempCreditValue);
    setHasPendingChanges(false);
    toast.success("Usage credits updated successfully");
  };

  return (
    <div className="border-b  p-6 space-y-4 flex gap-[73px] w-full ">
      <div className="w-[305px]">
        <h2 className="text-[12px]-400 font-bold uppercase tracking-wide text-black">
          Usage Credit Settings
        </h2>
        <p className="text-[12px] text-muted-foreground">
          Set the number of usage credits available to free users. This
          determines how many times they can access AI before requiring an
          upgrade.
        </p>
      </div>

      <div className="flex items-end gap-4 mt-4 w-[686px]">
        <div className="space-y-2 w-full">
          <p className="text-[12px] font-bold text-black">Usage credit</p>
          <Select
            value={tempCreditValue.toString()}
            onValueChange={handleCreditChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select credit amount" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="15">15</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="30">30</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={handleSave}
          disabled={!hasPendingChanges}
          className="mb-0.5 transition-all duration-200 bg-[#0967D2] rounded-[5px] text-white"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
