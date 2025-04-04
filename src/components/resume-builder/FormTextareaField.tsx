'use client';

import { useState } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { AppForm, WorkExperienceFieldPath } from '@/data/form/props';

interface FormTextareaFieldProps {
  form: AppForm;
  field: {
    name: WorkExperienceFieldPath;
    placeholder: string;
    type: string;
    label: string;
    required?: boolean;
  };
}

export const FormTextareaField = ({ form, field }: FormTextareaFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <FormField
      control={form.control}
      name={field.name}
      render={({ field: formField }) => (
        <FormItem>
          <div className="flex justify-between">
            <FormLabel className="text-sm font-medium">
              {field.label}{' '}
              {field.required && <span className="text-red-500">*</span>}
            </FormLabel>
            {isFocused && (
              <span className="text-xs text-gray-400">
                {field.required ? 'Required' : 'Optional'}
              </span>
            )}
          </div>
          <FormControl>
            <Textarea
              placeholder={field.placeholder}
              value={formField.value as string}
              onChange={(e) => formField.onChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false);
                formField.onBlur();
              }}
              className="rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-[120px]"
            />
          </FormControl>
          <FormMessage className="text-xs text-red-500 border-none" />
        </FormItem>
      )}
    />
  );
};
