
'use client';
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight, Globe, Home, MessageSquare, Phone, Plus, Settings, User } from "lucide-react";
import Link from "next/link";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { Form } from "@/components/ui/form";
import GenericForm from "../hook-form/page";
import fields from "../shadcnFolder/fillForm/inputField";
import { AdditionalFields } from "../comp/custom-field";
import { toast } from "sonner";
import '../personal-information/style/custom.css'
import Image from "next/image";

const formSchema = z.object({
    firstname: z.string().min(1, 'Please fill your first name'),
    lastname: z.string().min(1, 'Please fill your last name'),
    email: z.string().email('Email is required'),
    phonenumber: z.string().min(11, 'Phone number must be 11 digits').max(11, 'Phone number must be 11 digits'),
    address: z.string().min(1, 'Please fill your address')
})

export default function UserPersonalInformation() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log('hook-form', values);
    }

    const handleSaveAndExit = () => {
        // Only save if the form is valid
        form.trigger().then(isValid => {
            if (isValid) {
                const data = form.getValues();
                console.log('Form saved with data:', data);
                toast.success("✅ Progress saved!");
            } else {
                toast.error("Please fill in all required fields before saving.");
            }
        });
    };

    return (
        <>
            <div className="flex min-h-screen  bg-white">

                <div className="w-64 flex flex-col ">
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
                    </div>
                </div>

                <div className="flex-1 flex flex-col pb-5 rounded-2xl bg-[#F8F8F8] ">
                    {/* Top Navigation */}
                    <header className="h-14 border-b flex items-center justify-between px-4 py-4 bg-white">
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

                    <main className="bg-[#F8F8F8]">
                        <div className="w-[98%] m-auto mt-3 p-5 bg-white">
                            <div className="flex justify-between items-center ">
                                <Link href="/cv-template">
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

                            <div className="flex justify-between mt-6 ">
                                <div className="text-[13px]">
                                    <h1 className="text-[21px]">Edit template</h1>
                                    <p className="mt-2">Customize your resume layout! Adjust the sections to match your style and profession</p>
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

                        <div className=" flex flex-col  ">
                            <div className="w-[98%] m-auto mt-3 bg-white p-5 flex-1 overflow-y-auto custom-scrollbar h-full">

                                {/* Top Navigation Section */}
                                <div className="flex flex-wrap gap-5 ">
                                    <div className="flex gap-2 items-center rounded-2xl shadow p-1">
                                        <button className="border rounded-2xl">
                                            <ChevronLeft />
                                        </button>
                                        <Button className="bg-blue-700 hover:bg-blue-400">
                                            Personal Information
                                        </Button>
                                        <Button variant="ghost">Work Experience</Button>
                                        <Button variant="ghost">Education</Button>
                                        <Button variant="ghost">Skills</Button>
                                        <button className="border rounded-2xl">
                                            <ChevronRight />
                                        </button>
                                    </div>

                                    <div className="flex gap-1.5 items-center bg-white shadow p-2 rounded-2xl">
                                        <Plus className="w-4" />
                                        <p className="text-[13px]">Add a new section</p>
                                        <ChevronDown className="w-4" />
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row justify-between mt-5  ">
                                    <div className="w-full md:w-[60%] overflow-y-auto custom-scrollbar">
                                        <Form {...form}>
                                            <form
                                                onSubmit={form.handleSubmit(onSubmit)}
                                                className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-4"
                                            >
                                                {fields.map((elem, i) => (
                                                    <GenericForm key={i} form={form} field={elem} />
                                                ))}
                                            </form>

                                            <AdditionalFields />
                                        </Form>
                                    </div>

                                    <div className="w-full md:w-[30%] flex flex-col items-center ">
                                        <Image
                                            src={"https://s3-alpha-sig.figma.com/img/2532/7023/082aed5b058ab8b58af0e221dc0e288f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Iymff6KiIzdN1Kv82nGBSYZI1-FgHZVTXWS7qY16eDnZjrm3jHOemoGAkGZ7lpJpHfk4ja87HsvRgY0UuzB554PGGY8W5oMSTvjyUPq4kjwa0S7wtL9WzIbs80I1BBZ62KA4pGxLeuq2Xn6N~elZNP2s3u5cXi4M2tQSpC4ENdoQJ~3-0BJOvhsA9yrRl4w1nIhPsJ13vDQvVyH8U3OwYsxAbYfW5wR-zXXcLrl8HuIV-MnGhwlh-PSSooxh~ou6mYueciBKfSjBaUIh1E4cj9ImwwN4DC~Y2eeUdism6vLjeCDNtzWNxu~XcFk7PRBZLfhANNcBYxSycZQyRxpTSw__"}
                                            alt="image"
                                            width={250}
                                            height={50}
                                        />

                                        <div className="flex gap-3 justify-end items-center mt-10 w-full">
                                            <Button
                                                className="text-blue-600 border border-blue-600 bg-transparent w-[110px] h-8 cursor-pointer"
                                                onClick={handleSaveAndExit}
                                            >
                                                Save & Exit
                                            </Button>

                                            <Link href="/work-experience">
                                                <button className="bg-[#CEE1F6] w-[110px] h-9 rounded-2xl cursor-pointer">
                                                    Next
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </main>

                </div>
            </div>
        </>
    )
}