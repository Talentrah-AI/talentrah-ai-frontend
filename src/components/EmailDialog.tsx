'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ActivateDialogProps {
    open: boolean;
    onClose: () => void;
  }

  const ActivateDialog: React.FC<ActivateDialogProps> = ({
    open,
    onClose,
  }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-xl bg-[linear-gradient(to_bottom,_#0967F0_1%,_#E5F1FF,_#FFFFFF)]">
      <div className="flex justify-center items-center text-lg font-semibold">
        <DialogTitle className="flex justify-center gap-2 items-center text-2xl font-semibold">
           
            🚀 Email sent successfully!
        </DialogTitle>
           </div>
        <div className="flex flex-col items-center justify-center text-sm text-gray-600 mt-4 text-center">
            <p>
          Email successfully sent to John Doe
          </p>
        </div>
        <div className="flex justify-between gap-2 mt-6 w-full">
        <Button
            variant="outline"
            className="w-100 bg-blue-500 cursor-pointer"
            onClick={onClose}
        >
            Back
        </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ActivateDialog;
