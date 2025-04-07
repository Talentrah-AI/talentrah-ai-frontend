'use client';

import { FormProvider } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { EducationFormValues } from '@/app/resume-builder/Bio-Data-Form/context/schema';
import {
  Bell,
  BriefcaseBusiness,
  CalendarIcon,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Gem,
  Globe,
  Grid2x2,
  LayoutGrid,
  MessageSquare,
  Phone,
  Plus,
  Search,
  Settings,
  Trash,
  User,
} from 'lucide-react';

import { toast } from 'sonner';
import { useState, useRef, useEffect } from 'react';
import { useTab } from '@/app/resume-builder/Bio-Data-Form/context/TabContext';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { UseFormReturn } from 'react-hook-form';

// const educationSchema = z.object({
//   institution: z.string().min(1, "Institution name is required"),
//   degree: z.string().min(1, "Degree is required"),
//   fieldOfStudy: z.string().min(1, "Field of study is required"),
//   state: z.string().min(1, "State is required"),
//   country: z.string().min(1, "Country is required"),
//   startDate: z.string().min(1, "Start date is required"),
//   endDate: z.string().min(1, "End date is required"),
//   currentlyStudying: z.boolean().optional(),
// })

interface EducationTabProps {
  form: UseFormReturn<EducationFormValues>;
  handleSaveAndExit: () => void;
}

const degrees = [
  'BSc',
  'BA',
  'BEng',
  'MSc',
  'MA',
  'MEng',
  'PhD',
  'MBA',
  'LLB',
  'MD',
  'DBA',
  'EdD',
];

type EducationEntry = {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  state: string;
  country: string;
  startDate: string;
  endDate: string;
  currentlyStudying: boolean;
};

