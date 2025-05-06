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
}

export function RemovePermissionDialog({
  open,
  onOpenChange,
  onConfirm,
}: RemovePermissionDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Remove permission?</DialogTitle>
          <DialogClose className="absolute right-4 top-4">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <div className="py-4">
          <p>Are you sure you want to remove this permission?</p>
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
            Yes, remove permission
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
