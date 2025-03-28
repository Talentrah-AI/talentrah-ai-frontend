import { useModal } from '@/context/ModalContext';
import { X } from 'lucide-react';
import React from 'react';

// interface PreviewResumeModalProps {
//   onClose: () => void;
// }

const PreviewResumeModal: React.FC = () => {
  const { closeModal } = useModal();
  return (
    <>
      <div className="w-[649px] h-[701.5px] flex flex-col items-center justify-center rounded-[22px] gap-[32px] top-[180px] left-[396px] border border-[#F1F5FA] p-[30px] bg-white">
        {/* modal header */}
        <header className="flex justify-between">
          <h1 className="font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-black">
            Cover Letter
          </h1>
          <X onClick={closeModal} className="w-[24px] h-[24px]" />
        </header>
      </div>
    </>
  );
};

export default PreviewResumeModal;
