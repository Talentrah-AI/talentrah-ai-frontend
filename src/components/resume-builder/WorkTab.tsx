'use client';

import { FormProvider } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Bell,
  BriefcaseBusiness,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Gem,
  Globe,
  Grid2x2,
  Info,
  LayoutGrid,
  MessageSquare,
  Phone,
  Plus,
  Search,
  Settings,
  Trash2,
  User,
} from 'lucide-react';
import { useFieldArray } from 'react-hook-form';
import { UseFormReturn } from 'react-hook-form';
import { WorkFormValues } from '@/app/resume-builder/Bio-Data-Form/context/schema';
import { toast } from 'sonner';
import { useState, useEffect } from 'react';
import { WorkExperienceEntry } from './WorkExperienceEntry';
import { useTab } from '@/app/resume-builder/Bio-Data-Form/context/TabContext';
import Image from 'next/image';

interface WorkTabProps {
  form: UseFormReturn<WorkFormValues>;
  handleSaveAndExit: () => void;
}

export function WorkTab({ form, handleSaveAndExit }: WorkTabProps) {
  const { setActiveTab } = useTab();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Use the useFieldArray hook to manage the array of work experiences
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'workExperiences',
  });

  function onSubmit(data: WorkFormValues) {
    console.log('submit', data);
    toast.success('Work experience added successfully!');
    setActiveTab('education');
  }

  const addWorkExperience = () => {
    append({
      company: '',
      jobtitle: '',
      state: '',
      country: '',
      startDate: '',
      endDate: '',
      currentJob: false,
      description: '',
    });

    // Scroll to the newly added form
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }, 100);

    toast.success('New work experience section added');
  };

  // Handle current job checkbox effect on end date
  useEffect(() => {
    const subscription = form.watch((_, { name }) => {
      if (name?.includes('currentJob') && name?.split('.').length === 3) {
        const index = Number.parseInt(name.split('.')[1]);
        const isCurrentJob = form.getValues(
          `workExperiences.${index}.currentJob`
        );

        if (isCurrentJob) {
          form.setValue(`workExperiences.${index}.endDate`, '');
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <div className="flex ">
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
              className="text-gray-600 flex items-center text-[13px]"
            >
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
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md w-52 hover:bg-gray-100"
              >
                <Search className="w-4 h-4 mr-3" />
                <p className="text-[13px]">Home</p>
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md w-52 hover:bg-gray-100"
              >
                <BriefcaseBusiness className="w-4 h-4 mr-3" />
                <p className="text-[13px]">Job tracker</p>
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md w-52"
              >
                <Settings className="w-4 h-4 mr-3" />
                <p className="text-[13px]">Resume Builder</p>
              </a>
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
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 w-52"
          >
            <Search className="w-4 h-4 mr-3" />
            <p className="text-[13px]">Home</p>
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 w-52"
          >
            <BriefcaseBusiness className="w-4 h-4 mr-3" />
            <p className="text-[13px]">Job tracker</p>
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md w-52"
          >
            <Settings className="w-4 h-4 mr-3" />
            <p className="text-[13px]">Resume Builder</p>
          </a>
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
      <div className="flex-1 flex flex-col bg-[#F8F8F8] lg:mt-0 mt-14 lg:ml-60">
        {/* Desktop Header */}
        <header className="h-14 border-b lg:flex items-center justify-between px-4 bg-white hidden fixed z-50 w-full lg:w-[calc(100%-240px)]">
          <div></div>
          <div className="flex items-center space-x-4 text-[11px]">
            <Button className="bg-[rgba(9,103,210,1)] rounded-[10px] h-8 hover:bg-blue-700 text-[11px] px-2">
              <Plus className="w-3 h-3 mr-1" />
              Create Job loop
            </Button>
            <Bell className="w-4 h-4 rounded-2xl border" />
            <Button
              variant="ghost"
              className="text-gray-600 flex items-center text-[11px] border rounded-[10px] h-8 px-2"
            >
              <Globe className="w-3 h-3 mr-1" />
              English
              <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
            <Button
              variant={'ghost'}
              className="text-gray-600 flex items-center border border-[#07A2A8] rounded-[10px] h-8 px-2"
            >
              <Gem className="h-3 w-3 text-[#07A2A8] mr-1" />
              <span className="text-[#07A2A8] text-[11px]">Upgrade</span>
            </Button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="">
          <div className="m-auto w-[97%] p-3 mt-5 bg-white rounded-2xl lg:mt-20">
            <div className="flex flex-col gap-2 lg:flex-row justify-between">
              <a href="#" className="flex cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-left"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <p>back</p>
              </a>
              <div className="flex flex-col gap-2 lg:flex-row">
                {/* Step 1 */}
                <div className="flex gap-1.5 items-center">
                  <div className="bg-[rgba(7,162,168,1)] w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    1
                  </div>
                  <span className="text-xs font-medium">Choose a template</span>
                  <div className="w-16 h-0.5 bg-[rgba(7,162,168,1)]"></div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-1.5 items-center">
                  <div className="bg-[rgba(7,162,168,1)] w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    2
                  </div>
                  <span className="text-xs font-medium">Edit template</span>
                  <div className="w-16 h-0.5 bg-[rgba(7,162,168,1)]"></div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-1.5 items-center">
                  <div className="bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    3
                  </div>
                  <span className="text-xs font-medium text-gray-500">
                    Preview/Finalize
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap justify-between mt-6">
              {/* Left Section: Heading and Description */}
              <div className="text-[12px] w-full lg:w-auto">
                <h1 className="text-[21px] font-semibold">Edit template</h1>
                <p className="hidden lg:block mt-2 text-gray-600">
                  Customize your resume layout! Adjust the sections to match
                  your style and profession
                </p>
                <p className="block lg:hidden mt-2 text-gray-600">
                  Customize your resume layout! Adjust the sections to <br />{' '}
                  match your style and profession
                </p>
              </div>
            </div>
          </div>

          <div className="w-[97%] m-auto mt-3 bg-white p-5 flex-1 overflow-y-auto rounded-2xl">
            {/* Top Navigation Section */}
            <div className="flex flex-wrap gap-3 overflow-x-auto whitespace-nowrap pb-2">
              <div className="flex gap-1 items-center rounded-2xl shadow p-1">
                <button className="border rounded-2xl p-1">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <Button
                  variant="ghost"
                  onClick={() => setActiveTab('personal')}
                  className="cursor-pointer text-[11px] h-8 px-2"
                >
                  Personal Information
                </Button>
                <Button className="bg-[rgba(9,103,210,1)] hover:bg-blue-400 text-[11px] h-8 px-2">
                  Work Experience
                </Button>
                <Button
                  className="h sm:block"
                  variant="ghost"
                  onClick={() => setActiveTab('education')}
                  size="sm"
                >
                  Education
                </Button>
                <Button
                  className=" sm:block"
                  variant="ghost"
                  onClick={() => setActiveTab('skills')}
                  size="sm"
                >
                  Skills
                </Button>
                <button className="border rounded-2xl p-1">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex gap-1.5 items-center bg-white shadow p-2 rounded-2xl">
                <Plus className="w-3 h-3" />
                <p className="text-[11px]">Add section</p>
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>

            <FormProvider {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {fields.map((field, index) => (
                  <div key={field.id} className="mb-8">
                    <div className="flex items-center justify-between mb-6 px-3 mt-4 w-full lg:w-[60%] h-12 bg-gray-200 rounded-2xl">
                      <div className="flex items-center gap-2">
                        <h2 className="text-base font-medium">
                          Work experience
                        </h2>
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
                              toast.info('Work experience removed');
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
                      <div className="w-full lg:w-[60%]">
                        <WorkExperienceEntry form={form} index={index} />
                      </div>

                      {index === 0 && (
                        <div className="w-full lg:w-[40%] flex justify-center">
                          <Image
                            src="https://s3-alpha-sig.figma.com/img/2532/7023/082aed5b058ab8b58af0e221dc0e288f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Iymff6KiIzdN1Kv82nGBSYZI1-FgHZVTXWS7qY16eDnZjrm3jHOemoGAkGZ7lpJpHfk4ja87HsvRgY0UuzB554PGGY8W5oMSTvjyUPq4kjwa0S7wtL9WzIbs80I1BBZ62KA4pGxLeuq2Xn6N~elZNP2s3u5cXi4M2tQSpC4ENdoQJ~3-0BJOvhsA9yrRl4w1nIhPsJ13vDQvVyH8U3OwYsxAbYfW5wR-zXXcLrl8HuIV-MnGhwlh-PSSooxh~ou6mYueciBKfSjBaUIh1E4cj9ImwwN4DC~Y2eeUdism6vLjeCDNtzWNxu~XcFk7PRBZLfhANNcBYxSycZQyRxpTSw__"
                            alt=""
                            width={350}
                            height={200}
                            className="w-full"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                <div className="border border-dashed border-blue-300 rounded-lg p-4 mt-8 flex items-center justify-center flex-col hover:bg-blue-50 transition-colors cursor-pointer w-full lg:w-[60%]">
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
                    type="submit"
                    className="bg-[#CEE1F6] text-blue-700 transition-colors w-full lg:w-[120px] cursor-pointer"
                  >
                    Next
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </main>
      </div>
    </div>
  );
}
