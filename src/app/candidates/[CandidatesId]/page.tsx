 "use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AdminHeader from '@/components/AdminHeader';
import CandidateSidebar from '@/components/CandidateSidebar';
import JobItem from '@/components/JobItem'
import Dashboard from '@/components/CandidateDashboard';
import { MoreVerticalIcon, CalendarIcon, Search, Mail, ChevronLeftCircle, ChevronRightCircle,  ChevronLeft, ChevronRight } from 'lucide-react';
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
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Listbox } from '@headlessui/react';
import sort from '@/assets/images/sort.png';
import calendar from '@/assets/images/calendar.png'
import Image from 'next/image';
import { useParams } from 'next/navigation';
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu"


  function CandidatesPage () {

    const params = useParams();
    const CandidatesId = params?.CandidatesId; 
    
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
    router.push(`/candidates/${CandidatesId}?tab=${value}`);
  };

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const [selectedFilter, setSelectedFilter] = useState("Today")
   //const [date, setDate] = useState<Date | undefined>(new Date())
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: undefined,
  });
  

//   useEffect(() => {
//     if (selectedFilter === "Today") {
//         setDate(new Date());
//       } else if (selectedFilter === "30 Days") {
//         const thirtyDaysAgo = new Date();
//         thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
//         setDate(thirtyDaysAgo);
//       }
//   }, [selectedFilter]);
  const [open, setOpen] = useState(false); //for email opening popup

    //_______________application drowdown_____
  const option3 = [
    'Applicaton type','All', 'Applied with AI', 'Applied manually'
  ];
  const [Selected3, setSelected3] = useState(option3[0]);
  const showDateFilterTabs = ["Created-resumes", "Cover-letters-generated", "Mentorship", "Feedback"];
  const showListboxTabs = ["Job-Applied"];
  const [activeTab, setActiveTab] = useState("Job-Applied");
  useEffect(() => {
    // Optional: reset calendar when switching back to a date filter tab
    if (showDateFilterTabs.includes(activeTab)) {
      setShowCalendar(false); // or true, depending on your desired default
    }
  }, [activeTab]);


  return (
    <div className="flex h-screen bg-gray-200 overflow-hidden">
      {/* Sidebar */}
      <CandidateSidebar isOpen={sidebarOpen} />

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden mb-2">
        <AdminHeader onToggleSidebar={handleToggleSidebar} />
        <div className='flex-1 p-6 overflow-auto'>
        {/* CandidatesId={params.CandidatesId} */}
        <Dashboard />
        
           {/* Tabs Section */}
           <Tabs value={tab} onValueChange={handleTabChange} className="w-full">

{/* Flex container for Tabs and Search/Buttons */}
<div className="flex items-center justify-between mb-4">
<div className="relative overflow-x-auto scrollbar-hide"> 
  {/* npm install tailwind-scrollbar-hide
    Then add to tailwind.config.js:
          plugins: [
      require('tailwind-scrollbar-hide')
      ]
  */}
  <TabsList >
  <ChevronLeftCircle className="shrink-0 text-gray-500" />
    <TabsTrigger value="Job-Applied" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-green-300 
        data-[state=active]:text-white font-semibold px-4 py-2 rounded-md transition">Jobs Applied</TabsTrigger>
    <TabsTrigger value="Created-resumes"  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-green-300 
        data-[state=active]:text-white font-semibold px-4 py-2 rounded-md transition">Created resumes</TabsTrigger>
    <TabsTrigger value="Cover-letters-generated" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-green-300 
        data-[state=active]:text-white font-semibold px-4 py-2 rounded-md transition">Cover letters generated</TabsTrigger>
    <TabsTrigger value="Activity-logs" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-green-300 
        data-[state=active]:text-white font-semibold px-4 py-2 rounded-md transition">Activity logs</TabsTrigger>
    <TabsTrigger value="Mentorship" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-green-300 
        data-[state=active]:text-white font-semibold px-4 py-2 rounded-md transition">Mentorship</TabsTrigger>
    <TabsTrigger value="Feedback" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-green-300 
        data-[state=active]:text-white font-semibold px-4 py-2 rounded-md transition">Feedback</TabsTrigger>    
    <ChevronRightCircle className=''/>
  </TabsList>
  </div>

    {/* Search Bar and Button */}
      <div className="flex items-center gap-2">
          <div className="relative">
              <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
              <Input type="text" placeholder="Search" className="pl-8 w-60 bg-white" />
          </div>
          {showDateFilterTabs.includes(activeTab) && (
      <div className="relative inline-block w-40">
      <div className="pointer-events-none absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
          <CalendarIcon className='w-5 h-5' />
        </div>
        <select
          className="appearance-none w-full pl-8 pr-8 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-200 hover:bg-blue-50"
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="Today">Today</option>
          <option value="Recent">Recent</option>
          <option value="30 Days">30 Days</option>
          <option value="6 Months">6 Months</option>
          <option value="1 Year">1 Year</option>
          <option value="Customize">Customize</option>
        </select>
        {/* Settings icon with date picker */}
        {/* {showCalendar && ( */}
        {selectedFilter === "Customize" && (
      <Popover >
        <PopoverTrigger>
        <Button variant="outline" className="w-[300px] justify-start text-left font-normal" >
        {date.from ? (
            date.to ? (
              <>
                {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
              </>
            ) : (
              format(date.from, "LLL dd, y")
            )
          ) : (
            <span>Pick a date range</span>
          )}
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4">
          {/* <div className="flex gap-2"> */}
          <Calendar
            mode="range"
            selected={date}
            onSelect={(range) => {
                if (range) setDate(range);
              }}
            required={false}
            numberOfMonths={2}
            />
            <Calendar
            mode="range"
            selected={date}
            onSelect={setDate}
            required={false}
            numberOfMonths={2}
            />
            
          {/* </div> */}
          <Button className="mt-2 w-full">Search duration</Button>
        </PopoverContent>
      </Popover>
     )}
    </div>
      )} 
      {showListboxTabs.includes(activeTab) && (

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
          <Listbox.Options className="absolute mt-1 rounded-2xl bg-white shadow-lg w-full z-10">
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
      )}
      

      <Button onClick={() => setOpen(true)} className="flex items-center gap-1">
          <Mail className="w-4 h-4" /> Send an email
      </Button>
      <EmailPopup open={open} setOpen={setOpen}/>
      </div>
  </div>

  {/* Now TabsContent comes separately after the flex container */}
  <TabsContent value="Job-Applied">
            {/* Your Jobs Applied Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        <Card className="text-center p-6 bg-white w-full lg:w-[65%]">
          <CardContent>
            {/* <div className='h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 px-2 py-1'> */}
            {/* <FileText className="mx-auto w-12 h-12 mb-4 text-gray-400" />
            <div className="text-lg font-semibold">No job applications yet</div> */}
            <div className="flex flex-col gap-7 text-sm -ml-8 text-gray-500">
            <JobItem
              logo={image16} title="Senior UI/UX Designer" method="AI" methodType="AI" // or "Manual"
            />
            <JobItem
              logo={image17} title="Senior UI/UX Designer" method="Manual" methodType="Manual" // or "Manual"
            />
            <JobItem
              logo={image18} title="Senior UI/UX Designer" method="AI" methodType="AI" // or "Manual"
            />
            <JobItem
              logo={image18} title="Senior UI/UX Designer" method="Manual" methodType="Manual" // or "Manual"
            />
            <JobItem
              logo={image16} title="Senior UI/UX Designer" method="AI" methodType="AI" // or "Manual"
            />
            <JobItem
              logo={image17} title="Senior UI/UX Designer" method="Manual" methodType="Manual" // or "Manual"
            />
            <JobItem
              logo={image18} title="Senior UI/UX Designer" method="AI" methodType="AI" // or "Manual"
            />
            <JobItem
              logo={image16} title="Senior UI/UX Designer" method="AI" methodType="AI" // or "Manual"
            />

            </div>
            {/* </div> */}
          </CardContent>
        </Card>
        <div className='flex flex-col gap-4 w-full lg:w-[40%]'>
        <Card className="text-left bg-white w-full">
          <CardContent>
            <div className="text-m font-semibold mb-3">Subscription Details</div>
            <h5 className="flex justify-between items-center text-sm text-gray-500 mb-3">Plan
            <p className="text-black bg-gray-100 p-2 rounded-xl whitespace-nowrap"> Premium</p></h5>
            <h5 className="flex justify-between items-center text-sm text-gray-500 mb-3">Plan type
            <p className="text-black bg-gray-100 p-2 rounded-xl whitespace-nowrap"> Enterprise</p></h5>
            <h5 className="flex justify-between items-center text-sm text-gray-500 mb-3">Subscription status
            <p className=" bg-green-100 text-green-500 p-2 rounded-xl whitespace-nowrap"> Active</p></h5>
            <h5 className="flex justify-between items-center text-sm text-gray-500 mb-3">Billing cycle
            <p className="text-black bg-gray-100 p-2 rounded-xl whitespace-nowrap"> Monthly</p></h5>
            <h5 className="flex justify-between items-center text-sm text-gray-500 mb-3">Payment method
            <p className="text-black bg-gray-100 p-2 rounded-xl whitespace-nowrap"> Card</p></h5>
          </CardContent>
        </Card>
        <Card className="text-left p4 bg-white w-full">
          <CardContent>
            {/* <FileText className="mx-auto w-12 h-12 mb-4 text-gray-400" /> */}
            <div className="text-lg font-semibold">Payment history</div>
            <Card className="bg-white p-2 shadow-md rounded-2xl w-full">
                <CardContent className="flex flex-col gap-2 p-0">
              <div className="flex justify-end">
                <p className="text-green-600 bg-green-200 px-3 py-1 p-2 rounded-xl text-xs">Successful</p>
              </div>  
            {/* NB TRY TO USE MAP  */}
             <div className="flex items-center justify-between p-4  w-full max-w-3xl">
             <div className="flex flex-col">
                <span className="text-blue-800 font-bold text-sm">VISA</span>
                <span className="text-gray-600 font-medium text-sm">Visa****1234</span>
              </div>

                <div className="text-center">
                  <span className="text-xs text-gray-500">Date</span>
                  <div className="text-sm font-medium text-gray-800">12 Mar. 2025</div>
                </div>

                <div className="text-gray-">
                <span className="text-xs text-gray-500">Subscription type</span>
                <div className="text-sm font-medium text-gray-800">Premium (Monthly)</div>
                </div>
  
                <div className="text-center">
                  <span className="text-xs text-gray-500">Price</span>
                  <div className="text-sm font-medium text-gray-800">₦25,000.00</div>
                </div>              
                
                <div className="text-gray-500 cursor-pointer">
                 <MoreVerticalIcon className='flex justify-end w-4 h-4 text-gray-500 ' />
                 </div>
              </div> 

              {/* <div className="grid grid-cols-4 gap-3 text-[12px] w-full">
                <div className="flex flex-col text-gray-400 text-[11px]">Visa  <br /><span className='text-gray-900 text-[10px]'>Visa ****123</span></div>
                <div className="text-gray-400 text-[11px]">Date  <br /><span className="text-gray-900 text-[10px]">12 Mar. 2025</span></div>
                <div className="text-gray-400 text-[11px]">Subscription type <br /><span className="text-gray-900  text-[10px]">Premium (Monthly)</span></div>
                <div className="pl-4 text-gray-400 text-[11px]">Price  <br /><span className='text-gray-900 text-[10px]'>₦25,000.00</span></div>
                 <MoreVerticalIcon className='flex justify-end w-4 h-4 text-gray-500 ' />
              </div>  */}

            </CardContent>
          </Card>

          </CardContent>
        </Card>
                        {/* {paymentHistory.length === 0 ? (
                <Card className="text-center p-6 bg-white w-full">
                  <CardContent>
                    <FileText className="mx-auto w-12 h-12 mb-4 text-gray-400" />
                    <div className="text-lg font-semibold">No payment history yet</div>
                    <div className="text-sm text-gray-500">
                      This candidate has no payment records available. Once a transaction is made, the details will appear here.
                    </div>
                  </CardContent>
                </Card>
              ) : (
                paymentHistory.map((item, index) => (
                  <Card key={index} className="p-4 bg-white w-full">
                    <CardContent>
                      <div className="text-lg font-semibold">Payment: {item.amount}</div>
                      <div className="text-sm text-gray-500">Date: {item.date}</div>
                    </CardContent>
                  </Card>
                ))
              )} */}

      </div>
      </div>
      </TabsContent>

      <TabsContent value="Created-resumes">
          <div className="flex flex-col lg:flex-row gap-4">
        <Card className="text-center p-0 bg-white w-full lg:w-[100%]">
          <CardContent>
          <div className="p-4">
              {resumes.map((resume, idx) => (
                  <ResumeCard key={idx} {...resume} />
              ))}
              </div>  
          
      </CardContent>
        </Card>
                        {/* {paymentHistory.length === 0 ? (
                <Card className="text-center p-6 bg-white w-full">
                  <CardContent>
                    <FileText className="mx-auto w-12 h-12 mb-4 text-gray-400" />
                    <div className="text-lg font-semibold">No payment history yet</div>
                    <div className="text-sm text-gray-500">
                      This candidate has no payment records available. Once a transaction is made, the details will appear here.
                    </div>
                  </CardContent>
                </Card>
              ) : (
                paymentHistory.map((item, index) => (
                  <Card key={index} className="p-4 bg-white w-full">
                    <CardContent>
                      <div className="text-lg font-semibold">Payment: {item.amount}</div>
                      <div className="text-sm text-gray-500">Date: {item.date}</div>
                    </CardContent>
                  </Card>
                ))
              )} */}

    
      </div>
          </TabsContent>

          <TabsContent value="Cover-letters-generated">
          <div className="flex flex-col lg:flex-row gap-4">
        <Card className="text-center p-0 bg-white w-full lg:w-[100%]">
          <CardContent>
          <div className="p-4">
              {resumes.map((resume, idx) => (
                  <CoverCard key={idx} {...resume} />
              ))}
              </div>  
          
      </CardContent>
        </Card>
        </div>
          </TabsContent>

          <TabsContent value="Activity-logs">
            <div>
              <ActivityTable />
              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-4">
                  <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                  <ChevronLeft className="h-4 w-4" />
                  </Button>

                  {[1, 2, 3, "...", 10].map((item, idx) => (
                  <Button
                      key={idx}
                      variant={item === 1 ? "default" : "ghost"}
                      className={`rounded-full w-8 h-8 text-sm ${item === 1 ? "bg-blue-600 text-white" : ""}`}
                  >
                      {item}
                  </Button>
                  ))}

                  <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                  <ChevronRight className="h-4 w-4" />
                  </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="Mentorship">
            <div>
              <CandidateMentoship />
              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-4">
                  <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                  <ChevronLeft className="h-4 w-4" />
                  </Button>

                  {[1, 2, 3, "...", 10].map((item, idx) => (
                  <Button
                      key={idx}
                      variant={item === 1 ? "default" : "ghost"}
                      className={`rounded-full w-8 h-8 text-sm ${item === 1 ? "bg-blue-600 text-white" : ""}`}
                  >
                      {item}
                  </Button>
                  ))}

                  <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                  <ChevronRight className="h-4 w-4" />
                  </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Feedback">
            <div>
              <CandidateFeed />
              </div>
          </TabsContent>
     </Tabs>
          
     
        </div>
      </main>
    </div>
  );
}

export default CandidatesPage;