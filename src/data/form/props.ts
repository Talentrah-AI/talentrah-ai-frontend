'use client';

import { UseFormReturn } from 'react-hook-form';

export type WorkExperience = {
  company: string;
  jobtitle: string;
  state: string;
  country: string;
  startDate: string;
  endDate: string;
  currentJob?: boolean;
  description: string;
};

export type WorkExperienceFormValues = {
  workExperiences: WorkExperience[];
};

export type AppForm = UseFormReturn<WorkExperienceFormValues>;

export type WorkExperienceFieldPath =
  | `workExperiences.${number}.${keyof WorkExperience}`
  | 'workExperiences'
  | `workExperiences.${number}`;

export type FieldProps = {
  name: WorkExperienceFieldPath;
  placeholder: string;
  type: string;
  label: string;
  required?: boolean;
};

export const getWorkExperienceFieldName = <T extends keyof WorkExperience>(
  index: number,
  field: T
): `workExperiences.${number}.${T}` => {
  return `workExperiences.${index}.${field}`;
};
