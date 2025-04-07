import { z } from 'zod';

export const personalSchema = z.object({
  firstname: z.string().min(1, 'Please fill your first name'),
  lastname: z.string().min(1, 'Please fill your last name'),
  email: z.string().email('Email is required'),
  phonenumber: z
    .string()
    .min(11, 'Phone number must be 11 digits')
    .max(11, 'Phone number must be 11 digits'),
  address: z.string().min(1, 'Please fill your address'),
});

export const workExperienceSchema = z.object({
  company: z.string().min(1, 'Company name is required'),
  jobtitle: z.string().min(1, 'Job title is required'),
  state: z.string().min(1, 'State is required'),
  country: z.string().min(1, 'Country name is required'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
  currentJob: z.boolean().optional(),
  description: z.string().min(1, 'Description is required'),
});

export const workSchema = z.object({
  workExperiences: z
    .array(workExperienceSchema)
    .min(1, 'At least one work experience is required'),
});

export const educationSchema = z.object({
  institution: z.string().min(1, 'Institution name is required'),
  degree: z.string().min(1, 'Degree is required'),
  fieldOfStudy: z.string().min(1, 'Field of study is required'),
  state: z.string().min(1, 'State is required'),
  country: z.string().min(1, 'Country is required'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
  currentlyStudying: z.boolean().optional(),
});

export const skillsSchema = z.object({
  role: z.string().optional(),
  skills: z.array(z.string()).min(1, 'At least one skill is required'),
});

export type PersonalFormValues = z.infer<typeof personalSchema>;
export type WorkFormValues = z.infer<typeof workSchema>;
export type EducationFormValues = z.infer<typeof educationSchema>;
export type SkillsFormValues = z.infer<typeof skillsSchema>;
