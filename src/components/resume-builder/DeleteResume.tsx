'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface DeleteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeleteResume({ open, onOpenChange }: DeleteModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-6 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Delete resume?
          </DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-pointer">
            <X className="h-4 w-4 cursor-pointer " />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <div>
          <p className="text-[13px]">
            Are you sure you want to delete this resume? <br /> This action
            cannot be undone
          </p>
        </div>
        <div className="mt-6 flex gap-4">
          <Button
            variant="outline"
            className="flex-1 cursor-pointer "
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            variant="outline"
            className="flex-1 cursor-pointer bg-[rgba(9,103,210,1)] text-white"
          >
            Yes, Delete resume
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
