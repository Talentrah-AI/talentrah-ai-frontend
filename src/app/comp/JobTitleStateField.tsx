'use client';

import { FormInputField } from "./FormInputField";

interface JobTitleStateFieldsProps {
    form: any;
    index?: number;
}

export const JobTitleStateField = ({ form, index = 0 }: JobTitleStateFieldsProps) => {
    const prefix = index !== undefined ? `workExperiences.${index}.` : '';

    return (
        <div className="lg:grid grid-cols-2 gap-4">
            <FormInputField
                form={form}
                field={{
                    name: `${prefix}jobtitle`,
                    placeholder: "Enter your job role",
                    type: "text",
                    label: "Job title",
                    required: true
                }}
            />
            <FormInputField
                form={form}
                field={{
                    name: `${prefix}state`,
                    placeholder: "Enter state",
                    type: "text",
                    label: "State",
                    required: true
                }}
            />
        </div>
    );
};
