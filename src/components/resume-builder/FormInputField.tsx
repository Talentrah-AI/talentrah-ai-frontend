'use client';

import { useState } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { AppForm, WorkExperienceFieldPath } from '@/data/form/props';

interface FormInputFieldProps {
  form: AppForm;
  field: {
    name: WorkExperienceFieldPath;
    placeholder: string;
    type: string;
    label: string;
    required?: boolean;
  };
}

export const FormInputField = ({ form, field }: FormInputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <FormField
      control={form.control}
      name={field.name}
      render={({ field: formField }) => (
        <FormItem>
          <div className="flex justify-between">
            <FormLabel className="text-sm font-medium">{field.label}</FormLabel>
            {isFocused && (
              <span className="text-xs text-gray-400">
                {field.required ? 'Required' : 'Optional'}
              </span>
            )}
          </div>
          <FormControl>
            <Input
              placeholder={field.placeholder}
              type={field.type}
              value={formField.value as string}
              onChange={(e) => formField.onChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false);
                formField.onBlur();
              }}
              className=""
            />
          </FormControl>
          <FormMessage className="text-xs border-none" />
        </FormItem>
      )}
    />
  );
};
