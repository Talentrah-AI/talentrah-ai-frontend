
'use client';

import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

interface CurrentJobCheckboxProps {
    form: any;
    index?: number;
}

export const CurrentJobCheckbox = ({ form, index = 0 }: CurrentJobCheckboxProps) => {
    const prefix = index !== undefined ? `workExperiences.${index}.` : '';

    return (
        <FormField
            control={form.control}
            name={`${prefix}currentJob`}
            render={({ field }) => (
                <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                        <Checkbox
                            checked={field.value}
                            onCheckedChange={(checked) => {
                                field.onChange(checked);
                                if (checked) {
                                    form.setValue(`${prefix}endDate`, '', { shouldValidate: true });
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
