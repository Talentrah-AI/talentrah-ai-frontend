'use client';

import { Mail, MoreVertical, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface MentorCardProps {
  mentor: {
    id: string;
    fullName: string;
    email: string;
    gender: string;
    country: string;
    expertise: string[];
  };
  isSelected: boolean;
  onSelect: (id: string) => void;
  onDelete: () => void;
  onSendEmail: () => void;
}

export function MentorCard({
  mentor,
  isSelected,
  onSelect,
  onDelete,
  onSendEmail,
}: MentorCardProps) {
  return (
    <div className="bg-white rounded-lg border p-4 mb-3">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={isSelected}
            onCheckedChange={() => onSelect(mentor.id)}
          />
          <div>
            <h3 className="font-medium text-[16px]">{mentor.fullName}</h3>
            <p className="text-sm text-gray-500">{mentor.email}</p>
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
            <DropdownMenuItem asChild>
              <Link href={`/mentor-details/${mentor.id}`}>View details</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onSendEmail}>
              Send email
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600" onClick={onDelete}>
              Delete mentor
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <div className="text-xs font-medium text-gray-500 mb-1">GENDER</div>
          <div className="text-[16px]">{mentor.gender}</div>
        </div>
        <div>
          <div className="text-xs font-medium text-gray-500 mb-1">COUNTRY</div>
          <div className="text-[16px]">{mentor.country}</div>
        </div>
      </div>

      <div>
        <div className="text-xs font-medium text-gray-500 mb-1">EXPERTISE</div>
        <div className="flex flex-wrap gap-1">
          {mentor.expertise.map((exp, i) => (
            <Badge key={i} variant="outline" className="bg-gray-50">
              {exp}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
          onClick={onSendEmail}
        >
          <Mail className="h-3 w-3" />
          Email
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 text-red-600 border-red-200 hover:bg-red-50"
          onClick={onDelete}
        >
          <Trash2 className="h-3 w-3" />
          Delete
        </Button>
      </div>
    </div>
  );
}
