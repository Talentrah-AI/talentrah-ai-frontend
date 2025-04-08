<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Heart, MapPin, Building2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
=======
// src/components/JobCard.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, MapPin, Building2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";
>>>>>>> b7a5e52850faecb387c63a04dac16b6be2b06078

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
<<<<<<< HEAD
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
=======
  matchQuality: "Excellent" | "Good" | "Fair";
  daysAgo: number;
  applicants: number;
  companyLogo: string;
}

export function JobCard({
  title,
  company,
  location,
  jobType,
  remote,
  seniorityLevel,
  experience,
  description,
  matchPercentage,
  matchQuality,
  daysAgo,
  applicants,
  companyLogo,
}: JobCardProps) {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleApply = () => {
    setIsLoading(true);
    const params = new URLSearchParams({
      jobTitle: title,
      company: company,
    });

    // Simulate processing (replaceable with API call later)
    setTimeout(() => {
      setIsLoading(false);
      router.push(`/jobdashboard/premium-user-apply?${params.toString()}`); // Fixed route
    }, 2000); // 2-second delay

    // Future API Integration Example:
    /*
    setIsLoading(true);
    fetch('/api/apply', {
      method: 'POST',
      body: JSON.stringify({ jobTitle, company }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(() => {
        setIsLoading(false);
        router.push(`/jobdashboard/premium-user-apply?${params.toString()}`);
      })
      .catch(error => {
        console.error('Error applying:', error);
        setIsLoading(false);
      });
    */
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const getProgressColor = (quality: "Excellent" | "Good" | "Fair") => {
    switch (quality) {
      case "Excellent":
        return "#22C55E"; // green
      case "Good":
        return "#0967D2"; // blue
      case "Fair":
        return "#F97316"; // orange
      default:
        return "#9CA3AF"; // gray
>>>>>>> b7a5e52850faecb387c63a04dac16b6be2b06078
    }
  };

  return (
<<<<<<< HEAD
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
=======
    <div className="relative">
      {/* Job Card Content */}
      <div
        className={`transition-all duration-200 ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
      >
        <Card className="w-[800px] h-[190px] p-[16px] rounded-xl bg-white mb-4">
          <div className="flex flex-col gap-4 h-full">
            <CardContent className="p-0">
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-start gap-[16px]">
                  <div className="min-w-[48px] h-[48px] rounded-[4px] bg-gray-100 flex items-center justify-center overflow-hidden">
                    {companyLogo ? (
                      <Image
                        src={companyLogo}
                        alt={`${company} logo`}
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                      />
                    ) : (
                      <Building2 className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-gabarito font-normal text-[16px] leading-[20px] text-[#08121D] mb-2">
                      {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-[10px] font-gabarito font-normal text-[10px] leading-[12px] text-[#717A84]">
                      <div className="flex items-center gap-[6px] border-r-[1px] border-r-gray-200 pr-[10px]">
                        <MapPin className="h-4 w-4 shrink-0" />
                        <span className="truncate">{location}</span>
                      </div>
                      <div className="flex items-center gap-[6px] border-r-[1px] border-r-gray-200 pr-[10px]">
                        <Image
                          src="/briefcase.svg"
                          alt="Briefcase"
                          width={14}
                          height={14}
                          className="shrink-0"
                        />
                        <span className="truncate">{jobType}</span>
                      </div>
                      {remote && (
                        <div className="flex items-center gap-[6px] border-r-[1px] border-r-gray-200 pr-[10px]">
                          <Image
                            src="/clock.svg"
                            alt="Remote"
                            width={14}
                            height={14}
                            className="shrink-0"
                          />
                          <span>Remote</span>
                        </div>
                      )}
                      <div className="flex items-center gap-[6px] border-r-[1px] border-r-gray-200 pr-[10px]">
                        <Image
                          src="/crown-2.svg"
                          alt="Seniority Level"
                          width={14}
                          height={14}
                          className="shrink-0"
                        />
                        <span className="truncate">{seniorityLevel}</span>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <Image
                          src="/calendar.svg"
                          alt="Experience"
                          width={14}
                          height={14}
                          className="shrink-0"
                        />
                        <span className="truncate">{experience}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="font-gabarito font-normal text-[12px] leading-[16px] text-[#31383E] line-clamp-2">
                  {description}
                </p>
              </div>
            </CardContent>

            <div className="border-[0.5px] border-[#EFF0F2]"></div>

            <CardFooter className="w-full h-[34px] flex items-center justify-between p-0">
              <div className="flex items-center gap-[10px]">
                <Progress
                  value={matchPercentage}
                  className="h-[8px] w-[200px] gap-[8px] rounded-full"
                  indicatorClassName={`bg-[${getProgressColor(matchQuality)}]`}
                />
                <span
                  style={{ color: getProgressColor(matchQuality) }}
                  className="font-gabarito font-medium text-[11px] leading-[16px] tracking-[0px] whitespace-nowrap"
                >
                  {matchPercentage}%, {matchQuality} match
                </span>
              </div>
              <div className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-8 font-gabarito font-normal text-[10px] leading-[12px] text-[#717A84]">
                  <span className="flex items-center gap-[4px] whitespace-nowrap">
                    <Image
                      src="/calendar.svg"
                      alt="calendar"
                      width={14}
                      height={14}
                      className="shrink-0"
                    />
                    {daysAgo} days ago
                  </span>
                  <span className="flex items-center gap-[4px] whitespace-nowrap">
                    <Image
                      src="/profile-2user.svg"
                      alt="profile"
                      width={14}
                      height={14}
                      className="shrink-0"
                    />
                    {applicants}+ applicants
                  </span>
                </div>
                <div className="flex items-center gap-[16px] shrink-0">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleLike}
                    className={`w-[38px] h-[34px] p-[6px_8px] gap-[10px] rounded-[8px] border ${
                      isLiked ? 'border-[#9DEAED] bg-[#E6FAFB]' : 'border-[#9DEAED] bg-[#E6FAFB]'
                    }`}
                  >
                    <Heart
                      className={`h-4 w-4 ${isLiked ? 'text-[#07A2A8] fill-[#07A2A8]' : 'text-[#07A2A8]'}`}
                    />
                  </Button>
                  <Button
                    onClick={handleApply}
                    className="h-[36px] w-[100px] px-[16px] bg-[#2563EB] hover:bg-[#1D4ED8] cursor-pointer"
                    disabled={isLoading}
                  >
                    <span className="font-[Gabarito] font-normal text-[13.46px] leading-[16.83px] tracking-[0px] text-white text-center">
                      {isLoading ? "Applying..." : "Apply"}
                    </span>
                  </Button>
                </div>
              </div>
            </CardFooter>
          </div>
        </Card>
      </div>

      {/* Loading Spinner Overlay */}
      {isLoading && <LoadingSpinner message="" />}
    </div>
  );
}
>>>>>>> b7a5e52850faecb387c63a04dac16b6be2b06078
