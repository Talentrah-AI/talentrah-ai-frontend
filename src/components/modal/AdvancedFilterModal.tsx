"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

const options = [
  "UI/UX Designer",
  "Product Designer",
  "Frontend Developer",
  "Backend Developer",
  "Full-Stack Developer",
]

const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];
const workModels = ["Remote", "Hybrid", "On-site"];
const experienceLevel = ["Entry level", "Mid level", "Senior level", "Intern", "Director/Associate", "Lead/staff"];



 const AdvancedFilterModal: React.FC = () => {
   const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [selected, setSelected] = useState<string[]>(["Product Manager", "Product Designer", "Product Advisor"])
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>(["Full-time"]);
  const [selectedWorkModels, setSelectedWorkModels] = useState<string[]>(["Remote"]);
  const [selectedExperienceLevel, setSelectedExperienceLevel] = useState<string[]>(["Entry level"]);
  const [priceRange, setPriceRange] = useState(80);

  const min = 10;
  const max = 300;
  const percentage = ((priceRange - min) / (max - min)) * 100;



   // Convert the value to range (10K - 300K)
  const formattedPrice = `$${priceRange}k`
   
    const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase()) && (
        !selected.includes(option) // Prevent showing already selected options
    )
  )

  // Handle selecting a job title
  const handleSelect = (option: string) => {
    if (!selected.includes(option)) {
      setSelected([...selected, option])
    }
    setInputValue("") // Clear input after selection
    setOpen(false)
  }

  // Handle removing a selected job title
  const handleRemove = (option: string) => {
    setSelected(selected.filter((item) => item !== option))
  }

  // Toggle function for job types
  const handleJobTypeToggle = (type: string) => {
    setSelectedJobTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // Toggle function for work models
  const handleWorkModelToggle = (model: string) => {
    setSelectedWorkModels((prev) =>
      prev.includes(model) ? prev.filter((m) => m !== model) : [...prev, model]
    );
  };

//   Toggle function for work models
const handleExperienceLevelToggle = (level:string) => {
    setSelectedExperienceLevel((prev) => prev.includes(level) ? prev.filter((l)=>l !== level) : [...prev, level]);
}

  const resetFilters = () => {
    
  };

  return (
        <div className="w-[378px] h-[1176.62px] flex flex-col pt-[26px] pr-[12px] pb-[26px] pl-[12px] gap-[10px] left-[1062px] bg-[#F8F8F8] absolute top-0 right-0">

         <div className="flex justify-between items-center">
          <h2 className="font-[Gabarito] font-medium text-[16px] leading-[20px] tracking-[0px] text-[#08121D] text-center">Filter</h2>
            <Button 
            onClick={resetFilters} 
            variant="ghost" 
            className="w-[77px] h-[27.62px] rounded-[10.04px] border-[#0967D2] border-[0.5px] px-[41.85px] py-[4.18px] gap-[4.18px]" >
                <span className="font-[Gabarito] font-normal text-[10.04px] leading-[13.39px] tracking-[0px] text-center text-[#0967D2]">Reset All</span>
            </Button>
         </div>

        <div className="border flex flex-col gap-4">
            <div className="flex flex-col bg-white rounded-[12px] p-[19px] gap-[10px]">
            <h1 className="font-[Gabarito] font-medium text-[12px] leading-[16px] tracking-[0px]">* Job title</h1>
          
       <Popover open={open} onOpenChange={setOpen}>
        <div className="relative w-full">
          {/* Input Field */}
          <Input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
              setOpen(true) // Keep dropdown open while typing
            }}
            onFocus={() => setOpen(true)} // Open on focus
            placeholder="Enter/Choose job title"
            className="pr-10 cursor-text"
          />

          {/* Dropdown Toggle Icon */}
          <PopoverTrigger asChild>
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
            >
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </button>
          </PopoverTrigger>
        </div>

        {/* Dropdown */}
        
          <PopoverContent align="start" className="w-[316px] absolute -right-10 p-2">
            <div className="max-h-48 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <div
                    key={option}
                    className={cn(
                      "cursor-pointer flex items-center justify-between p-2 rounded-md hover:bg-gray-100 transition"
                    )}
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                    {/* <Check className="h-4 w-4 text-blue-500" /> */}
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500 p-2">No results found</p>
              )}
            </div>
          </PopoverContent>
      </Popover>

      {/* Display Selected Job Titles Below Input */}
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2">
            <p className="font-[Gabarito] font-normal text-[12px] leading-4 tracking-[0px] text-[#717A84]">You can choose more than one job title</p>
          {selected.map((job) => (
            <div key={job}>
                <div className="w-full h-[26px] flex items-center rounded-[6px] px-[10px] py-[5px] gap-[5px] bg-[#0967D2] whitespace-nowrap text-white">
                    <span className=" font-[400] text-[12px] leading-[16px] tracking-[0px]  font-[Gabarito]">{job}</span>
                    <button onClick={() => handleRemove(job)}>
                        <X className="w-4 h-4"/>
                    </button>
                </div>
              
            </div>
          ))}
        </div>
      )}
         
            </div>

            <div className="space-y-2 rounded-[12px] p-[16px_19px] bg-white">
                 {/* Job Type Section */}
                
                    <p className="font-[Gabarito] font-medium text-[12px] leading-[16px] tracking-[0px]">
                    <span className="text-red-500">*</span> Job Type
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                    {jobTypes.map((type) => (
                        <div
                        key={type}
                        className={cn(
                            "flex items-center transition cursor-pointer w-[149px] h-[30px] rounded-[8px] gap-[7px] p-[8px]",
                            selectedJobTypes.includes(type) ? "bg-[#E6F0FB]" : "bg-[#f8f8f8]"
                        )}
                        onClick={() => handleJobTypeToggle(type)}
                        >
                        <Checkbox checked={selectedJobTypes.includes(type)}  />
                        <span className="font-[Gabarito] font-normal text-[10px] leading-[12px] tracking-[0px] text-black">{type}</span>
                        </div>
                    ))}
                    </div>
            </div>


            <div className="space-y-2 rounded-[12px] p-[16px_19px] bg-white">
                {/* Work Model Section */}
                    <p className="font-[Gabarito] font-medium text-[12px] leading-[16px] tracking-[0px]">
                    <span className="text-red-500">*</span> Work Model
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                    {workModels.map((model) => (
                        <div
                        key={model}
                        className={cn(
                            "flex items-center transition cursor-pointer w-[149px] h-[30px] rounded-[8px] gap-[7px] p-[8px]",
                            selectedWorkModels.includes(model) ? "bg-[#E6F0FB]" : "bg-[#f8f8f8]"
                        )}
                        onClick={() => handleWorkModelToggle(model)}
                        >
                        <Checkbox checked={selectedWorkModels.includes(model)} />
                        <span className="font-[Gabarito] font-normal text-[10px] leading-[12px] tracking-[0px] text-black">{model}</span>
                        </div>
                    ))}
                    </div>
            </div>






 <div className="space-y-4 rounded-[12px] p-6 bg-white w-full">
      {/* Price Range Label */}
      <p className="font-[Gabarito] font-medium text-[14px] leading-[16px] tracking-[0px]">
        <span className="text-red-500">*</span> Price range
      </p>

      {/* Slider Container */}
      <div className="relative w-full flex flex-col items-center">
        {/* Floating Price Label */}
        <div
          className="absolute -top-8 bg-yellow-700 text-white text-[12px] font-[Gabarito] font-medium px-2 py-1 rounded-md transition-transform"
          style={{
            left: `calc(${percentage}% - 16px)`, // Adjust label dynamically
            transform: "translateX(-50%)", // Center the label over the thumb
          }}
        >
          {formattedPrice}
        </div>

        {/* Custom Styled Slider */}
        <div className="relative w-full h-6 flex items-center">
          <input
            type="range"
            min={min}
            max={max}
            step="5"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full appearance-none bg-transparent cursor-pointer"
            style={{
              WebkitAppearance: "none",
              appearance: "none",
            }}
          />

          {/* Custom Track */}
          <div className="absolute w-full h-1 bg-gray-300 rounded-full top-1/2 transform -translate-y-1/2" />

          {/* Custom Progress Bar */}
          <div
            className="absolute h-1 bg-[#0967D2] rounded-full top-1/2 transform -translate-y-1/2"
            style={{
              width: `${percentage}%`,
            }}
          />

          {/* Custom Thumb */}
          {/* <div
            className="absolute w-5 h-5 bg-yellow-500 rounded-full border-2 border-white shadow-md cursor-pointer"
            style={{
              left: `calc(${percentage}% - 8px)`, // Adjust for proper centering
              transform: "translateX(-50%)",
            }}
          /> */}
        </div>
      </div>
    </div>















             <div className="space-y-2 rounded-[12px] p-[16px_19px] bg-white">
                {/* Experience level Section */}
                    <p className="font-[Gabarito] font-medium text-[12px] leading-[16px] tracking-[0px]">
                    <span className="text-red-500">*</span> Experience level
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                    {experienceLevel.map((level) => (
                        <div
                        key={level}
                        className={cn(
                            "flex items-center transition cursor-pointer w-[149px] h-[30px] rounded-[8px] gap-[7px] p-[8px]",
                            selectedExperienceLevel.includes(level) ? "bg-[#E6F0FB]" : "bg-[#f8f8f8]"
                        )}
                        onClick={() => handleExperienceLevelToggle(level)}
                        >
                        <Checkbox checked={selectedExperienceLevel.includes(level)} />
                        <span className="font-[Gabarito] font-normal text-[10px] leading-[12px] tracking-[0px] text-black">{level}</span>
                        </div>
                    ))}
                    </div>
            </div>
          
          <span className="text-sm font-medium">Job Type</span>
          {/* <Checkbox label="Full-time" className="mb-4" checked={filters.jobType === "Full-time"} /> */}
          
          <span className="text-sm font-medium">Work Model</span>
          {/* <Checkbox label="Remote" className="mb-4" checked={filters.workModel === "Remote"} /> */}
          
          
          
          <span className="text-sm font-medium">Experience Level</span>
          {/* <Checkbox label="Entry Level" className="mb-4" checked={filters.experience === "Entry Level"} /> */}
          
          <span className="text-sm font-medium">Location</span>
          <Input placeholder="Search location" className="mb-2" />
          {/* <div className="flex flex-wrap gap-2 mb-4">
            {selectedLocations.map((location) => (
              <Badge key={location} variant="secondary" className="flex items-center gap-1">
                {location} <button onClick={() => setSelectedLocations(selectedLocations.filter(l => l !== location))}>✕</button>
              </Badge>
            ))}
          </div> */}
        </div>
          
          <Button className="w-full">Apply</Button>
        </div>
  );
}

export default AdvancedFilterModal;
