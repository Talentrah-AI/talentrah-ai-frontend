"use client";

import { useState, useEffect } from "react";
import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";
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

export default function Candidates() {
  const [language, setLanguage] = useState("English");
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState({ subscription: "", usageCredit: "", dateFrom: "", dateTo: "" });
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
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Export</button>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 gap-4 flex-wrap">
            <div className="flex space-x-2 sm:space-x-4">
              <button className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-gray-700 text-sm">Active candidates</button>
              <button className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-gray-700 text-sm">Deactivated candidates</button>
              <button className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-gray-700 text-sm">Deleted accounts</button>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 flex-wrap">
              <select
                className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-sm"
                onChange={(e) => handleFilterChange("subscription", e.target.value)}
                value={filter.subscription}
              >
                <option value="">Subscription type</option>
                <option value="Premium">Premium</option>
                <option value="Freemium">Freemium</option>
              </select>
              <select
                className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-sm"
                onChange={(e) => handleFilterChange("usageCredit", e.target.value)}
                value={filter.usageCredit}
              >
                <option value="">Usage credit</option>
                <option value="UC - 8/10">UC - 8/10</option>
                <option value="UC - 2/10">UC - 2/10</option>
                <option value="UC - 0/10">UC - 0/10</option>
              </select>
              <div className="flex space-x-2">
                <input
                  type="date"
                  className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-sm"
                  onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
                  value={filter.dateFrom}
                />
                <input
                  type="date"
                  className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-sm"
                  onChange={(e) => handleFilterChange("dateTo", e.target.value)}
                  value={filter.dateTo}
                />
              </div>
              <button
                className="bg-[#07A2A8] text-white px-3 py-2 rounded-lg text-sm"
                onClick={() => {}}
              >
                Apply filter
              </button>
              <button
                className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-gray-700 text-sm"
                onClick={() => setFilter({ subscription: "", usageCredit: "", dateFrom: "", dateTo: "" })}
              >
                Clear filter
              </button>
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-200 px-3 py-2 rounded-lg text-sm"
              />
            </div>
          </div>
          <div className="mt-6 bg-white p-4 sm:p-6 rounded-2xl shadow w-full">
            <Table data={filteredCandidates} showUsageCredit={true} />
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
    </div>
  );
}