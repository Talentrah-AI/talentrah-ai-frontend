'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface EditStatusDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  feedback: {
    id: string;
    fullName: string;
    feedback: string;
    status: 'Pending' | 'Resolved';
  } | null;
  onSave: (id: string, status: 'Pending' | 'Resolved') => void;
}

export function EditStatusDialog({
  open,
  onOpenChange,
  feedback,
  onSave,
}: EditStatusDialogProps) {
  const [status, setStatus] = useState<'Pending' | 'Resolved'>(
    feedback?.status || 'Pending'
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit status</DialogTitle>
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input id="name" value={feedback?.fullName || ''} disabled />
          </div>
          <div className="space-y-2">
            <label htmlFor="feedback" className="text-sm font-medium">
              Feedback
            </label>
            <Textarea
              id="feedback"
              value={feedback?.feedback || ''}
              disabled
              className="min-h-[100px]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Status</label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setStatus('Pending')}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm ${
                  status === 'Pending'
                    ? 'bg-red-50 text-red-600 border-2 border-red-600'
                    : 'border border-gray-200 text-gray-700'
                }`}
              >
                {status === 'Pending' && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="8" fill="#E11D48" />
                    <path
                      d="M5 8L7 10L11 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                Pending
              </button>
              <button
                type="button"
                onClick={() => setStatus('Resolved')}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm ${
                  status === 'Resolved'
                    ? 'bg-blue-50 text-blue-600 border-2 border-blue-600'
                    : 'border border-gray-200 text-gray-700'
                }`}
              >
                {status === 'Resolved' && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="8" fill="#2563EB" />
                    <path
                      d="M5 8L7 10L11 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                Resolved
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            type="button"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => {
              if (feedback) {
                onSave(feedback.id, status);
              }
              onOpenChange(false);
            }}
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
