'use client';

import React, { useState } from 'react';
// import AdminHeader from '@/components/AdminHeader';
import CandidateSidebar from '@/components/CandidateSidebar';
import DeactivateDialog from '@/components/DeactivateDialog1';
import { Download, MoreVertical, Trash, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Listbox } from '@headlessui/react';
import Image from 'next/image';
import sort from '@/assets/images/sort.png';
import calendar from '@/assets/images/calendar.png';
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem} from "@/components/ui/dropdown-menu";
import JobDetailsPopup from '@/components/JobDetailsPopup';
import { Button } from '@/components/ui/button';
import DeleteJobDialog from '@/components/DeleteJobDialog';
import Calendar from '@/components/ui/Calendar';

const jobs = [
  {
    company: 'Concordia solutions',
    logo: '/logo.png',
    role: 'Senior UI/UX Designer',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    workModel: 'Remote',
    applicants: 2000,
    date: '12/05/2025, 10:00AM',
    id:1,
  },
  {
    company: 'Concordia solutions',
    logo: '/logo.png',
    role: 'Senior UI/UX Designer',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    workModel: 'Remote',
    applicants: 2000,
    date: '12/05/2025, 10:00AM',
    id:2,
  },
  {
    company: 'Concordia solutions',
    logo: '/logo.png',
    role: 'Senior UI/UX Designer',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    workModel: 'Remote',
    applicants: 2000,
    date: '12/05/2025, 10:00AM',
    id:3
  },
  {
    company: 'Concordia solutions',
    logo: '/logo.png',
    role: 'Senior UI/UX Designer',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    workModel: 'Remote',
    applicants: 2000,
    date: '12/05/2025, 10:00AM',
    id:4,
  },
  {
    company: 'Concordia solutions',
    logo: '/logo.png',
    role: 'Senior UI/UX Designer',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    workModel: 'Remote',
    applicants: 2000,
    date: '12/05/2025, 10:00AM',
    id:5,
  },
  {
    company: 'Concordia solutions',
    logo: '/logo.png',
    role: 'Senior UI/UX Designer',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    workModel: 'Remote',
    applicants: 2000,
    date: '12/05/2025, 10:00AM',
    id:6,
  },
  {
    company: 'Concordia solutions',
    logo: '/logo.png',
    role: 'Senior UI/UX Designer',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    workModel: 'Remote',
    applicants: 2000,
    date: '12/05/2025, 10:00AM',
    id:7,
  },
  {
    company: 'Concordia solutions',
    logo: '/logo.png',
    role: 'Senior UI/UX Designer',
    location: 'Lagos, Nigeria',
    jobType: 'Full-time',
    workModel: 'Remote',
    applicants: 2000,
    date: '12/05/2025, 10:00AM',
    id:8,
  },
];

