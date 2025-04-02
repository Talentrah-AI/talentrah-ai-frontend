'use client';

import { FormInputField } from "./FormInputField";
import { AppForm, getWorkExperienceFieldName } from "../shadcnFolder/props/types";

interface JobTitleStateFieldsProps {
    form: AppForm;
    index?: number;
}

export const JobTitleStateField = ({ form, index = 0 }: JobTitleStateFieldsProps) => {
    return (
        <div className="lg:grid grid-cols-2 gap-4">
            <FormInputField
                form={form}
                field={{
                    name: getWorkExperienceFieldName(index, 'jobtitle'),
                    placeholder: "Enter job title",
                    type: "text",
                    label: "Job Title",
                    required: true
                }}
            />

            <FormInputField
                form={form}
                field={{
                    name: getWorkExperienceFieldName(index, 'state'),
                    placeholder: "Enter state",
                    type: "text",
                    label: "State",
                    required: true
                }}
            />
        </div>
    );
};