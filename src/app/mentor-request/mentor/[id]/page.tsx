import { MentorProfiles } from "@/data/mock/mentorProfiles";
import { MentorBackground } from "@/data/mock/mentorBackground";
import * as Dialog from "@radix-ui/react-dialog";
import { AddAvailabilityModal } from "@/components/modals/AddAvaliabilityModal";
import { Globe, Linkedin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import Image from "next/image";
import SetDate from "@/components/SetDate";

export default function MentorProfile({ params }: { params: { id: string } }) {
  const mentor = MentorProfiles.find((m) => m.id === params.id);
  const background =
    MentorBackground[params.id as keyof typeof MentorBackground];

  if (!mentor) return notFound();

  return (
    <div
      className=" w-[1135px] h-[1223px]
  absolute top-[84px] left-[281px]
  rounded-[16px] border border-white/50
  bg-[#EFF0F2]"
    >
      {/* Header Section */}
      <div className="w-[1135px] h-[138px] rounded-[12px] bg-[#0780A8]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Profile Header */}
          <div className="flex items-start gap-6 ">
            <img
              src={mentor.avatar}
              alt={mentor.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg -mt-20"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">
                    {mentor.name}
                  </h1>
                  <div className="flex items-center gap-2 mt-2 text-gray-600">
                    <span>{mentor.email}</span>
                    <span>|</span>
                    <span>{mentor.phone}</span>
                  </div>
                  <span className="inline-block mt-2 px-3 py-1 bg-[#E6FBE9] text-[#07A81A] rounded-full text-sm font-normal">
                    {mentor.role}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#07A2A8]/50 hover:bg-[#07A2A8]"
                  >
                    <Linkedin className="h-[17px] w-[18.52px] text-[#07A2A8] font-medium" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#07A2A8]/50 hover:bg-[#07A2A8]"
                  >
                    <Globe className="h-[17px] w-[18.52px] text-[#07A2A8] font-medium" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between text-12px gap-[20px]">
            {/* Tabs */}
            <Tabs
              defaultValue="overview"
              className="mt-6 gap[24px] flex-2 w-[692px]"
            >
              <TabsList className="bg-white gap-[5px] p-[5px] rounded-[12px] shadow-[0px_4px_15px_0px_#1B20200D]">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="permissions">Permissions</TabsTrigger>
                <TabsTrigger value="activity">Activity log</TabsTrigger>
                <TabsTrigger value="feedbacks">Feedbacks</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-[24px]">
                {/* Overview */}
                <div className="font-normal text-xs leading-4 tracking-normal text-black w-[692px] mb-[24px]">
                  <p>{mentor.bio}</p>
                </div>
                {/* Stats */}
                <div className=" mb-8 bg-white rounded-lg p-4 shadow-[0px_4px_15px_0px_#1B20200D]">
                  <h1 className="font-gabarito font-medium text-base leading-5 tracking-normal text-[#08121D] mb-4">
                    Statistics
                  </h1>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="  rounded-lg flex items-center h-full gap-[6px]">
                      <div className="flex w-8 h-8 rounded-sm bg-cyan-50 items-center justify-center">
                        <Image
                          className="mx-auto"
                          src="/icons/clock.png"
                          alt="clock"
                          width={16}
                          height={16}
                        />
                      </div>
                      <div>
                        <div className="text-[12px] font-semibold mt-1 text-black">
                          {mentor.stats.totalMentoringTime} mins
                        </div>
                        <div className="text-[10px] text-gray-600">
                          Total mentoring time
                        </div>
                      </div>
                    </div>
                    <div className="  rounded-lg flex items-center h-full gap-[6px] ">
                      <div className="flex w-8 h-8 rounded-sm bg-[#E6F0FB]/50 items-center justify-center">
                        <Image
                          className="mx-auto"
                          src="/icons/crown-2.png"
                          alt="clock"
                          width={16}
                          height={16}
                        />
                      </div>
                      <div>
                        <div className="text-[12px] font-semibold mt-1  text-black">
                          {mentor.stats.sessionsCompleted}
                        </div>
                        <div className="text-[10px] text-gray-600">
                          Sessions completed
                        </div>
                      </div>
                    </div>
                    <div className=" rounded-lg flex items-center h-full gap-[6px]">
                      <div className="flex w-8 h-8 rounded-sm bg-[#FCEFE6]/50 items-center justify-center">
                        <Image
                          className="mx-auto"
                          src="/icons/calendar.png"
                          alt="clock"
                          width={16}
                          height={16}
                        />
                      </div>
                      <div>
                        <div className="text-[12px] font-semibold mt-1  text-black">
                          {mentor.stats.averageAttendance}
                        </div>
                        <div className="text-[10px] text-gray-600">
                          Average attendance
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Areas */}
                <div className="mb-8 bg-white rounded-lg p-4 shadow-[0px_4px_15px_0px_#1B20200D]">
                  <h1 className="text-lg font-semibold mb-4 text-black">
                    Top areas of impact
                    <br />
                    <span className="text-[#717A84] font-normal text-xs leading-4 tracking-normal ">
                      Highly discussed topics during sessions
                    </span>
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    {mentor.topAreas.map((area, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#E6FAFB] text-[#07A2A8] font-medium rounded-full text-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Background */}
                <div className="bg-white rounded-lg p-4 shadow-[0px_4px_15px_0px_#1B20200D] h-[275px] mb-8">
                  <h2 className="text-lg font-semibold mb-4 text-black ">
                    Background
                  </h2>
                  <div className="space-y-6">
                    {/* Expertise */}
                    <div className="flex justify-between w-full">
                      <h3 className="text-sm font-medium text-gray-600 mb-2">
                        Expertise
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {background.expertise.map((item, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Disciplines */}
                    <div className="flex justify-between w-full">
                      <h3 className="text-sm font-medium text-gray-600 mb-2">
                        Disciplines
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {background.disciplines.map((item, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="flex justify-between w-full">
                      <h3 className="text-sm font-medium text-gray-600 mb-2">
                        Languages
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {background.languages.map((item, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Experience */}
                <div className="bg-white rounded-lg p-4 h-[110px] shadow-[0px_4px_15px_0px_#1B20200D]">
                  <h3 className="text-sm font-medium text-black mb-2">
                    Experience
                  </h3>
                  <div className="flex justify-between items-center  w-full">
                    <div className="flex justify-center gap-4 items-center">
                      <div className="bg-[#FCEFE6]/50 p-[8px] rounded-[4px] items-center w-8 h-8 flex justify-center">
                        <Image
                          src="/icons/briefcase.png"
                          alt="briefcase icon"
                          width={14}
                          height={14}
                        />
                      </div>
                      {background.experience.map((exp, index) => (
                        <div key={index} className=" text-black">
                          <div className="font-medium text-[12px]">
                            {exp.role}
                          </div>
                          <div className="text-[10px] text-[#E98239]">
                            {exp.company}
                          </div>
                        </div>
                      ))}
                    </div>
                    {background.experience.map((exp, index) => (
                      <div key={index} className="text-black text-[10px]">
                        {exp.period}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            {/* Availability Section */}
            <div className="bg-white  mt-6 flex-1">
              <div className="p-[20px] rounded-[14px] border-[0.5px] border-[#E8EDF2] gap-[10px] ">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-black">
                    Add More Availability
                  </h2>
                </div>

                <p className="text-gray-600 mb-6">
                  Make it easier for candidates to book sessions with you by
                  updating your available dates and times.
                </p>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <Button className="rounded-[12px] border-[0.5px] border-[#0967D2] py-[5px] text-[16px] text-[#0967D2]">
                      <Image
                        src="/icons/add.png"
                        alt="add availability"
                        width={24}
                        height={24}
                      />
                      Add availability
                    </Button>
                  </Dialog.Trigger>

                  <AddAvailabilityModal />
                </Dialog.Root>
              </div>

              <div className="p-[20px] rounded-[14px] border-[0.5px] border-[#E8EDF2] gap-[10px] mt-8 ">
                <SetDate />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
