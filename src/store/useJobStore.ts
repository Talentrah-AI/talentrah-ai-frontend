import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Job } from '@/data/mockJobData/job';

export type TabType = 'recommended' | 'recent' | 'top-matched' | 'saved' | 'applied' | 'draft';

export interface JobFilters {
  jobTitles: string[];
  jobType: ('Full-time' | 'Part-time' | 'Contract' | 'Internship')[];
  workModel: ('Remote' | 'Hybrid' | 'On-site')[];
  priceRange: number;
  experienceLevel: ('Entry Level' | 'Mid Level' | 'Senior Level' | 'Director/Executive' | 'Lead/Staff')[];
  locations: string[];
}

// Combined type for job setup data
export interface JobSetupFormData {
  jobTitles: string[];
  experience: string[];
  jobType: string[];
  locations: string[];
  preference: string[];
}

const defaultFilters: JobFilters = {
  jobTitles: [],
  jobType: [],
  workModel: [],
  priceRange: 50000,
  experienceLevel: [],
  locations: []
};

interface JobStore {
  // Tab state
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  
  // Saved jobs state
  savedJobs: string[];
  toggleSaveJob: (jobId: string) => void;

  // Applied jobs state
  appliedJobs: string[];
  addAppliedJob: (jobId: string) => void;
  removeAppliedJob: (jobId: string) => void;
  isJobApplied: (jobId: string) => boolean;

  // Draft jobs state
  draftJobs: string[];
  toggleDraftJob: (jobId: string) => void;
  
  // Job Setup state
  setupFormData: JobSetupFormData | null;
  setSetupFormData: (data: JobSetupFormData) => void;
  clearSetupFormData: () => void;
  
  // Filters state
  filters: JobFilters;
  setFilters: (filters: Partial<JobFilters>) => void;
  resetFilters: () => void;
  initializeFiltersFromSetup: (formData: JobSetupFormData) => void;

  // Search state
  searchResults: Job[] | null;
  searchQuery: string;
  clearSearch: () => void;
}

export const useJobStore = create<JobStore>()(
  persist(
    (set, get) => ({
      // Tab state
      activeTab: 'recommended',
      setActiveTab: (tab) => set({ activeTab: tab }),
      
      // Saved jobs state
      savedJobs: [],
      toggleSaveJob: (jobId) =>
        set((state) => ({
          savedJobs: state.savedJobs.includes(jobId)
            ? state.savedJobs.filter((id) => id !== jobId)
            : [...state.savedJobs, jobId],
        })),
      
      // Applied jobs state
      appliedJobs: [],
      addAppliedJob: (jobId) => 
        set((state) => {
          // Only add if not already in the list
          if (!state.appliedJobs.includes(jobId)) {
            return { appliedJobs: [...state.appliedJobs, jobId] };
          }
          return state;
        }),
      removeAppliedJob: (jobId) =>
        set((state) => ({
          appliedJobs: state.appliedJobs.filter((id) => id !== jobId)
        })),
      isJobApplied: (jobId) => {
        return get().appliedJobs.includes(jobId);
      },
      
      
      // Draft jobs state
      draftJobs: [],
      toggleDraftJob: (jobId) =>
        set((state) => ({
          draftJobs: state.draftJobs.includes(jobId)
            ? state.draftJobs.filter((id) => id !== jobId)
            : [...state.draftJobs, jobId],
        })),
      
      // Job Setup state
      setupFormData: null,
      setSetupFormData: (data) => set({ 
        setupFormData: data,
        // Automatically initialize filters when setup data is set
        filters: {
          jobTitles: data.jobTitles,
          jobType: data.jobType as JobFilters['jobType'],
          workModel: data.preference as JobFilters['workModel'],
          priceRange: 50000,
          experienceLevel: data.experience as JobFilters['experienceLevel'],
          locations: data.locations,
        }
      }),
      clearSetupFormData: () => set({ setupFormData: null }),
      
      // Filters state
      filters: defaultFilters,
      setFilters: (newFilters) =>
        set((state) => ({
          filters: { ...state.filters, ...newFilters },
        })),
      resetFilters: () => set({ filters: defaultFilters }),
      initializeFiltersFromSetup: (formData) =>
        set({
          filters: {
            jobTitles: formData.jobTitles,
            jobType: formData.jobType as JobFilters['jobType'],
            workModel: formData.preference as JobFilters['workModel'],
            priceRange: 50000,
            experienceLevel: formData.experience as JobFilters['experienceLevel'],
            locations: formData.locations,
          },
        }),

      // Search state
      searchResults: null,
      searchQuery: '',
      clearSearch: () => set({ searchResults: null, searchQuery: '' }),
    }),
    {
      name: 'job-store',
    }
  )
);
