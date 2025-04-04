'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface DeleteCoverLetterProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeleteCoverLetter({
  open,
  onOpenChange,
}: DeleteCoverLetterProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-6 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Delete cover letter
          </DialogTitle>
          <DialogClose className="absolute right-4 top-4">
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <div className="text-[13px] ">
          <p>
            Are you sure you want to delete this cover letter? <br /> This
            action cannot be undone
          </p>
        </div>
        <div className="mt- flex gap-4">
          <Button
            variant="outline"
            className="flex-1 cursor-pointer "
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            variant="ghost"
            className="flex-1 bg-[#0967D2] cursor-pointer text-white "
          >
            Yes,Delete cover letter
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
