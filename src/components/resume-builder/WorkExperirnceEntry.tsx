'use client';

import { JobTitleStateField } from './JobTitleStateField';
import { FormInputField } from './FormInputField';
import { DateRangerField } from './DateRangerField';
import { CurrentJobCheckbox } from './CurrentJobCheckBox';
import { FormTextareaField } from './FormTextareaField';
import { AppForm } from '@/data/form/props';

interface WorkExperienceEntryProps {
  form: AppForm;
  index: number;
}

export const WorkExperienceEntry = ({
  form,
  index,
}: WorkExperienceEntryProps) => {
  return (
    <div className="space-y-4">
      <FormInputField
        form={form}
        field={{
          name: `workExperiences.${index}.company`,
          placeholder: 'Enter company name',
          type: 'text',
          label: 'Company name',
          required: true,
        }}
      />

      <JobTitleStateField form={form} index={index} />

      <FormInputField
        form={form}
        field={{
          name: `workExperiences.${index}.country`,
          placeholder: 'Enter country',
          type: 'text',
          label: 'Country',
          required: true,
        }}
      />

      <DateRangerField form={form} index={index} />
      <CurrentJobCheckbox form={form} index={index} />

      <FormTextareaField
        form={form}
        field={{
          name: `workExperiences.${index}.description`,
          placeholder: 'Add information about yourself...',
          type: 'textarea',
          label: 'Description',
          required: false,
        }}
      />
    </div>
  );
};
