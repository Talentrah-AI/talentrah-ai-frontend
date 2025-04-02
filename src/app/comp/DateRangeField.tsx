'use client';

import { FormInputField } from "./FormInputField";
import { AppForm } from "../shadcnFolder/props/types";

interface DateRangeFieldsProps {
    form: AppForm;
    index: number; // Changed from optional to required
}

export const DateRangeField = ({ form, index }: DateRangeFieldsProps) => {
    // Explicitly type the field names
    const currentJobFieldName = `workExperiences.${index}.currentJob` as const;
    const startDateFieldName = `workExperiences.${index}.startDate` as const;
    const endDateFieldName = `workExperiences.${index}.endDate` as const;

    // Watch the currentJob field with proper typing
    const isCurrentJob = form.watch(currentJobFieldName);

    return (
        <div className="lg:grid grid-cols-2 gap-4">
            <div>
                <FormInputField
                    form={form}
                    field={{
                        name: startDateFieldName,
                        placeholder: "Choose date",
                        type: "date",
                        label: "From",
                        required: true
                    }}
                />
            </div>
            <div>
                <FormInputField
                    form={form}
                    field={{
                        name: endDateFieldName,
                        placeholder: "Choose date",
                        type: "date",
                        label: "To",
                        required: !isCurrentJob
                    }}
                />
            </div>
        </div>
    );
};