/**
 * Premium User Apply Page Component
 * This component renders the job application page with detailed job information,
 * resume analysis, and application actions.
 */

'use client';

import { Button } from '@/components/ui/button';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { CircularProgress } from '@/components/ui/circular-progress';
import { Suspense, useState } from 'react';
import { LoadingSpinner } from '@/components/LoadingSpinner';

function Apply() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const jobTitle = searchParams.get('jobTitle');
  const company = searchParams.get('company');
  const [isOptimizing, setIsOptimizing] = useState(false); // State for loading spinner

  const handleOptimizeResume = () => {
    setIsOptimizing(true);
    // Simulate optimization process (replace with API call later)
    setTimeout(() => {
      setIsOptimizing(false);
      router.push(`/dashboard/resume-optimized?jobTitle=${jobTitle}&company=${company}`);
    }, 2000);

    // Future API Integration Example:
    /*
    setIsOptimizing(true);
    fetch('/api/optimize-resume', {
      method: 'POST',
      body: JSON.stringify({ jobTitle, company }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(() => {
        setIsOptimizing(false);
        router.push(`/dashboard/resume-optimized?jobTitle=${jobTitle}&company=${company}`);
      })
      .catch(error => {
        console.error('Error optimizing resume:', error);
        setIsOptimizing(false);
      });
    */
  };

  return (
    <>
      {isOptimizing && <LoadingSpinner message="Optimizing your resume, this might take few minute..." />}
      <div
        className={`w-[1157px] h-[968px] flex flex-col gap-[32px] p-[12px] pt-[12px] pr-[12px] pb-[30px] pl-[12px] rounded-[24px] bg-[#F8F8F8] transition-all duration-200 ${
          isOptimizing ? "blur-sm opacity-50" : ""
        }`}
      >
        <section className="w-[1133px] h-[849px] flex justify-between">
          <div className="w-[707px] h-[849px] flex flex-col gap-[12px]">
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

            <div className="flex items-center justify-center w-[707px] h-[128px] gap-[71px] p-[24px_10px] rounded-[12px] bg-white">
              <div className="flex items-center">
                <CircularProgress
                  label="Match score"
                  value={75}
                  color="#2563EB"
                  bgColor="rgba(37, 99, 235, 0.1)"
                />
              </div>
              <div className="flex items-center">
                <CircularProgress
                  value={70}
                  color="#F97316"
                  bgColor="rgba(249, 115, 22, 0.1)"
                  label="Qualification"
                />
              </div>
              <div className="flex items-center">
                <CircularProgress
                  value={40}
                  color="#22C55E"
                  bgColor="rgba(34, 197, 94, 0.1)"
                  label="Skills"
                />
              </div>
              <div className="flex items-center">
                <CircularProgress
                  value={50}
                  color="#06B6D4"
                  bgColor="rgba(6, 182, 212, 0.1)"
                  label="Experience"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-[707px] h-[601px] rounded-[12px] bg-[#FFFFFF] gap-4">
              <h2 className="flex items-start font-gabarito font-[500] text-[16px] leading-[20px] tracking-[0px] text-[#000000]">
                Resume Analysis Summary
              </h2>
              <div className="flex flex-col w-[683px] h-[132px] gap-[10px] p-[14px_10px] rounded-[12px] border-[0.5px] border-[#EFF0F2] border-opacity-50">
                <h3 className="flex items-center gap-2 font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#90989F]">
                  <Image
                    src="/Check.svg"
                    alt="check-icon"
                    width={16}
                    height={16}
                  />
                  YOUR STRENGTH
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#515D68]">
                    <Image src="/Ellipse.svg" alt="" width={16} height={16} />
                    Your experience in understanding UX principles and
                    accessibility matches the job description.
                  </li>
                  <li className="flex items-center gap-2 font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#515D68]">
                    <Image src="/Ellipse.svg" alt="" width={16} height={16} />
                    Your resume includes relevant UI/UX tools like Figma and Adobe
                    XD
                  </li>
                  <li className="flex items-center gap-2 font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#515D68]">
                    <Image src="/Ellipse.svg" alt="" width={16} height={16} />
                    Your resume includes relevant UI/UX tools like Figma and Adobe
                    XD
                  </li>
                </ul>
              </div>

              <div className="flex flex-col w-[683px] h-[132px] gap-[10px] p-[14px_10px] rounded-[12px] border-[0.5px] border-[#EFF0F2] border-opacity-50">
                <h3 className="flex items-center gap-2 font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#90989F]">
                  <Image
                    src="/danger.svg"
                    alt="danger-icon"
                    width={16}
                    height={16}
                  />
                  AREAS TO IMPROVE
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#515D68]">
                    <Image src="/Ellipse.svg" alt="" width={16} height={16} />
                    Missing important keywords like "user research",
                    "design systems", and "accessibility standards"
                  </li>
                  <li className="flex items-center gap-2 font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#515D68]">
                    <Image src="/Ellipse.svg" alt="" width={16} height={16} />
                    Your resume lacks measurable achievements (e.g.,
                    "Redesigned a checkout flow, improving conversion rates by 15%")
                  </li>
                  <li className="flex items-center gap-2 font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#515D68]">
                    <Image src="/Ellipse.svg" alt="" width={16} height={16} />
                    Your formatting is not fully ATS-compliant (e.g., missing
                    section headings, inconsistent font use).
                  </li>
                </ul>
              </div>

              <div className="flex flex-col w-[683px] h-[214px] gap-[10px] p-[14px_10px] rounded-[12px] border-[0.5px] border-[#EFF0F2] border-opacity-50">
                <h3 className="flex items-center gap-2 font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#90989F]">
                  <Image src="/check1.svg" alt="cancel" width={16} height={16} />
                  IRRELEVANT INFORMATION DETECTED
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#515D68]">
                    <Image src="/Ellipse.svg" alt="" width={16} height={16} />
                    <div>
                      <span className="text-black !important">
                        Sales and Marketing Experience:{' '}
                      </span>
                      <span>
                        Your past role in digital marketing is not relevant to
                        this UI/UX role
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#515D68]">
                    <Image src="/Ellipse.svg" alt="" width={16} height={16} />
                    <div>
                      <span className="text-black !important">
                        Unrelated Certifications:{' '}
                      </span>
                      <span>
                        Your certification in Social Media Marketing doesn't
                        align with UI/UX design.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#515D68]">
                    <Image src="/Ellipse.svg" alt="" width={16} height={16} />
                    <div>
                      <span className="text-black !important">
                        Unnecessary Personal Details:{' '}
                      </span>
                      <span>
                        Your resume includes age, marital status, and full
                        address, which are not needed
                      </span>
                    </div>
                  </li>
                </ul>

                <div className="flex items-start mt-6 gap-[10px] rounded-[16px] border-[0.5px] p-[15px] bg-[#E6F0FB] border-[#9DC2ED]">
                  <Image
                    src="/information.svg"
                    alt="info"
                    width={20}
                    height={20}
                  />
                  <p className="text-sm text-[#2563EB]">
                    Tip: Removing irrelevant details and restructuring your resume
                    can boost your match score!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <main className="w-[412px] h-[849px] flex flex-col gap-[12px]">
            <div className="flex items-center gap-[10px] rounded-[12px] border-[0.5px] p-[15px] bg-[#FCEFE6] border-[#F4C19C]">
              <Image
                src="/information1.svg"
                alt="info-circle"
                width={20}
                height={20}
              />
              <span className="font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#E36308]">
                Want to use a different resume for this job?{' '}
                <button className="font-[Gabarito] font-medium text-[12px] leading-[16px] tracking-[0px] underline decoration-solid decoration-[0%]">
                  Change Resume
                </button>
              </span>
            </div>

            <div className="flex flex-col w-[412px] h-[775px] gap-[24px] p-[22px_16px] rounded-[12px] bg-white">
              <div className="space-y-3">
                <h2 className="font-gabarito font-bold text-[16px] leading-[20px] text-black">
                  📌 Job Details
                </h2>
                <p className="font-gabarito font-normal text-[12px] leading-[16px] text-[#414A53]">
                  This position requires you to work closely with product managers
                  and engineers to design user-centered experiences that meet
                  business goals. You will be responsible for conducting user
                  testing, analyzing feedback, and iterating on designs to enhance
                  usability. You will also contribute to the development of design
                  systems, ensuring consistency and scalability across digital
                  products.
                </p>
                <p className="font-gabarito font-medium text-[12px] leading-[16px] text-black">
                  <span>Salary:</span> <span>₦500,000</span>
                </p>
              </div>

              <div className="border-[0.5px] border-[#EFF0F2]"></div>

              <div>
                <div>
                  <h3 className="font-gabarito font-bold text-[16px] leading-[20px] text-black mb-3">
                    Job Responsibilities:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Design user-friendly interfaces for web and mobile applications.',
                      'Conduct user research and usability testing to improve designs.',
                      'Conduct user research and usability testing to improve designs.',
                      'Conduct user research and usability testing to improve designs.',
                      'Collaborate with developers to ensure pixel-perfect implementation.',
                      'Collaborate with developers to ensure pixel-perfect implementation.',
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 font-gabarito font-normal text-[12px] leading-[16px] text-[#414A53]"
                      >
                        <Image
                          src="/check.svg"
                          alt="check"
                          width={16}
                          height={16}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-[0.5px] border-[#EFF0F2] mt-6 mb-6"></div>

                <div>
                  <h3 className="font-medium mb-3">Required Skills:</h3>
                  <ul className="space-y-2">
                    {[
                      'Proficiency in Figma, Sketch, or Adobe XD.',
                      'Proficiency in Figma, Sketch, or Adobe XD.',
                      'Strong understanding of UX principles and accessibility.',
                      'Strong understanding of UX principles and accessibility.',
                      'Strong understanding of UX principles and accessibility.',
                      'Experience working in Agile environments.',
                      'Experience working in Agile environments.',
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 font-gabarito font-normal text-[12px] leading-[16px] text-[#414A53]"
                      >
                        <Image
                          src="/check.svg"
                          alt="check"
                          width={16}
                          height={16}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <Image
                  src="/calendar.svg"
                  alt="Calendar"
                  width={18}
                  height={18}
                />
                <span className="font-gabarito font-normal text-[12px] leading-[16px] text-[#414A53]">
                  Deadline: 06 - Feb - 2025
                </span>
              </div>
            </div>
          </main>
        </section>

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2 font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#515D68]">
            🚀 Generate an AI-powered cover letter tailored to this job in seconds!
          </div>
          <div className="flex gap-[26px] items-center">
            <p className="font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-center text-[#0967D2]">
              Preview resume
            </p>
            <Button
              variant="outline"
              className="font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-center text-[#0967D2] px-[50px] py-[5px] rounded-[12px] border-[#0967D2] border-[0.5px]"
            >
              Generate cover letter
            </Button>
            <Button
              onClick={handleOptimizeResume}
              className="flex gap-[5px] p-[5px_50px] rounded-[12px] px-6 bg-[#2563EB] font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-center text-white"
              disabled={isOptimizing}
            >
              <Image src="/optimize.svg" alt="optimize" width={24} height={24} />
              {isOptimizing ? "Optimizing..." : "Optimize my resume"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ApplyPage() {
  return (
    <Suspense>
      <Apply />
    </Suspense>
  );
}