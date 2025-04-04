// src/components/AIApplyPopup.tsx
import { Button } from '@/components/ui/button';

interface AIApplyPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  jobTitle: string;
  location: string;
}

export function AIApplyPopup({ isOpen, onClose, onConfirm }: AIApplyPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
  <div className="w-[533px] h-[288px] bg-gradient-to-b from-[#0967D2] via-[#E5F1FF] to-[#FFFFFF] rounded-[24px] p-8 pt-18 flex flex-col items-center text-center shadow-lg"
       style={{ background: "linear-gradient(to bottom,rgb(155, 202, 255) 0.1%, #E5F1FF 9%, #FFFFFF 90%)" }}>
    <h2 className="font-gabarito font-bold text-[26px] text-[#08121D] mb-2">
      Let AI apply for you! 🎯
    </h2>
    <p className="font-gabarito font-normal text-[16px] text-[#515D68] mb-6">
      Want us to keep applying to similar jobs for you? AI will use your job preferences to submit applications automatically, saving you time and effort!
    </p>
    <div className="flex gap-4 justify-end">
  <Button
    variant="outline"
    onClick={onClose}
    className="w-[220.5px] h-[40px] font-gabarito font-normal text-[14px] text-[#515D68] border-[#515D68] rounded-[12px]"
  >
    Cancel
  </Button>
  <Button
    onClick={onConfirm}
    className="w-[220.5px] h-[40px] font-gabarito font-normal text-[14px] text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-[12px]"
  >
    Yes, Apply for me
  </Button>
</div>

  </div>
</div>

  
  );
}