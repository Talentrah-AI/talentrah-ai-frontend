'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RocketIcon } from 'lucide-react'; // You can customize the icon

interface DeactivateDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    count?: number;
  }

  const DeactivateDialog: React.FC<DeactivateDialogProps> = ({
    open,
    onClose,
    onConfirm,
    count = 4,
  }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-xl bg-gradient-to-b from-blue-300 via-blue-100 to-white">
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center gap-2 text-lg font-semibold">
            <RocketIcon className="h-5 w-5 text-blue-500" />
            Account Deactivated
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center text-sm text-gray-600 mt-4 text-center">
            <p>
          Are you sure you want to deactivate these account{count > 1 ? 's' : ''} ({count})?
          </p>
          <span className="mt-1 text-gray-600 font-medium">This action cannot be undone</span>
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
            Deactivate
        </Button>
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default DeactivateDialog;
