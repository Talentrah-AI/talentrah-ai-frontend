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
import { Rocket } from "lucide-react";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SuccessModal({ open, onClose }: SuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="rounded-[22px] w-[533px] h-[273px] bg-[linear-gradient(180.14deg,#0967D2_-31.04%,#E6F1FF_15.63%,#FFFFFF_39.67%)]  p-6 flex flex-col justify-center items-center">
        <DialogHeader>
          <div className="flex justify-center mb-2 gap-[2px]">
            <Rocket className="text-red-500" size={24} />

            <DialogTitle className="text-[20px] font-semibold text-black">
              Deleted Successfully
            </DialogTitle>
          </div>
          <DialogDescription className="text-gray-600 text-[16px] mt-2 flex justify-center">
            Requests has been deleted successfully. This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6">
          <Button
            onClick={onClose}
            className="mx-auto bg-blue-600 text-white px-8 py-2 rounded-full w-[413px] h-[45px]"
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
