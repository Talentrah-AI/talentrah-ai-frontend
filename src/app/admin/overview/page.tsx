'use client';

import { useState } from 'react';
import { AdminHeader } from '@/components/AdminHeader';
import { AdminSidebar } from '@/components/AdminSidebar';
import { PieChart, LineChart } from '@/components/ui/charts';
import { Table } from '@/components/ui/table';
import { mockData } from '@/data/mockData';
import Image from 'next/image';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react"

export default function Overview() {
  const [language, setLanguage] = useState('English');

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <div className="hidden md:block">
        <AdminSidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <AdminHeader language={language} setLanguage={setLanguage} />
        <main className="flex-1 p-6 overflow-y-auto overflow-x-hidden">
        <div className="flex items-start justify-between mt-4">
  <div>
    <h1 className="text-2xl font-bold">Welcome back Admin</h1>
    <p className="text-gray-600">
      Get real-time insights, track engagement, and manage candidates with ease.
    </p>
  </div>

  <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-[10px] text-gray-700 shadow-sm hover:bg-gray-50">
      <Image src="/sort.png" alt="Filter" width={12} height={12} />
      <span>Today</span>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56 divide-y divide-gray-200 w-[160px] h-[266px] justify-center">
      <DropdownMenuItem className="text-sm bg-[#CEE1F6] w-[144px] h-[50px]">Today</DropdownMenuItem>
      <DropdownMenuItem className="text-sm w-[144px] h-[50px]">Recent</DropdownMenuItem>
      <DropdownMenuItem className="text-sm w-[144px] h-[50px]">30 days</DropdownMenuItem>
      <DropdownMenuItem className="text-sm w-[144px] h-[50px]">6 months</DropdownMenuItem>
      <DropdownMenuItem className="text-sm w-[144px] h-[50px]">Customize</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</div>


          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="mb-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6F0FB] shadow-sm">
                  <Image
                    src="/profile-2user(color).png"
                    alt="People Icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <h2 className="text-xl font-semibold">
                {mockData.totalCandidates.toLocaleString()}
              </h2>
              <p>Total candidates</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="mb-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6FAFB] shadow-sm">
                  <Image
                    src="/Resume(color).png"
                    alt="resume"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <h2 className="text-xl font-semibold">{mockData.totalResumes.toLocaleString()}</h2>
              <p>Total resumes created</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="mb-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FCEFE6] shadow-sm">
                  <Image
                    src="/Cover letter(color).png"
                    alt="cover letter"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <h2 className="text-xl font-semibold">
                {mockData.totalCoverLetters.toLocaleString()}
              </h2>
              <p>Total cover letters created</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="mb-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6FBE9] shadow-sm">
                  <Image
                    src="/briefcase(color).png"
                    alt="briefcase"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <h2 className="text-xl font-semibold">
                {mockData.totalJobsApplied.toLocaleString()}
              </h2>
              <p>Total jobs applied</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="mb-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6F0FB] shadow-sm">
                  <Image
                    src="/user(color).png"
                    alt="person"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <h2 className="text-xl font-semibold">
                {mockData.activePaidCandidates.toLocaleString()}
              </h2>
              <p>Active paid candidates</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 w-[950px] gap-4 mt-6">
            {/* Job Applications (2/3) */}
            <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-2xl shadow flex flex-col">
              {/* Header row */}
              <div className="flex items-center justify-between mb-4">
                {/* Title */}
                <h2 className="text-l font-semibold text-gray-900">
                  Job Applications
                </h2>

                {/* Legend */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500" />
                    <span className="text-[10px] text-gray-500">
                      Paid candidates
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-orange-500" />
                    <span className="text-[10px] text-gray-500">
                      Free candidates
                    </span>
                  </div>
                </div>

                {/* Job application */}
                <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-[10px] text-gray-700 shadow-sm hover:bg-gray-50">
          <Image src="/sort.png" alt="Filter" width={12} height={12} />
          <span>Job applied</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56  divide-y divide-gray-200 w-[209px] h-[215px] justify-center">
            <DropdownMenuItem className="text-sm bg-[#CEE1F6] w-[193px] h-[50px]">Job applied</DropdownMenuItem>
            <DropdownMenuItem className="text-sm w-[193px] h-[50px]">Resume created</DropdownMenuItem>
            <DropdownMenuItem className="text-sm w-[193px] h-[50px]">Cover letter created</DropdownMenuItem>
            <DropdownMenuItem className="text-sm w-[193px] h-[50px]">Active candidate</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

                {/* Filter */}
                <button className="flex items-center gap-1 bg-white border border-gray-200 px-4 py-2 rounded-lg text-[10px] text-gray-700 shadow-sm hover:bg-gray-50">
                  <Image src="/sort.png" alt="Filter" width={12} height={12} />
                  Last 7 days
                </button>
              </div>

              {/* Line chart */}
              <div className="h-[360px] -mt-2 -mb-4">
                <LineChart data={mockData.jobApplications} />
              </div>
            </div>

            {/* Subscription & Payments (1/3) */}
            <div className="bg-white w-[400px] p-6 rounded-2xl shadow flex flex-col items-center">
              <div className="flex items-center justify-between w-full mb-6">
                <h2 className="text-l font-semibold text-gray-900">
                  Subscription & Payments
                </h2>
                {/* Filter Button */}
                <button className="flex items-center gap-1 bg-white border border-gray-200 px-4 py-2 rounded-lg text-[10px] text-gray-700 shadow-sm hover:bg-gray-50">
                  <Image src="/sort.png" alt="Filter" width={12} height={12} />
                  Last 7 days
                </button>
              </div>

              {/* Pie Chart with center text */}
              <div className="relative w-70 h-70 flex items-center justify-center">
                <PieChart data={mockData.subscriptionPayments} />

                {/* Center Text */}
                <div className="absolute text-center">
                  <div className="text-gray-500 text-sm">Total candidates</div>
                  <div className="text-3xl font-bold text-gray-900">5,532</div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex justify-center gap-8 mt-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  Premium candidates
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                  Freemium candidates
                </div>
              </div>
            </div>
          </div>

          {/* Latest Candidates Table */}
          <div className="mt-6 bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-l font-semibold text-gray-900">
                Latest candidates
              </h2>
              <Link
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                View all candidates
              </Link>
            </div>
            <Table data={mockData.latestCandidates} />
          </div>
        </main>
      </div>
    </div>
  );
}