function JobManagementPage (){

//   const handleActiveJob = () => {
//         // check error
//      router.push(`/jobmanagement/${jobs.id}`)
//    }; 

  const exportData = () => console.log('Exporting data');
  const applyFilter = () => console.log('Applying filters');
  const clearFilter = () => console.log('Clearing filters');

  const options = [10, 25, 50, 100];
  const [selected, setSelected] = useState(options[0]);

  const option2 = ['Subscription Type', 'Freemium', 'Premium'];
  const [Selected2, setSelected2] = useState(option2[0]);

  const option3 = ['Usage credit', 'High credit', 'Low credit'];
  const [Selected3, setSelected3] = useState(option3[0]);

  const option4 = ['Export', 'High credit', 'Low credit'];
  const [selected4, setSelected4] = useState(option4[0]);

  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen] = useState(true); //setSidebarOpen'
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogOpen2, setDialogOpen2] = useState(false);
  const [dialogOpen3, setDialogOpen3] = useState(false)
  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);

  
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [activePicker, setActivePicker] = useState<'from' | 'to' | null>(null);

  const formatDate = (date: Date | null) => {
    if (!date) return 'Select date';
    return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
  };

  // const handleToggleSidebar = () => setSidebarOpen(prev => !prev);

  const handleSelectCandidate = (index: number) => {
    setSelectedCandidates(prev =>
      prev.includes(index)
        ? prev.filter(id => id !== index)
        : [...prev, index]
    );
  };

  return (
    <div className='flex h-screen bg-gray-200 overflow-hidden'>
      <CandidateSidebar isOpen={sidebarOpen} />

      <main className='flex-1 flex flex-col overflow-hidden'>
        {/* <AdminHeader onToggleSidebar={handleToggleSidebar} /> */}

        <div className='flex-1 p-6 overflow-auto'>
          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-2xl font-bold'>Job Management</h1>
            <div className='flex gap-2'>
              {selectedCandidates.length > 0 && (
                <>
                  <button
                    onClick={() => setDialogOpen(true)}
                    className='border border-orange-300 text-orange-500 px-4 py-2 rounded-md flex items-center gap-3 cursor-pointer'
                  >
                    <Trash size={16} />
                    Deactivate
                  </button>
                  <DeactivateDialog
                    open={dialogOpen}
                    onOpenChange={() => setDialogOpen(false)}
                    onConfirm={exportData}
                    count={selectedCandidates.length}
                  />
                  {/* <button
                    onClick={exportData}
                    className='border border-blue-300 text-blue-500 px-4 py-2 rounded-md flex items-center gap-3'
                  >
                    <MailIcon size={16} />
                    Email
                  </button> */}
                </>
              )}
              <Listbox value={selected4} onChange={setSelected4}>
                <div className='relative'>
                  <Listbox.Button className='flex items-center justify-between px-4 py-3 rounded-md bg-blue-500 text-sm text-white gap-2'>
                    <Download size={16} />
                    {selected4}
                  </Listbox.Button>
                  <Listbox.Options className='absolute mt-1 rounded-2xl bg-white shadow-lg w-full z-10'>
                    {option4.map(option => (
                      <Listbox.Option
                        key={option}
                        value={option}
                        className='px-3 py-2 hover:bg-gray-100 text-sm cursor-pointer'
                      >
                        {option}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>
          </div>

          {/* Filters & Search */}
          
          <div className="flex items-center justify-between mb-4">
     
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
        {/* ////////////////////////calendar////////////////////////////////////////////////// */}
        <div className="relative">
            <div className="flex items-center border rounded-md">
              <div className="px-3 py-2 text-sm text-gray-400">From:</div>
              <div
                onClick={() => setActivePicker(activePicker === 'from' ? null : 'from')}
                className="px-3 py-2 border-l text-sm text-gray-400 bg-white rounded-md flex items-center gap-1 cursor-pointer"
              >
                <Image src={calendar} width={15} height={15} alt="icon" />
                {formatDate(fromDate)}
              </div>
            </div>
            {activePicker === 'from' && (
              <div className="absolute z-50 bg-white shadow-xl rounded-lg p-4 mt-2">
                <Calendar
                  selectedDate={fromDate}
                  onSelectDate={(date) => {
                    if (date) setFromDate(date);
                    setActivePicker(null);
                  }}
                />
              </div>
            )}
          </div>

          <div className="relative">
            <div className="flex items-center border rounded-md">
              <div className="px-3 py-2 text-sm text-gray-400">To:</div>
              <div
                onClick={() => setActivePicker(activePicker === 'to' ? null : 'to')}
                className="px-3 py-2 border-l text-sm text-gray-400 bg-white rounded-md flex items-center gap-1 cursor-pointer"
              >
                <Image src={calendar} width={15} height={15} alt="icon" />
                {formatDate(toDate)}
              </div>
            </div>
            {activePicker === 'to' && (
              <div className="absolute z-50 bg-white shadow-xl rounded-lg p-4 mt-2">
                <Calendar
                  selectedDate={toDate}
                  onSelectDate={(date) => {
                    if (date) setToDate(date);
                    setActivePicker(null);
                  }}
                />
              </div>
            )}
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
      </div>

          {/* Job Table */}
          <div className='overflow-x-auto bg-white rounded-lg shadow-md'>
            <table className='min-w-full text-sm text-left text-gray-700'>
              <thead className=' uppercase text-gray-500 text-xs'>
                <tr>
                  <th className='p-4'>
                    <input
                      type='checkbox'
                      checked={
                        selectedCandidates.length === jobs.length &&
                        jobs.length > 0
                      }
                      onChange={() =>
                        setSelectedCandidates(
                          selectedCandidates.length === jobs.length
                            ? []
                            : jobs.map((_, index) => index)
                        )
                      }
                    />
                  </th>
                  <th className='p-4'>Company</th>
                  <th className='p-4'>Role</th>
                  <th className='p-4'>Location</th>
                  <th className='p-4'>Job Type</th>
                  <th className='p-4'>Work Model</th>
                  <th className='p-4'>Total Applicant</th>
                  <th className='p-4'>Date Posted</th>
                  <th className='p-4'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <tr key={index} className='border-b hover:bg-gray-50'>
                    <td className='p-4'>
                      <input
                        type='checkbox'
                        checked={selectedCandidates.includes(index)}
                        onChange={() => handleSelectCandidate(index)}
                      />
                    </td>
                    <td className='p-4 flex items-center gap-2'>
                      <Image src={job.logo} alt='logo' width={20}
                           height={20}  />
                      {job.company}
                    </td>
                    <td className='p-4'>{job.role}</td>
                    <td className='p-4'>{job.location}</td>
                    <td className='p-4'>{job.jobType}</td>
                    <td className='p-4'>{job.workModel}</td>
                    <td className='p-4'>{job.applicants}</td>
                    <td className='p-4'>{job.date}</td>
                <td className='p-4'>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-muted-foreground p-2 hover:bg-gray-100 rounded cursor-pointer">
                      <MoreVertical className="w-5 h-5"/>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-50">
                    <DropdownMenuItem onSelect={() => setDialogOpen2(true)} className="data-[state=active]:from-blue-500 cursor-pointer">View details</DropdownMenuItem>
                    <DropdownMenuItem  onSelect={() => setDialogOpen3(true)} className=" px-2 py-2 rounded-md flex items-center cursor-pointer gap-3 cursor-pointer">Delete job</DropdownMenuItem>
                  </DropdownMenuContent>
                  <DeleteJobDialog 
                  open={dialogOpen3}
                  onClose={() => setDialogOpen3(false)}
                  />
                  <JobDetailsPopup
                    open={dialogOpen2}
                    onClose={() => setDialogOpen2(false)}
                    onConfirm={exportData}
                  />
                </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
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
      </main>
    </div>
  );
};
export default JobManagementPage
