"use client";

import { useState, useEffect } from "react";
import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";
import { PieChart, LineChart } from "@/components/ui/charts";
import { Table } from "@/components/ui/table";
import { mockData } from "@/data/mockData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { getAuthToken, getAuthenticatedUser, removeAuthToken } from "@/lib/auth";

export default function Overview() {
  const [language, setLanguage] = useState("English");
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMetric, setSelectedMetric] = useState("Job applied");
  const router = useRouter();

  useEffect(() => {
    const token = getAuthToken();
    console.log('Token from cookies:', token);

    // If no token, use fallback data instead of redirecting
    if (!token) {
      console.log('No token found, using fallback data');
      setUser({ username: "Guest" }); // Fallback user data
      setLoading(false);
      return;
    }

    // Fetch user data if token exists
    const fetchUser = async () => {
      try {
        console.log('Fetching user with token:', token);
        const userData = await getAuthenticatedUser(token);
        console.log('Fetched user:', userData);
        setUser(userData);
      } catch (error: any) {
        console.error('Error fetching user:', {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
        });
        setError(`Failed to load user data: ${error.message}. Using guest mode.`);
        setUser({ username: "Guest" }); // Fallback on error
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) return <div>Loading data...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  const transformedCandidates = mockData.latestCandidates.map((candidate) => ({
    fullName: candidate.fullName,
    email: candidate.email,
    completion: candidate.completion,
    metrics: {
      applications: candidate.metrics.applications,
      shortlisted: candidate.metrics.shortlisted,
      rejected: candidate.metrics.rejected,
    },
    subscription: candidate.subscription,
  }));

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
              <h1 className="text-2xl font-bold">Welcome back, {user?.username || "Admin"}</h1>
              <p className="text-gray-600">
                Get real-time insights, track engagement, and manage candidates with ease.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-[10px] text-gray-700 shadow-lg hover:bg-gray-50">
                  <Image src="/sort.png" alt="Filter" width={15} height={15} />
                  <span>Today</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 divide-y divide-gray-200 w-[160px] h-[266px] justify-center rounded-[15px]">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-sm bg-[#CEE1F6] ml-1 mt-1 w-[144px] h-[50px] rounded-[15px] flex items-center justify-center">
                      Today
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="bottom"
                      align="end"
                      sideOffset={8}
                      className="w-full max-w-[386px] max-h-[155px] mr-52 mt-13 bg-white border border-[#D1D5DB] rounded-2xl px-6 py-5 shadow-md space-y-4"
                    >
                      <div className="flex justify-between space-x-4">
                        <button className="flex justify-between gap-2 items-center w-full max-w-[162px] h-[48px] px-4 py-3 border border-[#CBD5E1] rounded-2xl text-[12px] text-[#0F172A] font-normal whitespace-nowrap hover:bg-gray-50">
                          September 01
                          <Image
                            src="/calendar-black.png"
                            alt="calendar icon"
                            width={22}
                            height={22}
                          />
                        </button>
                        <button className="flex justify-between items-center w-full max-w-[162px] h-[48px] px-4 py-3 border border-[#CBD5E1] rounded-2xl text-[12px] text-[#0F172A] font-normal whitespace-nowrap hover:bg-gray-50">
                          September 12
                          <Image
                            src="/calendar-black.png"
                            alt="calendar icon"
                            width={22}
                            height={22}
                          />
                        </button>
                      </div>
                      <button className="w-full h-[40px] max-w-[342px] bg-white border border-[#CBD5E1] rounded-2xl text-[16px] font-normal text-[#0F172A] hover:bg-gray-50">
                        Search duration
                      </button>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenuItem className="text-sm w-[144px] ml-1 h-[50px] text-gray-400 rounded-[15px]">Recent</DropdownMenuItem>
                  <DropdownMenuItem className="text-sm w-[144px] ml-1 h-[50px] text-gray-400 rounded-[15px]">30 days</DropdownMenuItem>
                  <DropdownMenuItem className="text-sm w-[144px] ml-1 h-[50px] text-gray-400 rounded-[15px]">6 months</DropdownMenuItem>
                  <DropdownMenuItem className="text-sm w-[144px] ml-1 h-[50px] text-gray-400 rounded-[15px]">Customize</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="mb-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6  shadow-sm">
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
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 w-[950px] gap-4 mt-6">
            <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-2xl shadow flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-l font-semibold text-gray-900">
                  {selectedMetric === "Resume created"
                    ? "Resumes created"
                    : selectedMetric === "Cover letter created"
                    ? "Cover letters created"
                    : selectedMetric === "Mentorship request"
                    ? "Mentorship request"
                    : "Job Applications"}
                </h2>
                <div className="flex items-center gap-6">
                  {selectedMetric === "Job applied" && (
                    <>
                      <div className="flex items-center gap-2 mr-6">
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
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-[10px] text-gray-700 shadow-lg hover:bg-gray-50">
                      <Image src="/sort.png" alt="Filter" width={15} height={15} />
                      <span>{selectedMetric === "Job applied" ? "Job applied" : "Resume created"}</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="divide-y divide-gray-200 w-[209px] h-[215px] justify-center rounded-[15px]">
                      <DropdownMenuItem
                        className={`text-sm justify-start ml-1 mt-1 w-[193px] h-[50px] rounded-[15px] ${selectedMetric === "Job applied" ? "bg-[#CEE1F6]" : "text-gray-400"}`}
                        onClick={() => setSelectedMetric("Job applied")}
                      >
                        Job applied
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className={`text-sm w-[193px] ml-1 h-[50px] rounded-[15px] ${selectedMetric === "Resume created" ? "bg-[#CEE1F6]" : "text-gray-400"}`}
                        onClick={() => setSelectedMetric("Resume created")}
                      >
                        Resume created
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className={`text-sm w-[193px] ml-1 h-[50px] rounded-[15px] ${selectedMetric === "Cover letter created" ? "bg-[#CEE1F6]" : "text-gray-400"}`}
                        onClick={() => setSelectedMetric("Cover letter created")}
                      >
                        Cover letter created
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className={`text-sm w-[193px] ml-1 h-[50px] rounded-[15px] ${selectedMetric === "Mentorship request" ? "bg-[#CEE1F6]" : "text-gray-400"}`}
                        onClick={() => setSelectedMetric("Mentorship request")}
                      >
                        Mentorship request
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <button className="flex items-center gap-1 bg-white border border-gray-200 px-4 py-2 rounded-lg text-[10px] text-gray-700 shadow-lg hover:bg-gray-50">
                    <Image src="/sort.png" alt="Filter" width={15} height={15} />
                    Last 7 days
                  </button>
                </div>
              </div>
              <div className="h-[360px] -mt-2 -mb-4">
                {selectedMetric === "Job applied" && (
                  <LineChart data={mockData.jobApplications} />
                )}
                {selectedMetric === "Resume created" && (
                  <LineChart data={mockData.resumesCreated} />
                )}
                {selectedMetric === "Cover letter created" && (
                  <LineChart data={mockData.coverLettersCreated} />
                )}
                {selectedMetric === "Mentorship request" && (
                  <LineChart data={mockData.mentorshipRequest} />
                )}
              </div>
            </div>
            
            <div className="w-full bg-white w-[400px] p-6 rounded-2xl shadow flex flex-col items-center">
              <div className="flex items-center justify-between w-full mb-6">
                <h2 className="text-l font-semibold text-gray-900">
                  Subscription & Payments
                </h2>
                <button className="flex items-center gap-1 bg-white border border-gray-200 px-4 py-2 rounded-lg text-[10px] text-gray-700 shadow-lg hover:bg-gray-50">
                  <Image src="/sort.png" alt="Filter" width={15} height={15} />
                  Last 7 days
                </button>
              </div>
              <div className="relative w-70 h-70 flex items-center justify-center">
                <PieChart data={mockData.subscriptionPayments} />
                <div className="absolute text-center">
                  <div className="text-gray-500 text-sm">Total candidates</div>
                  <div className="text-3xl font-bold text-gray-900">5,532</div>
                </div>
              </div>
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
            <Table data={transformedCandidates} showUsageCredit={false} />
          </div>
        </main>
      </div>
    </div>
  );
}