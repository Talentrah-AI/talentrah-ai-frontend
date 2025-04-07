'use client';

import Link from 'next/link';
import {
  ChevronDown,
  Settings,
  User,
  Phone,
  MessageSquare,
  Plus,
  Search,
  Bell,
  Crown,
  BriefcaseBusiness,
  LayoutGrid,
  Grid2x2,
  Globe,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Pagination } from '@/components/resume-builder/Pagination';
import { useState } from 'react';
import { CreateResumeModal } from '@/components/resume-builder/CreateResumeModal';
import { toast } from 'sonner';
import { UploadResumeModal } from '@/components/resume-builder/UploadResumeModal';
import coverLetters from '@/data/resume/cover.letter';
import { UserCoverLetter } from '@/components/resume-builder/UserCoverLetter';

export default function UserCoverLetterHistory() {
  const [showCustomizeOptions, setShowCustomizeOptions] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Date created');
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCreateFromScratch = () => {
    setShowCreateModal(false);
    toast.success('creating a new resume from scratch!');
    // Add logic to navigate to resume creation page
  };

  const handleUploadResume = () => {
    setShowCreateModal(false);
    setShowUploadModal(true);
  };

  const handleUploadContinue = () => {
    setShowUploadModal(false); // Close upload modal
  };

  const options = [
    'Date created',
    'Today',
    'Yesterday',
    'Recent',
    'Last 7 days',
    '30 days',
    '6 months',
    '7 months',
    'Customize',
  ];

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="min-h-screen bg-[#F8F8F8]">
        <div className="flex">
          {/* Mobile Header */}
          <div className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 border-b">
            <div className="flex items-center justify-between p-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 cursor-pointer"
              >
                <Grid2x2 className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-4">
                <Bell className="w-5 h-5 text-gray-600" />
                <Button
                  variant="ghost"
                  className="text-gray-600 flex items-center text-[13px] "
                >
                  <Globe />
                  English
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Sidebar */}
          {isMobileMenuOpen && (
            <div className="w-60 lg:hidden fixed inset-0 bg-opacity-50 z-40 bg-white">
              <div className="flex flex-col h-full mt-5 pt-3 pb-3">
                {/* Navigation (Top) */}
                <nav className="flex-1 space-y-1 mt-10">
                  <Link
                    href="#"
                    className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 w-52 "
                  >
                    <Search className="w-4 h-4 mr-3" />
                    <p className="text-[13px]">Home</p>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 w-52 "
                  >
                    <BriefcaseBusiness className="w-4 h-4 mr-3" />
                    <p className="text-[13px]">Job tracker</p>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md w-52  "
                  >
                    <Settings className="w-4 h-4 mr-3" />
                    <p className="text-[13px]">Resume Builder</p>
                  </Link>
                </nav>

                {/* User Profile (Bottom) */}
                <div className="p-4 space-y-3 text-[13px]">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Mentorship</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Feedback</span>
                  </div>
                  <div className="flex items-center pt-3">
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
                      <User className="w-4 h-4" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Peter Hanson</p>
                      <p className="text-xs text-gray-500">
                        peter.hanson@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Desktop Sidebar */}
          <div className="hidden lg:flex lg:w-60 lg:flex-col h-full bg-white fixed z-40">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <span className="font-bold text-blue-600">Talentrah</span>
              </div>
              <button className="text-gray-400">
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex-1 space-y-1">
              <Link
                href="#"
                className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 w-52 "
              >
                <Search className="w-4 h-4 mr-3" />
                <p className="text-[13px]">Home</p>
              </Link>
              <Link
                href="#"
                className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 w-52 "
              >
                <BriefcaseBusiness className="w-4 h-4 mr-3" />
                <p className="text-[13px]">Job tracker</p>
              </Link>
              <Link
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md w-52  "
              >
                <Settings className="w-4 h-4 mr-3" />
                <p className="text-[13px]">Resume Builder</p>
              </Link>
            </nav>

            <div className="p-2 space-y-2 text-[13px]">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Mentorship</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Feedback</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col lg:mt-0 mt-14 lg:ml-60">
            {/* Desktop Header */}
            <header className="h-14 border-b lg:flex items-center justify-between px-4 bg-white hidden fixed z-50 w-full lg:w-[calc(100%-240px)]">
              <div></div>
              <div className="flex items-center space-x-7 text-[13px]">
                <Button className="bg-[rgba(9,103,210,1)] hover:bg-[rgba(9,103,210,1)] text-[13px] h-8 rounded-[10px]">
                  <Plus />
                  Create Job loop
                </Button>
                <Bell className="w-4 h-4 text-gray-600" />
                <Button
                  variant="ghost"
                  className="text-gray-600 flex items-center text-[13px] h-8 rounded-[10px] border"
                >
                  <div className="border p-1 rounded-full mr-1">
                    <Globe className="w-4 h-4" />
                  </div>
                  English
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
                <Button
                  variant={'ghost'}
                  className="text-gray-600 flex items-center border border-blue-800 rounded-[10px] h-8"
                >
                  <Crown className="w-4 h-4 text-[rgba(9,103,210,1)]" />
                  <span className="ml-1 text-[rgba(9,103,210,1)] text-[13px]">
                    Premium
                  </span>
                </Button>
              </div>
            </header>

            {/* Main Content Area */}
            <div className="m-auto w-[96%] mt-16 no-top">
              {/* desktop */}
              <div className="hidden lg:block">
                <div className="mt-3 ">
                  <p>My Resumes</p>

                  <div className="flex justify-between items-center h-fit mt-4">
                    <div className="bg-white shadow-md rounded-lg p-1 flex items-center">
                      <Link href="/create-resume">
                        <button className="px-3 py-1.5 text-black bg-white text-[13px] rounded-md cursor-pointer ">
                          Resume
                        </button>
                      </Link>
                      <Link href="">
                        <button className="px-3 py-1.5 bg-gradient-to-r from-[#0967d2] to-[#09cbd2] text-[13px] border-gray-300 rounded-md ml-2 ">
                          Cover Letter
                        </button>
                      </Link>
                    </div>

                    <div className="flex items-center">
                      <Link href="/cover-letter">
                        <button className="px-4 py-2 w-[170px] text-blue-800 text-[13px] border border-blue-800 rounded-2xl cursor-pointer ">
                          Generate cover letter
                        </button>
                      </Link>
                      <Link href="">
                        <button
                          className="px-4 py-2 w-[170px] bg-[#0967d2] text-[13px] text-white ml-2 flex items-center gap-3 justify-center cursor-pointer rounded-2xl"
                          onClick={() => setShowCreateModal(true)}
                        >
                          <Plus className="w-4 h-4" />
                          Create resume
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-4 items-center">
                  <div></div>
                  <div className="relative inline-flex">
                    {/* Dropdown button */}
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="flex gap-2 items-center justify-between px-4 h-10 text-sm text-gray-600 bg-[#F5F7FB] border border-gray-200 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[130px] cursor-pointer"
                    >
                      <span className="truncate">{selectedOption}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Dropdown menu */}
                    {isOpen && (
                      <div className="absolute left-0 top-11 text-xs w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                        {/* Search Input */}
                        <div className="p-2 border-b border-gray-100">
                          <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-3 py-2 text-sm bg-[#F5F7FB] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-100"
                          />
                        </div>

                        {/* Options with hover effect for Customize */}
                        <div className="max-h-48 overflow-y-auto text-xs ">
                          {filteredOptions.map((option, index) => (
                            <button
                              key={index}
                              onMouseEnter={() => {
                                setSelectedOption(option);
                                if (option === 'Customize') {
                                  setShowCustomizeOptions(true); // Show date picker
                                } else {
                                  // setIsOpen();
                                  setShowCustomizeOptions(false); // Hide if another option is clicked
                                }
                              }}
                              className={`w-full text-xs text-left px-4 py-2 hover:bg-gray-50 ${selectedOption === option ? 'text-blue-600 bg-blue-50' : 'text-gray-600'}`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Custom Date Picker - Now appears on the LEFT side of the dropdown */}
                    {showCustomizeOptions && (
                      <div className="absolute right-full top-0 mr-2 w-[300px] bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">
                              From
                            </label>
                            <input
                              type="date"
                              className="w-full p-2 border border-gray-300 rounded-md text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">
                              To
                            </label>
                            <input
                              type="date"
                              className="w-full p-2 border border-gray-300 rounded-md text-sm"
                            />
                          </div>
                        </div>
                        <div className=" w-full mt-4 space-x-2">
                          <button
                            className="px-3 py-1.5 text-sm w-full text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                            onClick={() => setShowCustomizeOptions(false)}
                          >
                            Search duration
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* mobile */}
              <div className="lg:hidden">
                <p className="text-lg font-semibold mb-4">My Resumes</p>

                <div className="flex flex-col sm:flex-row gap-2.5 mt-4 items-center">
                  <div className="flex items-center relative bg-white border border-gray-300 rounded-md shadow-sm px-2 h-10 w-full sm:w-[270px]">
                    <Search className="w-4 h-4 text-gray-500 absolute left-3" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="pl-8 pr-2 w-full h-full outline-none text-sm text-gray-700 bg-transparent"
                    />
                  </div>

                  <div className="relative w-full sm:w-auto sm:top-3">
                    {/* Dropdown Button */}
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="flex gap-2 items-center justify-between px-4 h-10 text-sm text-gray-600 bg-[#F5F7FB] border border-gray-200 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:min-w-[200px]"
                    >
                      <span className="truncate">{selectedOption}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute left-0 top-full mt-1 text-xs w-full sm:w-auto bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                        <div className="p-2 border-b border-gray-100">
                          <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-3 py-2 text-sm bg-[#F5F7FB] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-100"
                          />
                        </div>

                        <div className="max-h-48 overflow-y-auto text-xs">
                          {filteredOptions.map((option, index) => (
                            <button
                              key={index}
                              onMouseEnter={() => {
                                setSelectedOption(option);
                                setShowCustomizeOptions(option === 'Customize');
                              }}
                              className={`w-full text-xs text-left px-4 py-2 hover:bg-gray-50 ${selectedOption === option ? 'text-blue-600 bg-blue-50' : 'text-gray-600'}`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Custom Date Picker - Adjusted for Mobile */}
                    {showCustomizeOptions && (
                      <div className="absolute w-full sm:w-[300px] bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 sm:right-full sm:mr-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">
                              From
                            </label>
                            <input
                              type="date"
                              className="w-full p-2 border border-gray-300 rounded-md text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">
                              To
                            </label>
                            <input
                              type="date"
                              className="w-full p-2 border border-gray-300 rounded-md text-sm"
                            />
                          </div>
                        </div>
                        <div className="w-full mt-4">
                          <button
                            className="px-3 py-1.5 text-sm w-full text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                            onClick={() => setShowCustomizeOptions(false)}
                          >
                            Search duration
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-6">
                  <div className="flex flex-wrap gap-4">
                    <button
                      className="px-4 py-2 bg-[#0967d2] text-white  rounded-md flex items-center gap-2 justify-center cursor-pointer w-full"
                      onClick={() => setShowCreateModal(true)}
                    >
                      <Plus className="w-4 h-4" />
                      Create resume
                    </button>
                    <Link
                      className="cursor-pointer w-full"
                      href="/cover-letter"
                    >
                      <button className="px-4 py-1.5  text-blue-800 border border-blue-800 rounded-2xl cursor-pointer w-full ">
                        Generate cover letter
                      </button>
                    </Link>
                  </div>

                  {/* Resume and Cover Letter Buttons */}
                  <div className="bg-white shadow-md rounded-lg p-2 flex gap-1.5 w-full mt-4">
                    <Link href="/uploads-resume">
                      <button className="px-4 py-1 text-black  border rounded-md bg-white">
                        Resume
                      </button>
                    </Link>
                    <Link href="">
                      <button className="px-3 py-1.5 bg-gradient-to-r from-[#0967d2] to-[#09cbd2] text-[13px] border-gray-300 rounded-md ml-2 ">
                        Cover Letter
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Third Div with 90% Width */}
              <div className="mt-4">
                <div className="space-y-4">
                  {coverLetters.map((cover) => (
                    <UserCoverLetter
                      key={cover.id}
                      titles={cover.topic}
                      category={cover.category}
                      createdAt={cover.createdAt}
                    />
                  ))}
                </div>

                <div className="flex justify-center mt-2">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={10}
                    onPageChange={setCurrentPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <CreateResumeModal
          open={showCreateModal}
          onOpenChange={setShowCreateModal}
          onCreateFromScratch={handleCreateFromScratch}
          onUploadResume={handleUploadResume}
        />

        <div className="p-6">
          {/* <Button onClick={() => setShowUploadModal(true)}>Open Upload Modal</Button> */}

          <UploadResumeModal
            open={showUploadModal}
            onOpenChange={setShowUploadModal}
            onContinue={handleUploadContinue}
            onFileSelect={(file) => console.log('Selected file:', file)}
          />

          {/* <NextModal open={showNextModal} onOpenChange={setShowNextModal} /> */}
        </div>
      </div>
    </>
  );
}
