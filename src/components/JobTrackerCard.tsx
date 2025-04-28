'use client';
import React from 'react';
import { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import Image from 'next/image';
import { Card } from '@/components/ui/card2';
import { Button } from '@/components/ui/button2';
import { Badge } from '@/components/ui/badge2';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu2';
import PreviewResumeModal from '@/components/modal/PreviewResumeModal';
import { cn } from '@/lib/utils';
import { Job } from '@/data/mockJobData/job';
import { useJobStore } from '@/store/useJobStore';
import { Heart } from 'lucide-react';

interface JobCardProps {
  job: Job
  actions: {
    delete: () => void;
    toggle: () => void;
  };
}

const JobCard: React.FC<JobCardProps> = ({ job, actions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal(); // Moved inside the component
  const { activeTab } = useJobStore();





  return (
    <>
      
      <Card
        className={cn(
          'w-[1132px] h-[84px] rounded-[12px] gap-[10px] pt-[16px] pr-[20px] pb-[16px] border-none'
        )}
      >
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-14 h-14 p-2 rounded-lg flex items-center justify-center">
              {job.companyLogo ? (
                <Image
                  src={job.companyLogo}
                  alt="Company"
                  width={56}
                  height={56}
                  className="object-contain rounded"
                />
              ) : (
                <Image
                  src="/placeholder.svg"
                  alt="Default company logo"
                  width={56}
                  height={56}
                  className="object-contain rounded"
                />
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h3 className="font-gabarito font-normal text-base leading-5 tracking-normal text-[#08121D]">
                  {job.title}
                </h3>
                <Badge
                  className="h-[22px] rounded-[38px] pt-[5px] pr-[10px] pb-[5px] pl-[10px] font-gabarito font-normal text-[10px] leading-[12px] tracking-[0px]"
                >
                  Match
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4 mt-3">
                <Badge className="font-gabarito font-normal text-[10px] leading-[12px] text-gray-700 bg-white gap-1">
                  <Image
                    src="/icons/location.png"
                    alt="Location"
                    width={14}
                    height={14}
                  />
                  {job.location}
                </Badge>

                <Badge className="font-gabarito font-normal text-[10px] leading-[12px] text-gray-700 bg-white gap-1">
                  <Image
                    src="/icons/clock.png"
                    alt="Type"
                    width={14}
                    height={14}
                  />
                  {job.jobType}
                </Badge>
                <Badge className="font-gabarito font-normal text-[10px] leading-[12px] text-gray-700 bg-white gap-1">
                  <Image
                    src="/icons/briefcase.png"
                    alt="Type"
                    width={14}
                    height={14}
                  />
                  {job.jobPreference}
                </Badge>
                {job.seniorityLevel && (
                  <Badge className="font-gabarito font-normal text-[10px] leading-[12px] text-gray-700 bg-white gap-1">
                    <Image
                      src="/icons/crown-2.png"
                      alt="Seniority"
                      width={14}
                      height={14}
                    />
                    {job.seniorityLevel}
                  </Badge>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="font-gabarito font-normal text-[10px] leading-[12px] text-gray-700 flex items-center gap-2">
                    <Image
                      src="/icons/calendar.png"
                      alt="Method"
                      width={16}
                      height={16}
                    />
                    via <span className="text-gray-700"></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Image
                      src="/icons/calendar-edit.png"
                      alt="Method"
                      width={16}
                      height={16}
                    />
                    <span className="flex items-center gap-2 font-gabarito font-normal text-[10px] leading-[12px] text-gray-700">
                      Date applied
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {activeTab === 'saved' ? (
            <Heart className="h-6 w-6 text-[#07A2A8] fill-[#07A2A8]" onClick={actions.toggle}/>
          ) : (<DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="bg-white cursor-pointer">
                <Image
                  src="/icons/more.png"
                  alt="Method"
                  width={20}
                  height={20}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white text-[#08121D] [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-gray-300 border-[0.5px] border-solid border-[#EFF0F2] shadow-[0px_5px_15px_0px_#1B20201A] w-[242px] h-[166px] rounded-[10px] p-[8px] "
            >
              <DropdownMenuItem onClick={() => openModal(<PreviewResumeModal />)}>
                View resume used
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => openModal(<PreviewResumeModal />)}>View cover letter used</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setIsOpen(true)}>
                Delete job
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>)}

        </div>
      </Card>

      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-[533px] h-[197px] rounded-[22px] border border-[#F1F5FA] bg-white px-7 py-[15px] flex flex-col gap-[32px] text-[#08121D]">
            <h2 className="text-lg">Delete Job?</h2>
            <p>Are you sure you want to delete this job?</p>
            <div className="flex w-[473px] h-[45px] gap-[14px]">
              <Button
                className="w-[229.5px] h-[45px] rounded-[12px] border-[0.5px] gap-[5px] pt-[5px] pr-[37px] pb-[5px] pl-[37px] bg-white text-[#08121D] focus:text-[#0967D2]"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className="w-[229.5px] h-[45px] rounded-[12px] border-none gap-[5px] pt-[5px] pr-[37px] pb-[5px] pl-[37px] bg-white text-[#FFFFFF] bg-[#0967D2]"
                onClick={actions.delete}
              >
                Yes, Delete Job
              </Button>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default JobCard;
