'use client';

import { FormInputField } from './FormInputField';
import { AppForm } from '@/data/form/props';

interface DateRangeFieldsProps {
  form: AppForm;
  index: number;
}

export const DateRangerField = ({ form, index }: DateRangeFieldsProps) => {
  const currentJobFieldName = `workExperiences.${index}.currentJob` as const;
  const startDateFieldName = `workExperiences.${index}.startDate` as const;
  const endDateFieldName = `workExperiences.${index}.endDate` as const;

  const isCurrentJob = form.watch(currentJobFieldName);

  return (
    <div className="lg:grid grid-cols-2 gap-4">
      <div>
        <FormInputField
          form={form}
          field={{
            name: startDateFieldName,
            placeholder: 'Choose date',
            type: 'date',
            label: 'From',
            required: true,
          }}
        />
      </div>
      <div>
        <FormInputField
          form={form}
          field={{
            name: endDateFieldName,
            placeholder: 'Choose date',
            type: 'date',
            label: 'To',
            required: !isCurrentJob,
          }}
        />
      </div>
    </div>
  );
};
