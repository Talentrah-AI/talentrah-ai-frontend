"use client";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const JobSearchLoop = ({ currentStep, setCurrentStep }: { currentStep: number; setCurrentStep: (step: number) => void }) => {
  const [query, setQuery] = useState("");
  const [selectedTitles, setSelectedTitles] = useState<string[]>([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedJobType, setSelectedJobType] = useState<string[]>([]);
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const jobTitles = ["Software Engineer", "Frontend Developer", "Backend Developer"];
  const jobLocations = ["New York", "San Francisco", "Remote"];
  const [selectedJobExperience, setSelectedJobExperience] = useState<string[]>([]);
  
  // Country Selection
  const [country, setCountry] = useState("");

  // Visa Sponsored Jobs
  const [visaSponsored, setVisaSponsored] = useState(false);

  // Function to toggle job experience selection
  const toggleJobExperience = (experience: string) => {
    setSelectedJobExperience((prev) =>
      prev.includes(experience)
        ? prev.filter((exp) => exp !== experience) // Remove if already selected
        : [...prev, experience] // Add if not selected
    );
  };

  const handleAddTitle = (title: string) => {
    if (!selectedTitles.includes(title)) setSelectedTitles([...selectedTitles, title]);
    setQuery("");
  };

  const handleRemoveTitle = (title: string) => {
    setSelectedTitles(selectedTitles.filter((t) => t !== title));
  };

  const handleAddLocation = (loc: string) => {
    if (!selectedLocations.includes(loc)) setSelectedLocations([...selectedLocations, loc]);
    setLocationQuery("");
  };

  const toggleJobType = (type: string) => {
    if (selectedJobType.includes(type)) {
      setSelectedJobType(selectedJobType.filter((t) => t !== type));
    } else {
      setSelectedJobType([...selectedJobType, type]);
    }
  };

  const togglePreference = (pref: string) => {
    if (selectedPreferences.includes(pref)) {
      setSelectedPreferences(selectedPreferences.filter((p) => p !== pref));
    } else {
      setSelectedPreferences([...selectedPreferences, pref]);
    }
  };


  return (
    <div className="p-4 bg-gray-50 text-gray-700 shadow-md rounded-md w-full max-w-3xl mx-auto overflow-auto">
   {/* Step 1: Job Preferences & Filters */}
{currentStep === 1 && (
  <>
    {/* Job Title Selection */}
    <div className="mb-5">
      <label className="font-semibold">Job Title</label>
      <p className="text-sm text-gray-500">You can choose more than one job title</p>
      <input
        type="text"
        placeholder="Enter/Choose job title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border px-3 py-2 w-full mt-2 rounded-md"
      />
      {query && (
        <ul className="border mt-1 bg-white absolute w-full max-w-[calc(100%-32px)] z-10 rounded-md shadow-lg">
          {jobTitles
            .filter((title) => title.toLowerCase().includes(query.toLowerCase()))
            .map((title, index) => (
              <li 
                key={index} 
                onClick={() => handleAddTitle(title)} 
                className="px-3 py-2 cursor-pointer hover:bg-gray-200"
              >
                {title}
              </li>
            ))}
        </ul>
      )}
      <div className="mt-2 flex flex-wrap">
        {selectedTitles.map((title, index) => (
          <div 
            key={index} 
            className="bg-blue-200 px-3 py-1 rounded-full flex items-center mr-2 mb-2"
          >
            {title} <FaTimes className="ml-2 cursor-pointer" onClick={() => handleRemoveTitle(title)} />
          </div>
        ))}
      </div>
    </div>

    {/* Job Experience Selection */}
    <div className="mb-5">
      <label className="font-semibold">Job Experience</label>
      <div className="flex flex-wrap gap-4 mt-2">
        {["Junior", "Intermediate", "Senior"].map((experience) => (
          <div key={experience} className="flex items-center">
            <input 
              type="checkbox" 
              id={experience} 
              onChange={() => toggleJobExperience(experience)} 
              checked={selectedJobExperience.includes(experience)} 
            />
            <label htmlFor={experience} className="ml-2">{experience}</label>
          </div>
        ))}
      </div>
    </div>

    {/* Country Selection */}
    <div className="mb-5">
      <label className="font-semibold">Country</label>
      <input 
        type="text" 
        placeholder="Enter your country" 
        value={country} 
        onChange={(e) => setCountry(e.target.value)} 
        className="border px-3 py-2 w-full mt-2 rounded-md"
      />
    </div>

    {/* Job Type (Your Country) */}
    <div className="mb-5">
      <label className="font-semibold">Job Type (Your Country)</label>
      <div className="flex flex-wrap gap-4 mt-2">
        {["Full-time", "Contract", "Part-time", "Internship"].map((type) => (
          <div key={type} className="flex items-center">
            <input 
              type="checkbox" 
              id={type} 
              onChange={() => toggleJobType(type)} 
              checked={selectedJobType.includes(type)} 
            />
            <label htmlFor={type} className="ml-2">{type}</label>
          </div>
        ))}
      </div>
    </div>

    {/* Job Preference (Your Country) */}
    <div className="mb-5">
      <label className="font-semibold">Job Preference (Your Country)</label>
      <div className="flex flex-wrap gap-4 mt-2">
        {["On-site", "Remote", "Hybrid"].map((pref) => (
          <div key={pref} className="flex items-center">
            <input 
              type="checkbox" 
              id={pref} 
              onChange={() => togglePreference(pref)} 
              checked={selectedPreferences.includes(pref)} 
            />
            <label htmlFor={pref} className="ml-2">{pref}</label>
          </div>
        ))}
      </div>
    </div>

    {/* Job Location (Other Countries) */}
    <div className="mb-5">
      <label className="font-semibold">Job Location (Other Countries)</label>
      <p className="text-sm text-gray-500">You can choose more than one location</p>
      <input
        type="text"
        placeholder="Choose job location"
        value={locationQuery}
        onChange={(e) => setLocationQuery(e.target.value)}
        className="border px-3 py-2 w-full mt-2 rounded-md"
      />
      {locationQuery && (
        <ul className="border mt-1 bg-white absolute w-full max-w-[calc(100%-32px)] z-10 rounded-md shadow-lg">
          {jobLocations
            .filter((loc) => loc.toLowerCase().includes(locationQuery.toLowerCase()))
            .map((loc, index) => (
              <li key={index} onClick={() => handleAddLocation(loc)} className="px-3 py-2 cursor-pointer hover:bg-gray-200">
                {loc}
              </li>
            ))}
        </ul>
      )}
    </div>

    {/* Job Type (Other Countries) */}
    <div className="mb-5">
      <label className="font-semibold">Job Type (Other Countries)</label>
      <div className="flex flex-wrap gap-4 mt-2">
        {["Full-time", "Contract", "Part-time", "Internship"].map((type) => (
          <div key={type} className="flex items-center">
            <input 
              type="checkbox" 
              id={type} 
              onChange={() => toggleJobType(type)} 
              checked={selectedJobType.includes(type)} 
            />
            <label htmlFor={type} className="ml-2">{type}</label>
          </div>
        ))}
      </div>
    </div>

    {/* Job Preference (Other Countries) */}
    <div className="mb-5">
      <label className="font-semibold">Job Preference (Other Countries)</label>
      <div className="flex flex-wrap gap-4 mt-2">
      {["On-site", "Remote", "Hybrid"].map((pref) => (
          <div key={pref} className="flex items-center">
            <input 
              type="checkbox" 
              id={pref} 
              onChange={() => togglePreference(pref)} 
              checked={selectedPreferences.includes(pref)} 
            />
            <label htmlFor={pref} className="ml-2">{pref}</label>
          </div>
        ))}
      </div>
    </div>

    {/* Visa Sponsored Jobs */}
    <div className="mb-5">
      <label className="font-semibold">Visa Sponsored Jobs</label>
      <div className="flex items-center mt-2">
        <input 
          type="checkbox" 
          id="visaSponsored" 
          onChange={() => setVisaSponsored(!visaSponsored)} 
          checked={visaSponsored} 
        />
        <label htmlFor="visaSponsored" className="ml-2">Show only visa-sponsored jobs</label>
        <label htmlFor="remote" className="ml-2">Remote</label>
      </div>
    </div>

  
  </>
)}

   {/* Navigation Buttons */}
   <div className="flex justify-between mt-5">
        {currentStep > 1 && (
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Back
          </button>
        )}
        {currentStep < 3 && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default JobSearchLoop;
