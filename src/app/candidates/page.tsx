"use client";

import React, { useState, useEffect } from 'react';
import AdminHeader from '@/components/AdminHeader';
import CandidateSidebar from '@/components/CandidateSidebar';
import { Download, MoreVertical, Trash, MailIcon, Search} from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import Calendar from '@/components/ui/Calendar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import sort from '@/assets/images/sort.png';
import calendar from '@/assets/images/calendar.png'
import Image from 'next/image';
import { Listbox } from '@headlessui/react';
import DeactivateDialog from '@/components/DeactivateDialog';


//check for the error
type candidates = { 
  id: number;
  name: string;

};


function Page() {

  const handleActiveCandidate = () => {
    // check error
    router.push(`/candidates/${candidates.id}`)
  };

   // Sample candidate data
  const candidates = [
    { id: 1, name: 'Andrew Enkosinov', email: 'andrewenkosinov@icloud.com', usageCredit: 'UC - 8/10', applicationMetrics: { rejected: 0, inProgress: 45, completed: 25 }, subscriptionType: 'Premium', signUpDate: '12/05/2025, 10:00AM' },
    { id: 2, name: 'Andrew Enkosinov', email: 'andrewenkosinov@icloud.com', usageCredit: 'UC - 2/10', applicationMetrics: { rejected: 12, inProgress: 45, completed: 25 }, subscriptionType: 'Freemium', signUpDate: '12/05/2025, 10:00AM' },
    { id: 3, name: 'Andrew Enkosinov', email: 'andrewenkosinov@icloud.com', usageCredit: 'UC - 8/10', applicationMetrics: { rejected: 0, inProgress: 45, completed: 25 }, subscriptionType: 'Premium', signUpDate: '12/05/2025, 10:00AM' },
    { id: 4, name: 'Andrew Enkosinov', email: 'andrewenkosinov@icloud.com', usageCredit: 'UC - 2/10', applicationMetrics: { rejected: 12, inProgress: 45, completed: 25 }, subscriptionType: 'Freemium', signUpDate: '12/05/2025, 10:00AM' },
    { id: 5, name: 'Andrew Enkosinov', email: 'andrewenkosinov@icloud.com', usageCredit: 'UC - 8/10', applicationMetrics: { rejected: 12, inProgress: 45, completed: 25 }, subscriptionType: 'Freemium', signUpDate: '12/05/2025, 10:00AM' },
    { id: 6, name: 'Andrew Enkosinov', email: 'andrewenkosinov@icloud.com', usageCredit: 'UC - 2/10', applicationMetrics: { rejected: 0, inProgress: 45, completed: 25 }, subscriptionType: 'Freemium', signUpDate: '12/05/2025, 10:00AM' },
    { id: 7, name: 'Andrew Enkosinov', email: 'andrewenkosinov@icloud.com', usageCredit: 'UC - 8/10', applicationMetrics: { rejected: 12, inProgress: 45, completed: 25 }, subscriptionType: 'Freemium', signUpDate: '12/05/2025, 10:00AM' },
    { id: 8, name: 'Andrew Enkosinov', email: 'andrewenkosinov@icloud.com', usageCredit: 'UC - 8/10', applicationMetrics: { rejected: 0, inProgress: 45, completed: 25 }, subscriptionType: 'Premium', signUpDate: '12/05/2025, 10:00AM' },
    { id: 9, name: 'Andrew Enkosinov', email: 'andrewenkosinov@icloud.com', usageCredit: 'UC - 8/10', applicationMetrics: { rejected: 12, inProgress: 45, completed: 25 }, subscriptionType: 'Freemium', signUpDate: '12/05/2025, 10:00AM' },
    { id: 10, name: 'Andrew Enkosinov', email: 'andrewenkosinov@icloud.com', usageCredit: 'UC - 6/10', applicationMetrics: { rejected: 12, inProgress: 45, completed: 25 }, subscriptionType: 'Premium', signUpDate: '12/05/2025, 10:00AM' }
  ];

  const options = [10, 25, 50, 100];
  const [selected, setSelected] = useState(options[0]);

  const option2 = [
    'Subscription Type','Freemium', 'Premium'
  ];
  const [Selected2, setSelected2] = useState(option2[0]);

  const option3 = [
    'Usage credit','High credit', 'Low credit'
  ];
  const [Selected3, setSelected3] = useState(option3[0]);

  const option4 = [
    'Export','CSV', 'PDF'
  ];
  const [Selected4, setSelected4] = useState(option4[0]);

  const searchParams = useSearchParams();
  const router = useRouter();
  const tab = searchParams.get('tab') || 'Job-Applied';

  const [selectedCandidates, setSelectedCandidates] = React.useState<number[]>([]);

  const [searchQuery, setSearchQuery] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  

  const handleTabChange = (value: string) => {
    router.push(`/candidates?tab=${value}`);
  };

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedCandidates(candidates.map(c => c.id));
    } else {
      setSelectedCandidates([]);
    }
  };

  const handleSelectCandidate = (id: number) => {
    if (selectedCandidates.includes(id)) {
      setSelectedCandidates(selectedCandidates.filter(cId => cId !== id));
    } else {
      setSelectedCandidates([...selectedCandidates, id]);
    }
  };

 
  
  // const handleTabChange = (tab) => {
  //   setActiveTab(tab);
  //   setSelectedCandidates([]);
  // };

  const [selectedFilter, setSelectedFilter] = useState("Today")
   //const [date, setDate] = useState<Date | undefined>(new Date())
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());
  const [openCandidate, setOpenCandidate] = useState(false)

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

  const exportData = () => {
    // Implement export functionality
    console.log('Exporting data');
  };
  const applyFilter = () => {
    // Implement filtering logic here
    console.log('Applying filters');
  };
  
  const clearFilter = () => {
    // Reset filters here
    console.log('Clearing filters');
  };
  //deact
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-200 overflow-hidden">
      {/* Sidebar */}
      <CandidateSidebar isOpen={sidebarOpen} />

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden mb-2">
        <AdminHeader onToggleSidebar={handleToggleSidebar} />
        <div className='flex-1 p-6 overflow-auto'>
          {/* <Dashboard /> */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Candidates</h1>
            <div className='flex justify-between gap-2'>
              {selectedCandidates.length > 0 ? (
                <>
                  <button 
                    onClick={() => setDialogOpen(true)}
                    className="border border-orange-300 text-orange-500 px-4 py-2 rounded-md flex items-center cursor-pointer gap-3"
                  >
                    <Trash size={16} />
                    Deactivate
                  </button>
                  <DeactivateDialog
                    open={dialogOpen}
                    onClose={() => setDialogOpen(false)}
                    onConfirm={exportData}
                    count={4} // optional
                  />
                  <button 
                    onClick={exportData}
                    className="border border-blue-300 text-blue-500 px-4 py-2 rounded-md flex items-center cursor-pointer gap-3"
                  >
                    <MailIcon size={16} />
                    Email
                  </button>
                </>
              ) : null}
              <div className="flex items-center gap-2">  
                <Listbox value={Selected4} onChange={setSelected4}>
                  <div className="relative">
                  <Listbox.Button className="flex items-center justify-between px-4 py-3 rounded-md bg-blue-500 text-sm text-white cursor-pointer gap-2">
                  <Download size={16} />
                    {Selected4}
                  </Listbox.Button>
                  <Listbox.Options className="absolute mt-1 rounded-2xl bg-white shadow-lg w-full z-10">
                    {option4.map((option) => (
                      <Listbox.Option
                        key={option}
                        value={option}
                        className="px-3 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                      >
                        {option}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
               </div>
            </div>
            </div>


          {/* Tabs Section */}
          <Tabs defaultValue="Active candidates" onValueChange={handleTabChange} className="w-full">

      {/* Flex container for Tabs and Search/Buttons */}
      <div className="flex items-center justify-between mb-4">
      {/* <div className="relative overflow-x-auto scrollbar-hide">  */}
        {/* npm install tailwind-scrollbar-hide
          Then add to tailwind.config.js:
                plugins: [
            require('tailwind-scrollbar-hide')
            ]
        */}
    <TabsList >
      <TabsTrigger value="Active candidates" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-green-300 
          data-[state=active]:text-white font-semibold px-4 py-2 rounded-md transition">Active candidates</TabsTrigger>
      <TabsTrigger value="Deactive candidates" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-green-300 
          data-[state=active]:text-white font-semibold px-4 py-2 rounded-md transition">Deactive candidates</TabsTrigger>
      <TabsTrigger value="Deleted accounts" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-green-300 
          data-[state=active]:text-white font-semibold px-4 py-2 rounded-md transition">Deleted accounts</TabsTrigger> 
    </TabsList>
    </div>
    <div className="flex items-center justify-between mb-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6 items-center">
        <div className="text-sm text-green-500">Filter by:</div>
        
        <div className="flex items-center bg-white rounded-md">
          <div className="px-3 py-2 text-sm text-gray-500">Show:</div>
          {/* dropdown with listbox */}
          <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
          <Listbox.Button className="px-3 py-2 rounded-2xl bg-white text-sm">
            {selected}
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 rounded-2xl bg-white shadow-lg w-full cursor-pointer z-10">
            {options.map((option) => (
              <Listbox.Option
                key={option}
                value={option}
                className="px-3 py-2 hover:bg-gray-100 text-sm cursor-pointer"
              >
                {option}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
        </div>
        
        <div className="flex items-center rounded-md">
          <div className="px-3 py-2 text-sm text-gray-400 ">
            {/* dropdown with listbox for Subscription Type */}
            <span>
          <Listbox value={Selected2} onChange={setSelected2}>
          <div className="relative">
          <Listbox.Button className="flex items-center justify-between px-3 py-2 rounded-md bg-white text-sm gap-2">
          <Image src={sort} width={17} height={17} alt='icon' className='' />
            {Selected2}
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 rounded-2xl bg-white shadow-lg w-full cursor-pointer z-10">
            {option2.map((option) => (
              <Listbox.Option
                key={option}
                value={option}
                className="px-3 py-2 hover:bg-gray-100 text-sm cursor-pointer"
              >
                {option}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
      </span>
          </div>
        </div>
        
        <div className="flex items-center rounded-md">
          <div className="px-3 py-2 text-sm text-gray-400 ">
            <span>
               {/* dropdown with listbox for Subscription Type */}
            
          <Listbox value={Selected3} onChange={setSelected3}>
          <div className="relative">
          <Listbox.Button className="flex items-center justify-between px-3 py-2 rounded-md bg-white text-sm gap-2">
          <Image src={sort} width={17} height={17} alt='icon' className='' />
            {Selected3}
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 rounded-2xl bg-white shadow-lg w-full cursor-pointer z-10">
            {option3.map((option) => (
              <Listbox.Option
                key={option}
                value={option}
                className="px-3 py-2 hover:bg-gray-100 text-sm cursor-pointer"
              >
                {option}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
            </span>
          </div>
        </div>
        
        <div className="flex items-center border rounded-md">
          <div className="px-3 py-2 text-sm text-gray-400">From:</div>
          <div className="px-3 py-2 border-l text-sm text-gray-400 bg-white rounded-md flex items-center gap-1">
          <Image src={calendar} width={15} height={15} alt='icon' className='' />
            <Calendar/>
            Select date</div>
        </div>
        
        <div className="flex items-center border rounded-md">
          <div className="px-3 py-2 text-sm text-gray-400">To:</div>
          <div className="px-3 py-2 border-l text-sm text-gray-400 bg-white rounded-md flex items-center gap-1">
          <Image src={calendar} width={15} height={15} alt='icon' className='' />
            Select date</div>
        </div>
        <button 
          onClick={applyFilter}
          className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm cursor-pointer"
        >
          Apply filter
        </button>
        
        <button 
          onClick={clearFilter}
          className="text-gray-400 text-sm cursor-pointer"
        >
          Clear filter
        </button>   
        
        <div className="flex-grow"></div>
        
        <div className="relative gap-10">
          <input
            type="text"
            placeholder="Search"
            className="bg-white rounded-md pl-9 pr-3 py-2 w-55 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-700 " size={16} />
        </div>
      </div>
       {/* ----- */}

    </div>

    {/* active candidate */}
    <TabsContent value="Active candidates">
    
    <div className="border rounded-md overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-12 px-4 py-3 text-left">
                <input 
                  type="checkbox" 
                  className="rounded"
                  checked={selectedCandidates.length === candidates.length && candidates.length > 0}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Full Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email Address
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Usage Credit
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Job Application Metrics
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subscription Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sign-up Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                
              </th>
            </tr>
          </thead>
          {/* calling the list of candidates */}
          <tbody className="divide-y divide-gray-200">
            {candidates.map((candidate) => (
              <tr key={candidate.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">
                  <input 
                    type="checkbox" 
                    className="rounded"
                    checked={selectedCandidates.includes(candidate.id)}
                    onChange={() => handleSelectCandidate(candidate.id)}
                  />
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{candidate.name}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-gray-500">{candidate.email}</div>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span className="inline-block text-xs text-green-600 bg-green-200 rounded p-1">{candidate.usageCredit}</span>
                </td>
                <td className="inline-block px-4 py-2 whitespace-nowrap ">
                  <span className="flex items-center bg-white border border-black-200 rounded shadow-md p-1 gap-1">
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-md bg-orange-100 flex items-center justify-center text-xs text-orange-500">{candidate.applicationMetrics.rejected}</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-md bg-blue-100 flex items-center justify-center text-xs text-blue-500">{candidate.applicationMetrics.inProgress}</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-md bg-green-100 flex items-center justify-center text-xs text-green-500">{candidate.applicationMetrics.completed}</div>
                    </div>
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    candidate.subscriptionType === 'Premium' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-teal-100 text-teal-800'
                  }`}>
                    {candidate.subscriptionType === 'Premium' && (
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8.5a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    )}
                    {candidate.subscriptionType === 'Freemium' && (
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v14a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H6zm1 2h6v10H7V4z" clipRule="evenodd" />
                      </svg>
                    )}
                    {candidate.subscriptionType}
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-gray-500">{candidate.signUpDate}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical size={16} />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className="w-50">
                    <DropdownMenuItem onClick={handleActiveCandidate}>
                      View details
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => setDialogOpen(true)}
                      className=" px-2 py-2 rounded-md flex items-center cursor-pointer gap-3"
                    >
                      Deactivate Candidate
                    </DropdownMenuItem>
                  </DropdownMenuContent>

                  <DeactivateDialog
                    open={dialogOpen}
                    onClose={() => setDialogOpen(false)}
                    onConfirm={exportData}
                    count={4} // optional
                  />
                </DropdownMenu>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </TabsContent>

      {/* deactive candidate */}
      <TabsContent value="Deactive candidates">
      <div className="border rounded-md overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-12 px-4 py-3 text-left">
                <input 
                  type="checkbox" 
                  className="rounded"
                  checked={selectedCandidates.length === candidates.length && candidates.length > 0}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Full Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email Address
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Usage Credit
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Job Application Metrics
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subscription Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sign-up Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                
              </th>
            </tr>
          </thead>
          {/* calling the list of candidates */}
          <tbody className="divide-y divide-gray-200">
            {candidates.map((candidate) => (
              <tr key={candidate.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">
                  <input 
                    type="checkbox" 
                    className="rounded"
                    checked={selectedCandidates.includes(candidate.id)}
                    onChange={() => handleSelectCandidate(candidate.id)}
                  />
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{candidate.name}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-gray-500">{candidate.email}</div>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span className="inline-block text-xs text-green-600 bg-green-200 rounded p-1">{candidate.usageCredit}</span>
                </td>
                <td className="inline-block px-4 py-2 whitespace-nowrap ">
                  <span className="flex items-center bg-white border border-black-200 rounded shadow-md p-1 gap-1">
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-md bg-orange-100 flex items-center justify-center text-xs text-orange-500">{candidate.applicationMetrics.rejected}</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-md bg-blue-100 flex items-center justify-center text-xs text-blue-500">{candidate.applicationMetrics.inProgress}</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-md bg-green-100 flex items-center justify-center text-xs text-green-500">{candidate.applicationMetrics.completed}</div>
                    </div>
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    candidate.subscriptionType === 'Premium' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-teal-100 text-teal-800'
                  }`}>
                    {candidate.subscriptionType === 'Premium' && (
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8.5a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    )}
                    {candidate.subscriptionType === 'Freemium' && (
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v14a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H6zm1 2h6v10H7V4z" clipRule="evenodd" />
                      </svg>
                    )}
                    {candidate.subscriptionType}
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-gray-500">{candidate.signUpDate}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={16} />
                  </button>
                  </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuItem  onClick={handleActiveCandidate} className="data-[state=active]:from-blue-500">
                    View details</DropdownMenuItem>
                  <DropdownMenuItem>Activate User</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      </TabsContent>
    </Tabs>

        </div>
      </main>
    </div>
  );
}

export default Page;
