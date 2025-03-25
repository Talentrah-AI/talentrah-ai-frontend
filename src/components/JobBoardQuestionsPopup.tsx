// src/components/JobBoardQuestionsPopup.tsx
import React, { useState } from "react";

interface JobBoardQuestionsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (answers: { reason: string; authorized: string }) => void;
}

export const JobBoardQuestionsPopup: React.FC<JobBoardQuestionsPopupProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [reason, setReason] = useState("");
  const [authorized, setAuthorized] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit({ reason, authorized });
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fade-in flex items-center justify-center z-50" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-6 w-[649px] h-[452px] flex flex-col font-gabarito">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Job board questions</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          {/* Question 1: Why do you want to work at this company? */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Why do you want to work at this company?
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Enter reason"
              className="w-full p-2 border rounded-lg w-[589px] h-[130px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>

          {/* Question 2: Are you legally authorized to work in this country? */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Are you legally authorized to work in this country?
            </label>
            <select
              value={authorized}
              onChange={(e) => setAuthorized(e.target.value)}
              className="w-full p-2 border rounded-lg w-[589px] h-[50px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Choose your answer
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-[23px] items-center justify-center">
            <button
              onClick={onClose}
              className="px-4 py-2 border rounded-lg text-gray-700 w-[287.5px] h-[45px] hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-100 text-[#3A85DB] rounded-lg w-[287.5px] h-[45px] hover:bg-blue-200"
              disabled={!reason || !authorized} // Disable if fields are empty
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};