"use client";

import { Rocket } from "lucide-react";
import { CheckboxGroup } from "./checkbox-group";
import { SelectField } from "./select-field";
import Link from "next/link";


const jobExperienceOptions = [
  { id: "junior", label: "Junior" },
  { id: "intermediate", label: "Intermediate" },
  { id: "senior", label: "Senior" },
];

const jobTypeOptions = [
  { id: "full-time", label: "Full-time" },
  { id: "contract", label: "Contract" },
  { id: "part-time", label: "Part-time" },
  { id: "internship", label: "Internship" },
];

const jobPreferenceOptions = [
  { id: "on-site", label: "On-site" },
  { id: "remote", label: "Remote" },
  { id: "hybrid", label: "Hybrid" },
];

const otherCountriesJobTypeOptions = [
  { id: "full-time", label: "Full-time" },
  { id: "contract", label: "Contract" },
  { id: "part-time", label: "Part-time" },
  { id: "internship", label: "Internship" },
];

const otherCountriesPreferenceOptions = [
  { id: "remote", label: "Remote" },
  { id: "visa-sponsored", label: "Visa sponsored jobs" },
];

export function JobSearchForm() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Rocket className="w-6 h-6 text-blue-500" />
          <h1 className="text-xl font-semibold">Set up your job search loop</h1>
        </div>
        <p className="text-gray-600">
          Tell us what type of jobs you're looking for, and our AI will find and
          apply to the best matches for you—automatically!
        </p>
      </div>

      <form className="space-y-6">
        <SelectField
          label="Job title"
          placeholder="Enter/Choose job title"
          helperText="You can choose more than one job title"
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Job experience
          </label>
          <CheckboxGroup options={jobExperienceOptions} name="job-experience" />
        </div>

        <SelectField label="Country" placeholder="Nigeria" />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Job type (Your country)
          </label>
          <CheckboxGroup options={jobTypeOptions} name="job-type" />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Job preference (Your country)
          </label>
          <CheckboxGroup options={jobPreferenceOptions} name="job-preference" />
        </div>

        <SelectField
          label="Job location (Other countries)"
          placeholder="Choose job location"
          helperText="You can choose more than one location"
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Job type (Other countries)
          </label>
          <CheckboxGroup
            options={otherCountriesJobTypeOptions}
            name="other-countries-job-type"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Job preference (Other countries)
          </label>
          <CheckboxGroup
            options={otherCountriesPreferenceOptions}
            name="other-countries-preference"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-100 text-blue-600 py-3 px-4 rounded-md hover:bg-blue-200 transition-colors duration-200"
        >
            <Link href="/onboarding/jobloop/resume"> 
            Next
            </Link>
        
        </button>
      </form>
    </div>
  );
}