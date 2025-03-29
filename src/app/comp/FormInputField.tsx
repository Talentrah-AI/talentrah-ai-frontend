
'use client';

import { useState } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FieldProps {
    name: string;
    placeholder: string;
    type: string;
    label: string;
    required?: boolean;
}

interface FormInputFieldProps {
    form: any;
    field: FieldProps;
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
                        <FormLabel className="text-sm font-medium">
                            {field.label} 
                        </FormLabel>
                        {isFocused && <span className="text-xs text-gray-400">{field.required ? 'Required' : 'Optional'}</span>}
                    </div>
                    <FormControl>
                        <Input
                            placeholder={field.placeholder}
                            {...formField}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => {
                                setIsFocused(false);
                                formField.onBlur();
                            }}
                            className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                </FormItem>
            )}
        />
    );
};
