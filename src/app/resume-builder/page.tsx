
'use client'

import Link from "next/link"
import { ChevronDown, Globe, Home, Settings, User, Phone, MessageSquare, Plus, Cloud } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HomePageForResumeBuilder() {
    return (
        <div className="flex h-screen bg-white">
            {/* Sidebar */}
            <div className="hidden w-64  lg:flex flex-col">
                {/* Logo */}
                <div className="p-4  flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="font-bold text-blue-600">Talentrah</span>
                    </div>
                    <button className="text-gray-400">
                        <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-1">
                    <Link href="#" className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100">
                        <Home className="w-4 h-4 mr-3" />
                        Home
                    </Link>
                    <Link href="#" className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 mr-3"
                        >
                            <path
                                d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                                fill="currentColor"
                            />
                        </svg>
                        Job Market
                    </Link>
                    <Link href="#" className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 mr-3"
                        >
                            <path
                                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V6H8.5C8.22386 6 8 5.77614 8 5.5V2H3.5ZM9 2.70711L11.2929 5H9V2.70711ZM2 2.5C2 1.67157 2.67157 1 3.5 1H8.5C8.63261 1 8.75979 1.05268 8.85355 1.14645L12.8536 5.14645C12.9473 5.24021 13 5.36739 13 5.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z"
                                fill="currentColor"
                            />
                        </svg>
                        Resume Builder
                    </Link>
                    <Link href="#" className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100">
                        <Settings className="w-4 h-4 mr-3" />
                        Settings
                    </Link>
                </nav>

                {/* User Profile */}
                <div className="p-4 space-y-3">
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
            <div className="flex-1 flex flex-col bg-[#F8F8F8]">
                {/* Top Navigation */}
                <header className="h-14 border-b flex items-center justify-between px-4 bg-white">
                    <div></div>
                    <div className="flex items-center space-x-2">
                        <Button className="bg-blue-600 hover:bg-blue-700">Create Job</Button>
                        <Button variant="ghost" className="text-gray-600 flex items-center">
                            <Globe className="w-4 h-4 mr-1" />
                            English
                            <ChevronDown className="w-4 h-4 ml-1" />
                        </Button>
                        <Button variant="ghost" className="text-gray-600">
                            Reviews
                        </Button>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 p-6 flex items-center justify-center">
                    <div className="text-center max-w-md">
                        <div className="mx-auto w-16 h-20 mb-4">
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            Start creating your professional resume with our easy-to-use resume builder, or upload your existing
                            resume.
                        </p>
                        <div className="flex items-center justify-center space-x-3">
                            <Link href='/cv-template'>
                                <Button variant="outline" className="border-gray-300 w-[150px] lg:w-[180px] text-blue-400 border-t-blue-600 border-b-blue-600 border-r-blue-600 border-l-blue-600 cursor-pointer">
                                    <Plus />
                                    Create resume
                                </Button>
                            </Link>
                            <Button className=" w-[150px] lg:w-[180px] bg-blue-600 hover:bg-blue-700 cursor-pointer">
                                <Cloud />
                                Upload Resume
                            </Button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}