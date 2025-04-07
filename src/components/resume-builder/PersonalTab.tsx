'use client';

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
  LayoutGrid,
  MessageSquare,
  Phone,
  Plus,
  Search,
  Settings,
  User,
} from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Image from 'next/image';
import { useState } from 'react';
import { useTab } from '@/app/resume-builder/Bio-Data-Form/context/TabContext';
import { AdditionalFields } from './CustomField';

const formSchema = z.object({
  firstname: z.string().min(1, 'Please fill your first name'),
  lastname: z.string().min(1, 'Please fill your last name'),
  email: z.string().email('Email is required'),
  phonenumber: z
    .string()
    .min(11, 'Phone number must be 11 digits')
    .max(11, 'Phone number must be 11 digits'),
  address: z.string().min(1, 'Please fill your address'),
});

export function PersonalTab() {
  const { setActiveTab } = useTab();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phonenumber: '',
      address: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('hook-form', values);
    toast.success('Personal information saved successfully!');
    setActiveTab('work');
  }

  const handleSaveAndExit = () => {
    form.trigger().then((isValid) => {
      if (isValid) {
        const data = form.getValues();
        console.log('Form saved with data:', data);
        toast.success('✅ Progress saved!');
      } else {
        toast.error('Please fill in all required fields before saving.');
      }
    });
  };

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
            <div className="flex flex-wrap gap-3  overflow-x-hidden whitespace-nowrap pb-2">
              <div className="flex gap-1 items-center rounded-2xl shadow p-1">
                <button className="border rounded-2xl p-1">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <Button className="bg-[rgba(9,103,210,1)] hover:bg-blue-400 text-[11px] h-8 px-2">
                  Personal Information
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setActiveTab('work')}
                  className="cursor-pointer text-[11px] h-8 px-2"
                >
                  Work Experience
                </Button>
                <Button
                  className=" sm:block"
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

            <div className="flex flex-col md:flex-row justify-between mt-5 gap-4">
              {/* Form Fields */}
              <div className="w-full md:w-[60%]">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-20"
                  >
                    <div className="flex flex-wrap -mx-2">
                      {/* First Name & Last Name Group */}
                      <div className="w-full px-2 mb-6">
                        <div className="flex flex-wrap -mx-2">
                          <div className="w-full sm:w-1/2 px-2 mb-4">
                            <Label htmlFor="firstname">First Name</Label>
                            <Input
                              id="firstname"
                              placeholder="Enter your first name"
                              {...form.register('firstname')}
                              className="mt-1"
                            />
                            {form.formState.errors.firstname && (
                              <p className="text-red-500 text-xs mt-1">
                                {form.formState.errors.firstname.message}
                              </p>
                            )}
                          </div>

                          <div className="w-full sm:w-1/2 px-2 mb-4">
                            <Label htmlFor="lastname">Last Name</Label>
                            <Input
                              id="lastname"
                              placeholder="Enter your last name"
                              {...form.register('lastname')}
                              className="mt-1"
                            />
                            {form.formState.errors.lastname && (
                              <p className="text-red-500 text-xs mt-1">
                                {form.formState.errors.lastname.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Email & Phone Number Group */}
                      <div className="w-full px-2 mb-6">
                        <div className="flex flex-wrap -mx-2">
                          <div className="w-full sm:w-1/2 px-2 mb-4">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              {...form.register('email')}
                              className="mt-1"
                            />
                            {form.formState.errors.email && (
                              <p className="text-red-500 text-xs mt-1">
                                {form.formState.errors.email.message}
                              </p>
                            )}
                          </div>

                          <div className="w-full sm:w-1/2 px-2 mb-4">
                            <Label htmlFor="phonenumber">Phone Number</Label>
                            <Input
                              id="phonenumber"
                              placeholder="Enter your phone number"
                              {...form.register('phonenumber')}
                              className="mt-1"
                            />
                            {form.formState.errors.phonenumber && (
                              <p className="text-red-500 text-xs mt-1">
                                {form.formState.errors.phonenumber.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Address Field */}
                      <div className="w-full px-2 mb-4">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          placeholder="e.g No. 5 Ilaye street, Yaba, Lagos state, Nigeria"
                          {...form.register('address')}
                          className="mt-1"
                        />
                        {form.formState.errors.address && (
                          <p className="text-red-500 text-xs mt-1">
                            {form.formState.errors.address.message}
                          </p>
                        )}
                      </div>

                      <div className="w-full px-2 mb-4">
                        <AdditionalFields />
                      </div>
                    </div>

                    {/* Submit Button */}
                  </form>
                </Form>
              </div>

              {/* Image and Buttons */}
              <div className="w-full md:w-[40%] flex flex-col items-center gap-4">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/2532/7023/082aed5b058ab8b58af0e221dc0e288f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Iymff6KiIzdN1Kv82nGBSYZI1-FgHZVTXWS7qY16eDnZjrm3jHOemoGAkGZ7lpJpHfk4ja87HsvRgY0UuzB554PGGY8W5oMSTvjyUPq4kjwa0S7wtL9WzIbs80I1BBZ62KA4pGxLeuq2Xn6N~elZNP2s3u5cXi4M2tQSpC4ENdoQJ~3-0BJOvhsA9yrRl4w1nIhPsJ13vDQvVyH8U3OwYsxAbYfW5wR-zXXcLrl8HuIV-MnGhwlh-PSSooxh~ou6mYueciBKfSjBaUIh1E4cj9ImwwN4DC~Y2eeUdism6vLjeCDNtzWNxu~XcFk7PRBZLfhANNcBYxSycZQyRxpTSw__"
                  alt=""
                  width={350}
                  height={200}
                  className="w-full md:w-auto rounded-lg shadow-md"
                />

                <div className="flex flex-col gap-2.5 w-full lg:w-auto lg:flex-row justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSaveAndExit}
                    className="w-full lg:w-[130px] border-blue-600 text-blue-600"
                  >
                    Save & Exit
                  </Button>
                  <Button
                    type="submit"
                    className="w-full lg:w-[130px] bg-[#CEE1F6] text-blue-700 hover:bg-blue-100"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
