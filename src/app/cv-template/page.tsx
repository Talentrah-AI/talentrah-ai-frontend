"use client";

import Link from "next/link"
import { ChevronDown, Globe, Settings, User, Phone, MessageSquare, ChevronLeft, ChevronRight, Plus, Bell, BriefcaseBusiness, Search, LayoutGrid, Grid2x2, Gem } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useState } from "react";
import { TemplateCard } from "../comp/template-card";
import '../cv-template/top/style.css'
import templatesForCv from "../arrays-cv-prototype/design/template";

export default function Dashboard() {
    const [currentPage, setCurrentPage] = useState(0)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState('Show all templates');

    const handlePageChange = (pageIndex: number) => {
        if (pageIndex >= 0 && pageIndex < templatesForCv.length) {
            setCurrentPage(pageIndex)
        }
    }

    const options = [
        'Show all templates',
        'Accounting/Finance',
        'Administration',
        'Art/Design',
        'Automotive',
        'Banking',
        'Bartending',
        'Business'
    ];

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="flex min-h-screen pb-5 bg-[#F8F8F8]">
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
                        <div className="flex flex-col h-full mt-5 pt-3 pb-3">
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
                <div className="hidden lg:flex lg:w-60 lg:flex-col h-full bg-white fixed z-40 pb-5 ">
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <span className="font-bold text-blue-600">Talentrah</span>
                        </div>
                        <button className="text-gray-400">
                            <LayoutGrid className="w-4 h-4" />
                        </button>
                    </div>

                    <nav className="flex-1 space-y-1">
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
                <div className="flex-1 flex flex-col bg-[#F8F8F8] lg:mt-0 mt-14 lg:ml-60">
                    {/* Desktop Header */}
                    <header className="h-14 border-b lg:flex items-center justify-between px-4 bg-white hidden fixed z-50 w-full lg:w-[calc(100%-240px)]">
                        <div></div>
                        <div className="flex items-center space-x-7 text-[13px]">
                            <Button className="bg-[rgba(9,103,210,1)] rounded-[10px] hover:bg-blue-700 text-[13px] h-8 ">
                                <Plus />
                                Create Job loop
                            </Button>
                            <Bell className="w-4 h-4 rounded-2xl border " />
                            <Button variant="ghost" className="text-gray-600 flex items-center text-[13px] border rounded-[10px] h-8 ">
                                <Globe className="w-4 h-4 mr-1" />
                                English
                                <ChevronDown className="w-4 h-4 ml-1" />
                            </Button>
                            <Button variant={"ghost"} className="text-gray-600 flex items-center border border-[#07A2A8] rounded-[10px] h-8">
                                <Gem className="h-4 w-4 text-[#07A2A8]  " />
                                <span className="ml-1 text-[#07A2A8] text-[13px]">Upgrade to premium</span>
                            </Button>
                        </div>
                    </header>

                    {/* Main Content Area */}
                    <main className="">
                        <div className="m-auto w-[97%] p-3 lg:mt-18 bg-white rounded-2xl no-top">
                            <div className="flex flex-col gap-2 lg:flex-row justify-between">
                                <Link href="/">
                                    <div className="flex cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
                                        <p>back</p>
                                    </div>
                                </Link>
                                <div className="flex flex-col gap-2 lg:flex-row ">
                                    {/* Step 1 */}
                                    <div className="flex gap-1.5 items-center">
                                        <div className="bg-[rgba(7,162,168,1)] w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium">
                                            1
                                        </div>
                                        <span className="text-xs font-medium ">Choose a template</span>
                                        <div className="w-16 h-0.5 bg-[rgba(7,162,168,1)]"></div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="flex gap-1.5 items-center ">
                                        <div className="bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium">
                                            2
                                        </div>
                                        <span className="text-xs font-medium ">Edit template</span>
                                        <div className="w-16 h-0.5 bg-gray-300"></div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="flex gap-1.5 items-center">
                                        <div className="bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium">
                                            3
                                        </div>
                                        <span className="text-xs font-medium text-gray-500 ">Preview/Finalize</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap lg:flex-nowrap justify-between mt-6">
                                {/* Left Section: Heading and Description */}
                                <div className="text-[12px] w-full lg:w-auto">
                                    <h1 className="text-[21px] font-semibold">Choose a template</h1>
                                    <p className="hidden lg:block mt-2 text-gray-600">
                                        Pick a design that fits your style! Choose a template that highlights your skills and makes your resume stand out.
                                    </p>
                                    <p className="block lg:hidden mt-2 text-gray-600">
                                        Pick a design that fits your style! Choose a template <br /> that highlights your skills and makes your resume stand out.
                                    </p>
                                </div>

                                {/* Right Section: Search Field and Dropdown */}
                                <div className="relative lg: mt-4 lg:mt-10 ">
                                    {/* Dropdown Button */}
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="w-full flex gap-2.5 items-center justify-between px-4 py-2.5 text-sm text-gray-600 bg-[#F5F7FB] border border-gray-200 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                                    >
                                        {selectedOption}
                                        <ChevronDown className="w-4 h-4  text-gray-400" />
                                    </button>

                                    {/* Dropdown Menu */}
                                    {isOpen && (
                                        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                                            {/* Search Input */}
                                            <div className="p-2 border-b border-gray-100">
                                                <div className="relative">
                                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                                                    <input
                                                        type="text"
                                                        placeholder="Search"
                                                        value={searchTerm}
                                                        onChange={(e) => setSearchTerm(e.target.value)}
                                                        className="w-full pl-9 pr-3 py-2 text-sm bg-[#F5F7FB] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-100"
                                                    />
                                                </div>
                                            </div>

                                            {/* Dropdown Options */}
                                            <div className="max-h-48 overflow-y-auto">
                                                {filteredOptions.map((option, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => {
                                                            setSelectedOption(option);
                                                            setIsOpen(false);
                                                            setSearchTerm('');
                                                        }}
                                                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 focus:outline-none ${selectedOption === option ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
                                                            }`}
                                                    >
                                                        {option}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="w-[97%] m-auto bg-white mt-6 pb-9 pt-4 rounded-2xl  overflow-y-auto hide-scrollbar " >
                            {/* Free Templates Section */}
                            <div className="px-4 mb-8">
                                <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-4">
                                    {templatesForCv[currentPage].free.map((template) => (
                                        <TemplateCard
                                            key={`free-${template.id}`}
                                            id={template.id}
                                            image={template.image}
                                            type="free"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Premium Templates Section */}
                            <div className="px-4 mb-8">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                    {templatesForCv[currentPage].premium.map((template) => (
                                        <TemplateCard
                                            key={`premium-${template.id}`}
                                            id={template.id}
                                            image={template.image}
                                            lock={template.lock}
                                            type="premium"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Pagination */}
                            <div className="flex flex-wrap justify-center gap-4 md:flex lg:justify-between px-4 ">
                                <div className="w-full md:w-auto flex justify-center md:justify-start">
                                    <div className="flex gap-2">
                                        <button
                                            className="border p-1 rounded-[10px] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 0}
                                        >
                                            <ChevronLeft className="h-4 w-4" />
                                        </button>

                                        {Array.from({ length: templatesForCv.length }).map((_, index) => (
                                            <button
                                                key={index}
                                                className={`border p-1 rounded-[10px] w-[30px] h-[30px] flex items-center justify-center cursor-pointer ${currentPage === index ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                                                    }`}
                                                onClick={() => handlePageChange(index)}
                                            >
                                                <p>{index + 1}</p>
                                            </button>
                                        ))}

                                        <button
                                            className="border p-1 rounded-[10px] disabled:opacity-50 disabled:cursor-not-allowed"
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === templatesForCv.length - 1}
                                        >
                                            <ChevronRight className="h-4 w-4 cursor-pointer" />
                                        </button>
                                    </div>
                                </div>

                                <Button
                                    className="w-[80%] md:w-[110px] bg-blue-700 cursor-pointer"
                                    onClick={() => {
                                        if (currentPage < templatesForCv.length - 1) {
                                            handlePageChange(currentPage + 1);
                                        }
                                    }}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}