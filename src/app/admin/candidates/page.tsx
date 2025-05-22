"use client";

import { useState, useEffect } from "react";
import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";
import { Table } from "@/components/ui/tablee1";
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

export default function Candidates() {
  const [language, setLanguage] = useState("English");
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState({ subscription: "", usageCredit: "", dateFrom: "", dateTo: "" });
  const [activeTab, setActiveTab] = useState("active");
  const router = useRouter();

  useEffect(() => {
    const token = getAuthToken();
    console.log('Token from cookies:', token);

    if (!token) {
      console.log('No token found, using guest mode');
      setUser({ username: 'Guest' });
      setLoading(false);
      return;
    }

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
        setUser({ username: 'Guest' });
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) return <div>Loading data...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  const transformedCandidates = mockData.candidates.map((candidate) => ({
    fullName: candidate.fullName,
    email: candidate.email,
    usageCredit: candidate.usageCredit,
    metrics: {
      applications: candidate.applied,
      shortlisted: candidate.interviews,
      rejected: candidate.offers,
    },
    subscription: candidate.subscription,
    signUpDate: candidate.signUpDate,
  }));

  const filteredCandidates = transformedCandidates.filter((candidate) => {
    const matchesSubscription = !filter.subscription || candidate.subscription === filter.subscription;
    const matchesUsageCredit = !filter.usageCredit || candidate.usageCredit === filter.usageCredit;
    const candidateDate = new Date(candidate.signUpDate);
    const dateFrom = filter.dateFrom ? new Date(filter.dateFrom) : null;
    const dateTo = filter.dateTo ? new Date(filter.dateTo) : null;
    const matchesDate =
      !dateFrom ||
      !dateTo ||
      (candidateDate >= dateFrom && candidateDate <= dateTo);
    return matchesSubscription && matchesUsageCredit && matchesDate;
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <div className="hidden md:block">
        <AdminSidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <AdminHeader language={language} setLanguage={setLanguage} />
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto overflow-x-hidden max-w-full">
          <div className="flex items-start justify-between mt-4">
            <div>
              <h1 className="text-2xl font-bold">Candidates</h1>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <img src="/icons/export.png" alt="Export" className="w-5 h-5" />
              Export
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-6 gap-3 flex-wrap">
            <div className="flex space-x-2 sm:space-x-4">
              <button
                className={`px-3 py-2 rounded-lg text-sm font-medium border border-gray-200 ${activeTab === "active" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
                onClick={() => setActiveTab("active")}
              >
                Active candidates
              </button>
              <button
                className={`px-3 py-2 rounded-lg text-sm font-medium border border-gray-200 ${activeTab === "deactivated" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
                onClick={() => setActiveTab("deactivated")}
              >
                Deactivated candidates
              </button>
              <button
                className={`px-3 py-2 rounded-lg text-sm font-medium border border-gray-200 ${activeTab === "deleted" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
                onClick={() => setActiveTab("deleted")}
              >
                Deleted accounts
              </button>
            </div>
            {/* Only show the filter bar and table for the active tab */}
            {activeTab === "active" && (
              <>
                {/* middle bar */}
                <div className="flex items-center flex-wrap gap-2 md:gap-3 w-full mt-4">
                  <span className="text-[#07A2A8] font-medium mr-2">Filter by</span>
                  <span className="text-gray-700 ml-2">Show</span>
                  <input
                    type="number"
                    min={1}
                    value={10}
                    className="w-14 px-2 py-1 border border-gray-200 rounded-lg text-center text-sm bg-white"
                    // onChange={...}
                  />
                  <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2">
                    <img src="/icons/filter.png" alt="Filter" className="w-4 h-4 mr-2" />
                    <select
                      className="bg-transparent outline-none text-sm"
                      onChange={(e) => handleFilterChange('subscription', e.target.value)}
                      value={filter.subscription}
                    >
                      <option value="">Subscription type</option>
                      <option value="Premium">Premium</option>
                      <option value="Freemium">Freemium</option>
                    </select>
                  </div>
                  <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2">
                    <img src="/icons/filter.png" alt="Filter" className="w-4 h-4 mr-2" />
                    <select
                      className="bg-transparent outline-none text-sm"
                      onChange={(e) => handleFilterChange('usageCredit', e.target.value)}
                      value={filter.usageCredit}
                    >
                      <option value="">Usage credit</option>
                      <option value="UC - 8/10">UC - 8/10</option>
                      <option value="UC - 2/10">UC - 2/10</option>
                      <option value="UC - 0/10">UC - 0/10</option>
                    </select>
                  </div>
                  <span className="ml-2 text-gray-700">From</span>
                  <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2">
                    <img
                      src="/icons/calendar.png"
                      alt="Calendar"
                      className="w-4 h-4 mr-2 cursor-pointer"
                      onClick={() => document.getElementById('dateFromInput')?.focus()}
                    />
                    <input
                      id="dateFromInput"
                      type="date"
                      className="bg-transparent outline-none text-sm"
                      onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
                      value={filter.dateFrom}
                    />
                  </div>
                  <span className="ml-2 text-gray-700">To</span>
                  <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2">
                    <img
                      src="/icons/calendar.png"
                      alt="Calendar"
                      className="w-4 h-4 mr-2 cursor-pointer"
                      onClick={() => document.getElementById('dateToInput')?.focus()}
                    />
                    <input
                      id="dateToInput"
                      type="date"
                      className="bg-transparent outline-none text-sm"
                      onChange={(e) => handleFilterChange('dateTo', e.target.value)}
                      value={filter.dateTo}
                    />
                  </div>
                  <button
                    className="bg-[#07A2A8] text-white px-4 py-2 rounded-lg ml-2"
                    onClick={() => { }}
                  >
                    Apply filter
                  </button>
                  <button
                    className="text-gray-500 ml-2"
                    onClick={() => setFilter({ subscription: '', usageCredit: '', dateFrom: '', dateTo: '' })}
                  >
                    Clear filter
                  </button>
                  <div className="relative ml-2 w-[200px] max-w-sm bg-white rounded-lg">
                    <img
                      src="/icons/search-normal.png"
                      alt="Search"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                    />
                    <input
                      type="text"
                      placeholder="Search"
                      className="border border-gray-200 pl-10 pr-3 py-2 rounded-lg text-sm w-full bg-white"
                    />
                  </div>
                </div>
                {/* Table */}
                <div className="mt-6 bg-white p-4 sm:p-6 rounded-2xl shadow w-full">
                  <Table data={filteredCandidates} showUsageCredit={true} />
                </div>
              </>
            )}
            {activeTab === "deactivated" && (
              <div className="w-full mt-6 bg-white p-8 rounded-2xl shadow text-center text-gray-400 text-lg">
                No deactivated candidates.
              </div>
            )}
            {activeTab === "deleted" && (
              <div className="w-full mt-6 bg-white p-8 rounded-2xl shadow text-center text-gray-400 text-lg">
                No deleted accounts.
              </div>
            )}
          </div>
          <div className="flex justify-center mt-4">
            <button className="px-3 py-1">1</button>
            <button className="px-3 py-1">2</button>
            <button className="px-3 py-1">3</button>
            <span>...</span>
            <button className="px-3 py-1">10</button>
          </div>
        </main>
      </div>
      <style jsx global>{`
        /* Hide browser default date icon for Chrome, Safari, Edge */
        input[type="date"]::-webkit-calendar-picker-indicator {
          opacity: 0;
          display: none;
        }
        /* Hide for Firefox */
        input[type="date"]::-moz-calendar-picker-indicator {
          opacity: 0;
          display: none;
        }
        /* Hide for IE */
        input[type="date"]::-ms-input-placeholder {
          opacity: 0;
          display: none;
        }
      `}</style>
    </div>
  );
}