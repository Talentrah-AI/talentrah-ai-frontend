'use client';

import React, { useState } from 'react';
import AdminHeader from '@/components/AdminHeader';
import CandidateSidebar from '@/components/CandidateSidebar';
import DeactivateDialog from '@/components/DeactivateDialog';
import { Download, MoreVertical, Trash, MailIcon, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Listbox } from '@headlessui/react';
import Image from 'next/image';
import sort from '@/assets/images/sort.png';
import calendar from '@/assets/images/calendar.png';
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem} from "@/components/ui/dropdown-menu";
import { useRouter } from 'next/navigation';

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
  },
];

export default function JobManagementPage() {



//   const handleActiveJob = () => {
//         // check error
//      router.push(`/jobmanagement/${jobs.id}`)
//    }; 

  const exportData = () => console.log('Exporting data');
  const applyFilter = () => console.log('Applying filters');
  const clearFilter = () => console.log('Clearing filters');

  const handleActiveJob = () =>{

    const router = useRouter()
    router.push(`/job/${jobs.id}`)
    
  };

  const options = [10, 25, 50, 100];
  const [selected, setSelected] = useState(options[0]);

  const option2 = ['Subscription Type', 'Freemium', 'Premium'];
  const [Selected2, setSelected2] = useState(option2[0]);

  const option3 = ['Usage credit', 'High credit', 'Low credit'];
  const [Selected3, setSelected3] = useState(option3[0]);

  const option4 = ['Export', 'High credit', 'Low credit'];
  const [selected4, setSelected4] = useState(option4[0]);

  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);

  const handleToggleSidebar = () => setSidebarOpen(prev => !prev);

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
        <AdminHeader onToggleSidebar={handleToggleSidebar} />

        <div className='flex-1 p-6 overflow-auto'>
          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-2xl font-bold'>Job Management</h1>
            <div className='flex gap-2'>
              {selectedCandidates.length > 0 && (
                <>
                  <button
                    onClick={() => setDialogOpen(true)}
                    className='border border-orange-300 text-orange-500 px-4 py-2 rounded-md flex items-center gap-3'
                  >
                    <Trash size={16} />
                    Deactivate
                  </button>
                  <DeactivateDialog
                    open={dialogOpen}
                    onClose={() => setDialogOpen(false)}
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
        
        <div className="flex items-center border rounded-md">
          <div className="px-3 py-2 text-sm text-gray-400">From:</div>
          <div className="px-3 py-2 border-l text-sm text-gray-400 bg-white rounded-md flex items-center gap-1">
          <Image src={calendar} width={15} height={15} alt='icon' className='' />
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
                      <img src={job.logo} alt='logo' className='w-5 h-5' />
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
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical size={16} />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className="w-50">
                    <DropdownMenuItem onClick={handleActiveJob}>
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
        </div>
      </main>
    </div>
  );
}
