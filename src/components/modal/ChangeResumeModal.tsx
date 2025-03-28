import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useModal } from '@/context/ModalContext';
import { X } from 'lucide-react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';



const ChangeResumeModal: React.FC = () => {
  const { closeModal } = useModal();
  const [selectedResume, setSelectedResume] = useState('');
  const [resumes, setResumes] = useState<string[]>([
    'Resume 1',
    'Resume 2',
    'Resume 3',
  ]); // Initial resumes list
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileName = e.target.files[0].name;
      setResumes((prev) => [...prev, fileName]); //add the file to the list
      setSelectedResume(fileName); //display the file name
    }
  };

  // Trigger File Input Click
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div className="w-[649px] h-[400px] flex rounded-[22px] gap-[32px] border border-[#F1F5FA] p-[30px] bg-white">
        <div className="w-[589px] h-[373px] space-y-6">
          {/* modal header */}
          <header className="flex justify-between">
            <h1 className="font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-black">
              Change Resume
            </h1>
            <X
              onClick={closeModal}
              className="w-[24px] h-[24px] cursor-pointer"
            />
          </header>
          <main>
            {/* Current Resume */}
            <div className="mb-4">
              <label className="font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-black">
                Current Resume
              </label>
              <div className="mt-1 w-full border-[1.2px] rounded-[12px] p-[10px] gap-[5px] bg-[#F8F8F8] border-[#B0B5BB]">
                Mercy_Resume - Default
              </div>
            </div>

            {/* ShadCN Select for New Resume */}
            <div>
              <label className="mb-4 font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-black">
                Change to
              </label>
              <Select
                value={selectedResume || ''}
                onValueChange={setSelectedResume}
              >
                <SelectTrigger className="flex w-full border-[1.2px] rounded-[12px] p-[10px] gap-[5px] border-[#B0B5BB]">
                  <SelectValue placeholder="Select from uploaded/created resume" />
                </SelectTrigger>
                <SelectContent>
                  {resumes.map((resume, index) => (
                    <SelectItem key={index} value={resume}>
                      {resume}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* Info Box */}
            <div className="mt-4 w-[589px] h-[44px] flex items-center border-[0.5px] rounded-[16px] gap-[10px] px-[15px] py-[10px] bg-[#E6F0FB] border-[#9DC2ED] font-gabarito font-normal text-[12px] leading-[16px] tracking-[0px] text-[#0967D2]">
              <Image
                src="/information-circle-blue.svg"
                alt="info"
                width={24}
                height={24}
              />
              <span>
                Don’t have other resumes on your board?{' '}
                <span>
                  <span
                    onClick={handleUploadClick}
                    className="font-medium underline decoration-solid decoration-[1px] decoration-offset-[0%] cursor-pointer"
                  >
                    Upload another
                  </span>{' '}
                  or{' '}
                  <span className="font-medium underline decoration-solid decoration-[1px] decoration-offset-[0%] cursor-pointer">
                    Create a new one
                  </span>
                </span>
              </span>
            </div>
            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
            />
          </main>
          {/* Buttons */}
          <div className="flex  space-x-4 font-gabarito font-light text-[16px] leading-[20px] tracking-[0px] text-center">
            <button
              onClick={closeModal}
              className="w-full h-[46px] border-[0.5px] rounded-[12px] gap-[5px] px-[37px] py-[5px] border-[#515D68] text-[#515D68] hover:bg-gray-100 cursor-pointer"
            >
              Cancel
            </button>
            <button
              className={`w-full h-[46px]  rounded-[12px] gap-[5px] px-[24px] py-[5px] text-[#3A85DB]  ${
                selectedResume
                  ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
                  : 'bg-[#CEE1F6] cursor-not-allowed'
              }`}
              disabled={!selectedResume}
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeResumeModal;
