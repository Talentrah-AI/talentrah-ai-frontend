// src/app/(userdashboard)/job-setup/JobSetupContent.tsx
'use client';

import { JobLoopModal } from '@/components/modal/JobLoopModal';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Progress } from '@/components/ui/progress';
import { SearchableDropdown } from '@/components/ui/SearchableDropdown';
import { useModal } from '@/context/ModalContext';
import { useJobStore } from '@/store/useJobStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const jobTitles = [
  'UI/UX Designer',
  'Product Designer',
  'Data Analyst',
  'Product Manager',
  'Project Manager',
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'DevOps Engineer',
];

const locations = [
  'New York, USA',
  'London, UK',
  'Toronto, Canada',
  'Sydney, Australia',
  'Berlin, Germany',
  'Paris, France',
  'Tokyo, Japan',
  'Singapore',
  'Lagos, Nigeria',
  'Cape Town, South Africa',
];

const formSchema = z.object({
  jobTitles: z.array(z.string()).min(1, { message: 'Please select at least one job title' }),
  experience: z.array(z.string()).min(1, { message: 'Please select your experience level' }),
  jobType: z.array(z.string()).min(1, { message: 'Please select at least one job type' }),
  locations: z.array(z.string()).min(1, { message: 'Please select at least one location' }),
  preference: z.array(z.string()),
});

type FormData = z.infer<typeof formSchema>;

