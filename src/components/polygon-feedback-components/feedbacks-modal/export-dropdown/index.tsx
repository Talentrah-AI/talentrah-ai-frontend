'use client';

import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface ExportDropdownProps {
  onExport: (format: 'PDF' | 'EXCEL' | 'CSV') => void;
}

export function ExportDropdown({ onExport }: ExportDropdownProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span>Export</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-0" align="end">
        <div className="py-1">
          <Button
            variant="ghost"
            className="w-full justify-start rounded-none h-10 px-4 font-normal"
            onClick={() => onExport('PDF')}
          >
            PDF
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-none h-10 px-4 font-normal"
            onClick={() => onExport('EXCEL')}
          >
            EXCEL
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-none h-10 px-4 font-normal"
            onClick={() => onExport('CSV')}
          >
            CSV
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
