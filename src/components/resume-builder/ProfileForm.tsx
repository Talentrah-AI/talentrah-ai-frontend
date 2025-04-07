'use client';

import type { UseFormReturn } from 'react-hook-form';
import type { PersonalFormValues } from '@/app/resume-builder/Bio-Data-Form/context/schema';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface Field {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
}

interface ProfileFormProps {
  form: UseFormReturn<PersonalFormValues>;
  field: Field;
}

export function ProfileForm({ form, field }: ProfileFormProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={field.id}>{field.label}</Label>
      <Input
        id={field.id}
        type={field.type}
        placeholder={field.placeholder}
        {...form.register(field.id as keyof PersonalFormValues)}
      />
      {form.formState.errors[field.id as keyof PersonalFormValues] && (
        <p className="text-red-500 text-xs">
          {
            form.formState.errors[field.id as keyof PersonalFormValues]
              ?.message as string
          }
        </p>
      )}
    </div>
  );
}
