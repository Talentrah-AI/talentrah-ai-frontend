'use client';

import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface RemovePermissionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  title: string 
  desc: string
  deleteNote:string
}

export function RemovePermissionDialog({
  open,
  onOpenChange,
  onConfirm,
  title,
  desc,
  deleteNote
}: RemovePermissionDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogClose className="absolute right-4 top-4">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <div className="py-4">
          <p>{desc}</p>
        </div>
        <DialogFooter className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="default"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => {
              onConfirm();
              onOpenChange(false);
            }}
          >
           {deleteNote}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
