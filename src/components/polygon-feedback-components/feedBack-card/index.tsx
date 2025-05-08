'use client';

import { MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';

interface FeedbackCardProps {
  feedback: {
    id: string;
    fullName: string;
    email: string;
    category: string;
    feedback: string;
    status: 'Pending' | 'Resolved';
    date: string;
  };
  isSelected: boolean;
  onSelect: (id: string) => void;
  onEditStatus: (feedback: any) => void;
  onDelete: (feedback: any) => void;
}

export function FeedbackCard({
  feedback,
  isSelected,
  onSelect,
  onEditStatus,
  onDelete,
}: FeedbackCardProps) {
  return (
    <div className="bg-white rounded-lg border p-4 mb-3">
      <div className="flex items-start justify-between mb-3">
        <div className="flex  gap-2 flex-col">
          <Checkbox
            checked={isSelected}
            onCheckedChange={() => onSelect(feedback.id)}
          />
          <div>
            <h3 className="font-medium text-[16px]">{feedback.fullName}</h3>
            <p className="text-sm text-gray-500">{feedback.email}</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEditStatus(feedback)}>
              Edit status
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDelete(feedback)}>
              Delete feedback
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mb-3">
        <div className="text-xs font-medium text-gray-500 mb-1">CATEGORY</div>
        <div className="text-[16px] font-normal">{feedback.category}</div>
      </div>

      <div className="mb-3">
        <div className="text-xs font-medium text-gray-500 mb-1">FEEDBACK</div>
        <div className="text-sm">{feedback.feedback}</div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <div className="text-xs font-medium text-gray-500 mb-1">STATUS</div>
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
              feedback.status === 'Pending'
                ? 'bg-red-50 text-red-600'
                : 'bg-blue-50 text-blue-600'
            }`}
          >
            {feedback.status}
          </span>
        </div>

        <div className="text-right">
          <div className="text-xs font-medium text-gray-500 mb-1">DATE</div>
          <div className="text-sm">{feedback.date}</div>
        </div>
      </div>
    </div>
  );
}
