import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Heart, MapPin, Building2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  remote: boolean;
  seniorityLevel: string;
  experience: string;
  description: string;
  matchPercentage: number;
  matchQuality: 'Excellent' | 'Good' | 'Fair';
  daysAgo: number;
  applicants: number;
  companyLogo: string;
  isSaved: boolean;
  onSave: () => void;
}

export const JobCard: React.FC<JobCardProps> = ({
  isSaved,
  onSave,
  ...job
}) => {
  const router = useRouter();

  const handleApply = () => {
    const params = new URLSearchParams({
      jobTitle: job.title,
      company: job.company,
    });
    router.push(`/jobdashboard/apply?${params.toString()}`);
  };

  // Determine progress bar color based on match quality
  const getProgressColor = (quality: 'Excellent' | 'Good' | 'Fair') => {
    switch (quality) {
      case 'Excellent':
        return '#22C55E'; // green
      case 'Good':
        return '#0967D2'; // blue
      case 'Fair':
        return '#F97316'; // orange
      default:
        return '#9CA3AF'; // gray
    }
  };

  return (
    <Card className="w-[800px] h-[190px] p-[16px] rounded-xl bg-white mb-4 overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
      <div className="flex flex-col gap-4 h-full">
        <CardContent className="p-0">
          <div className="flex flex-col gap-[16px]">
            <div className="flex items-start gap-[16px]">
              <div className="w-[48px] h-[48px] rounded-[4px] bg-gray-100 flex items-center justify-center overflow-hidden">
                {job.companyLogo ? (
                  <Image
                    src={job.companyLogo}
                    alt={`${job.company} logo`}
                    width={28}
                    height={28}
                    className="w-28 h-28 object-cover"
                  />
                ) : (
                  <Building2 className="h-6 w-6 text-gray-400" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-gabarito font-normal text-[16px] leading-[20px] text-[#08121D] mb-2">
                  {job.title}
                </h3>
                <div className="flex flex-row items-center gap-[10px] font-gabarito font-normal text-[10px] leading-[12px] text-[#717A84]">
                  <div className="flex items-center gap-[6px] border-r-[1px] border-r-gray-200 pr-[10px]">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-[6px] border-r-[1px] border-r-gray-200 pr-[10px]">
                    <Image
                      src="/briefcase.svg"
                      alt="Briefcase"
                      width={14}
                      height={14}
                    />
                    {job.jobType}
                  </div>
                  {job.remote && (
                    <div className="flex items-center gap-[6px] border-r-[1px] border-r-gray-200 pr-[10px]">
                      <Image
                        src="/clock.svg"
                        alt="Remote"
                        width={14}
                        height={14}
                      />
                      Remote
                    </div>
                  )}
                  <div className="flex items-center gap-[6px] border-r-[1px] border-r-gray-200 pr-[10px]">
                    <Image
                      src="/crown-2.svg"
                      alt="Seniority Level"
                      width={14}
                      height={14}
                    />
                    {job.seniorityLevel}
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <Image
                      src="/calendar.svg"
                      alt="Experience"
                      width={14}
                      height={14}
                    />
                    {job.experience}
                  </div>
                </div>
              </div>
            </div>

            <p className="font-gabarito font-normal text-[12px] leading-[16px] text-[#31383E]">
              {job.description}
            </p>
          </div>
        </CardContent>

        {/* Horizontal line */}
        <div className="border-[0.5px] border-[#EFF0F2]"></div>

        {/* Footer */}
        <CardFooter className="w-full h-[34px] flex flex-row gap-[30px] p-0">
          <div className="w-[400px] flex items-center gap-[10px]">
            <Progress
              value={job.matchPercentage}
              className="h-[8px] w-[200px] gap-[8px] flex-1 rounded-full"
              indicatorColor={getProgressColor(job.matchQuality)}
            />
            <span
              style={{ color: getProgressColor(job.matchQuality) }}
              className="font-gabarito font-medium text-[11px] leading-[16px] tracking-[0px]"
            >
              {job.matchPercentage}%, {job.matchQuality} match
            </span>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-x-12 font-gabarito font-normal text-[10px] leading-[12px] text-[#717A84] mx-auto">
              <span className="flex items-center gap-[4px]">
                <Image
                  src="/calendar.svg"
                  alt="calendar"
                  width={14}
                  height={14}
                />
                {job.daysAgo} days ago
              </span>
              <span className="flex items-center gap-[4px] ml-[4px]">
                <Image
                  src="/profile-2user.svg"
                  alt="profile"
                  width={14}
                  height={14}
                />
                {job.applicants}+ applicants
              </span>
            </div>
            <div className="flex items-center gap-[16px]">
              <Button
                variant="outline"
                size="icon"
                className="w-[38px] h-[34px] p-[6px_8px] gap-[10px] rounded-[8px] border border-[#9DEAED] bg-[#E6FAFB]"
                onClick={onSave}
              >
                <Heart
                  className={` cursor-pointer ${
                    isSaved ? 'text-[#07A2A8] fill-[#07A2A8]' : 'text-gray-400'
                  }`}
                />
              </Button>
              <Button
                onClick={handleApply}
                className="h-[36px] w-[100px] px-[16px] bg-[#2563EB] hover:bg-[#1D4ED8] cursor-pointer "
              >
                <span className="font-[Gabarito] font-normal text-[13.46px] leading-[16.83px] tracking-[0px] text-white text-center">
                  Apply
                </span>
              </Button>
            </div>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};
