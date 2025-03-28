'use client';

import { Switch } from '@/components/ui/switch';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function AutoApply() {
  const router = useRouter();
  const [isAutoApply, setIsAutoApply] = useState(false);
  const [visible, setVisible] = useState(true); // Show/hide the component

  const handleToggle = (checked: boolean) => {
    setIsAutoApply(checked);
    if (checked) {
      router.push('/pricing');
    }
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="border px-[12px] py-[6px] rounded-[12px] bg-[#E6F0FB] flex items-center justify-between">
      <p className="text-[#0967D2] text-[12px] leading-[16px] font-[Gabarito] font-normal">
        Turn on auto-apply, and AI will submit applications for you based on
        your job preferences—saving you time and effort.
      </p>
      <div className="flex items-center gap-4">
        <Switch
          className="cursor-pointer"
          checked={isAutoApply}
          onCheckedChange={handleToggle}
        />
        <button className="text-[#64748B]" onClick={handleClose}>
          <X className="h-4 w-4 cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
