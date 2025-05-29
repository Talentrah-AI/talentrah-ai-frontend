'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Clock,
  Users,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Globe,
  X,
  Plus,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';




const availabilitySlots = [
  { date: 'Mon 28 March, 2025', time: '09:00 - 10:00', available: true },
  { date: 'Mon 28 March, 2025', time: '12:00 - 12:30', available: true },
  { date: 'Mon 28 March, 2025', time: '09:00 - 10:00', available: false },
  { date: 'Mon 28 March, 2025', time: '12:00 - 12:30', available: true },
  { date: 'Mon 28 March, 2025', time: '09:00 - 10:00', available: true },
];


const MentorsId = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  return (
    <div className="bg-white">
      {' '}
      <div className="relative mb-4 ">
        <div className="h-[140px] bg-[#0780A8] rounded-[12px]"></div>
        <div className="absolute top-24 left-6 flex items-end">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-white">
              <Image
                src={
                  'https://res.cloudinary.com/dk5mfu099/image/upload/v1747926464/This_striking_digital_artwork_captures_the_essence_of_a_mysterious_bearded_figure_tlzxwi.jpg'
                }
                alt={'Profile photo'}
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>

            <Badge className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white">
              Mentor
            </Badge>
          </div>
          <div className="ml-4  flex text-sm md:text-[16px] font-bold text-[#08121D] gap-2">
            <h1 className="">Daniel stephen - </h1>
            <p className="">(product manager)</p>
          </div>
        </div>
        <div className="flex justify-end p-4">
          <div className="flex gap-2">
            <Button size="sm" className="bg-[#E6FAFB] rounded-full py-1">
              <Linkedin className="w-4 h-4 text-[#07A2A8]" />
            </Button>
            <Button size="sm" className="bg-[#E6FAFB] rounded-full">
              <Globe className="w-4 h-4 text-[#07A2A8]" />
            </Button>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6 mt-10">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Info */}
          <Card className=" text-[#08121D] text-sm">
            <CardContent className="px-6">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 " />
                  <span>andrewereksosima@yahoo.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 " />
                  <span>+2348147885</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 " />
                  <span>Nigeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 " />
                  <span>Male</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 " />
                  <span>20 years of experience</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs Content */}
          <Card className="bg-white">
            <Tabs
              value={selectedTab}
              onValueChange={setSelectedTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4 bg-gray-50 px-4 h-auto ">
                <TabsTrigger
                  value="overview"
                  className={cn(
                    ' data-[state=active]:bg-gradient-to-r  data-[state=active]:from-[#0967D2]  data-[state=active]:to-[#09CBD2] data-[state=active]:text-white py-2 data-[state=active]:shadow-[#0967D2] border-none'
                  )}
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="permissions"
                  className={cn(
                    ' data-[state=active]:bg-gradient-to-r  data-[state=active]:from-[#0967D2]  data-[state=active]:to-[#09CBD2] data-[state=active]:text-white py-2 data-[state=active]:shadow-[#0967D2] border-none'
                  )}
                >
                  Permissions
                </TabsTrigger>
                <TabsTrigger
                  value="activity"
                  className={cn(
                    ' data-[state=active]:bg-gradient-to-r  data-[state=active]:from-[#0967D2]  data-[state=active]:to-[#09CBD2] data-[state=active]:text-white py-2 data-[state=active]:shadow-[#0967D2] border-none'
                  )}
                >
                  Activity
                </TabsTrigger>
                <TabsTrigger
                  value="feedback"
                  className={cn(
                    ' data-[state=active]:bg-gradient-to-r  data-[state=active]:from-[#0967D2]  data-[state=active]:to-[#09CBD2] data-[state=active]:text-white py-2 data-[state=active]:shadow-[#0967D2] border-none'
                  )}
                >
                  Feedback
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="p-6 space-y-6">
                {/* About Section */}
                <div>
                  <p className="text-[#414A53] leading-relaxed text-sm">
                    Product leader with over 20 years of experience in product
                    management, digital transformation, and product development
                    across multiple industries. A design thinking practitioner
                    and speaker who is passionate about building and empowering
                    people.
                  </p>
                  <p className="text-[#414A53] leading-relaxed mt-2 text-sm">
                    I was leading both Product and Design teams in my previous
                    roles as the Regional Head of Product & Design of SFSA (FNB
                    Unicorn Bank) and Head of Product & Design at Interswitch
                    Group (Africa's Fintech Unicorn). I am a recipient of the
                    Excellence Awards 2021.
                  </p>
                </div>

                {/* Top Areas of Impact */}
                <div className="shadow-nav p-3 rounded-[12px]">
                  <h3 className="text-[16px] text-[#08121D] font-semibold mb-3">
                    Top areas of impact
                  </h3>
                  <p className="text-sm text-[#717A84] font-normal mb-4">
                    Highly discussed topics during sessions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-[#E6FAFB] text-[#07A2A8] font-sm py-3 px-4 rounded-[8px]"
                    >
                      General mentorship
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-[#E6FAFB] text-[#07A2A8] font-sm py-3 px-4 rounded-[8px]"
                    >
                      Resume & Portfolio review
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-[#E6FAFB] text-[#07A2A8] font-sm py-3 px-4 rounded-[8px]"
                    >
                      Design career path
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-[#E6FAFB] text-[#07A2A8] font-sm py-3 px-4 rounded-[8px]"
                    >
                      Breaking into tech
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-[#E6FAFB] text-[#07A2A8] font-sm py-3 px-4 rounded-[8px]"
                    >
                      +6 others
                    </Badge>
                  </div>
                </div>

                {/* Background */}
                <div className="space-y-4 text-[#08121D] shadow-nav p-3 rounded-[12px] ">
                  <h3 className="text-[16px] font-semibold  ">Background</h3>

                  <div className="flex  justify-between pr-8 items-center py-2">
                    <h4 className="font-normal  text-sm">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {/* {mentor.expertise.map((exp, i) => (
                                <Badge key={i} variant="outline">
                                  {exp}
                                </Badge>
                              ))} */}
                      <Badge variant="outline">+3</Badge>
                    </div>
                  </div>

                  <div className="flex  justify-between pr-8 items-center py-2">
                    <h4 className="font-normal text-sm">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Communication</Badge>
                      <Badge variant="outline">Design thinking</Badge>
                      <Badge variant="outline">Collaboration</Badge>
                      <Badge variant="outline">+9</Badge>
                    </div>
                  </div>

                  <div className="flex  justify-between pr-8 items-center py-2">
                    <h4 className="font-normal  text-sm">Disciplines</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">UX Design</Badge>
                      <Badge variant="outline">UI Design</Badge>
                      <Badge variant="outline">Service Design</Badge>
                      <Badge variant="outline">UX Research</Badge>
                      <Badge variant="outline">+7</Badge>
                    </div>
                  </div>

                  <div className="flex  justify-between pr-8 items-center py-2">
                    <h4 className="font-normal  text-sm">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Figma</Badge>
                      <Badge variant="outline">Framer</Badge>
                      <Badge variant="outline">Miro</Badge>
                      <Badge variant="outline">+3</Badge>
                    </div>
                  </div>

                  <div className="flex  justify-between pr-8 items-center py-2">
                    <h4 className="font-normal  text-sm">Fluent in</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">English</Badge>
                      <Badge variant="outline">Mandarin Chinese</Badge>
                      <Badge variant="outline">Mandarin Chinese</Badge>
                    </div>
                  </div>
                </div>

                {/* Experience Card */}
                <Card className="bg-white space-y-4 shadow-nav rounded-[12px]">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Experience</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-teal-600"
                      >
                        View more
                      </Button>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-orange-500 rounded"></div>
                      </div>
                      <div className="flex justify-between  w-full items-center">
                        <div>
                          <h4 className="font-semibold text-[#08121D] text-[16px]">
                            Product Leader/Trainer/Coach
                          </h4>
                          <p className="text-sm text-[#E98239]">Singapore</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          MAY 2024 - PRESENT
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="permissions" className="p-6">
                <div className="text-center py-8">
                  <h3 className="text-lg font-semibold mb-2">Permissions</h3>
                  <p className="text-gray-600">
                    Manage user permissions and access levels.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="activity" className="p-6">
                <div className="text-center py-8">
                  <h3 className="text-lg font-semibold mb-2">Activity Log</h3>
                  <p className="text-gray-600">
                    View recent activity and session history.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="feedback" className="p-6">
                <div className="text-center py-8">
                  <h3 className="text-lg font-semibold mb-2">Feedback</h3>
                  <p className="text-gray-600">
                    View feedback and ratings from mentees.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className=" ">
            <CardContent className="p-6 ">
              <div className="boder-[#E8EDF2] border rounded-md p-3 mb-6">
                <h3 className="text-lg font-semibold mb-4 text-[#08121D]">
                  Add More Availability
                </h3>
                <p className="text-[16px] text-[#515D68] mb-4">
                  Make it easier for candidates to book sessions with you by
                  updating your available dates and times.
                </p>

                <Button className="w-full mb-2 text-[#0967D2] hover:bg-[#0752A8] bg-transparent hover:text-white ring-1">
                  <Plus className="w-4 h-4 mr-2" />
                  Add availability
                </Button>
              </div>

              <div className="space-y-4 boder-[#E8EDF2] border rounded-md p-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Set dates</h4>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Available</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Booked</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {availabilitySlots.map((slot, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div>
                        <div className="font-medium text-sm">{slot.date}</div>
                        <div className="text-xs text-gray-500">{slot.time}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${slot.available ? 'bg-green-500' : 'bg-red-500'}`}
                        ></div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0"
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MentorsId;
