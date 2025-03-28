'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';

// interface ResumeOptimizationModalProps {
//   onClose: () => void;
// }

const ResumeOptimizationModal: React.FC = () => {
  const { closeModal } = useModal();
  const router = useRouter();

  const handleUpgradeClick = () => {
    router.push('/pricing');
  };
  return (
      <div className="w-[533px] h-[369px] flex flex-col rounded-[22px] border border-[#F1F5FA] p-[30px] gap-[32px] bg-white">
        <div className="gap-[12px] flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-gabarito font-normal text-[16px] leading-[20px] tracking-[0px] text-[#08121D]">
              Unlock AI-Powered Resume Optimization!
            </h2>
            <button onClick={closeModal} className="text-gray-500">
              <Image
                src="/remove.svg"
                alt="close-icon"
                width={20}
                height={20}
              />
            </button>
          </div>
          <p className="font-gabarito font-normal text-[16px] leading-[20px] tracking-[0px] text-[#515D68] mb-1">
            Your resume could be improved by 25% to better match this job! With
            AI, you&apos;ll get:
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 mb-2 font-gabarito font-normal text-[12px] leading-[16px] tracking-[0px] text-[#515D68]">
              <Image src="/check.svg" alt="" width={16} height={16} />
              ATS-friendly formatting
            </li>
            <li className="flex items-center gap-2 mb-2 font-gabarito font-normal text-[12px] leading-[16px] tracking-[0px] text-[#515D68]">
              <Image src="/check.svg" alt="" width={16} height={16} />
              Stronger keywords & skills
            </li>
            <li className="flex items-center gap-2 font-gabarito font-normal text-[12px] leading-[16px] tracking-[0px] text-[#515D68]">
              <Image src="/check.svg" alt="" width={16} height={16} />
              Improved bullet points
            </li>
          </ul>
          <div className="flex justify-between mt-4">
            <Button
              variant="outline"
              onClick={closeModal}
              className="w-[229.5px] h-[45px] rounded-[12px] border-[0.5px] border-[#0967D2] gap-[5px] px-[37px] py-[5px] cursor-pointer"
            >
              Apply anyway
            </Button>
            <Button
              onClick={handleUpgradeClick}
              className="w-[229.5px] h-[45px] rounded-[12px] border-[0.5px] border-[#0967D2] bg-[#0967D2] gap-[5px] px-[37px] py-[5px] cursor-pointer"
            >
              Upgrade & Optimize
            </Button>
          </div>
        </div>

        <p className="flex items-center rounded-[16px] border-[0.5px] border-[#9DEDA6] bg-[#E6FBE9] gap-[10px] px-[15px] py-[8px]">
          <Image
            src="/information-circle.svg"
            alt="info"
            width={24}
            height={24}
          />
          <span className="font-gabarito font-normal text-[12px] leading-[16px] tracking-[0px] text-[#09D220]">
            &apos;Apply Anyway&apos; means using your current resume without AI
            enhancements.
          </span>
        </p>
      </div>
  );
};

export default ResumeOptimizationModal;
