import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface JobLoopDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSetup: () => void;
}

export function JobLoopDialog({ isOpen, onClose, onSetup }: JobLoopDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-6 bg-white rounded-[12px] shadow-lg">
        <DialogHeader className="relative mb-4">
          <DialogTitle className="text-[16px] font-semibold text-[#08121D]">
            What is job loop?
          </DialogTitle>
        </DialogHeader>
        <div>
          <p className="text-[14px] leading-[20px] text-[#515D68]">
            Job Loop is where you set your job preferences, like role, industry, and location. Based on your choices, we will show you a list of jobs that match, so you can easily find the right opportunities!
          </p>
          <div className="mt-6">
            <Button
              onClick={onSetup}
              className="w-full h-[40px] bg-[#0967D2] text-white hover:bg-[#0967D2]/90 rounded-[8px] font-normal text-[14px]"
            >
              Set up job loop
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 