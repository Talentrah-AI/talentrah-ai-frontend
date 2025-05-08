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
    if (!token) {
      setError("No authentication token found. Please log in again.");
      router.push("/admin/login");
      return;
    }

    const fetchUser = async () => {
      try {
        const userData = await getAuthenticatedUser(token);
        setUser(userData);
      } catch (error: any) {
        setError(`Failed to load user data: ${error.message}. Please try logging in again.`);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) return <div>Loading user data...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!user) return null;

  // Transform candidates data to match the Table component's Candidate interface
  const transformedCandidates = mockData.candidates.map((candidate) => ({
    fullName: candidate.fullName,
    email: candidate.email,
    metrics: {
      applications: candidate.applied,
      shortlisted: candidate.interviews,
      rejected: candidate.offers,
    },
    subscription: candidate.subscription,
    completion: `${Math.floor(Math.random() * 100)}%`, // Mock completion value
  }));

  const filteredCandidates = transformedCandidates.filter((candidate) => {
    const matchesSubscription = !filter.subscription || candidate.subscription === filter.subscription;
    const matchesUsageCredit = !filter.usageCredit || (mockData.candidates.find(c => c.fullName === candidate.fullName)?.usageCredit === filter.usageCredit);
    const matchesDate = !filter.dateFrom || !filter.dateTo || 
      (new Date(mockData.candidates.find(c => c.fullName === candidate.fullName)?.signUpDate || '') >= new Date(filter.dateFrom) && 
       new Date(mockData.candidates.find(c => c.fullName === candidate.fullName)?.signUpDate || '') <= new Date(filter.dateTo));
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
        <main className="flex-1 p-6 overflow-y-auto overflow-x-hidden">
          <div className="flex items-start justify-between mt-4">
            <div>
              <h1 className="text-2xl font-bold">Candidates</h1>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Export</button>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex space-x-4">
              <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-gray-700">Active candidates</button>
              <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-gray-700">Deactivated candidates</button>
              <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-gray-700">Deleted accounts</button>
            </div>
            <div className="flex space-x-4">
              <select className="bg-white border border-gray-200 px-4 py-2 rounded-lg" onChange={(e) => handleFilterChange("subscription", e.target.value)}>
                <option value="">Subscription type</option>
                <option value="Premium">Premium</option>
                <option value="Freemium">Freemium</option>
              </select>
              <select className="bg-white border border-gray-200 px-4 py-2 rounded-lg" onChange={(e) => handleFilterChange("usageCredit", e.target.value)}>
                <option value="">Usage credit</option>
                <option value="UC - 8/10">UC - 8/10</option>
                <option value="UC - 2/10">UC - 2/10</option>
              </select>
              <div className="flex space-x-2">
                <input type="date" className="bg-white border border-gray-200 px-4 py-2 rounded-lg" onChange={(e) => handleFilterChange("dateFrom", e.target.value)} />
                <input type="date" className="bg-white border border-gray-200 px-4 py-2 rounded-lg" onChange={(e) => handleFilterChange("dateTo", e.target.value)} />
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg" onClick={() => {}}>Apply filter</button>
              <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-gray-700" onClick={() => setFilter({ subscription: "", usageCredit: "", dateFrom: "", dateTo: "" })}>Clear filter</button>
              <input type="text" placeholder="Search" className="border border-gray-200 px-4 py-2 rounded-lg" />
            </div>
          </div>
          <div className="mt-6 bg-white p-6 rounded-2xl shadow">
            <Table data={filteredCandidates} />
          </div>
          <div className="flex justify-center mt-4">
            <button className="px-3 py-1">1</button>
            <button className="px-3 py-1">2</button>
            <button className="px-3 py-1">3</button>
            <span>...</span>
            <button className="px-3 py-1">10</button>
            <span></span>
          </div>
        </main>
      </div>
    </div>
  );
}