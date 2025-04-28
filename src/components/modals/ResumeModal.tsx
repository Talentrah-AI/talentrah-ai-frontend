import React from 'react';
import { useModal } from '@/context/ModalContext';
import { Button } from '@/components/ui/button2';

interface ResumeModalProps {
  resumeUrl?: string;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ resumeUrl }) => {
  const { closeModal } = useModal();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-[800px] h-[600px] rounded-[22px] border border-[#F1F5FA] bg-white p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Resume Used</h2>
          <Button
            onClick={closeModal}
            className="bg-transparent hover:bg-gray-100 text-gray-600"
          >
            ✕
          </Button>
        </div>
        <div className="flex-1 overflow-auto">
          {resumeUrl ? (
            <iframe
              src={resumeUrl}
              className="w-full h-full rounded-lg"
              title="Resume Preview"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              No resume available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
