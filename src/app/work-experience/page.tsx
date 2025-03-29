'use client';

import { Button } from "@/components/ui/button";
import { Bell, BriefcaseBusiness, ChevronDown, ChevronLeft, ChevronRight, Gem, Globe, Grid2x2, Info, LayoutGrid, MessageSquare, Phone, Plus, Search, Settings, Trash2, User } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from 'zod';
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import Link from "next/link";
import { WorkExperienceEntry } from "../comp/WorkExperienceEntry";
// import '../workXperience/remove-top/style.css'
import Image from "next/image";

// Create a schema for a single work experience entry
const workExperienceSchema = z.object({
    company: z.string().min(1, 'Company name is required'),
    jobtitle: z.string().min(1, 'Job title is required'),
    state: z.string().min(1, 'State is required'),
    country: z.string().min(1, 'Country name is required'),
    startDate: z.string().min(1, 'Start date is required').refine(val => !isNaN(Date.parse(val)), {
        message: 'Invalid start date format',
    }),
    endDate: z.string().min(1, 'End date is required').refine(val => !isNaN(Date.parse(val)), {
        message: 'Invalid end date format',
    }),
    currentJob: z.boolean().optional(),
    description: z.string().min(1, 'Description is required'),
});

// Create a schema for the form with an array of work experiences
const formSchema = z.object({
    workExperiences: z.array(workExperienceSchema).min(1, 'At least one work experience is required')
});

