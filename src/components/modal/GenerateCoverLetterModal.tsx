import { FileDown, MapPin, X } from 'lucide-react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { toast } from 'sonner';
import { useModal } from '@/context/ModalContext';

interface GenerateCoverLetterModalProps {
//   onClose: () => void;
  jobTitle: string | null;
  company: string | null;
}

const GenerateCoverLetterModal: React.FC<GenerateCoverLetterModalProps> = ({
//   onClose,
  jobTitle,
  company,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const letterRef = useRef<HTMLDivElement>(null);
  const { closeModal } = useModal();

  const handleCopy = () => {
    if (letterRef.current) {
      const text = letterRef.current.innerText;
      navigator.clipboard
        .writeText(text)
        .then(() => {
          toast.custom(
            () => (
              <div
                className="flex items-center justify-center"
                style={{
                  width: '134px',
                  height: '46px',
                  borderRadius: '12px',
                  gap: '10px',
                  borderWidth: '0.5px',
                  padding: '15px',
                  background: '#E6FBE9',
                  border: '0.5px solid #9DEDA6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Optional shadow
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-[#09D220]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span
                  style={{
                    fontFamily: 'Gabarito, sans-serif',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '16px',
                    letterSpacing: '0px',
                    textAlign: 'center',
                    color: '#09D220',
                  }}
                >
                  Copied Successfully
                </span>
              </div>
            ),
            {
              duration: 2000,
              position: 'top-center',
            }
          );
        })
        .catch((error) => {
          console.error('Failed to copy text', error);
        });
    }
  };
  return (
    <>
        <div className="w-[649px] h-[701.5px] flex flex-col justify-center rounded-[22px] gap-[32px] top-[180px] left-[396px] border border-[#F1F5FA] p-[30px] bg-white">
          <div className="w-[581px] h-[641.5px] space-y-3.5">
            {/* modal header */}
            <header className="space-y-2">
              <div className="flex items-center justify-between">
                <h1 className="font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-black">
                  Cover Letter
                </h1>
                <X
                  onClick={closeModal}
                  className="w-[24px] h-[24px] cursor-pointer"
                />
              </div>
              <div className="rounded-[12px] pt-[12px] pr-[9px] pb-[12px] pl-[16px] gap-[10px] bg-[#0967D2]">
                <div className="w-[402px] h-[72px]">
                  <div>
                    <h1 className="font-[Gabarito] font-bold text-[16px] leading-[20px] tracking-[0px] text-[#FFFFFF]">
                      {jobTitle}
                    </h1>
                    <p className="font-[Gabarito] font-medium text-[12px] leading-[16px] tracking-[0px] text-[#9DEAED]">
                      Company: {company}
                    </p>
                  </div>

                  {/* Job Information Banner - Displays key job details */}
                  <div className="flex flex-row items-center gap-[10px] font-gabarito font-normal text-[10px] leading-[12px] text-white mt-4">
                    <div className="flex items-center gap-[6px] border-r-[1px] border-r-white pr-[10px]">
                      <MapPin className="h-[14px] w-[14px]" />
                      <span>Lagos, Nigeria</span>
                    </div>
                    <div className="flex items-center gap-[6px] border-r-[1px] border-r-white pr-[10px]">
                      <Image
                        src="/briefcasewhite.svg"
                        alt="Briefcase"
                        width={14}
                        height={14}
                      />
                      <span>Full Time</span>
                    </div>

                    <div className="flex items-center gap-[6px] border-r-[1px] border-r-white pr-[10px]">
                      <Image
                        src="/clockwhite.svg"
                        alt="Remote"
                        width={14}
                        height={14}
                      />
                      <span>Remote</span>
                    </div>

                    <div className="flex items-center gap-[6px] border-r-[1px] border-r-white pr-[10px]">
                      <Image
                        src="/crownwhite.svg"
                        alt="Seniority Level"
                        width={14}
                        height={14}
                      />
                      <span>Senior</span>
                    </div>
                    <div className="flex items-center gap-[6px]">
                      <Image
                        src="/calendarwhite.svg"
                        alt="Experience"
                        width={14}
                        height={14}
                      />
                      <span>1 year</span>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <main className="space-y-1.5">
              <div className="h-[28.5px] float-right rounded-[7.6px] pt-[3.17px] pr-[23.43px] pb-[3.17px] pl-[23.43px] gap-[3.17px] border-[0.32px] border-[#515D68]">
                <button
                  onClick={handleCopy}
                  className="flex items-center cursor-pointer"
                >
                  <Image
                    src="/Copy.svg"
                    alt="copy-icon"
                    width={15}
                    height={15}
                  />
                  <p className='className="font-[Gabarito] font-normal text-[10.13px] leading-[12.67px] tracking-[0px] text-center text-[#515D68]"'>
                    Copy
                  </p>
                </button>
              </div>
              <div
                contentEditable={isEditing}
                ref={letterRef}
                className="w-full flex flex-col rounded-[16px] gap-[10px] border border-[#EFF0F2] p-[16px] bg-white font-[Gabarito] text-[12px] leading-[16px] tracking-[0px] text-[#515D68]"
              >
                <p className="font-bold">Dear Hiring Manager,</p>
                <p className="font-normal mt-2">
                  I am writing to express my interest in the Product Designer
                  position at your company, as advertised. With a background in
                  creating intuitive user interfaces for web and mobile
                  applications, I am excited about the opportunity to contribute
                  my skills and knowledge to your team.
                </p>

                <p className="font-normal mt-2">
                  In my current role at ProDevs, I have successfully
                  collaborated with cross-functional teams to deliver
                  exceptional designs that prioritize user experience and drive
                  business success. I have also actively contributed to the
                  development of the company’s design system, ensuring
                  consistency and scalability across multiple projects.
                </p>

                <p className="font-normal mt-2">
                  With a Bachelor’s degree in Applied Science and certifications
                  in Product, I believe I have the qualifications and expertise
                  to excel in this role. I am proficient in industry-standard
                  tools such as Figma and have a deep passion for creating
                  seamless products that elevate user satisfaction.
                </p>

                <p className="font-normal mt-2">
                  I am confident that my skills and experience make me a strong
                  candidate for this position. I am eager to bring my creative
                  vision and problem-solving abilities to your team and
                  contribute to the success of your projects. Thank you for
                  considering my application.
                </p>

                <p className="mt-4 font-normal">Sincerely,</p>
                <p className="font-normal">Mercie Dan</p>
              </div>
            </main>
            {isEditing ? (
              <button
                onClick={() => setIsEditing(false)}
                //   variant="outline"
                className="flex items-center rounded-[12px] px-[24px] py-[8px] gap-[10px] bg-[#0967D2] cursor-pointer float-right"
              >
                <FileDown className="w-[24px] h-[24px] text-white" />
                <span className="font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-center text-[#ffffff]">
                  Save Changes
                </span>
              </button>
            ) : (
              <>
                <div className="w-full flex items-center justify-between gap-[10px]">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-[287px] h-[45px] flex items-center justify-center rounded-[12px] px-[37px] py-[5px] gap-[10px] border-[#515D68] border-[0.5px] cursor-pointer"
                  >
                    <Image
                      src="/edit.svg"
                      alt="edit-icon"
                      width={24}
                      height={24}
                    />
                    <span className="font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-center text-[#515D68]">
                      Edit
                    </span>
                  </button>
                  <button
                    className="w-[287px] h-[45px] flex items-center justify-center rounded-[12px] px-[24px] py-[5px] gap-[10px] bg-[#0967D2] cursor-pointer"
                  >
                    <FileDown className="w-[24px] h-[24px] text-white" />
                    <span className="font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-center text-[#ffffff]">
                      Download
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
    </>
  );
};

export default GenerateCoverLetterModal;
