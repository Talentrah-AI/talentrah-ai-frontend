"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemCount: number;
  itemLabel?: string;
}

export default function DeleteConfirmationDialog({
  open,
  onClose,
  onConfirm,
  itemCount,
  itemLabel = "items",
}: DeleteConfirmationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="rounded-[22px]  w-full p-6 bg-white w-[533px] h-[217px] border-[#F1F5FA]">
        <DialogHeader>
          <DialogTitle className="text-[16px] text-black font-medium">
            Delete request?
          </DialogTitle>
          <DialogDescription className="text-gray-500 text-[14px] ">
            Are you sure you want to delete these {itemLabel} ({itemCount})?
            <br />
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6 flex justify-between">
          <Button
            variant="default"
            className="rounded-[12px] px-6 py-2 w-[229px] h-[45px] bg-white border  border-[#717A84] text-[#717A84] "
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="rounded-[12px] bg-blue-600 text-white px-6 py-2 w-[229px] h-[45px]"
            onClick={onConfirm}
          >
            Yes, Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
