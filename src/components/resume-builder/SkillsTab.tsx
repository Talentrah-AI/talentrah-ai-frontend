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
  LayoutGrid,
  MessageSquare,
  Phone,
  Plus,
  Search,
  Settings,
  User,
  X,
} from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { SkillsFormValues } from '@/app/resume-builder/Bio-Data-Form/context/schema';
import { toast } from 'sonner';
import { useState, useRef, useEffect } from 'react';
import { useTab } from '@/app/resume-builder/Bio-Data-Form/context/TabContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';

interface SkillsTabProps {
  form: UseFormReturn<SkillsFormValues>;
  handleSaveAndExit: () => void;
}

// Expanded skills suggestions
const softSkillsSuggestions = [
  'Communication',
  'Leadership',
  'Time management',
  'Active listening',
  'Problem solving',
  'Teamwork',
  'Adaptability',
  'Critical thinking',
  'Creativity',
  'Emotional intelligence',
];

const hardSkillsSuggestions = [
  'Wireframing',
  'Prototyping',
  'Color Theory',
  'Grid Systems',
  'Figma',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'UI Design',
];

export function SkillsTab({ form, handleSaveAndExit }: SkillsTabProps) {
  const { setActiveTab } = useTab();
  const [softSkillInput, setSoftSkillInput] = useState('');
  const [hardSkillInput, setHardSkillInput] = useState('');
  const [selectedSoftSkills, setSelectedSoftSkills] = useState<string[]>([]);
  const [selectedHardSkills, setSelectedHardSkills] = useState<string[]>([]);
  const [filteredSoftSkills, setFilteredSoftSkills] = useState<string[]>([]);
  const [filteredHardSkills, setFilteredHardSkills] = useState<string[]>([]);
  const [showSoftSuggestions, setShowSoftSuggestions] = useState(false);
  const [showHardSuggestions, setShowHardSuggestions] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const softSkillsRef = useRef<HTMLDivElement>(null);
  const hardSkillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Filter soft skills based on input
    if (softSkillInput) {
      const filtered = softSkillsSuggestions.filter(
        (skill) =>
          skill.toLowerCase().includes(softSkillInput.toLowerCase()) &&
          !selectedSoftSkills.includes(skill)
      );
      setFilteredSoftSkills(filtered);
      setShowSoftSuggestions(true);
    } else {
      setFilteredSoftSkills([]);
      setShowSoftSuggestions(false);
    }
  }, [softSkillInput, selectedSoftSkills]);

  useEffect(() => {
    // Filter hard skills based on input
    if (hardSkillInput) {
      const filtered = hardSkillsSuggestions.filter(
        (skill) =>
          skill.toLowerCase().includes(hardSkillInput.toLowerCase()) &&
          !selectedHardSkills.includes(skill)
      );
      setFilteredHardSkills(filtered);
      setShowHardSuggestions(true);
    } else {
      setFilteredHardSkills([]);
      setShowHardSuggestions(false);
    }
  }, [hardSkillInput, selectedHardSkills]);

  useEffect(() => {
    // Close suggestions on click outside
    function handleClickOutside(event: MouseEvent) {
      if (
        softSkillsRef.current &&
        !softSkillsRef.current.contains(event.target as Node)
      ) {
        setShowSoftSuggestions(false);
      }
      if (
        hardSkillsRef.current &&
        !hardSkillsRef.current.contains(event.target as Node)
      ) {
        setShowHardSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const addSoftSkill = (skill: string) => {
    if (!selectedSoftSkills.includes(skill) && skill.trim() !== '') {
      setSelectedSoftSkills([...selectedSoftSkills, skill]);
      setSoftSkillInput('');
      setShowSoftSuggestions(false);
    }
  };

  const removeSoftSkill = (skill: string) => {
    setSelectedSoftSkills(selectedSoftSkills.filter((s) => s !== skill));
  };

  const addHardSkill = (skill: string) => {
    if (!selectedHardSkills.includes(skill) && skill.trim() !== '') {
      setSelectedHardSkills([...selectedHardSkills, skill]);
      setHardSkillInput('');
      setShowHardSuggestions(false);
    }
  };

  const removeHardSkill = (skill: string) => {
    setSelectedHardSkills(selectedHardSkills.filter((s) => s !== skill));
  };

  function onSubmit(data: SkillsFormValues) {
    // Combine the form data with the selected skills
    const skillsData = {
      ...data,
      softSkills: selectedSoftSkills,
      hardSkills: selectedHardSkills,
    };

    console.log('Skills data:', skillsData);
    toast.success('Skills saved successfully!');
    // Navigate to preview or finalize
  }

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
                  Personal Info
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setActiveTab('work')}
                  className="text-[11px] h-8 px-2"
                >
                  Work Exp
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setActiveTab('education')}
                  className="text-[11px] h-8 px-2"
                >
                  Education
                </Button>
                <Button className="bg-[rgba(9,103,210,1)] hover:bg-blue-400 text-[11px] h-8 px-2">
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
                className="space-y-6 mt-6"
              >
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                  <div className="w-full lg:w-[60%] space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Input
                        id="role"
                        placeholder="UI/UX Designer"
                        {...form.register('role')}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Soft skills</Label>
                      <div className="relative" ref={softSkillsRef}>
                        <div className="flex flex-wrap gap-2 p-2 border border-gray-300 rounded-md min-h-[56px]">
                          {selectedSoftSkills.map((skill) => (
                            <div
                              key={skill}
                              className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-md"
                            >
                              {skill}
                              <button
                                type="button"
                                onClick={() => removeSoftSkill(skill)}
                                className="ml-2"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                          <input
                            type="text"
                            value={softSkillInput}
                            onChange={(e) => setSoftSkillInput(e.target.value)}
                            onFocus={() => setShowSoftSuggestions(true)}
                            placeholder={
                              selectedSoftSkills.length === 0
                                ? 'Choose skills'
                                : ''
                            }
                            className="flex-1 min-w-[120px] outline-none border-none p-1"
                          />
                        </div>
                        {showSoftSuggestions &&
                          filteredSoftSkills.length > 0 && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                              {filteredSoftSkills.map((skill) => (
                                <button
                                  key={skill}
                                  type="button"
                                  onClick={() => addSoftSkill(skill)}
                                  className="w-full px-4 py-2 text-left hover:bg-gray-50"
                                >
                                  {skill}
                                </button>
                              ))}
                            </div>
                          )}
                      </div>

                      <div className="mt-2">
                        <p className="text-sm text-gray-500 mb-2">
                          Suggested skills
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {softSkillsSuggestions.slice(0, 5).map((skill) => (
                            <button
                              key={skill}
                              type="button"
                              onClick={() => addSoftSkill(skill)}
                              className={`px-3 py-1 rounded-full border ${
                                selectedSoftSkills.includes(skill)
                                  ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                                  : 'border-gray-300 hover:border-gray-400'
                              }`}
                              disabled={selectedSoftSkills.includes(skill)}
                            >
                              {skill}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Hard skills</Label>
                      <div className="relative" ref={hardSkillsRef}>
                        <div className="flex flex-wrap gap-2 p-2 border border-gray-300 rounded-md min-h-[56px]">
                          {selectedHardSkills.map((skill) => (
                            <div
                              key={skill}
                              className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-md"
                            >
                              {skill}
                              <button
                                type="button"
                                onClick={() => removeHardSkill(skill)}
                                className="ml-2"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                          <input
                            type="text"
                            value={hardSkillInput}
                            onChange={(e) => setHardSkillInput(e.target.value)}
                            onFocus={() => setShowHardSuggestions(true)}
                            placeholder={
                              selectedHardSkills.length === 0
                                ? 'Choose skills'
                                : ''
                            }
                            className="flex-1 min-w-[120px] outline-none border-none p-1"
                          />
                        </div>
                        {showHardSuggestions &&
                          filteredHardSkills.length > 0 && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                              {filteredHardSkills.map((skill) => (
                                <button
                                  key={skill}
                                  type="button"
                                  onClick={() => addHardSkill(skill)}
                                  className="w-full px-4 py-2 text-left hover:bg-gray-50"
                                >
                                  {skill}
                                </button>
                              ))}
                            </div>
                          )}
                      </div>

                      <div className="mt-2">
                        <p className="text-sm text-gray-500 mb-2">
                          Suggested skills
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {hardSkillsSuggestions.slice(0, 5).map((skill) => (
                            <button
                              key={skill}
                              type="button"
                              onClick={() => addHardSkill(skill)}
                              className={`px-3 py-1 rounded-full border ${
                                selectedHardSkills.includes(skill)
                                  ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                                  : 'border-gray-300 hover:border-gray-400'
                              }`}
                              disabled={selectedHardSkills.includes(skill)}
                            >
                              {skill}
                            </button>
                          ))}
                        </div>
                      </div>
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
                    Finalize Resume
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
