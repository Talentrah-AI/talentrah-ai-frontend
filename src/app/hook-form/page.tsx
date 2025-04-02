
'use client';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { FormValues, Field } from "../shadcnFolder/userForm/type";

interface GenericFormProps {
    form: UseFormReturn<FormValues>;
    field: Field;
}

export default function GenericForm({ form, field }: GenericFormProps) {
    return (
        <FormField
            control={form.control}
            name={field.name}
            render={({ field: inputField }) => (
                <FormItem>
                    <div>
                        <FormLabel>{field.label}</FormLabel>
                    </div>
                    <FormControl>
                        <div className={`relative`}>
                            <Input
                                type={field.type}
                                placeholder={field.placeholder}
                                {...inputField}
                                className={`text-black h-10 ${field.name === 'address' ? 'lg:w-[204%]' : ''}`}
                            />
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}