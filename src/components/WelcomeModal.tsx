"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-md z-50 bg-gradient-to-b from-blue-100 via-white to-white 
             w-[533px] h-[308px] rounded-[22px] 
             pt-[30px] pr-[30px] pb-[40px] pl-[30px] gap-[10px] shadow-xl"
      >
        <DialogHeader className="text-center mt-4 p-4">
          <div className="flex justify-center mb-4">
            <DialogTitle className="text-2xl font-medium">
              <span>🚀 </span>Ready to land your dream job?
            </DialogTitle>
          </div>
          <DialogDescription className="text-center">
            Welcome to Talentra! Your job search just got easier. Apply for jobs
            with confidence by uploading your resume and letting our AI analyze
            and optimize it for the best match.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <Button
            type="button"
            className="w-[320px] bg-blue-600 hover:bg-blue-700 "
            onClick={onClose}
          >
            Let&apos;s go!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
