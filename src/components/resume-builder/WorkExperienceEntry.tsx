'use client';

import type { UseFormReturn } from 'react-hook-form';
import type { WorkFormValues } from '@/app/resume-builder/Bio-Data-Form/context/schema';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';

interface WorkExperienceEntryProps {
  form: UseFormReturn<WorkFormValues>;
  index: number;
}

export function WorkExperienceEntry({ form, index }: WorkExperienceEntryProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor={`company-${index}`}>Company</Label>
        <Input
          id={`company-${index}`}
          placeholder="Enter company name"
          {...form.register(`workExperiences.${index}.company`)}
        />
        {form.formState.errors.workExperiences?.[index]?.company && (
          <p className="text-red-500 text-xs">
            {form.formState.errors.workExperiences[index]?.company?.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor={`jobtitle-${index}`}>Job Title</Label>
        <Input
          id={`jobtitle-${index}`}
          placeholder="Enter job title"
          {...form.register(`workExperiences.${index}.jobtitle`)}
        />
        {form.formState.errors.workExperiences?.[index]?.jobtitle && (
          <p className="text-red-500 text-xs">
            {form.formState.errors.workExperiences[index]?.jobtitle?.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={`state-${index}`}>State</Label>
          <Input
            id={`state-${index}`}
            placeholder="Enter state"
            {...form.register(`workExperiences.${index}.state`)}
          />
          {form.formState.errors.workExperiences?.[index]?.state && (
            <p className="text-red-500 text-xs">
              {form.formState.errors.workExperiences[index]?.state?.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor={`country-${index}`}>Country</Label>
          <Input
            id={`country-${index}`}
            placeholder="Enter country"
            {...form.register(`workExperiences.${index}.country`)}
          />
          {form.formState.errors.workExperiences?.[index]?.country && (
            <p className="text-red-500 text-xs">
              {form.formState.errors.workExperiences[index]?.country?.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={`startDate-${index}`}>Start Date</Label>
          <Input
            id={`startDate-${index}`}
            type="date"
            {...form.register(`workExperiences.${index}.startDate`)}
          />
          {form.formState.errors.workExperiences?.[index]?.startDate && (
            <p className="text-red-500 text-xs">
              {form.formState.errors.workExperiences[index]?.startDate?.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor={`endDate-${index}`}>End Date</Label>
          <Input
            id={`endDate-${index}`}
            type="date"
            {...form.register(`workExperiences.${index}.endDate`)}
            disabled={form.watch(`workExperiences.${index}.currentJob`)}
          />
          {form.formState.errors.workExperiences?.[index]?.endDate &&
            !form.watch(`workExperiences.${index}.currentJob`) && (
              <p className="text-red-500 text-xs">
                {form.formState.errors.workExperiences[index]?.endDate?.message}
              </p>
            )}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id={`currentJob-${index}`}
          checked={form.watch(`workExperiences.${index}.currentJob`)}
          onCheckedChange={(checked) => {
            form.setValue(
              `workExperiences.${index}.currentJob`,
              checked === true
            );
            if (checked) {
              form.setValue(`workExperiences.${index}.endDate`, '');
            }
          }}
        />
        <Label htmlFor={`currentJob-${index}`}>I currently work here</Label>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`description-${index}`}>Description</Label>
        <Textarea
          id={`description-${index}`}
          placeholder="Describe your responsibilities and achievements"
          className="min-h-[120px]"
          {...form.register(`workExperiences.${index}.description`)}
        />
        {form.formState.errors.workExperiences?.[index]?.description && (
          <p className="text-red-500 text-xs">
            {form.formState.errors.workExperiences[index]?.description?.message}
          </p>
        )}
      </div>
    </div>
  );
}
