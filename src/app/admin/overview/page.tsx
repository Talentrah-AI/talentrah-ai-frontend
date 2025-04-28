'use client';

import { useState } from 'react';
import { AdminHeader } from '@/components/AdminHeader';
import { AdminSidebar } from '@/components/AdminSidebar';
import { PieChart, LineChart } from '@/components/ui/charts';
import { Table } from '@/components/ui/table';
import { mockData } from '@/data/mockData';
import Image from 'next/image';

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
          <h1 className="text-2xl font-bold">Welcome back Admin</h1>
          <p className="text-gray-600">
            Get real-time insights, track engagement, and manage candidates with
            ease.
          </p>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="mb-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm">
                  <Image
                    src="/profile-2user(color).png"
                    alt="People Icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <h2 className="text-xl font-semibold">
                {mockData.totalCandidates}
              </h2>
              <p>Total candidates</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="mb-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm">
                  <Image
                    src="/Resume(color).png"
                    alt="resume"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <h2 className="text-xl font-semibold">{mockData.totalResumes}</h2>
              <p>Total resumes created</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="mb-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm">
                  <Image
                    src="/Cover letter(color).png"
                    alt="cover letter"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <h2 className="text-xl font-semibold">
                {mockData.totalCoverLetters}
              </h2>
              <p>Total cover letters created</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="mb-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm">
                  <Image
                    src="/briefcase(color).png"
                    alt="briefcase"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <h2 className="text-xl font-semibold">
                {mockData.totalJobsApplied}
              </h2>
              <p>Total jobs applied</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="mb-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm">
                  <Image
                    src="/user(color).png"
                    alt="person"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <h2 className="text-xl font-semibold">
                {mockData.activePaidCandidates}
              </h2>
              <p>Active paid candidates</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
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
                    <span className="text-sm text-gray-500">
                      Paid candidates
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-orange-500" />
                    <span className="text-sm text-gray-500">
                      Free candidates
                    </span>
                  </div>
                </div>

                {/* Filter */}
                <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 shadow-sm hover:bg-gray-50">
                  <Image src="/sort.png" alt="Filter" width={16} height={16} />
                  Last 7 days
                </button>
              </div>

              {/* Line chart */}
              <div className="h-[400px]">
                <LineChart data={mockData.jobApplications} />
              </div>
            </div>

            {/* Subscription & Payments (1/3) */}
            <div className="bg-white p-6 rounded-2xl shadow flex flex-col items-center">
              <div className="flex items-center justify-between w-full mb-6">
                <h2 className="text-l font-semibold text-gray-900">
                  Subscription & Payments
                </h2>
                {/* Filter Button */}
                <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 shadow-sm hover:bg-gray-50">
                  <Image src="/sort.png" alt="Filter" width={16} height={16} />
                  Last 7 days
                </button>
              </div>

              {/* Pie Chart with center text */}
              <div className="relative w-64 h-64 flex items-center justify-center">
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
              <h2 className="text-lg font-semibold text-gray-900">
                Latest Candidates
              </h2>
              <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 shadow-sm hover:bg-gray-50">
                <Image src="/sort.png" alt="Filter" width={16} height={16} />
                Filter
              </button>
            </div>
            <Table data={mockData.latestCandidates} />
          </div>
        </main>
      </div>
    </div>
  );
}
