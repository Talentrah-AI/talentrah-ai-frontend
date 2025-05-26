'use client';

import { Button } from '@/components/ui/button';

interface ProfileData {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  language: string;
  country: string;
  timezone: string;
}

interface ProfileSettingsSectionProps {
  profileData: ProfileData;
  onEditClick: () => void;
}

export default function ProfileSettingsSection({
  profileData,
  onEditClick,
}: ProfileSettingsSectionProps) {
  return (
    <div className="border-b p-6 space-y-4 flex gap-[73px]">
      <div className="flex-2 w-[305px] gap-[14px] flex flex-col">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground text-[#31383E]">
          Profile Settings
        </h2>
        <p className="text-[12px] text-muted-foreground">
          Set platform-wide preferences like branding, default timezone,
          language, and notification behavior.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="rounded-[4px] py-[10px] px-[14px] h-[40px] w-[90px] items-center text-[12px] text-[#08121D]"
          onClick={onEditClick}
        >
          Edit profile
        </Button>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-4 text-[12px]">
        <ProfileItem label="Full name" value={profileData.fullName} />
        <ProfileItem label="Email address" value={profileData.email} />
        <ProfileItem label="Phone number" value={profileData.phone} />
        <ProfileItem label="Role" value={profileData.role} />
        <ProfileItem label="Language" value={profileData.language} />
        <ProfileItem label="Country" value={profileData.country} />
        <ProfileItem label="Timezone" value={profileData.timezone} />
      </div>
    </div>
  );
}

function ProfileItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
