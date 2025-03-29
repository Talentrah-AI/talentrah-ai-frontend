
'use client';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { EyeOff } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

interface Field {
    name: string;
    placeholder: string;
    type: string;
    label: string;
    required?: boolean;
}

interface GenericFormProps {
    form: UseFormReturn<{ address: string; email: string; firstname: string; lastname: string; phonenumber: string; }, any, undefined>;
    field: Field;
}

export default function GenericForm({ form, field }: GenericFormProps) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <FormField
            control={form.control}
            name={field.name as any}
            render={({ field: inputField }) => (
                <FormItem>
                    <div>
                        <FormLabel>{field.label}</FormLabel>
                        {field.required}
                    </div>
                    <FormControl>
                        <div className={`relative `}>
                            <Input
                                type={field.type === 'password' && showPassword ? 'text' : field.type}
                                placeholder={field.placeholder}
                                {...inputField}

                                className={`text-black h-10 ${field.name === 'address' ? 'lg:w-[204%] h-10' : ''}`}
                            />
                            {field.type === 'password' && (
                                <div
                                    className="absolute inset-y-0 right-0 bg-slate-700 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    <EyeOff />
                                </div>
                            )}

                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}