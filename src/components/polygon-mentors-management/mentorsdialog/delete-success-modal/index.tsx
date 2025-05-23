'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface DeleteSuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  entityType?: string;
}

export function DeleteSuccessDialog({
  open,
  onOpenChange,
  entityType = 'Feedback',
}: DeleteSuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <div className="flex justify-between items-center">
          <div></div>
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="py-4 flex flex-col items-center text-center">
          <div className="mb-2">
            <span role="img" aria-label="rocket" className="text-2xl">
              🚀
            </span>
          </div>
          <h2 className="text-lg font-semibold mb-2">Deleted successfully</h2>
          <p className="text-gray-600">
            {entityType} has been deleted successfully. This action cannot be
            undone.
          </p>
        </div>
        <div className="flex justify-center">
          <Button
            className="bg-blue-600 hover:bg-blue-700 w-full"
            onClick={() => {
              onOpenChange(false);
            }}
          >
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
