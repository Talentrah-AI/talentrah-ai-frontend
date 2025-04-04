'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { AppForm } from '@/data/form/props';

interface CurrentJobCheckboxProps {
  form: AppForm;
  index: number;
}

export const CurrentJobCheckbox = ({
  form,
  index,
}: CurrentJobCheckboxProps) => {
  const currentJobFieldName = `workExperiences.${index}.currentJob` as const;
  const endDateFieldName = `workExperiences.${index}.endDate` as const;

  return (
    <FormField
      control={form.control}
      name={currentJobFieldName}
      render={({ field }) => (
        <FormItem className="flex items-center space-x-2 space-y-0">
          <FormControl>
            <Checkbox
              checked={field.value as boolean}
              onCheckedChange={(checked: boolean) => {
                field.onChange(checked);
                if (checked) {
                  form.setValue(endDateFieldName, '', { shouldValidate: true });
                }
              }}
            />
          </FormControl>
          <FormLabel className="text-sm font-normal">
            I currently work here
          </FormLabel>
        </FormItem>
      )}
    />
  );
};
