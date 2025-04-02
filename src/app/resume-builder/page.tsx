'use client';

import React, { useState } from 'react';
import {  Plus, Cloud } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Dashboard() {

    return (
        <div className="flex h-screen bg-white">
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
                    <h2 className="text-lg font-medium mb-2">No resume yet? Let&apos;s get you started!</h2>
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
    );
}
