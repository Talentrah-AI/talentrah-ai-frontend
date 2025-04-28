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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="w-[649px] h-[701.5px] flex flex-col rounded-[22px] gap-[32px] border border-[#F1F5FA] p-[30px] bg-white shadow-lg">
          {/* Modal Header */}
          <header className="flex justify-between w-full">
            <h1 className="font-gabarito text-base text-black">Cover Letter</h1>
            <X
              onClick={closeModal}
              className="w-[24px] h-[24px] cursor-pointer"
            />
          </header>

          {/* Modal Content */}
          <div className="flex-1 overflow-auto">
            {/* Placeholder text or embed resume preview here */}
            <p className="text-sm text-gray-700">
              This is where the resume or cover letter preview will go.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewResumeModal;
