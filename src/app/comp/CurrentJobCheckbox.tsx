'use client';

import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { AppForm } from "../shadcnFolder/props/types";

interface CurrentJobCheckboxProps {
    form: AppForm;
    index: number; // Changed from optional to required since it's always provided
}

export const CurrentJobCheckbox = ({ form, index }: CurrentJobCheckboxProps) => {
    // Explicitly type the field name
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
                            checked={field.value as boolean} // Explicitly type as boolean
                            onCheckedChange={(checked: boolean) => {
                                field.onChange(checked);
                                if (checked) {
                                    form.setValue(endDateFieldName, '', { shouldValidate: true });
                                }
                            }}
                        />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">I currently work here</FormLabel>
                </FormItem>
            )}
        />
    );
};