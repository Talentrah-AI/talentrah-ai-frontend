// src/components/ApplicationUpdatedPopup.tsx
import React from "react";

interface ApplicationUpdatedPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationUpdatedPopup: React.FC<ApplicationUpdatedPopupProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fade-in flex items-center justify-center z-50" />
  
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-6 w-[533px] h-[217px] flex flex-col items-center relative font-gabarito">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
  
          {/* Title and Message */}
          <h2 className="text-xl font-semibold text-gray-800 text-left w-full">Application Updated!</h2>
          <p className="text-gray-600 mt-4 text-left w-full">
            Your answers have been submitted. AI will now proceed with your job application.
          </p>
  
          {/* Back to Home Button */}
          <button
            onClick={onClose}
            className="mt-6 w-[473px] h-[45px] bg-[#0967D2] text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to home
          </button>
        </div>
      </div>
    </>
  );
};