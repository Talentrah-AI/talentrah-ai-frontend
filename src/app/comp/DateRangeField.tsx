'use client';

import { FormInputField } from "./FormInputField";

interface DateRangeFieldsProps {
    form: any;
    index?: number;
}

export const DateRangeField = ({ form, index = 0 }: DateRangeFieldsProps) => {
    const prefix = index !== undefined ? `workExperiences.${index}.` : '';
    const isCurrentJob = form.watch(`${prefix}currentJob`);

    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <FormInputField
                    form={form}
                    field={{
                        name: `${prefix}startDate`,
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
                        name: `${prefix}endDate`,
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
