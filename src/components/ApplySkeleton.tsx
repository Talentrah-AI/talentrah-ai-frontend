import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const ApplySkeleton: React.FC = () => {
  return (
    <div className="w-[1157px] h-[968px] flex flex-col gap-[32px] p-[12px] pt-[12px] pr-[12px] pb-[30px] pl-[12px] rounded-[24px] bg-[#F8F8F8]">
      <section className="w-[1133px] h-[849px] flex justify-between">
        <div className="w-[707px] h-[849px] flex flex-col gap-[12px]">
          <Skeleton className="h-[96px] rounded-[12px]" />
          <Skeleton className="h-[128px] rounded-[12px]" />
          <Skeleton className="h-[200px] rounded-[12px]" />
          <Skeleton className="h-[200px] rounded-[12px]" />
          <Skeleton className="h-[200px] rounded-[12px]" />
          <Skeleton className="h-[200px] rounded-[12px]" />
        </div>
        <main className="w-[412px] h-[849px] flex flex-col gap-[12px]">
          <Skeleton className="h-[193px] rounded-[12px]" />
          <Skeleton className="h-[193px] rounded-[12px]" />
          <Skeleton className="h-[193px] rounded-[12px]" />
          <Skeleton className="h-[193px] rounded-[12px]" />
        </main>
      </section>
    </div>
  );
};

export default ApplySkeleton;
