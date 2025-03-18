
"use client";

import Link from "next/link"
import { ChevronDown, Globe, Home, Settings, User, Phone, MessageSquare, ChevronLeft, ChevronRight, LockKeyhole } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import templatesForCv from "@/app/arrays-cv-prototype/design/template";
import { TemplateCard } from "@/app/comp/template-card";

export default function DifferentCvFrameWork() {
    const [currentPage, setCurrentPage] = useState(0)
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    const handlePageChange = (pageIndex: number) => {
        if (pageIndex >= 0 && pageIndex < templatesForCv.length) {
            setCurrentPage(pageIndex)
        }
    }

    const handleIndex = () => {
        handlePageChange(currentPage + 1)
    }

    return (
        <>
            <div >
                <div className="flex min-h-screen bg-[#F8F8F8]">
                    {/* Sidebar */}
                    <div className="w-64  pb-4 rounded-2xl bg-white  flex flex-col">
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
                        <div className="p-4 flex-col justify-end space-y-4">
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-600">Mentorship</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MessageSquare className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-600">Feedback</span>
                            </div>
                            <div className="flex items-center pt-3 ">
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
                    <div className="flex-1 flex flex-col pb-5 rounded-2xl bg-[#F8F8F8]">
                        {/* Top Navigation */}
                        <header className="h-14 border-b flex items-center justify-between px-4 py-9 bg-white">
                            <div></div>
                            <div className="flex items-center space-x-4 text-[13px]">
                                <Button className="bg-blue-600 hover:bg-blue-700">Create Job</Button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" /></svg>
                                <Button variant="ghost" className="text-gray-600 flex items-center">
                                    <Globe className="w-4 h-4 mr-1" />
                                    English
                                    <ChevronDown className="w-4 h-4 ml-1" />
                                </Button>
                                <Button variant="ghost" className="text-gray-600">
                                    Reviews
                                </Button>
                                <Button className="text-gray-600 border-t-green-700 bg-transparent">
                                    Upgrade to premium
                                </Button>
                            </div>
                        </header>

                        <main className="">
                            <div className="m-auto  w-[97%] p-3 mt-2 bg-white rounded-2xl">
                                <div className="flex justify-between">
                                    <Link href="/resume-builder">
                                        <div className="flex cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
                                            <p>back</p>
                                        </div>
                                    </Link>
                                    <div className="flex items-center">
                                        {/* Step 1 */}
                                        <div className="flex items-center">
                                            <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium">
                                                1
                                            </div>
                                            <span className="text-xs font-medium ml-2 mr-3">Choose a template</span>
                                            <div className="w-12 h-0.5 bg-green-500"></div>
                                        </div>

                                        {/* Step 2 */}
                                        <div className="flex items-center mx-3">
                                            <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium">
                                                2
                                            </div>
                                            <span className="text-xs font-medium ml-2 mr-3">Edit template</span>
                                            <div className="w-12 h-0.5 bg-green-500"></div>
                                        </div>

                                        {/* Step 3 */}
                                        <div className="flex items-center">
                                            <div className="bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium">
                                                3
                                            </div>
                                            <span className="text-xs font-medium text-gray-500 ml-2">Preview/Finalize</span>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex justify-between mt-6">
                                    <div className="text-[12px]">
                                        <h1 className="text-[21px]">Choose a template</h1>
                                        <p className="mt-2">Pick a design that fits your style!Choose a template that highlights your skills and makes your resume stand out</p>
                                    </div>

                                    <select className=" border  bg-white p-2 rounded-2xl w-[16%] h-10 text-[13px]" name="select" id="">
                                        <option value="">Show all template</option>
                                        <option value="">Accounting/Finance</option>
                                        <option value="">Administration</option>
                                        <option value="">Art/Design</option>
                                        <option value="">Automotive</option>
                                        <option value="">Banking</option>
                                        <option value="">Bartending</option>
                                        <option value="">Business</option>

                                    </select>
                                    {/* <TemplateSearch/> */}
                                </div>
                            </div>

                            <div className="w-[97%] m-auto bg-white mt-6 pb-9 pt-4 rounded-2xl">
                                {/* Free Templates Section */}
                                <div className="px-4 mb-8">
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
                                <div className="flex justify-between mt-3.5 px-4">
                                    <div className="flex items-center gap-2">
                                        <button
                                            className="border p-1 rounded-[10px] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer "
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 0}
                                        >
                                            <ChevronLeft className="h-4 w-4" />
                                        </button>

                                        {/* Generate buttons for each page */}
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
                                            <ChevronRight className="h-4 w-4 cursor-pointer " />
                                        </button>
                                    </div>

                                    <div>
                                        <Button
                                            className="bg-blue-700 w-[110px] cursor-pointer"
                                            onClick={() => {
                                                if (currentPage < templatesForCv.length - 1) {
                                                    handlePageChange(currentPage + 1)
                                                }
                                            }}
                                        >
                                            Next
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}