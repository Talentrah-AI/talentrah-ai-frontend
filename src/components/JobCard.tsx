// src/components/JobCard.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, MapPin, Building2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";

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
  matchQuality: "Excellent" | "Good" | "Fair";
  daysAgo: number;
  applicants: number;
  companyLogo: string;
  isSaved?: boolean;
  onSave?: () => void;
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
  isSaved = false,
  onSave,
}: JobCardProps) {
  const router = useRouter();
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
      router.push(`/jobdashboard/premium-user-apply?${params.toString()}`);
    }, 2000);
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
    }
  };

  return (
    <div className="relative">
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
                        alt={company}
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
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{location}</span>
                      </div>
                      <div className="flex items-center gap-[6px] border-r-[1px] border-r-gray-200 pr-[10px]">
                        <span className="truncate">{jobType}</span>
                      </div>
                      {remote && (
                        <div className="flex items-center gap-[6px] border-r-[1px] border-r-gray-200 pr-[10px]">
                          <Image
                            src="/globe.svg"
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
                    onClick={onSave}
                    className={`w-[38px] h-[34px] p-[6px_8px] gap-[10px] rounded-[8px] border ${
                      isSaved ? 'border-[#9DEAED] bg-[#E6FAFB]' : 'border-[#9DEAED] bg-[#E6FAFB]'
                    }`}
                  >
                    <Heart
                      className={`h-4 w-4 ${isSaved ? 'text-[#07A2A8] fill-[#07A2A8]' : 'text-[#07A2A8]'}`}
                    />
                  </Button>
                  <Button
                    onClick={handleApply}
                    className="h-[36px] w-[100px] px-[16px] bg-[#2563EB] hover:bg-[#1D4ED8] cursor-pointer"
                    disabled={isLoading}
                  >
                    <span className="font-[Gabarito] font-normal text-[13.46px] leading-[16.83px] tracking-[0px] text-white text-center">
                      {isLoading ? 'Applying...' : 'Apply'}
                    </span>
                  </Button>
                </div>
              </div>
            </CardFooter>
          </div>
        </Card>
      </div>

      {isLoading && <LoadingSpinner message="" />}
    </div>
  );
}
