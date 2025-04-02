import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Image from 'next/image';

// Reusable Stat Box Component
function StatBox({
  title,
  count,
  fullWidth,
}: {
  title: string;
  count: number;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between bg-white rounded-lg px-4 py-2 gap-1 w-[124px] shadow-[0px_4px_15px_0px_#08121D0D] ${
        fullWidth ? 'w-full' : 'w-auto'
      }`}
    >
      <p className="font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#08121D] whitespace-nowrap">
        {title}
      </p>
      <span className="w-[18px] h-[18px] flex items-center justify-center gap-[10px] rounded-full p-[1px] bg-[#07A2A8] font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-white text-center">
        {count}
      </span>
    </div>
  );
}

export function UserProfile() {
  return (
    <div className="space-y-4 flex flex-col items-center">
      <Card className="w-full max-w-[325px] flex items-center bg-[#F8F8F8] rounded-[24px]">
        {/* Profile Image */}
        <div className="flex flex-col items-center gap-[8px]">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src="/mercy.png" // Replace with actual image
              alt="Profile Picture"
              style={{ objectFit: 'cover' }}
              width={97}
              height={97}
            />
          </div>

          {/* Name & Role */}
          <h2 className="font-[Gabarito] font-medium text-[16px] leading-[20px] text-[#08121D]">
            Mercy Benjamin
          </h2>
          <p className="font-[Gabarito] font-normal text-[12px] leading-[16px] text-[#515D68] text-center">
            UI/UX Designer
          </p>
        </div>

        {/* Stats Section */}
        <CardContent className="mt-6 flex flex-col items-center space-y-3">
          <div className="flex space-x-3">
            <StatBox title="Applied Jobs" count={0} />
            <StatBox title="Generated Resumes" count={0} />
          </div>
          <StatBox title="Generated Cover Letters" count={0} />
        </CardContent>

        {/* View Profile Button */}
        <CardFooter>
          <Button
            variant="outline"
            className="w-[293px] h-[40px] px-[50px] py-[5px] rounded-[12px] border-[0.5px] border-[#717A84] text-[#717A84] text-[16px] leading-[20px] font-normal text-center bg-transparent"
          >
            View profile
          </Button>
        </CardFooter>
      </Card>

      {/* Chat with AI */}
      <Card className="w-full max-w-[325px] h-[543px] flex items-start  gap-4 bg-[#F8F8F8] rounded-[24px]  ">
        {/* Header */}
        <CardHeader className="flex flex-col items-start gap-2">
          <div className="flex gap-2 items-center">
            <Image src="/farah.svg" alt="AI Assistant" width={29} height={29} />
            <div className="flex flex-col gap-1">
              <h2 className="font-gabarito font-normal text-[12px] leading-4 tracking-normal text-[#08121D]">
                Farah
              </h2>
              <p className="font-gabarito font-normal text-[10px] leading-[12px] tracking-normal text-[#B0B5BB]">
                Talentra&apos;s Co-pilot
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-gabarito font-normal text-[10px] leading-[12px] tracking-normal text-[#717A84]">
              Got questions about your resume, cover letter, or job
              applications? Chat with our AI assistant and get instant, helpful
              answers!
            </p>

            {/* Chat Bubble */}
            <div className="w-[293px] h-[36px] p-[10px_14px] flex items-center gap-[10px] rounded-[12px] bg-[#E6F0FB]">
              <span className="font-gabarito font-normal text-[12px] leading-[16px] tracking-[0px] text-[#414A53]">
                Hello! Welcome to Talentrrah Co-pilot
              </span>
            </div>
          </div>
        </CardHeader>

        {/* Message */}
        <CardFooter className="flex flex-col gap-4 mt-auto">
          {/* Quick Actions */}
          <div className="flex items-end flex-col gap-3 w-[293px]">
            <Button
              variant="outline"
              className="w-[110px] h-[32px] px-[12px] py-[8px] gap-[10px] rounded-[8px] border border-[#E8EDF2] bg-white font-gabarito font-normal text-[12px] leading-[16px] tracking-[0px] text-[#515D68] cursor-pointer"
            >
              Create a resume
            </Button>
            <Button
              variant="outline"
              className="w-[157px] h-[32px] px-[12px] py-[8px] gap-[10px] rounded-[8px] border border-[#E8EDF2] bg-white font-gabarito font-normal text-[12px] leading-[16px] tracking-[0px] text-[#515D68] cursor-pointer"
            >
              Create a tailored job loop
            </Button>
            <Button
              variant="outline"
              className="w-[112px] h-[32px] px-[12px] py-[8px] gap-[10px] rounded-[8px] border border-[#E8EDF2] bg-white font-gabarito font-normal text-[12px] leading-[16px] tracking-[0px] text-[#515D68] cursor-pointer"
            >
              Upload a resume
            </Button>
          </div>

          {/* Input Field */}
          <div className="relative mt-4">
            <Input
              placeholder="Ask me anything..."
              className="flex w-[293px] h-[38px] px-[14px] py-[10px] gap-[10px] rounded-[50px] border-[0.5px] border-[#0967D2] bg-white shadow-[0px_4px_15px_0px_#292D320D] font-gabarito font-normal text-[10px] leading-[16px] tracking-[0px] text-[#CFD3D6]"
            />
            <Button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent p-2 hover:bg-transparent cursor-pointer"
              size="icon"
            >
              <Image src="/send.svg" alt="send" width={18} height={18} />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
