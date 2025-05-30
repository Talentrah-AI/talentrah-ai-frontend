'use client';

import * as React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DialogTitle } from '@radix-ui/react-dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import Image from 'next/image';

interface CreateMentorDialogProps {
  open: boolean;
  onClose: () => void;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: FormData) => void;
}

interface FormData {
  // Steps 1-2 fields
  firstName: string;
  lastName: string;
  gender: string;
  country: string;
  language: string;
  role: string;
  email: string;
  phone: string;
  // ... other existing fields ...
  company: string;
  title: string;
  yearsExp: string;
  monthsExp: string;
  linkedinUrl: string;

  // Step 3 fields
  primaryExpertise: string;
  secondaryExpertise: string[];
  disciplines: string[];
  skills: string[];
  tools: string[];

  // Step 4 fields
  introduction: string;
  infoConfirmed: boolean;

  // Notification preference
  enableNotifications: boolean;
}

export function CreateMentorDialog({
  open,
  onClose,
  onOpenChange,
  onSubmit,
}: CreateMentorDialogProps) {
  const [formData, setFormData] = useState<FormData>({
    // Initialize all fields
    firstName: '',
    lastName: '',
    gender: '',
    country: '',
    language: '',
    company: '',
    title: '',
    role: '',
    phone: '',
    email: '',
    yearsExp: '',
    monthsExp: '',
    linkedinUrl: '',
    primaryExpertise: '',
    secondaryExpertise: [],
    disciplines: [],
    skills: [],
    tools: [],
    introduction: '',
    infoConfirmed: false,
    enableNotifications: false,
  });

  const [showOnboarding, setShowOnboarding] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // ... other existing handlers ...

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }));
  };

  const allFieldsFilled = Object.entries(formData).every(([key, value]) => {
    if (Array.isArray(value)) return value.length > 0; // Check arrays
    if (typeof value === 'boolean') return true; // Skip booleans
    if (typeof value === 'string') return value.trim() !== ''; // Only trim strings
    return !!value; // Fallback for numbers/others
  });

  const handleArrayChange = (
    field: keyof FormData,
    value: string,
    checked: boolean
  ) => {
    setFormData((prev) => {
      const currentArray = Array.isArray(prev[field]) ? [...prev[field]] : [];
      if (checked) {
        return { ...prev, [field]: [...currentArray, value] };
      } else {
        return {
          ...prev,
          [field]: currentArray.filter((item) => item !== value),
        };
      }
    });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, introduction: e.target.value }));
  };

  const handleConfirmation = () => {
    setShowConfirmation(true);
    setShowOnboarding(false);
  };

  const handleCompleteOnboarding = () => {
    // Submit all form data
    console.log('Form submitted:', formData);
    setShowConfirmation(false);
    onClose();
  };

  const handleBackStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  const handleNextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));

  return (
    <>
      {/* ... existing mentor creation dialog ... */}
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="w-[884px] h-[473px] py-[25px] px-[28px] ">
          <DialogTitle className="text-lg font-semibold">
            Add a mentor
          </DialogTitle>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 w-[396.5px]">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  className="rounded-[12px] shadow-none border-[1.5px] border-grey text-[12px] h-[50px]"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2 w-[396.5px]">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  className="rounded-[12px] border-[1.5px] shadow-none !important border-grey text-[12px] h-[50px]"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="flex gap-[35px] w-full">
              <div className="space-y-2 w-[396.5px] ">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  className="rounded-[12px] border-[1.5px] shadow-none border-grey text-[12px] h-[50px]"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2 w-[396.5px]">
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  className="rounded-[12px] border-[1.5px] shadow-none border-grey text-[12px] h-[50px]"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your digit"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role type</Label>
              <Select onValueChange={handleRoleChange} value={formData.role}>
                <SelectTrigger className="rounded-[12px] border-[1.5px] shadow-none border-grey text-[12px] h-[50px] w-full">
                  <SelectValue placeholder="Choose role type" />
                </SelectTrigger>
                <SelectContent className="rounded-[18px] border[0.5px] shadow p-[8px]">
                  <SelectItem
                    value="mentor"
                    className="rounded-[12px] py-[15px] px-[20px] focus:bg-[#CEE1F6] hover:text-black hover:bg-[#CEE1F6] focus:text-black"
                  >
                    Mentor
                  </SelectItem>
                  <SelectItem
                    value="admin"
                    className="rounded-[12px] py-[15px] px-[20px] focus:bg-[#CEE1F6] hover:text-black hover:bg-[#CEE1F6] focus:text-black"
                  >
                    Admin
                  </SelectItem>
                  <SelectItem
                    value="both"
                    className="rounded-[12px] py-[15px] px-[20px] focus:bg-[#CEE1F6] hover:text-black hover:bg-[#CEE1F6] focus:text-black"
                  >
                    Both
                  </SelectItem>
                </SelectContent>
              </Select>

              <p className="flex items-center text-[12px] text-[#0967D2] p-[5px] gap-[10px] rounded-[12px] border-[#9DC2ED] border-[2px] bg-[#E6F0FB]">
                <Image
                  style={{ width: '20px', height: '20px' }}
                  src="/images/information-circle.png"
                  alt="information"
                  className="w-[20px]!important h-[20px] "
                  width={20}
                  height={20}
                />
                Twenty three (23) permissions will be given to{' '}
                {formData.firstName} {formData.lastName} as a mentor
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={() => {
                setShowOnboarding(true);
                onClose();
              }}
            >
              + Add a mentor
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Onboarding Dialog */}
      <Dialog open={showOnboarding} onOpenChange={setShowOnboarding}>
        <DialogContent className="w-[500px] py-[25px] px-[28px]">
          <div className="flex flex-col">
            <DialogTitle className="text-2xl font-bold text-center mb-2">
              Onboard in
            </DialogTitle>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="text-sm text-center mb-6">
              STEP {currentStep} of 4
            </div>

            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-center">
                  Hello, Andrew Erekosima!
                </h2>

                <div className="space-y-4">
                  <Label htmlFor="profilePhoto">
                    Upload profile photo <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex items-center justify-center w-full">
                    <Label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Select a file</span>{' '}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Make sure the file is below 2mb
                        </p>
                      </div>
                      <Input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">
                    What gender do you identify as?{' '}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, gender: value }))
                    }
                    value={formData.gender}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">
                        Prefer not to say
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">
                    Which country do you live in?{' '}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="country"
                    className="rounded-[12px] border-[1.5px] shadow-none border-grey text-[12px] h-[50px]"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        country: e.target.value,
                      }))
                    }
                    placeholder="E.g U.S.A, Africa"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">
                    What language are you fluent in?{' '}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="language"
                    className="rounded-[12px] border-[1.5px] shadow-none border-grey text-[12px] h-[50px]"
                    value={formData.language}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        language: e.target.value,
                      }))
                    }
                    placeholder="Select language"
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-center">
                  Tell us about your professional background
                </h2>

                <div className="space-y-4">
                  <Label htmlFor="company">
                    Current Company <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="company"
                    className="rounded-[12px] border-[1.5px] shadow-none border-grey text-[12px] h-[50px]"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        company: e.target.value,
                      }))
                    }
                    placeholder="Enter your current company"
                  />
                </div>

                <div className="space-y-4">
                  <Label htmlFor="title">
                    Your Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="title"
                    className="rounded-[12px] border-[1.5px] shadow-none border-grey text-[12px] h-[50px]"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    placeholder="Enter your title"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="space-y-2 w-1/2">
                    <Label htmlFor="yearsExp">
                      Years of Experience{' '}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="yearsExp"
                      className="rounded-[12px] border-[1.5px] shadow-none border-grey text-[12px] h-[50px]"
                      value={formData.yearsExp}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          yearsExp: e.target.value,
                        }))
                      }
                      placeholder="Years"
                      type="number"
                    />
                  </div>
                  <div className="space-y-2 w-1/2">
                    <Label htmlFor="monthsExp">Months of Experience</Label>
                    <Input
                      id="monthsExp"
                      className="rounded-[12px] border-[1.5px] shadow-none border-grey text-[12px] h-[50px]"
                      value={formData.monthsExp}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          monthsExp: e.target.value,
                        }))
                      }
                      placeholder="Months"
                      type="number"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="linkedinUrl">
                    LinkedIn Profile (Optional)
                  </Label>
                  <Input
                    id="linkedinUrl"
                    className="rounded-[12px] border-[1.5px] shadow-none border-grey text-[12px] h-[50px]"
                    value={formData.linkedinUrl}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        linkedinUrl: e.target.value,
                      }))
                    }
                    placeholder="Link to your LinkedIn profile"
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-center">
                  Great! Tell us more
                </h2>

                <div className="space-y-6">
                  <div>
                    <Label className="block text-sm font-medium mb-1">
                      Select primary expertise *
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          primaryExpertise: value,
                        }))
                      }
                      value={formData.primaryExpertise}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="E.g Design, Product" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="product">Product</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      variant="link"
                      className="text-xs p-0 h-auto mt-1"
                      onClick={() => {
                        /* Implement add secondary expertise */
                      }}
                    >
                      Add secondary expertise
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <Label className="block text-sm font-medium mb-1">
                      Which disciplines are relevant in your expertise(s)? *
                    </Label>
                    <Input
                      placeholder="E.g Graphic design, Product design"
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          disciplines: e.target.value.split(', '),
                        }))
                      }
                    />
                  </div>

                  <div className="space-y-4">
                    <Label className="block text-sm font-medium mb-1">
                      Which skills do you have experience in? *
                    </Label>
                    <Input
                      placeholder="E.g Leadership, Brand strategy"
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          skills: e.target.value.split(', '),
                        }))
                      }
                    />
                  </div>

                  <div className="space-y-4">
                    <Label className="block text-sm font-medium mb-1">
                      Which tools do you have experience in? *
                    </Label>
                    <Input
                      placeholder="E.g Figma, React, Postman"
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          tools: e.target.value.split(', '),
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-center">
                  Almost there! How would you like to be intro'd?
                </h2>

                <div className="space-y-4">
                  <Label className="block text-sm font-medium mb-1">
                    Everyone has a story, what's yours? *
                  </Label>
                  <textarea
                    className="w-full min-h-[120px] p-2 border rounded-lg"
                    placeholder="Introduce yourself to the candidates, and let them know about your experience in your field."
                    value={formData.introduction}
                    onChange={handleTextAreaChange}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="confirmation"
                    checked={formData.infoConfirmed}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        infoConfirmed: !!checked,
                      }))
                    }
                  />
                  <label htmlFor="confirmation" className="text-sm">
                    By checking this box, I confirm that all the information
                    I've provided is accurate and true to the best of my
                    knowledge.
                  </label>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handleBackStep}
                disabled={currentStep === 1}
              >
                Back
              </Button>
              <div className="flex items-center gap-2">
                {currentStep === 4 ? (
                  <Button
                    onClick={handleConfirmation}
                    disabled={!formData.introduction || !formData.infoConfirmed}
                  >
                    Complete
                  </Button>
                ) : (
                  <Button onClick={handleNextStep}>Continue</Button>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="w-[500px] py-[25px] px-[28px] gap-[32px] text-center flex flex-col justify-center ">
          <Image
            style={{ width: '85px', height: '85px', marginInline: 'auto' }}
            src="/images/bell.png"
            alt="bell icon"
            width={85}
            height={85}
          />
          <DialogTitle className="text-2xl font-bold mb-4">
            Stay up to date with your sessions
          </DialogTitle>
          <p className="mb-6">
            Get notified on your browser when you have a session upcoming or a
            new message
          </p>
          <Button className="w-full" onClick={handleCompleteOnboarding}>
            Yes, stay updated!
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