const WorkExperience = () => {
    // const [currentStep, setCurrentStep] = useState<'template' | 'edit' | 'preview'>('edit');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Initialize the form with one empty work experience entry
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            workExperiences: [
                {
                    company: '',
                    jobtitle: '',
                    state: '',
                    country: '',
                    startDate: '',
                    endDate: '',
                    currentJob: false,
                    description: ''
                }
            ]
        }
    });

    // Use the useFieldArray hook to manage the array of work experiences
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "workExperiences"
    });

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log('submit', data);
        toast.success("Work experience added successfully!");
    }

    const handleNext = () => {
        // Check if the form is valid before proceeding
        form.trigger().then(isValid => {
            if (isValid) {
                // setCurrentStep('preview');
            } else {
                toast.error("❌ Please fill in all required fields before proceeding.");
            }
        });
    };

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

    const addWorkExperience = () => {
        append({
            company: '',
            jobtitle: '',
            state: '',
            country: '',
            startDate: '',
            endDate: '',
            currentJob: false,
            description: ''
        });

        // Scroll to the newly added form
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }, 100);

        toast.success("New work experience section added");
    };

    // Handle current job checkbox effect on end date
    useEffect(() => {
        const subscription = form.watch((value, { name }) => {
            if (name?.includes('currentJob') && name?.split('.').length === 3) {
                const index = parseInt(name.split('.')[1]);
                const isCurrentJob = form.getValues(`workExperiences.${index}.currentJob`);

                if (isCurrentJob) {
                    form.setValue(`workExperiences.${index}.endDate`, '');
                }
            }
        });

        return () => subscription.unsubscribe();
    }, [form]);

    return (
        <>
            <div className="flex min-h-screen bg-[#F8F8F8] ">
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
                        <Link href="#" className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 w-52 ">
                            <Search className="w-4 h-4 mr-3" />
                            <p className="text-[13px]">Home</p>
                        </Link>
                        <Link href="#" className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 w-52 ">
                            <BriefcaseBusiness className='w-4 h-4 mr-3' />
                            <p className="text-[13px]">Job tracker</p>
                        </Link>
                        <Link href="#" className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md w-52 ">
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
                <div className="flex-1 flex flex-col  lg:mt-0 mt-14 lg:ml-60">
                    {/* Desktop Header */}
                    <header className="h-14 border-b lg:flex items-center justify-between px-4 bg-white hidden fixed z-50 w-full lg:w-[calc(100%-240px)]">
                        <div></div>
                        <div className="flex items-center space-x-7 text-[13px]">
                            <Button className="bg-[rgba(9,103,210,1)] rounded-[10px] h-8 hover:bg-blue-700 text-[13px]">
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
                        <div className="m-auto w-[97%] p-3 lg:mt-18 bg-white rounded-2xl no-top ">
                            <div className="flex flex-col gap-2 lg:flex-row justify-between">
                                <Link href="/jobTemplate">
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
                                        <div className="w-12 h-0.5 bg-[rgba(7,162,168,1)]"></div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="flex gap-1.5 items-center ">
                                        <div className="bg-[rgba(7,162,168,1)] w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium">
                                            2
                                        </div>
                                        <span className="text-xs font-medium ">Edit template</span>
                                        <div className="w-12 h-0.5 bg-[rgba(7,162,168,1)]"></div>
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

                            <div className="flex flex-wrap lg:flex-nowrap justify-between mt-6  ">
                                {/* Left Section: Heading and Description */}
                                <div className="text-[12px] w-full lg:w-auto">
                                    <h1 className="text-[21px] font-semibold">Edit template</h1>
                                    <p className="hidden lg:block mt-2 text-gray-600">
                                        Pick a design that fits your style! Choose a template that highlights your skills and makes your resume stand out.
                                    </p>
                                    <p className="block lg:hidden mt-2 text-gray-600">
                                        Pick a design that fits your style! Choose a template that <br /> highlights your skills  and makes your resume stand out.
                                    </p>
                                </div>

                                {/* Right Section: Search Field and Dropdown */}

                            </div>
                        </div>

                        <div className="w-[97%] m-auto mt-3  p-5 flex-1 overflow-y-auto custom-scrollbar rounded-2xl bg-white ">

                            {/* Top Navigation Section */}
                            <div className="flex flex-wrap gap-5 ">
                                <div className="flex gap-2 items-center rounded-2xl shadow p-1">
                                    <button className="hidden lg:border rounded-2xl">
                                        <ChevronLeft />
                                    </button>
                                    <Link href="/personal-information">
                                        <Button variant="ghost" className="cursor-pointer">
                                            Personal Information
                                        </Button>
                                    </Link>
                                    <Button className="bg-[rgba(9,103,210,1)]" variant="ghost">Work Experience</Button>
                                    <Button className="hidden lg:block" variant="ghost">Education</Button>
                                    <Button className="hidden lg:block" variant="ghost">Skills</Button>
                                    <button className="hidden lg:border rounded-2xl">
                                        <ChevronRight />
                                    </button>
                                </div>

                                <div className="flex gap-1.5 items-center bg-white shadow p-2 rounded-2xl">
                                    <Plus className="w-4" />
                                    <p className="text-[13px]">Add a new section</p>
                                    <ChevronDown className="w-4" />
                                </div>
                            </div>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                    {fields.map((field, index) => (
                                        <div key={field.id} className="mb-8">
                                            <div className="flex items-center justify-between mb-6 px-3 mt-4 w-full lg:w-[60%] h-12 bg-gray-200 rounded-2xl">
                                                <div className="flex items-center gap-2 ">
                                                    <h2 className="text-lg font-medium">Work experience</h2>
                                                    <div className="bg-blue-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
                                                        {index + 1}
                                                    </div>
                                                </div>
                                                <div className="flex gap-4">
                                                    {fields.length > 1 && (
                                                        <button
                                                            type="button"
                                                            className="text-gray-400"
                                                            onClick={() => {
                                                                remove(index);
                                                                toast.info("Work experience removed");
                                                            }}
                                                        >
                                                            <Trash2 className="cursor-pointer" size={18} />
                                                        </button>
                                                    )}
                                                    <button className="text-gray-400">
                                                        <Info size={18} />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Flex container for form fields and image */}
                                            <div className="flex flex-col lg:flex-row justify-between gap-4">
                                                <div className="w-[90%] lg:w-[60%]">
                                                    <WorkExperienceEntry
                                                        form={form}
                                                        index={index}
                                                    />
                                                </div>

                                                {index === 0 && (
                                                    <div className="w-[90%] lg:w-[32%]">
                                                        <Image
                                                            src={"https://s3-alpha-sig.figma.com/img/2532/7023/082aed5b058ab8b58af0e221dc0e288f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Iymff6KiIzdN1Kv82nGBSYZI1-FgHZVTXWS7qY16eDnZjrm3jHOemoGAkGZ7lpJpHfk4ja87HsvRgY0UuzB554PGGY8W5oMSTvjyUPq4kjwa0S7wtL9WzIbs80I1BBZ62KA4pGxLeuq2Xn6N~elZNP2s3u5cXi4M2tQSpC4ENdoQJ~3-0BJOvhsA9yrRl4w1nIhPsJ13vDQvVyH8U3OwYsxAbYfW5wR-zXXcLrl8HuIV-MnGhwlh-PSSooxh~ou6mYueciBKfSjBaUIh1E4cj9ImwwN4DC~Y2eeUdism6vLjeCDNtzWNxu~XcFk7PRBZLfhANNcBYxSycZQyRxpTSw__"}
                                                            alt="image"
                                                            width={250}
                                                            height={50}
                                                            className=" md:w-auto"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    <div className="border border-dashed border-blue-300 rounded-lg p-4 mt-8 flex items-center justify-center flex-col hover:bg-blue-50 transition-colors cursor-pointer w-full lg:w-[60%]  ">
                                        <button
                                            type="button"
                                            onClick={addWorkExperience}
                                            className="text-blue-600 font-medium text-sm cursor-pointer"
                                        >
                                            Add more experience
                                        </button>
                                    </div>

                                    <div className="flex flex-wrap justify-center lg:flex-nowrap lg:justify-end gap-3 w-full">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={handleSaveAndExit}
                                            className="border-blue-600 text-blue-600 hover:bg-gray-50 w-full lg:w-[120px] cursor-pointer"
                                        >
                                            Save & exit
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            type="button"
                                            onClick={handleNext}
                                            className="bg-[#CEE1F6] text-blue-700 transition-colors w-full lg:w-[120px] cursor-pointer"
                                        >
                                            Next
                                        </Button>
                                    </div>

                                </form>
                            </Form>

                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default WorkExperience;