'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useJobStore } from '@/store/useJobStore';
import { X } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { useModal } from '@/context/ModalContext';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'] as const;
const workModels = ['Remote', 'Hybrid', 'On-site'] as const;
const experienceLevels = [
  'Entry Level',
  'Mid Level',
  'Senior Level',
  'Director/Executive',
  'Lead/Staff',
] as const;

type FilterFormData = {
  jobTitles: string[];
  jobType: typeof jobTypes[number][];
  workModel: typeof workModels[number][];
  priceRange: number;
  experienceLevel: typeof experienceLevels[number][];
  locations: string[];
};

const emptyFilters: FilterFormData = {
  jobTitles: [],
  jobType: [],
  workModel: [],
  priceRange: 50000,
  experienceLevel: [],
  locations: [],
};

export function AdvancedFilterModal() {
  const { closeModal } = useModal();
  const { filters, resetFilters, initializeFiltersFromSetup, setSetupFormData } = useJobStore();
  const setupFormData = useJobStore((state) => state.setupFormData);
  
  const [formData, setFormData] = useState<FilterFormData>(filters || emptyFilters);

  // Initialize filters from job setup data if available
  useEffect(() => {
    if (setupFormData && !filters.jobTitles.length) {
      initializeFiltersFromSetup(setupFormData);
      setFormData({
        jobTitles: setupFormData.jobTitles,
        jobType: setupFormData.jobType as FilterFormData['jobType'],
        workModel: setupFormData.preference as FilterFormData['workModel'],
        priceRange: 50000,
        experienceLevel: setupFormData.experience as FilterFormData['experienceLevel'],
        locations: setupFormData.locations,
      });
    }
  }, [setupFormData, filters, initializeFiltersFromSetup]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted!', formData);
    const jobSetupData = {
      jobTitles: formData.jobTitles,
      experience: formData.experienceLevel,
      jobType: formData.jobType,
      locations: formData.locations,
      preference: formData.workModel,
    };
    setSetupFormData(jobSetupData);
    closeModal();
  };

  const handleReset = () => {
    resetFilters();
    setFormData(emptyFilters);
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const updateJobTitles = (title: string, add: boolean) => {
    if (add) {
      setFormData(prev => ({
        ...prev,
        jobTitles: [...prev.jobTitles, title]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        jobTitles: prev.jobTitles.filter(t => t !== title)
      }));
    }
  };

  const toggleJobType = (type: typeof jobTypes[number]) => {
    setFormData(prev => {
      if (prev.jobType.includes(type)) {
        return {
          ...prev,
          jobType: prev.jobType.filter(t => t !== type)
        };
      } else {
        return {
          ...prev,
          jobType: [...prev.jobType, type]
        };
      }
    });
  };

  const toggleWorkModel = (model: typeof workModels[number]) => {
    setFormData(prev => {
      if (prev.workModel.includes(model)) {
        return {
          ...prev,
          workModel: prev.workModel.filter(m => m !== model)
        };
      } else {
        return {
          ...prev,
          workModel: [...prev.workModel, model]
        };
      }
    });
  };

  const updatePriceRange = (value: number) => {
    setFormData(prev => ({
      ...prev,
      priceRange: value
    }));
  };

  const toggleExperienceLevel = (level: typeof experienceLevels[number]) => {
    setFormData(prev => {
      if (prev.experienceLevel.includes(level)) {
        return {
          ...prev,
          experienceLevel: prev.experienceLevel.filter(l => l !== level)
        };
      } else {
        return {
          ...prev,
          experienceLevel: [...prev.experienceLevel, level]
        };
      }
    });
  };

  const updateLocations = (location: string, add: boolean) => {
    if (add) {
      setFormData(prev => ({
        ...prev,
        locations: [...prev.locations, location]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        locations: prev.locations.filter(l => l !== location)
      }));
    }
  };

  const handleJobTitleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
      e.preventDefault();
      updateJobTitles(e.currentTarget.value.trim(), true);
      e.currentTarget.value = '';
    }
  };

  const handleLocationInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
      e.preventDefault();
      updateLocations(e.currentTarget.value.trim(), true);
      e.currentTarget.value = '';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end">
      <div className="h-full w-[400px] bg-[#F8F8F8] shadow-xl p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Filter</h2>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={handleReset}
              className="text-sm text-blue-600"
            >
              Reset All
            </Button>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Job Title Section */}
          <div className="space-y-2 rounded-[12px] p-[16px_19px] bg-white">
            <p className="font-[Gabarito] font-medium text-[12px] leading-[16px] tracking-[0px]">
              <span className="text-red-500">*</span> Job title
            </p>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Enter/Choose job title"
                className="w-full p-2 border rounded-lg text-sm"
                onKeyDown={handleJobTitleInput}
              />
              <p className="text-xs text-gray-500">You can choose more than one job title</p>
              <div className="flex flex-wrap gap-2">
                {formData.jobTitles.map((title) => (
                  <div
                    key={title}
                    className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded-md"
                  >
                    <span className="text-xs">{title}</span>
                    <button
                      type="button"
                      onClick={() => updateJobTitles(title, false)}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Job Type Section */}
          <div className="space-y-2 rounded-[12px] p-[16px_19px] bg-white">
            <p className="font-[Gabarito] font-medium text-[12px] leading-[16px] tracking-[0px]">
              <span className="text-red-500">*</span> Job Type
            </p>
            <div className="grid grid-cols-2 gap-3">
              {jobTypes.map((type) => (
                <div
                  key={type}
                  className={cn(
                    "flex items-center transition cursor-pointer w-[149px] h-[30px] rounded-[8px] gap-[7px] p-[8px]",
                    formData.jobType.includes(type) ? "bg-[#E6F0FB]" : "bg-[#f8f8f8]"
                  )}
                >
                  <Checkbox 
                    checked={formData.jobType.includes(type)}
                    onCheckedChange={() => toggleJobType(type)}
                    id={`job-type-${type}`}
                  />
                  <label 
                    htmlFor={`job-type-${type}`}
                    className="flex-1 cursor-pointer font-[Gabarito] font-normal text-[10px] leading-[12px] tracking-[0px] text-black"
                  >
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Work Model Section */}
          <div className="space-y-2 rounded-[12px] p-[16px_19px] bg-white">
            <p className="font-[Gabarito] font-medium text-[12px] leading-[16px] tracking-[0px]">
              <span className="text-red-500">*</span> Work Model
            </p>
            <div className="grid grid-cols-2 gap-3">
              {workModels.map((model) => (
                <div
                  key={model}
                  className={cn(
                    "flex items-center transition cursor-pointer w-[149px] h-[30px] rounded-[8px] gap-[7px] p-[8px]",
                    formData.workModel.includes(model) ? "bg-[#E6F0FB]" : "bg-[#f8f8f8]"
                  )}
                >
                  <Checkbox 
                    checked={formData.workModel.includes(model)} 
                    onCheckedChange={() => toggleWorkModel(model)}
                    id={`work-model-${model}`}
                  />
                  <label 
                    htmlFor={`work-model-${model}`}
                    className="flex-1 cursor-pointer font-[Gabarito] font-normal text-[10px] leading-[12px] tracking-[0px] text-black"
                  >
                    {model}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range Section */}
          <div className="space-y-4 rounded-[12px] p-[16px_19px] bg-white">
            <p className="font-[Gabarito] font-medium text-[12px] leading-[16px] tracking-[0px]">
              <span className="text-red-500">*</span> Price range
            </p>
            <div className="space-y-6">
              <div className="flex justify-end">
                <span className="text-sm font-medium">{formatPrice(formData.priceRange)}</span>
              </div>
              <Slider
                value={[formData.priceRange]}
                min={0}
                max={200000}
                step={1000}
                onValueChange={([value]) => updatePriceRange(value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Experience Level Section */}
          <div className="space-y-2 rounded-[12px] p-[16px_19px] bg-white">
            <p className="font-[Gabarito] font-medium text-[12px] leading-[16px] tracking-[0px]">
              <span className="text-red-500">*</span> Experience level
            </p>
            <div className="grid grid-cols-2 gap-3">
              {experienceLevels.map((level) => (
                <div
                  key={level}
                  className={cn(
                    "flex items-center transition cursor-pointer w-[149px] h-[30px] rounded-[8px] gap-[7px] p-[8px]",
                    formData.experienceLevel.includes(level) ? "bg-[#E6F0FB]" : "bg-[#f8f8f8]"
                  )}
                >
                  <Checkbox 
                    checked={formData.experienceLevel.includes(level)}
                    onCheckedChange={() => toggleExperienceLevel(level)}
                    id={`exp-level-${level}`}
                  />
                  <label 
                    htmlFor={`exp-level-${level}`}
                    className="flex-1 cursor-pointer font-[Gabarito] font-normal text-[10px] leading-[12px] tracking-[0px] text-black"
                  >
                    {level}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Location Section */}
          <div className="space-y-2 rounded-[12px] p-[16px_19px] bg-white">
            <p className="font-[Gabarito] font-medium text-[12px] leading-[16px] tracking-[0px]">
              <span className="text-red-500">*</span> Location
            </p>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Search location"
                className="w-full p-2 border rounded-lg text-sm"
                onKeyDown={handleLocationInput}
              />
              <p className="text-xs text-gray-500">You can choose more than one location</p>
              <div className="flex flex-wrap gap-2">
                {formData.locations.map((location) => (
                  <div
                    key={location}
                    className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded-md"
                  >
                    <span className="text-xs">{location}</span>
                    <button
                      type="button"
                      onClick={() => updateLocations(location, false)}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between gap-4 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={closeModal}
              className="flex-1 bg-white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
            >
              Apply
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}