export function EducationTab({ form, handleSaveAndExit }: EducationTabProps) {
  const { setActiveTab } = useTab();
  const [showDegreeDropdown, setShowDegreeDropdown] = useState<{
    [key: string]: boolean;
  }>({});
  const [showFromCalendar, setShowFromCalendar] = useState<{
    [key: string]: boolean;
  }>({});
  const [showToCalendar, setShowToCalendar] = useState<{
    [key: string]: boolean;
  }>({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [educationEntries, setEducationEntries] = useState<EducationEntry[]>([
    {
      id: 'education-1',
      institution: '',
      degree: 'BSc',
      fieldOfStudy: '',
      state: '',
      country: '',
      startDate: '',
      endDate: '',
      currentlyStudying: false,
    },
  ]);

  const degreeRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const fromCalendarRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const toCalendarRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const addEducationEntry = () => {
    const newEntry: EducationEntry = {
      id: `education-${educationEntries.length + 1}-${Date.now()}`,
      institution: '',
      degree: 'BSc',
      fieldOfStudy: '',
      state: '',
      country: '',
      startDate: '',
      endDate: '',
      currentlyStudying: false,
    };
    setEducationEntries([...educationEntries, newEntry]);
  };

  const removeEducationEntry = (id: string) => {
    if (educationEntries.length <= 1) {
      toast.error('You must have at least one education entry');
      return;
    }

    setEducationEntries(educationEntries.filter((entry) => entry.id !== id));
  };

  const updateEducationEntry = (
    id: string,
    field: keyof EducationFormValues,
    value: EducationFormValues[keyof EducationFormValues]
  ) => {
    setEducationEntries(
      educationEntries.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  const toggleDegreeDropdown = (id: string) => {
    setShowDegreeDropdown((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleFromCalendar = (id: string, value: boolean) => {
    setShowFromCalendar((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const toggleToCalendar = (id: string, value: boolean) => {
    setShowToCalendar((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  function onSubmit(data: EducationFormValues) {
    console.log('Education entries:', educationEntries);
    toast.success('Education information saved successfully!');
    setActiveTab('skills');
    console.log(data);
  }

  // Format date for display
  const formatDate = (date: string) => {
    if (!date) return '';
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';

    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();

    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Handle degree dropdowns
      Object.keys(degreeRefs.current).forEach((id) => {
        if (
          degreeRefs.current[id] &&
          !degreeRefs.current[id]?.contains(event.target as Node)
        ) {
          setShowDegreeDropdown((prev) => ({
            ...prev,
            [id]: false,
          }));
        }
      });

      // Handle from calendars
      Object.keys(fromCalendarRefs.current).forEach((id) => {
        if (
          fromCalendarRefs.current[id] &&
          !fromCalendarRefs.current[id]?.contains(event.target as Node)
        ) {
          setShowFromCalendar((prev) => ({
            ...prev,
            [id]: false,
          }));
        }
      });

      // Handle to calendars
      Object.keys(toCalendarRefs.current).forEach((id) => {
        if (
          toCalendarRefs.current[id] &&
          !toCalendarRefs.current[id]?.contains(event.target as Node)
        ) {
          setShowToCalendar((prev) => ({
            ...prev,
            [id]: false,
          }));
        }
      });
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
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
      <div className="hidden lg:flex lg:w-60 lg:flex-col h-screen bg-white fixed z-40">
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
            <div className="flex flex-wrap gap-3 overflow-x-hidden whitespace-nowrap pb-2">
              <div className="flex gap-1 items-center rounded-2xl shadow p-1">
                <button className="border rounded-2xl p-1">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <Button
                  variant="ghost"
                  onClick={() => setActiveTab('personal')}
                  className="text-[11px] h-8 px-2"
                >
                  Personal Information
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setActiveTab('work')}
                  className="text-[11px] h-8 px-2"
                >
                  Work Experience
                </Button>
                <Button className="bg-[rgba(9,103,210,1)] hover:bg-blue-400 text-[11px] h-8 px-2 text-sm">
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

              <div className="flex gap-1.5 items-center bg-white border  p-2 rounded-2xl">
                <Plus className="w-3 h-3" />
                <p className="text-[11px]">Add section</p>
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>

            <FormProvider {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 mt-6"
              >
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                  <div className="w-full lg:w-[60%] space-y-8">
                    {educationEntries.map((education, index) => (
                      <div key={education.id} className=" p-6 bg-white ">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2  bg-gray-200 rounded-2xl w-full p-2 ">
                            <h2 className="text-lg font-medium">Education</h2>
                            <div className="bg-blue-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
                              {index + 1}
                            </div>
                          </div>
                          {educationEntries.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeEducationEntry(education.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash size={18} />
                            </button>
                          )}
                        </div>

                        <div className="space-y-6">
                          <div className="space-y-2">
                            <Label htmlFor={`institution-${education.id}`}>
                              Institution name
                            </Label>
                            <Input
                              id={`institution-${education.id}`}
                              placeholder="Akwa Ibom State University"
                              value={education.institution}
                              onChange={(e) =>
                                updateEducationEntry(
                                  education.id,
                                  'institution',
                                  e.target.value
                                )
                              }
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor={`fieldOfStudy-${education.id}`}>
                                Field of study
                              </Label>
                              <Input
                                id={`fieldOfStudy-${education.id}`}
                                placeholder="Computer science"
                                value={education.fieldOfStudy}
                                onChange={(e) =>
                                  updateEducationEntry(
                                    education.id,
                                    'fieldOfStudy',
                                    e.target.value
                                  )
                                }
                              />
                            </div>

                            <div
                              className="relative space-y-2"
                              ref={(el) => {
                                degreeRefs.current[education.id] = el;
                              }}
                            >
                              <Label htmlFor={`degree-${education.id}`}>
                                Degree
                              </Label>
                              <div
                                onClick={() =>
                                  toggleDegreeDropdown(education.id)
                                }
                                className="w-full p-3 border border-gray-300 rounded-md text-left flex items-center justify-between cursor-pointer"
                              >
                                <span>{education.degree || 'BSc'}</span>
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                              </div>
                              {showDegreeDropdown[education.id] && (
                                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                                  {degrees.map((degree) => (
                                    <div
                                      key={degree}
                                      onClick={() => {
                                        updateEducationEntry(
                                          education.id,
                                          'degree',
                                          degree
                                        );
                                        toggleDegreeDropdown(education.id);
                                      }}
                                      className="w-full px-4 py-2 text-left hover:bg-gray-50 cursor-pointer"
                                    >
                                      {degree}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor={`state-${education.id}`}>
                                State
                              </Label>
                              <Input
                                id={`state-${education.id}`}
                                placeholder="Akwa Ibom State"
                                value={education.state}
                                onChange={(e) =>
                                  updateEducationEntry(
                                    education.id,
                                    'state',
                                    e.target.value
                                  )
                                }
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor={`country-${education.id}`}>
                                Country
                              </Label>
                              <Input
                                id={`country-${education.id}`}
                                placeholder="Nigeria"
                                value={education.country}
                                onChange={(e) =>
                                  updateEducationEntry(
                                    education.id,
                                    'country',
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div
                              className="relative space-y-2"
                              ref={(el) => {
                                fromCalendarRefs.current[education.id] = el;
                              }}
                            >
                              <Label htmlFor={`startDate-${education.id}`}>
                                From
                              </Label>
                              <div className="relative">
                                <Input
                                  id={`startDate-${education.id}`}
                                  value={formatDate(education.startDate)}
                                  onClick={() =>
                                    toggleFromCalendar(education.id, true)
                                  }
                                  readOnly
                                  placeholder="02/06/2017"
                                  className="cursor-pointer"
                                />
                                <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />

                                {showFromCalendar[education.id] && (
                                  <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                                    <Calendar
                                      mode="single"
                                      selected={
                                        education.startDate
                                          ? new Date(education.startDate)
                                          : undefined
                                      }
                                      onSelect={(date) => {
                                        if (date) {
                                          updateEducationEntry(
                                            education.id,
                                            'startDate',
                                            date.toISOString()
                                          );
                                          toggleFromCalendar(
                                            education.id,
                                            false
                                          );
                                        }
                                      }}
                                      initialFocus
                                    />
                                  </div>
                                )}
                              </div>
                            </div>

                            <div
                              className="relative space-y-2"
                              ref={(el) => {
                                toCalendarRefs.current[education.id] = el;
                              }}
                            >
                              <Label htmlFor={`endDate-${education.id}`}>
                                To
                              </Label>
                              <div className="relative">
                                <Input
                                  id={`endDate-${education.id}`}
                                  value={formatDate(education.endDate)}
                                  onClick={() => {
                                    if (!education.currentlyStudying) {
                                      toggleToCalendar(education.id, true);
                                    }
                                  }}
                                  readOnly
                                  placeholder="06/06/2020"
                                  className={`${education.currentlyStudying ? 'bg-gray-50 text-gray-500' : 'cursor-pointer'}`}
                                  disabled={education.currentlyStudying}
                                />
                                <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />

                                {showToCalendar[education.id] &&
                                  !education.currentlyStudying && (
                                    <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                                      <Calendar
                                        mode="single"
                                        selected={
                                          education.endDate
                                            ? new Date(education.endDate)
                                            : undefined
                                        }
                                        onSelect={(date) => {
                                          if (date) {
                                            updateEducationEntry(
                                              education.id,
                                              'endDate',
                                              date.toISOString()
                                            );
                                            toggleToCalendar(
                                              education.id,
                                              false
                                            );
                                          }
                                        }}
                                        initialFocus
                                      />
                                    </div>
                                  )}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id={`currentlyStudying-${education.id}`}
                              checked={education.currentlyStudying}
                              onCheckedChange={(checked) => {
                                updateEducationEntry(
                                  education.id,
                                  'currentlyStudying',
                                  !!checked
                                );
                                if (checked) {
                                  updateEducationEntry(
                                    education.id,
                                    'endDate',
                                    ''
                                  );
                                }
                              }}
                            />
                            <Label
                              htmlFor={`currentlyStudying-${education.id}`}
                              className="text-sm text-gray-700"
                            >
                              I currently study here
                            </Label>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div
                      className="border border-dashed border-blue-300 rounded-lg p-4 mt-4 flex items-center justify-center flex-col hover:bg-blue-50 transition-colors cursor-pointer"
                      onClick={addEducationEntry}
                    >
                      <button
                        type="button"
                        className="text-blue-600 font-medium text-sm cursor-pointer"
                      >
                        Add more education
                      </button>
                    </div>
                  </div>

                  <div className="w-full lg:w-[40%] flex justify-center">
                    <div className="sticky top-4">
                      <Image
                        src="https://s3-alpha-sig.figma.com/img/2532/7023/082aed5b058ab8b58af0e221dc0e288f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Iymff6KiIzdN1Kv82nGBSYZI1-FgHZVTXWS7qY16eDnZjrm3jHOemoGAkGZ7lpJpHfk4ja87HsvRgY0UuzB554PGGY8W5oMSTvjyUPq4kjwa0S7wtL9WzIbs80I1BBZ62KA4pGxLeuq2Xn6N~elZNP2s3u5cXi4M2tQSpC4ENdoQJ~3-0BJOvhsA9yrRl4w1nIhPsJ13vDQvVyH8U3OwYsxAbYfW5wR-zXXcLrl8HuIV-MnGhwlh-PSSooxh~ou6mYueciBKfSjBaUIh1E4cj9ImwwN4DC~Y2eeUdism6vLjeCDNtzWNxu~XcFk7PRBZLfhANNcBYxSycZQyRxpTSw__"
                        alt="Resume preview"
                        width={350}
                        height={500}
                        className="w-full rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 w-full lg:w-auto lg:flex-row justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSaveAndExit}
                    className="border-blue-600 text-blue-600 hover:bg-gray-50"
                  >
                    Save & exit
                  </Button>
                  <Button
                    type="submit"
                    className="bg-[#CEE1F6] text-blue-700 hover:bg-blue-100"
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