function JobSetup() {
  const router = useRouter();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { openModal } = useModal();
  const { setSetupFormData } = useJobStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitles: [],
      experience: [],
      jobType: [],
      locations: [],
      preference: [],
    },
  });

  useEffect(() => {
    openModal(<JobLoopModal />);
  }, []);


  const handleJobTitleChange = (title: string) => {
    const currentTitles = watch('jobTitles');
    if (!currentTitles.includes(title)) {
      setValue('jobTitles', [...currentTitles, title]);
    }
  };

  const handleLocationChange = (location: string) => {
    const currentLocations = watch('locations');
    if (!currentLocations.includes(location)) {
      setValue('locations', [...currentLocations, location]);
    }
  };

  const simulateFileUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleFileUpload = (file: File) => {
    const validTypes = ['.pdf', '.doc', '.docx'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!validTypes.some((type) => file.name.toLowerCase().endsWith(type))) {
      toast.error('Please upload a PDF, DOC, or DOCX file');
      return;
    }

    if (file.size > maxSize) {
      toast.error('File size should not exceed 5MB');
      return;
    }

    setUploadedFile(file);
    simulateFileUpload();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSetupFormData(data);
      toast.success('Job loop created successfully!');
      router.push('/jobdashboard');
    } catch (error) {
      toast.error('Failed to create job loop');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#FAFBFC] pb-8">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <div>
              <h2 className="text-[20px] font-medium text-[#08121D] leading-[26px] tracking-[0px] font-gabarito mb-2">
                Set up your job search loop
              </h2>
              <p className="font-normal text-[12px] text-[#717A84] leading-[16px] tracking-[0px] font-gabarito mb-2">
                Tell us what type of jobs you're looking for, and our AI will find and apply to the best matches for you—automatically!
              </p>
            </div>
            <div className="bg-white rounded-[24px] p-6">
              <form id="job-setup-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-6">
                  <div>

                    <div>
                      <label className="block font-normal text-[12px] text-[#1D2939] leading-[20px] tracking-[0px]  mb-2">
                        Job Title*
                      </label>
                      <Controller
                        name="jobTitles"
                        control={control}
                        render={({ field }) => (
                          <div>
                            <SearchableDropdown
                              value=""
                              onChange={handleJobTitleChange}
                              options={jobTitles}
                              placeholder="Enter/Choose job title"
                            />
                            {errors.jobTitles && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.jobTitles.message}
                              </p>
                            )}
                            <div className="flex flex-wrap gap-2 mt-2">
                              {field.value.map((title, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-1 bg-[#F2F4F7] px-2 py-1 rounded-md"
                                >
                                  <span className="text-sm">{title}</span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const newTitles = field.value.filter(
                                        (_, i) => i !== index
                                      );
                                      setValue('jobTitles', newTitles);
                                    }}
                                  >
                                    <X className="h-4 w-4" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      />
                      <p className="text-[12px] text-[#717A84] font-normal">You can choose more than one job title</p>
                    </div>


                  </div>
                  <div>
                    <h3 className="font-normal text-[12px] text-[#1D2939] leading-[20px] tracking-[0px] mb-4">
                      Job Experience
                    </h3>
                    <div className="flex gap-4">
                      {['Junior', 'Intermediate', 'Senior'].map((level) => (
                        <label key={level} className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-[#0967D2] rounded border-[#DDE1E6]"
                            onChange={(e) => {
                              const newExperience = e.target.checked
                                ? [...watch('experience'), level]
                                : watch('experience').filter((exp) => exp !== level);
                              setValue('experience', newExperience);
                            }}
                          />
                          <span className="ml-2 text-[14px] font-normal leading-[20px] text-[#717A84]">
                            {level}
                          </span>
                        </label>
                      ))}
                      {errors.experience && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.experience.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-normal text-[12px] text-[#1D2939] leading-[20px] tracking-[0px] mb-4">
                      Job Type
                    </h3>
                    <div className="flex gap-4">
                      {['Full-time', 'Contract', 'Part-time', 'Internship'].map(
                        (type) => (
                          <label key={type} className="flex items-center">
                            <input
                              type="checkbox"
                              className="form-checkbox h-4 w-4 text-[#0967D2] rounded border-[#DDE1E6]"
                              onChange={(e) => {
                                const newJobType = e.target.checked
                                  ? [...watch('jobType'), type]
                                  : watch('jobType').filter((t) => t !== type);
                                setValue('jobType', newJobType);
                              }}
                            />
                            <span className="ml-2 text-[14px] font-normal leading-[20px] text-[#717A84]">
                              {type}
                            </span>
                          </label>
                        )
                      )}
                      {errors.jobType && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.jobType.message}
                        </p>
                      )}
                    </div>
                  </div>


                  <div>
                    <label className="block font-normal text-[12px] text-[#1D2939] leading-[20px] tracking-[0px] mb-2">
                      Location*
                    </label>
                    <Controller
                      name="locations"
                      control={control}
                      render={({ field }) => (
                        <div>
                          <SearchableDropdown
                            value=""
                            onChange={handleLocationChange}
                            options={locations}
                            placeholder="Search locations"
                          />
                          {errors.locations && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.locations.message}
                            </p>
                          )}
                          <div className="flex flex-wrap gap-2 mt-2">
                            {field.value.map((location, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-1 bg-[#F2F4F7] px-2 py-1 rounded-md"
                              >
                                <span className="text-sm">{location}</span>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const newLocations = field.value.filter(
                                      (_, i) => i !== index
                                    );
                                    setValue('locations', newLocations);
                                  }}
                                >
                                  <X className="h-4 w-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    />
                    <p className="text-[12px] text-[#717A84] font-normal">You can choose more than one location</p>
                  </div>
                  <div>
                    <h3 className="font-normal text-[12px] text-[#1D2939] leading-[20px] tracking-[0px] mb-4">
                      Job Preference
                    </h3>
                    <div className="flex gap-4">
                      {['On-site', 'Remote', 'Hybrid'].map((pref) => (
                        <label key={pref} className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-[#0967D2] rounded border-[#DDE1E6]"
                            onChange={(e) => {
                              const newPreference = e.target.checked
                                ? [...watch('preference'), pref]
                                : watch('preference').filter((p) => p !== pref);
                              setValue('preference', newPreference);
                            }}
                          />
                          <span className="ml-2 text-[14px] font-normal leading-[20px] text-[#717A84]">
                            {pref}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-normal text-[12px] text-[#1D2939] leading-[20px] tracking-[0px] mb-4">
                      Resume Upload
                    </h3>
                    <div
                      className={`border-[1px] border-dashed border-[#DDE1E6] rounded-[8px] p-8 text-center relative ${isUploading ? 'bg-gray-50' : 'bg-white'
                        }`}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      <div className="flex flex-col items-center">
                        <div className="mb-4 flex items-center justify-center bg-[#EFF0F2] border border-[#CFD3D6] rounded-full h-[68px] w-[68px] transition-all">
                          <Plus className="h-[32px] w-[32px] text-[#717A84]" />
                        </div>
                        <p className="mb-2 text-[14px] text-[#515D68]">
                          Drag and drop or upload from your computer
                        </p>
                        {!isUploading && !uploadedFile && (
                          <button
                            type="button"
                            onClick={handleBrowseClick}
                            className="px-4 py-2 bg-white border border-[#DDE1E6] rounded-[8px] text-[14px] text-[#515D68] hover:bg-gray-50"
                          >
                            Browse Your Computer
                          </button>
                        )}
                        <input
                          ref={fileInputRef}
                          id="file-upload"
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileUpload(file);
                          }}
                        />
                        {isUploading && (
                          <div className="space-y-2 flex flex-col items-center w-full mt-4">
                            <div className="w-[80%] max-w-[400px]">
                              <Progress
                                value={uploadProgress}
                                className="h-[10px] bg-[#E5E7EB]"
                              />
                            </div>
                            <div className="flex items-center justify-between text-[14px] text-[#515D68] w-[80%] max-w-[400px]">
                              <span>Uploading files - {uploadProgress}%</span>
                            </div>
                          </div>
                        )}
                        {uploadedFile && !isUploading && (
                          <div className="flex items-center justify-between w-full mt-4">
                            <div className="flex items-center gap-2">
                              <span className="text-[14px] text-[#515D68]">
                                {uploadedFile.name}
                              </span>
                              <span className="text-[12px] text-[#717A84]">
                                ({(uploadedFile.size / (1024 * 1024)).toFixed(2)}{' '}
                                MB)
                              </span>
                            </div>
                            <button
                              onClick={() => setUploadedFile(null)}
                              className="text-[#717A84] hover:text-[#515D68]"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-[12px] text-[#717A84] mt-2">
                      Accepted file types: .PDF, .DOC, .DOCx not more than 5MB
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                form="job-setup-form"
                disabled={isLoading}
                className="w-[258px] h-[40px] px-[12px] py-[4px] bg-[#CEE1F6] rounded-[12px] hover:bg-[#0967D2] flex items-center justify-center gap-2 text-[12px] leading-normal group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <LoadingSpinner className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4 text-[#3A85DB] group-hover:text-white transition-colors" />
                )}
                <span className="text-[#3A85DB] group-hover:text-white transition-colors">
                  {isLoading ? 'Creating...' : 'Create job loop'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default function JobSetupPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <JobSetup />
    </Suspense>
  );
}
