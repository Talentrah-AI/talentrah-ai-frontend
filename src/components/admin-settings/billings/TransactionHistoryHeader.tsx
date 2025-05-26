import React from "react";
import { ArrowUpFromLine } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

export const TransactionHistoryHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-lg font-bold">BILLING HISTORY: TRANSACTIONS</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <Image
              src="./images/export.png"
              alt="export"
              width={18}
              height={18}
            />
            Export
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-48 z-50 bg-white rounded-[18px] p-[8px] shadow"
          align="end"
        >
          <DropdownMenuItem className="cursor-pointer py-[15px] px-[20px] rounded-[12px] hover:bg-[#E6F0FB]">
            <span className="text-sm">CSV</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer py-[15px] px-[20px] rounded-[12px] hover:bg-[#E6F0FB]">
            <span className="text-sm">Excel</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer py-[15px] px-[20px] rounded-[12px] hover:bg-[#E6F0FB]">
            <span className="text-sm">PDF</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
