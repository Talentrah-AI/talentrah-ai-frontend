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
    onConfirm: () => void;
    count?: number;
  }

  const ActivateDialog: React.FC<ActivateDialogProps> = ({
    open,
    onClose,
    onConfirm,
  }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-xl bg-[linear-gradient(to_bottom,_#0967F0_1%,_#E5F1FF,_#FFFFFF)]">
      <div className="flex justify-center items-center text-lg font-semibold">
        <DialogTitle className="flex justify-center gap-2 items-center text-2xl font-semibold">
           
            🚀 Activated this user?
        </DialogTitle>
           </div>
        <div className="flex flex-col items-center justify-center text-sm text-gray-600 mt-4 text-center">
            {/* <p>
            You're about to activate this user's account.? 
            They will regain full access to their dashboard, 
            services, and notifications.
          </p> */}
          <span className=" text-gray-600 font-light">You&apos;re about to activate this user&apos;s account.?</span>
          <span className=" text-gray-600 font-light">They will regain full access to their dashboard,</span>
          <span className=" text-gray-600 font-light">services, and notifications.</span>
        </div>
        <div className="flex justify-between gap-2 mt-6 w-full">
        <Button
            variant="outline"
            className="w-50 cursor-pointer"
            onClick={onClose}
        >
            Cancel
        </Button>
        <Button
            variant="default"
            className="w-50 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
            onClick={onConfirm}
        >
            Activate
        </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ActivateDialog;
