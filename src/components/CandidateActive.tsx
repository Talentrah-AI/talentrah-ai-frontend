"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AdminHeader from '@/components/AdminHeader';
import CandidateSidebar from '@/components/CandidateSidebar';
import JobItem from '@/components/JobItem'
import Dashboard from '@/components/CandidateDashboard';
import { MoreVerticalIcon, Download, CalendarIcon, MoreVertical, Search, Mail, Settings,ChevronLeftCircle, ChevronRightCircle, SortDescIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import image16 from '@/assets/images/image16.png';
import image17 from '@/assets/images/image17.png';
import image18 from '@/assets/images/image18.png';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import ResumeCard from '@/components/ResumeCard';
import CoverCard from '@/components/CoverCard';
import ActivityTable from '@/components/CandidateActivityLog';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover"
import { Calendar } from "@/components/ui/Calendar"; // replace with your date picker
import CandidateMentoship from '@/components/CandidateMentoship';
import EmailPopup from '@/components/EmailPopup';
import CandidateFeed from '@/components/CandidateFeedback';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"


function Page() {
  const resumes = [
    {
      name: "Mercy-Resume-UI-Designer",
      updated: "02/02/2025",
      created: "01/01/2025",
      category: "UI/UX Design",
      isDefault: true,
      isAiOptimized: true,
    },
    {
      name: "Mercy-Resume-UI-Designer",
      updated: "02/02/2025",
      created: "01/01/2025",
      category: "UI/UX Design",
      isAiOptimized: true,
    },
    {
        name: "Mercy-Resume-UI-Designer",
        updated: "02/02/2025",
        created: "01/01/2025",
        category: "UI/UX Design",
        isAiOptimized: true,
    },
    {
        name: "Mercy-Resume-UI-Designer",
        updated: "02/02/2025",
        created: "01/01/2025",
        category: "UI/UX Design",
        isAiOptimized: true,
    },
    {
        name: "Mercy-Resume-UI-Designer",
        updated: "02/02/2025",
        created: "01/01/2025",
        category: "UI/UX Design",
        isAiOptimized: true,
    },
  ];

  const searchParams = useSearchParams();
  const router = useRouter();
  const tab = searchParams.get('tab') || 'Job-Applied';
  

  const handleTabChange = (value: string) => {
    router.push(`/candidates?tab=${value}`);
  };

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const [selectedFilter, setSelectedFilter] = useState("Today")
   //const [date, setDate] = useState<Date | undefined>(new Date())
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());
  

  useEffect(() => {
    if (selectedFilter === "Today") {
        setDate(new Date());
      } else if (selectedFilter === "30 Days") {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        setDate(thirtyDaysAgo);
      }
  }, [selectedFilter]);
  const [open, setOpen] = useState(false); //for email opening popup

  

  return (
    <div className="flex h-screen bg-gray-200 overflow-hidden">
      {/* Sidebar */}
      <CandidateSidebar isOpen={sidebarOpen} />

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden mb-2">
        <AdminHeader onToggleSidebar={handleToggleSidebar} />
        <div className='flex-1 p-6 overflow-auto'>
        <Dashboard />
          
     
        </div>
      </main>
    </div>
  );
}

export default Page;