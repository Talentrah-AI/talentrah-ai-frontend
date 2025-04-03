// src/app/(userdashboard)/job-setup/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Plus, X } from 'lucide-react';
import { JobLoopDialog } from '@/components/JobLoopDialog';
import { SearchableDropdown } from '@/components/ui/SearchableDropdown';
import { useSearchParams, useRouter } from 'next/navigation';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useDialog } from '@/context/DialogContext';

// Sample data - Replace with actual data from your API
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

export default function JobSetupPage() {
  const [selectedJobTitle, setSelectedJobTitle] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromJobCard = searchParams.get('fromJobCard') === 'true';
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isDialogOpen, setIsDialogOpen } = useDialog();

  useEffect(() => {
    setIsDialogOpen(true);
  }, [setIsDialogOpen]);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    if (fromJobCard) {
      router.back();
    }
  };

  const handleSetupStart = () => {
    setIsDialogOpen(false);
  };

  const [formData, setFormData] = useState({
    jobTitles: [] as string[],
    experience: [] as string[],
    jobType: [] as string[],
    locations: [] as string[],
    preference: [] as string[],
  });

  const handleJobTitleChange = (title: string) => {
    if (!formData.jobTitles.includes(title)) {
      setFormData((prev) => ({
        ...prev,
        jobTitles: [...prev.jobTitles, title],
      }));
    }
  };

  const handleLocationChange = (location: string) => {
    if (!formData.locations.includes(location)) {
      setFormData((prev) => ({
        ...prev,
        locations: [...prev.locations, location],
      }));
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

  const validateForm = () => {
    if (formData.jobTitles.length === 0) {
      toast.error('Please select at least one job title');
      return false;
    }
    if (formData.experience.length === 0) {
      toast.error('Please select your experience level');
      return false;
    }
    if (formData.jobType.length === 0) {
      toast.error('Please select at least one job type');
      return false;
    }
    if (formData.locations.length === 0) {
      toast.error('Please select at least one location');
      return false;
    }
    if (formData.preference.length === 0) {
      toast.error('Please select your job preference');
      return false;
    }
    if (!uploadedFile) {
      toast.error('Please upload your resume');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true); // Show LoadingSpinner

    // Simulate API call or processing
    setTimeout(() => {
      setIsLoading(false); // Hide LoadingSpinner
      router.push('/job-matched'); // Navigate to job-matched page
    }, 3000); // 3-second delay for demonstration
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className="h-full overflow-y-auto">
        <div className="bg-[#F7F8F9] rounded-[24px] px-6 py-6 max-w-[1300px] w-full mx-auto">
          <div className="w-full max-w-[1200px]">
            <h1 className="text-[16px] font-semibold text-[#08121D] mb-1">Set up your job search loop</h1>
            <p className="text-[12px] text-[#717A84] mb-6">
              Tell us what type of jobs you're looking for, and our AI will find and apply to the best matches for you—automatically!
            </p>
            <div className="bg-white rounded-[12px] p-6">
              <form id="job-setup-form" onSubmit={handleSubmit} className="space-y-6">
                {/* Job Title */}
                <div>
                  <label className="block text-[12px] font-medium text-[#08121D] mb-2">Job title</label>
                  <div className="space-y-2">
                    <SearchableDropdown
                      value=""
                      onChange={handleJobTitleChange}
                      options={jobTitles.filter((title) => !formData.jobTitles.includes(title))}
                      placeholder="Enter/Choose job title"
                    />
                    <p className="text-[12px] text-[#717A84] mt-1">You can choose more than one job title</p>
                    <div className="flex flex-wrap gap-2">
                      {formData.jobTitles.map((title) => (
                        <div
                          key={title}
                          className="flex items-center gap-2 px-3 py-1 bg-[#0967D2] rounded-[4px] text-[12px] text-[#FFFFFF]"
                        >
                          <span>{title}</span>
                          <button
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                jobTitles: prev.jobTitles.filter((t) => t !== title),
                              }))
                            }
                            className="hover:text-[#CEE1F6]/80"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Job Experience */}
                <div>
                  <label className="block text-[12px] font-medium text-[#08121D] mb-2">Job experience</label>
                  <div className="flex gap-4">
                    {['Junior', 'Intermediate', 'Senior'].map((level) => (
                      <label key={level} className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-[#0967D2] rounded border-[#DDE1E6]"
                          onChange={(e) => {
                            const newExperience = e.target.checked
                              ? [...formData.experience, level]
                              : formData.experience.filter((exp) => exp !== level);
                            setFormData({ ...formData, experience: newExperience });
                          }}
                        />
                        <span className="ml-2 text-[14px] text-[#515D68]">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Job Type */}
                <div>
                  <label className="block text-[12px] font-medium text-[#08121D] mb-2">Job type</label>
                  <div className="flex gap-4">
                    {['Full-time', 'Contract', 'Part-time', 'Internship'].map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-[#0967D2] rounded border-[#DDE1E6]"
                          onChange={(e) => {
                            const newJobType = e.target.checked
                              ? [...formData.jobType, type]
                              : formData.jobType.filter((t) => t !== type);
                            setFormData({ ...formData, jobType: newJobType });
                          }}
                        />
                        <span className="ml-2 text-[14px] text-[#515D68]">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Job Location */}
                <div>
                  <label className="block text-[12px] font-medium text-[#08121D] mb-2">Job location</label>
                  <div className="space-y-2">
                    <SearchableDropdown
                      value=""
                      onChange={handleLocationChange}
                      options={locations.filter((location) => !formData.locations.includes(location))}
                      placeholder="Choose job location"
                    />
                    <p className="text-[12px] text-[#717A84] mt-1">You can choose more than one location</p>
                    <div className="flex flex-wrap gap-2">
                      {formData.locations.map((location) => (
                        <div
                          key={location}
                          className="flex items-center gap-2 px-3 py-1 bg-[#0967D2] rounded-[4px] text-[12px] text-[#FFFFFF]"
                        >
                          <span>{location}</span>
                          <button
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                locations: prev.locations.filter((l) => l !== location),
                              }))
                            }
                            className="hover:text-[#0967D2]/80"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Job Preference */}
                <div>
                  <label className="block text-[12px] font-medium text-[#08121D] mb-2">Job preference</label>
                  <div className="flex gap-4">
                    {['On-site', 'Remote', 'Hybrid'].map((pref) => (
                      <label key={pref} className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-[#0967D2] rounded border-[#DDE1E6]"
                          onChange={(e) => {
                            const newPreference = e.target.checked
                              ? [...formData.preference, pref]
                              : formData.preference.filter((p) => p !== pref);
                            setFormData({ ...formData, preference: newPreference });
                          }}
                        />
                        <span className="ml-2 text-[14px] text-[#515D68]">{pref}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Upload Resume */}
                <div>
                  <label className="block text-[12px] font-medium text-[#08121D] mb-2">Upload resume</label>
                  <div
                    className={`border-[1px] border-dashed border-[#DDE1E6] rounded-[8px] p-8 text-center relative ${
                      isUploading ? 'bg-gray-50' : 'bg-white'
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
                            <Progress value={uploadProgress} className="h-[10px] bg-[#E5E7EB]" />
                          </div>
                          <div className="flex items-center justify-between text-[14px] text-[#515D68] w-[80%] max-w-[400px]">
                            <span>Uploading files - {uploadProgress}%</span>
                          </div>
                        </div>
                      )}

                      {uploadedFile && !isUploading && (
                        <div className="flex items-center justify-between w-full mt-4">
                          <div className="flex items-center gap-2">
                            <span className="text-[14px] text-[#515D68]">{uploadedFile.name}</span>
                            <span className="text-[12px] text-[#717A84]">
                              ({(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB)
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
              </form>
            </div>
            {/* Create Job Loop Button */}
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                form="job-setup-form"
                className="w-[258px] h-[40px] px-[12px] py-[4px] bg-[#CEE1F6] rounded-[12px] hover:bg-[#0967D2] flex items-center justify-center gap-2 text-[12px] leading-normal group"
              >
                <Plus className="h-4 w-4 text-[#3A85DB] group-hover:text-white transition-colors" />
                <span className="text-[#3A85DB] group-hover:text-white transition-colors">Create job loop</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <JobLoopDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        onSetup={handleSetupStart}
      />
    </>
  );
}