// src/components/AdditionalQuestionsPopup.tsx
import React from "react";

interface AdditionalQuestionsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const AdditionalQuestionsPopup: React.FC<AdditionalQuestionsPopupProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fade-in flex items-center justify-center z-50" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Rocket Emoji and Title */}
        <div
          className="w-[533px] h-[288px] bg-gradient-to-b from-[#0967D2] via-[#E5F1FF] to-[#FFFFFF] rounded-[24px] p-8 pt-18 flex flex-col items-center text-center shadow-lg font-gabarito"
          style={{
            background: "linear-gradient(to bottom, rgb(155, 202, 255) 0.1%, #E5F1FF 9%, #FFFFFF 90%)",
          }}
        >
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🚀</span>
              <h2 className="text-xl font-semibold text-gray-800">Additional Questions</h2>
            </div>
            <span className="text-gray-800 text-xl font-semibold text-red-500">Required!</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-center mt-4">
            The job application requires extra details before we can proceed. Answer a few quick
            questions to complete your application
          </p>

          {/* Confirm Button */}
          <button
            onClick={onConfirm}
            className="mt-6 w-[374px] h-[40px] bg-[#0967D2] text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Answer now
          </button>
        </div>
      </div>
    </>
  );
};