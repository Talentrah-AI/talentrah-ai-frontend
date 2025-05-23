"use client";
import { useState } from "react"
import Image from 'next/image';
import profile from '@/assets/images/profile.jpg';
import group from '@/assets/images/Group.png';
import icon4 from '@/assets/images/ICON4.png';
import {BriefcaseBusiness, InfoIcon, FileText,
X} from 'lucide-react';
import { Card } from '@/components/ui/card';
import ReminderDialog from '@/components/CandidateReminderDialog'


// interface DashboardProps {
//   CandidateId: string;
// }
//{ CandidateId }: DashboardProps
const CandidateDashboard = () => {
  

  const [openReminder, setOpenReminder] = useState(false)

  return (
    <div>
      <div className="flex items-start justify-between bg-gray-300 text-blue-800 px-4 py-3 rounded relative mt-0 mb-4">
          <div className="flex gap-2">
            <InfoIcon />
            <span>
            This user’s profile is 60% complete. Encourage them to update 
            their details to improve matching accuracy.{" "}
            <button
            onClick={() => setOpenReminder(true)}
            className="text-blue-600 font-semibold underline hover:text-blue-800 cursor-pointer"
          >
            Send a reminder
          </button>
          </span>
           {/* Reminder dialog */}
      <ReminderDialog open={openReminder} onOpenChange={setOpenReminder} />
             
          </div>
          <button className="text-blue-600 hover:text-blue-800">
          <X className="w-6 h-6" />
        </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
        <Card className="p-4 bg-white shadow items-start gap-2 w-full md:col-span-2">
         <div className="flex items-start gap-4 w-full">
          {/* Profile Image */}
          <Image
            src={profile}
            width={56}
            height={56}
            alt="Profile image of Andrew Erekosima"
            className="rounded-full object-cover border border-gray-200 shadow-sm"
          />

          {/* Right section */}
          <div className="flex flex-col gap-1 w-full">
            {/* Top Row: Name + Active */}
            <div className="flex justify-between items-center w-full">
              {/* <div className="font-semibold text-lg">Andrew Erekosima {candidateId}</div> */}
              <div className="font-semibold text-lg">Andrew Erekosima</div>
              <span className="text-green-600 text-sm whitespace-nowrap">● Active </span>
            </div>

            {/* Email + Phone */}
            <div className="text-sm text-gray-500">
              andrewerekosima1@gmail.com • 090234567890
            </div>

            {/* Freemium Button */}
            <button className="flex items-center justify-between border border-green-200 
              text-green-600 text-xs font-medium px-3 py-1 gap-1 rounded w-fit">
              <Image src={group} width={17} height={17} alt="freemium" />
              Freemium
            </button>

            {/* Bottom Row: Last login + LinkedIn */}
            <div className="flex justify-between items-center text-xs text-gray-500 w-full">
              <span>Last login: Yesterday, 12:00pm</span>
              
              <a href="#" className="flex justify-between text-gray-500 whitespace-nowrap ml-auto gap-1">
                 <Image src= {icon4} width={12} height={3} alt="ICON" />
                LinkedIn profile</a>
              
            </div>
          </div>
        </div>
      </Card>
       <Card className="p-4 bg-white shadow items-start gap-2 w-full md:col-span-1">
       <FileText className="w-6 h-6 text-[#07A2A8] bg-[#B6CBD3] rounded-xl p-1 mb-1" />
          <div className="text-xl font-bold">24</div>
          <div className="text-sm text-gray-500">Total resumes created</div>
        </Card>

        <Card className="p-4 bg-white shadow items-start gap-2 w-full md:col-span-1">
          <FileText className="w-6 h-6 text-[#E36308] bg-[#FCEFE6] rounded-xl p-1 mb-1" />
          <div className="text-xl font-bold">10</div>
          <div className="text-sm text-gray-500">Total cover letters created</div>
        </Card>

        <Card className="p-4 bg-white shadow items-start gap-2 w-full md:col-span-1">
          <BriefcaseBusiness className="w-6 h-6 text-green-400 bg-green-100 rounded-xl p-1 mb-1" />
          <div className="text-xl font-bold">50</div>
          <div className="text-sm text-gray-500">Total jobs applied</div>
        </Card>
      </div>

        
    </div>
  )
}

export default CandidateDashboard


// localhost:300/candidates?tab=active-users
// url design
// name=value pairs
// ?tab=active-users
// talentrah.com/candidates?tab=applied
// talentrah.com/candidates?tab=mentorship

// I want to build a simple implementation of a dashboard  not necassarily wiht content but to demnostrate th use of query params t omanage tabs and the respective styling .

// Im using next and TS, with tailwind for styling
