'use client';

import { useTab } from './context/TabContext';
import { PersonalTab } from '@/components/resume-builder/PersonalTab';
import { WorkTab } from '@/components/resume-builder/WorkTab';
import { EducationTab } from '@/components/resume-builder/EducationTab';
import { SkillsTab } from '@/components/resume-builder/SkillsTab';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  workSchema,
  educationSchema,
  skillsSchema,
  type WorkFormValues,
  type EducationFormValues,
  type SkillsFormValues,
} from './context/schema';
import { toast } from 'sonner';

export default function ResumePage() {
  const { activeTab } = useTab();

  const workForm = useForm<WorkFormValues>({
    resolver: zodResolver(workSchema),
    defaultValues: {
      workExperiences: [
        {
          company: '',
          jobtitle: '',
          state: '',
          country: '',
          startDate: '',
          endDate: '',
          currentJob: false,
          description: '',
        },
      ],
    },
  });

  const educationForm = useForm<EducationFormValues>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      institution: '',
      degree: 'BSc',
      fieldOfStudy: '',
      state: '',
      country: '',
      startDate: '',
      endDate: '',
      currentlyStudying: false,
    },
  });

  const skillsForm = useForm<SkillsFormValues>({
    resolver: zodResolver(skillsSchema),
    defaultValues: {
      role: '',
      skills: [''],
    },
  });

  const handleSaveAndExit = () => {
    toast.success('Progress saved! You can continue later.');
  };

  return (
    <div className="h-[130vh]">
      <div className="">
        {activeTab === 'personal' && <PersonalTab />}
        {activeTab === 'work' && (
          <WorkTab form={workForm} handleSaveAndExit={handleSaveAndExit} />
        )}
        {activeTab === 'education' && (
          <EducationTab
            form={educationForm}
            handleSaveAndExit={handleSaveAndExit}
          />
        )}
        {activeTab === 'skills' && (
          <SkillsTab form={skillsForm} handleSaveAndExit={handleSaveAndExit} />
        )}
      </div>
    </div>
  );
}
