// src/app/dashboard/resume-optimized/page.tsx
'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';
import { MapPin, ChevronUp, ChevronDown, Info } from 'lucide-react'; // Added Info icon
import { CircularProgress } from '@/components/ui/circular-progress';
import { useState } from 'react';

function ResumeOptimized() {
  const [isObjectiveOpen, setIsObjectiveOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isPersonalInfoOpen, setIsPersonalInfoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Summary'); // State to track the active tab

  const searchParams = useSearchParams();
  const router = useRouter();
  const jobTitle = searchParams.get('jobTitle');
  const company = searchParams.get('company');

  const handleBackToApply = () => {
    router.push(`/dashboard/premium-user-apply?jobTitle=${jobTitle}&company=${company}`);
  };

  // Function to handle tab clicks
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Placeholder function for "Change Resume" click
  const handleChangeResume = () => {
    // Add navigation or logic to change the resume here
    console.log('Change Resume clicked');
  };

  return (
    <div className="w-[1157px] h-[968px] flex flex-col gap-[32px] p-[12px] pt-[12px] pr-[12px] pb-[30px] pl-[12px] rounded-[24px] bg-[#F8F8F8] transition-all duration-200">
      <section className="w-[1133px] flex justify-between">
        {/* Left Section: Job Header */}
        <div className="w-[707px] flex flex-col gap-[12px]">
          <div className="h-[96px] flex flex-col items-start justify-start gap-[10px] p-[12px_9px_12px_16px] rounded-[12px] bg-[#0967D2]">
            <div className="w-[402px] h-[72px]">
              <div>
                <h1 className="font-[Gabarito] font-bold text-[16px] leading-[20px] tracking-[0px] text-[#FFFFFF]">
                  {jobTitle}
                </h1>
                <p className="font-[Gabarito] font-medium text-[12px] leading-[16px] tracking-[0px] text-[#9DEAED]">
                  Company: {company}
                </p>
              </div>
              <div className="flex flex-row items-center gap-[10px] font-gabarito font-normal text-[10px] leading-[12px] text-white mt-4">
                <div className="flex items-center gap-[6px] border-r-[1px] border-r-white pr-[10px]">
                  <MapPin className="h-[14px] w-[14px]" />
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-[6px] border-r-[1px] border-r-white pr-[10px]">
                  <Image src="/briefcasewhite.svg" alt="Briefcase" width={14} height={14} />
                  <span>Full Time</span>
                </div>
                <div className="flex items-center gap-[6px] border-r-[1px] border-r-white pr-[10px]">
                  <Image src="/clockwhite.svg" alt="Remote" width={14} height={14} />
                  <span>Remote</span>
                </div>
                <div className="flex items-center gap-[6px] border-r-[1px] border-r-white pr-[10px]">
                  <Image src="/crownwhite.svg" alt="Seniority Level" width={14} height={14} />
                  <span>Senior</span>
                </div>
                <div className="flex items-center gap-[6px]">
                  <Image src="/calendarwhite.svg" alt="Experience" width={14} height={14} />
                  <span>1 year</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[707px] h-[128px] gap-[71px] p-[24px_10px] rounded-[12px] bg-white">
            <div className="flex items-center">
              <CircularProgress
                label="Match score"
                value={100}
                color="#2563EB"
                bgColor="rgba(37, 99, 235, 0.1)"
              />
            </div>
            <div className="flex items-center">
              <CircularProgress
                value={100}
                color="#F97316"
                bgColor="rgba(249, 115, 22, 0.1)"
                label="Qualification"
              />
            </div>
            <div className="flex items-center">
              <CircularProgress
                value={100}
                color="#22C55E"
                bgColor="rgba(34, 197, 94, 0.1)"
                label="Skills"
              />
            </div>
            <div className="flex items-center">
              <CircularProgress
                value={100}
                color="#06B6D4"
                bgColor="rgba(6, 182, 212, 0.1)"
                label="Experience"
              />
            </div>
          </div>
          {/* Resume Part */}
          {/* Resume Optimization Summary */}
          <div className="flex flex-col w-[707px] rounded-[12px] bg-[#FFFFFF] p-4 gap-4 flex flex-col items-center">
            {/* Resume Preview */}
            <div className="p-4 ml-6 text-justify">
              <h3 className="font-gabarito font-bold text-[16px] text-[#000000] mb-2">
                Juphili A. Lamanilao
              </h3>
              <p className="font-gabarito font-normal text-[12px] text-[#515D68]">
                City Add: Sangi Interior, Brgy. Pajo Lapu-Lapu City, Cebu
              </p>
              <p className="font-gabarito font-normal text-[12px] text-[#515D68]">
                Mobile: +639084644623
              </p>
              <p className="font-gabarito font-normal text-[12px] text-[#515D68] mb-4">
                Email: juphili@yahoo.com
              </p>

              {/* Objective Enhanced */}
              <div className="mb-4">
                <h4 className="flex items-center gap-2 font-gabarito font-normal text-[12px] text-[#717A84] mb-2">
                  <span className="w-5 h-5 bg-[#0967D2] text-white rounded-full flex items-center justify-center">01</span>
                  <span className="bg-gray-200 px-2 py-1 rounded-md">OBJECTIVE ENHANCED</span>
                </h4>
                <p className="font-gabarito font-normal text-[12px] text-[#515D68]">
                  To secure a cooperative education in the field of Chemical Engineering that will challenge and strengthen my education and professional skills.
                </p>
              </div>

              {/* Professional Skills */}
              <div className="mb-4">
                <h4 className="flex items-center gap-2 font-gabarito font-normal text-[12px] text-[#717A84] mb-2">
                  <span className="w-5 h-5 bg-[#0967D2] text-white rounded-full flex items-center justify-center">02</span>
                  <span className="bg-gray-200 px-2 py-1 rounded-md">PROFESSIONAL SKILLS</span>
                </h4>
                <p className="font-gabarito font-normal text-[12px] text-[#515D68]">
                  With a Bachelor’s degree in Chemical Engineering Proficient in Microsoft Office (2003) (Word, Excel, and PowerPoint). Knowledgeable in Turbo C & Matlab) and other computer applications.
                </p>
              </div>

              {/* Educational Background */}
              <div className="mb-4">
                <h4 className="font-gabarito font-normal text-[12px] text-[#515D68] mb-2">
                  EDUCATIONAL BACKGROUND
                </h4>
                <p className="font-gabarito font-normal text-[12px] text-[#515D68]">
                  <strong>Tertiary:</strong> Cebu Institute of Technology (CIT), N. Bacalso Avenue, Cebu City, 2006 - present
                </p>
                <p className="font-gabarito font-normal text-[12px] text-[#515D68]">
                  <strong>Secondary:</strong> Saint Scholastica’s Academy (SSA-T), Tabunoc, Talisay City, Cebu, 2002 - 2006
                </p>
                <p className="font-gabarito font-normal text-[12px] text-[#515D68]">
                  <strong>Elementary:</strong> Bulacao Elementary School, Bulacao, Talisay City, Cebu, 1996 - 2002
                </p>
              </div>

              {/* Personal Information Enhanced */}
              <div className="mb-4">
                <h4 className="flex items-center gap-2 font-gabarito font-normal text-[12px] text-[#717A84] mb-2">
                  <span className="w-5 h-5 bg-[#0967D2] text-white rounded-full flex items-center justify-center">03</span>
                  <span className="bg-gray-200 px-2 py-1 rounded-md">PERSONAL INFORMATION ENHANCED</span>
                </h4>
                <p className="font-gabarito font-normal text-[12px] text-[#515D68]">
                  Single, Born on July 29, 1990 - Bulacao, Talisay City, Cebu, Philippines, Filipino citizenship, Roman Catholic. Good communication skills both oral & written (English & Filipino). Able to learn quickly, demonstrate flexibility and persistence. Dependable, analytical and hardworking. Can work well both independently and as a team.
                </p>
              </div>

              {/* Seminars Attended */}
              <div>
                <div className="mb-4">
                  <h4 className="flex items-center gap-2 font-gabarito font-normal text-[12px] text-[#717A84] mb-2 ml-7">
                    <span className="bg-gray-200 px-2 py-1 rounded-md">SEMINARS ATTENDED</span>
                  </h4>
                  <p className="font-gabarito font-normal text-[12px] text-[#515D68]">
                    [Details not provided in the image, can be added as needed]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Job Details and Optimization Summary */}
        <main className="w-[412px] flex flex-col gap-[12px]">
          {/* New Section: Change Resume */}
          <div className="flex items-center gap-2 w-[412px] h-[36px] bg-[#FFF3E8] h-[62px] rounded-[12px] p-4 border border-[#FFA500]">
            <Info className="w-4 h-4 text-[#E36308]" />
            <p className="font-gabarito font-normal text-[12px] text-[#E36308]">
              Want to use a different resume for this job?{' '}
              <span
                className="text-[#E36308] underline cursor-pointer"
                onClick={handleChangeResume}
              >
                Change Resume
              </span>
            </p>
          </div>

          {/* Job Details Section */}
          <div className="flex flex-col w-[412px] h-[160px] rounded-[12px] bg-white p-4 gap-4">
            <h2 className="font-gabarito font-bold text-[16px] leading-[20px] text-black">
              📌 Job Details
            </h2>
            <p className="font-gabarito font-normal text-[12px] leading-[16px] text-[#414A53]">
              The position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...
            </p>
            <p>
              <span className="text-[#0967D2] font-gabarito font-normal text-[12px] cursor-pointer"> See all</span>
            </p>
          </div>

          {/* Resume Optimization Summary Section */}
          <div className="flex flex-col w-[412px] h-[473px] rounded-[12px] bg-white p-4 gap-4">
            <div className="flex items-center justify-between">
              <div className="w-[380px] h-[36px] bg-white shadow-md rounded-md flex items-center justify-center">
                <div className="flex gap-[8px]">
                  <Button
                    variant="outline"
                    className={`w-[120px] h-[26px] font-gabarito font-normal text-[12px] rounded-[5px] transition-all ${activeTab === "Summary"
                        ? "text-white bg-gradient-to-r from-[#0967D2] to-[#09CBD2] border-none"
                        : "text-[#717A84]"
                      }`}
                    onClick={() => handleTabClick("Summary")}
                  >
                    Summary
                  </Button>
                  <Button
                    variant="outline"
                    className={`w-[120px] h-[26px] font-gabarito font-normal text-[12px] rounded-[5px] transition-all ${activeTab === "Editor"
                        ? "text-white bg-gradient-to-r from-[#0967D2] to-[#09CBD2] border-none"
                        : "text-[#717A84]"
                      }`}
                    onClick={() => handleTabClick("Editor")}
                  >
                    Editor
                  </Button>
                  <Button
                    variant="outline"
                    className={`w-[120px] h-[26px] font-gabarito font-normal text-[12px] rounded-[5px] transition-all ${activeTab === "Template"
                        ? "text-white bg-gradient-to-r from-[#0967D2] to-[#09CBD2] border-none"
                        : "text-[#717A84]"
                      }`}
                    onClick={() => handleTabClick("Template")}
                  >
                    Template
                  </Button>
                </div>
              </div>
            </div>

            {/* Objective Enhanced */}
            <div className="border-[0.5px] border-[#EFF0F2] rounded-[12px] p-3">
              <button
                onClick={() => setIsObjectiveOpen(!isObjectiveOpen)}
                className="flex items-center justify-between w-full"
              >
                <h4 className="flex items-center gap-2 font-gabarito font-normal text-[12px] text-[#08121D]">
                  <span className="w-5 h-5 bg-[#0967D2] text-white rounded-full flex items-center justify-center">
                    01
                  </span>
                  OBJECTIVE ENHANCED
                </h4>
                {isObjectiveOpen ? (
                  <ChevronUp className="w-4 h-4 text-[#2563EB]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#2563EB]" />
                )}
              </button>
              {isObjectiveOpen && (
                <p className="mt-2 font-gabarito font-normal text-[12px] text-[#515D68]">
                  Your objective has been refined to better align with the job description, emphasizing your relevant skills and goals.
                </p>
              )}
            </div>

            {/* Missing Skills Added */}
            <div className="border-[0.5px] border-[#EFF0F2] rounded-[12px] p-3">
              <button
                onClick={() => setIsSkillsOpen(!isSkillsOpen)}
                className="flex items-center justify-between w-full"
              >
                <h4 className="flex items-center gap-2 font-gabarito font-normal text-[12px] text-[#08121D]">
                  <span className="w-5 h-5 bg-[#0967D2] text-white rounded-full flex items-center justify-center">
                    02
                  </span>
                  MISSING SKILLS ADDED
                </h4>
                {isSkillsOpen ? (
                  <ChevronUp className="w-4 h-4 text-[#2563EB]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#2563EB]" />
                )}
              </button>
              {isSkillsOpen && (
                <p className="mt-2 font-gabarito font-normal text-[12px] text-[#515D68]">
                  Added key skills like "user research" and "design systems" to improve your match score.
                </p>
              )}
            </div>

            {/* Personal Information Enhanced */}
            <div className="border-[0.5px] border-[#EFF0F2] rounded-[12px] p-3">
              <button
                onClick={() => setIsPersonalInfoOpen(!isPersonalInfoOpen)}
                className="flex items-center justify-between w-full"
              >
                <h4 className="flex items-center gap-2 font-gabarito font-normal text-[12px] text-[#08121D]">
                  <span className="w-5 h-5 bg-[#0967D2] text-white rounded-full flex items-center justify-center">
                    03
                  </span>
                  PERSONAL INFORMATION ENHANCED
                </h4>
                {isPersonalInfoOpen ? (
                  <ChevronUp className="w-4 h-4 text-[#2563EB]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#2563EB]" />
                )}
              </button>
              {isPersonalInfoOpen && (
                <p className="mt-2 font-gabarito font-normal text-[12px] text-[#515D68]">
                  Removed unnecessary personal details and enhanced the presentation of your contact information.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col w-[412px] h-[116px] rounded-[12px] bg-white p-4 gap-4">
            {/* Feedback Section */}
            <div className="flex items-center justify-start gap-[5px] w-full">
            <img src="/message-question.svg" alt="message" className="w-4 h-4" />
              <h3 className="font-gabarito font-normal text-[12px] text-[#08121D]">
              
                How do you like this analyzed resume?
              </h3>
            </div>
            <div className="flex gap-[20px] items-center justify-center">
              {/* Like Button */}
              <Button
                variant="outline"
                className="flex items-center gap-x-2 font-gabarito font-normal w-[179px] h-[36px] text-[12px] text-[#08121D] bg-[#E6FAFB] border-[#3AD5DB] rounded-[8px] px-4 py-1"
              >
                <img src="/like.svg" alt="Like" className="w-4 h-4" />
                Looks great
              </Button>

              {/* Unlike Button */}
              <Button
                variant="outline"
                className="flex items-center gap-x-2 font-gabarito font-normal w-[179px] h-[36px] text-[12px] text-[#08121D] bg-[#FCEAE6] border-[#E95439] rounded-[8px] px-4 py-1"
              >
                <img src="/dislike.svg" alt="Unlike" className="w-4 h-4" />
                Not what I expected
              </Button>
            </div>



          </div>
        </main>
      </section>

      {/* Action Buttons */}
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2 font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#515D68]">
          🚀 Generate an AI-powered cover letter tailored to this job in seconds!
        </div>
        <div className="flex gap-[26px] items-center">
          <Button
            variant="outline"
            className="font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-center text-[#0967D2] px-[50px] py-[5px] rounded-[12px]"
          >
            Download resume
          </Button>
          <Button
            variant="outline"
            className="font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-center text-[#0967D2] px-[50px] py-[5px] rounded-[12px] border-[#0967D2] border-[0.5px]"
          >
            Generate cover letter
          </Button>
          <Button
            onClick={handleBackToApply}
            className="font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-center text-white px-[50px] py-[5px] rounded-[12px] bg-[#2563EB] hover:bg-[#1D4ED8]"
          >
            Apply for this job
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function ResumeOptimizedPage() {
  return (
    <Suspense>
      <ResumeOptimized />
    </Suspense>
  );
}