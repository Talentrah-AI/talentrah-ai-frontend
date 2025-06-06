import React from "react";
import Image from "next/image";
import { CalendarDaysIcon,
     GlobeIcon, CrownIcon, CalendarIcon,
    MapPinIcon,
    ClockIcon,
  } from 'lucide-react';


const JobItem = ({ logo, title, methodType }) =>  {
    return (
      <div className="flex items-start gap-4 bg-white rounded-xl p-0">
        {/* Company Logo */}
        <div className='mt-3'>
        <Image
          src={logo}
          alt="Company Logo"
          width={35}
          height={35}
          className="rounded-lg"
        /> </div>
  
        {/* Job Info */}
        <div className="flex-1">
          <div className="flex items-center gap-5 mb-3">
            <h3 className="font-semibold text-gray-900 text-[15px]">
              {title}
            </h3>
  
            {/* Applied Method Tag */}
            <span className={`text-xs font-medium px-3 py-1 rounded-xl ${
              methodType === "AI"
                ? "bg-blue-100 text-blue-700"
                : "bg-orange-100 text-orange-700"
            }`}>
              {methodType === "AI" ? "Applied with AI" : "Applied manually"}
            </span>
          </div>
  
          {/* Meta Info */}
          <div className="text-xs text-gray-500 mt-1 flex flex-wrap gap-x-1 gap-y-1">
            <div className="flex items-center gap-1">
              <MapPinIcon className="w-3.5 h-3.5" />
              <span>Lagos, Nigeria |</span>
            </div>
            <div className="flex items-center gap-1">
              <ClockIcon className="w-3.5 h-3.5" />
              <span>Full-time |</span>
            </div>
            <div className="flex items-center gap-1">
              <GlobeIcon className="w-3.5 h-3.5" />
              <span>Remote |</span>
            </div>
            <div className="flex items-center gap-1">
              <CrownIcon className="w-3.5 h-3.5" />
              <span>Senior |</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>2+ years Experience |</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDaysIcon className="w-3.5 h-3.5" />
              <span>Date Applied: 12/02/2024</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default JobItem