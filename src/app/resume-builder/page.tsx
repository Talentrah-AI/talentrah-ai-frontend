'use client';

import React, { useState } from 'react';
import { ChevronDown, Globe, Settings, User, Plus, Cloud, LayoutGrid, Bell, Search, Phone, MessageSquare, Crown, BriefcaseBusiness, Grid2x2 } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Dashboard() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex h-screen bg-white">
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
                        <nav className="flex-1 mt-5 space-y-1">
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
            <div className="hidden lg:flex lg:w-60 lg:flex-col">
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
                        <Button className="bg-[#0967D2] hover:bg-blue-700 text-[13px] h-8 rounded-[10px]">
                            <Plus />
                            Create Job loop
                        </Button>
                        <Bell className="w-4 h-4 border rounded-2xl " />
                        <Button variant="ghost" className="text-gray-600 flex items-center text-[13px] h-8 border rounded-[10px]">
                            <Globe className="w-4 h-4 mr-1 text-gray-600" />
                            English
                            <ChevronDown className="w-4 h-4 ml-1" />
                        </Button>
                        <Button variant={"ghost"} className="text-gray-600 flex items-center border border-blue-800 h-8 rounded-[10px]">
                            <Crown className="w-4 h-4 text-[rgba(9,103,210,1)]" />
                            <span className="ml-1 text-[rgba(9,103,210,1)] text-[13px]">Premium</span>
                        </Button>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 p-6 flex items-center justify-center">
                    <div className="text-center max-w-md px-4">
                        <div className="mx-auto w-16 h-20 mb-4">
                            <svg width="84" height="84" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M45 16H19C17.3431 16 16 17.3431 16 19V45C16 46.6569 17.3431 48 19 48H45C46.6569 48 48 46.6569 48 45V19C48 17.3431 46.6569 16 45 16Z"
                                    fill="#2563EB"
                                />
                                <path
                                    d="M42 8H16C14.3431 8 13 9.34315 13 11V37C13 38.6569 14.3431 40 16 40H42C43.6569 40 45 38.6569 45 37V11C45 9.34315 43.6569 8 42 8Z"
                                    fill="#60A5FA"
                                />
                                <path
                                    d="M24 22H37M24 28H37M24 34H32"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <h2 className="text-lg font-medium mb-2">No resume yet? Let's get you started!</h2>
                        <p className="text-sm text-gray-500 mb-6">
                            Build a professional resume in minutes. Choose a template, add your details, and land your next job with confidence!
                        </p>
                        <div className="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-3 lg:items-center lg:justify-center">
                            <Link href="/cv-template" className="w-full lg:w-auto">
                                <Button variant="outline" className="w-full lg:w-[180px] border-blue-600 text-blue-600 cursor-pointer ">
                                    <Plus className="w-4 h-4 mr-2" />
                                    Create resume
                                </Button>
                            </Link>
                            <Button className="w-full lg:w-[180px] bg-blue-600 hover:bg-blue-700 cursor-pointer ">
                                <Cloud className="w-4 h-4 mr-2" />
                                Upload Resume
                            </Button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}