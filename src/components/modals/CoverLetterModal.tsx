import React from 'react';
import { useModal } from '@/context/ModalContext';
import { Button } from '@/components/ui/button2';

interface CoverLetterModalProps {
  coverLetterUrl?: string;
}

const CoverLetterModal: React.FC<CoverLetterModalProps> = ({
  coverLetterUrl,
}) => {
  const { closeModal } = useModal();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-[800px] h-[600px] rounded-[22px] border border-[#F1F5FA] bg-white p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Cover Letter Used</h2>
          <Button
            onClick={closeModal}
            className="bg-transparent hover:bg-gray-100 text-gray-600"
          >
            ✕
          </Button>
        </div>
        <div className="flex-1 overflow-auto">
          {coverLetterUrl ? (
            <iframe
              src={coverLetterUrl}
              className="w-full h-full rounded-lg"
              title="Cover Letter Preview"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              No cover letter available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoverLetterModal;
