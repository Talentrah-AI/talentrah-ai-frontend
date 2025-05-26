import React from "react";

interface EmailModalProps {
  open: boolean;
  onClose: () => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="font-bold text-lg mb-1">Send an email</h2>
        <p className="text-sm text-gray-500 mb-4">
          You are about sending an email to{" "}
          <span className="text-blue-600 cursor-pointer">John Doe</span>
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">To</label>
            <input
              className="w-full border border-gray-300 rounded-lg px-3 py-3 text-base bg-gray-50"
              value="johndoe12@gmail.com"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              className="w-full border border-gray-300 rounded-lg px-3 py-3 text-base bg-gray-50"
              value="Follow-up on your application"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email body</label>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <div className="flex items-center px-3 py-2 bg-gray-50 border-b border-gray-200 text-gray-500 text-sm gap-2">
                <button type="button" className="hover:text-black">
                  <span>&#8634;</span>
                </button>
                <button type="button" className="hover:text-black">
                  <span>&#8592;</span>
                </button>
                <span className="ml-2">Normal text ▼</span>
                <div className="flex-1" />
                <button type="button" className="hover:text-black font-bold">
                  B
                </button>
                <button
                  type="button"
                  className="hover:text-black font-bold italic"
                >
                  I
                </button>
                <button type="button" className="hover:text-black underline">
                  U
                </button>
                <button type="button" className="hover:text-black">
                  S
                </button>
                <button type="button" className="hover:text-black">
                  &lt;/&gt;
                </button>
                <button type="button" className="hover:text-black">
                  ⧉
                </button>
              </div>
              <textarea
                className="w-full px-3 py-3 text-base border-0 focus:ring-0 focus:outline-none resize-none min-h-[100px]"
                defaultValue={
                  "Hi [Candidate Name], I wanted to reach out regarding your recent application..."
                }
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-gray-100 px-3 py-2 rounded text-blue-600 flex-1">
              Document.pdf
            </span>
            <button type="button" className="text-gray-400 text-xl">
              ✕
            </button>
            <button
              type="button"
              className="ml-auto flex items-center gap-1 border border-gray-200 rounded px-3 py-2 text-gray-700 bg-gray-50"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M16.5 9.4V6.75A2.75 2.75 0 0 0 13.75 4h-3.5A2.75 2.75 0 0 0 7.5 6.75v2.65M12 15v-7m0 7l-3-3m3 3l3-3M4 19.25V17A2.75 2.75 0 0 1 6.75 14.25h10.5A2.75 2.75 0 0 1 20 17v2.25" />
              </svg>
              Attach file
            </button>
          </div>
          <div className="flex justify-between mt-6 gap-4">
            <button
              type="button"
              className="border border-gray-300 rounded-lg px-6 py-2 w-1/2 text-gray-700 bg-white hover:bg-gray-100"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg px-6 py-2 w-1/2 hover:bg-blue-700"
            >
              Send email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailModal;
