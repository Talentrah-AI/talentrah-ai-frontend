
'use client';

import React, { useState } from 'react';
import { ChevronDown, Settings, User, Plus, LayoutGrid, Bell, Search, Phone, MessageSquare, Crown, BriefcaseBusiness, Grid2x2, Globe, ChevronLeft, Bold, Italic, Underline, AlignJustify, AlignCenter, Gem, Folders, FileDown } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { UploadResumeModal } from '../comp/UploadResumeModal';

export default function Upload() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [selectedResume, setSelectedResume] = useState("");
    const [showUploadModal, setShowUploadModal] = useState(false);

    const resumeOptions = [
        "Mercy-Resume-UI-Designer",
        "Mercy-Resume-UX-Designer",
        "Mercy-Resume-Full-Stack-Developer",
        "Mercy-Resume-Front-End-Developer",
        "Mercy-Resume-Graphic-Designer",
        "Mercy-Resume-Data-Analyst",
        "Mercy-Resume-UX-Designer",
    ];

    const handleShowOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleSelectResume = (resume: string) => {
        setSelectedResume(resume);
        setShowOptions(false);
    };

    const handleModal = () => {
        setShowUploadModal(true);
    };

    const handleUploadContinue = () => {
        setShowUploadModal(false); // Close upload modal
    };


    return (
        <>
            <div className='min-h-screen bg-[#F8F8F8] pb-8 '>
                <div className="flex ">
                    {/* Mobile Header */}
                    <div className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 border-b">
                        <div className="flex items-center justify-between p-2">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-600 cursor-pointer"
                            >
                                <Grid2x2 className='w-5 h-5' />
                            </button>
                            <div className="flex items-center space-x-4">
                                <Bell className="w-5 h-5 text-gray-600" />
                                <Button variant="ghost" className="text-gray-600 flex items-center text-[13px]">
                                    <Globe className="w-4 h-4 mr-1" />
                                    English
                                    <ChevronDown className="w-4 h-4 ml-1" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Sidebar */}
                    {isMobileMenuOpen && (
                        <div className="w-60 lg:hidden fixed inset-0 bg-opacity-50 z-40 bg-white">
                            <div className="flex flex-col h-full  mt-5 pt-3 pb-3 "> {/* This makes top & bottom align properly */}
                                {/* Navigation (Top) */}
                                <nav className="flex-1 mt-9 space-y-1">
                                    <Link href="#" className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md w-52 hover:bg-gray-100">
                                        <Search className="w-4 h-4 mr-3" />
                                        <p className="text-[13px]">Home</p>
                                    </Link>
                                    <Link href="#" className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md w-52 hover:bg-gray-100">
                                        <BriefcaseBusiness className='w-4 h-4 mr-3' />
                                        <p className="text-[13px]">Job tracker</p>
                                    </Link>
                                    <Link href="#" className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md w-52  ">
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
                                            <p className="text-xs text-gray-500">peter.hanson@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {/* Desktop Sidebar */}
                    <div className="hidden lg:flex lg:w-60  lg:flex-col bg-white ">
                        <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="font-bold text-blue-600">Talentrah</span>
                            </div>
                            <button className="text-gray-400">
                                <LayoutGrid className="w-4 h-4" />
                            </button>
                        </div>

                        <nav className="flex-1  space-y-1">
                            <Link href="#" className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md w-52 hover:bg-gray-100">
                                <Search className="w-4 h-4 mr-3" />
                                <p className="text-[13px]">Home</p>
                            </Link>
                            <Link href="#" className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md w-52 hover:bg-gray-100">
                                {/* <User className="w-4 h-4 mr-3" /> */}
                                <BriefcaseBusiness className='w-4 h-4 mr-3' />
                                <p className="text-[13px]">Job tracker</p>
                            </Link>
                            <Link href="#" className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md w-52  ">
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
                            <div className="flex items-center pt-3">
                                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
                                    <User className="w-4 h-4" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium">Peter Hanson</p>
                                    <p className="text-xs text-gray-500">peter.hanson@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 flex flex-col bg-[#F8F8F8] lg:mt-0 mt-14">
                        {/* Desktop Header */}
                        <header className="h-14 border-b lg:flex items-center justify-between px-4 bg-white hidden">
                            <div></div>
                            <div className="flex items-center space-x-7 text-[13px]">
                                <Button className="bg-[#0967D2] hover:bg-blue-700 text-[11px] h-8 rounded-[10px]">
                                    <Plus />
                                    Create Job loop
                                </Button>
                                <Bell className="w-4 h-4 border rounded-2xl " />
                                <Button variant="ghost" className="text-gray-600 flex items-center text-[11px] h-8 rounded-[10px] border">
                                    <Globe className="w-4 h-4 mr-1 text-gray-600" />
                                    English
                                    <ChevronDown className="w-4 h-4 ml-1" />
                                </Button>
                                <Button variant="ghost" className="text-gray-600 flex items-center border border-blue-800 rounded-[10px] h-8">
                                    <Crown className="w-4 h-4 text-[rgba(9,103,210,1)]" />
                                    <span className="ml-1 text-[rgba(9,103,210,1)] text-[12px]">Premium</span>
                                </Button>
                            </div>
                        </header>

                        {/* Main Content Area */}

                        <div className='mt-2.5'>
                            <div className='bg-white w-[98%] m-auto py-4 px-3 rounded-2xl '>
                                <div className="flex ">
                                    <ChevronLeft className='w-5 h-5 mt-[2.4px]' />
                                    <p>back</p>
                                </div>
                                <div className='flex flex-wrap lg:justify-between'>
                                    <div className="text-[13px] mt-5 ml-1">
                                        <h1 className="text-[21px] font-semibold">Generate cover letter</h1>
                                        <p className="hidden lg:block mt-1 text-gray-600">
                                            Paste the job description, and let AI craft a tailored cover letter that highlights your skills and experience for the role
                                        </p>
                                        <p className="block lg:hidden mt-2 text-gray-600">
                                            Paste the job description, and let AI craft a tailored cover letter that highlights   your skills and experience for the role
                                        </p>
                                    </div>

                                    <Link href="/my-cover-letter">
                                        <Button className="w-[175px] mt-7 text-[13px] font-semibold text-white bg-[#0967D2] hover:bg-blue-700 rounded-2xl cursor-pointer ">
                                            View cover letter history
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            <div className='w-[98%] mx-auto mt-6 flex flex-wrap gap-10 lg:gap-4 lg:flex-nowrap '>
                                {/* Left Panel (Resume Section) */}
                                <div className='w-full lg:w-[53%] min-h-[77vh] lg:min-h-[90vh] bg-white rounded-2xl p-4'>
                                    {/* Resume Section */}
                                    <div className="mb-4 relative">
                                        <div className="relative">
                                            <label htmlFor="resume-input">Resume</label>
                                            <div onClick={handleShowOptions} className="relative mt-1.5 cursor-pointer">
                                                <Input
                                                    id="resume-input"
                                                    className="w-full h-10 pl-3 pr-8 cursor-pointer"
                                                    placeholder="Choose from existing resumes"
                                                    type="text"
                                                    value={selectedResume}
                                                    readOnly
                                                />
                                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            </div>

                                            {/* Dropdown Options */}
                                            {showOptions && (
                                                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                                                    {resumeOptions.map((resume, index) => (
                                                        <p
                                                            key={index}
                                                            onClick={() => handleSelectResume(resume)}
                                                            className="px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                        >
                                                            {resume}
                                                        </p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex justify-end mt-1 text-[13.6px] text-blue-600">
                                            <p className='text-gray-400'>Do you have a new resume?</p>
                                            <p onClick={handleModal} className="ml-1 cursor-pointer ">Upload resume</p>
                                        </div>
                                    </div>

                                    {/* Role Section */}
                                    <div className='mb-4'>
                                        <div className='relative'>
                                            <label htmlFor="role-input">Role</label>
                                            <Input
                                                id="role-input"
                                                className='w-full h-10 mt-1.5'
                                                placeholder='Enter your role'
                                                type="text"
                                            />
                                        </div>
                                        <div className='flex justify-between mt-1 text-[13.6px] text-blue-600'>
                                            <Link href="">
                                                <p className=''>Paste job URL</p>
                                            </Link>
                                            <p className="text-[#414a53]">Paste a JD</p>
                                        </div>
                                    </div>

                                    <div className='relative'>
                                        <label htmlFor="role-input">URL</label>
                                        <Input
                                            id="role-input"
                                            className='w-full h-10 mt-1.5'
                                            placeholder='Paste url here'
                                            type="text"
                                        />
                                    </div>

                                </div>

                                {/* Right Panel (Empty) */}
                                <div className='w-full lg:w-[45%] min-h-[73vh] lg:min-h-[90vh] bg-white rounded-2xl p-4'>
                                    <h1>Preview resume</h1>
                                </div>
                            </div>

                        </div>

                        <div className='flex justify-end mr-5 mt-8'>
                            <Button className='text-white hover:bg-blue-700 bg-blue-600 ' variant="ghost">Generate cover letter</Button>
                        </div>

                    </div>
                </div>

                {showUploadModal && (
                    <UploadResumeModal
                        open={showUploadModal}
                        onOpenChange={setShowUploadModal}
                        onContinue={handleUploadContinue}
                        onFileSelect={(file) => console.log("Selected file:", file)}
                    />
                )}
            </div>
        </>
    );
}