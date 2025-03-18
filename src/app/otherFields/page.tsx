
'use client';

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";
import { useState } from "react";

interface FieldConfig {
    name: string;
    placeholder: string;
    type: string;
    label: string;
    required?: boolean;
}

interface FormFieldProps {
    form: UseFormReturn<any>;
    field: FieldConfig;
    isGrouped?: boolean;
}

export function DatePickerField({ form, fieldName, label, placeholder }: { form: UseFormReturn<any>; fieldName: string; label: string; placeholder: string }) {
    return (
        <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
                <FormItem className="flex-1">
                    <FormLabel className="text-sm font-medium text-gray-700">
                        {label}
                        {fieldName === "start" || fieldName === "end" ? <span className="text-red-500 ml-1">*</span> : null}
                    </FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    className={cn(
                                        "w-full pl-3 text-left font-normal border border-gray-300 h-10 hover:bg-transparent hover:text-black",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    {field.value ? (
                                        field.value === "Present" ? "Present" : format(new Date(field.value), "MMM dd, yyyy")
                                    ) : (
                                        <span className="text-gray-400">{placeholder}</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 animate-fade-in" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value && field.value !== "Present" ? new Date(field.value) : undefined}
                                onSelect={(date) => field.onChange(date ? format(date, "yyyy-MM-dd") : "")}
                                initialFocus
                                className="rounded-md shadow-lg pointer-events-auto"
                            />
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

export function FormInputField({ form, field, isGrouped = false }: FormFieldProps) {
    return (
        <FormField
            control={form.control}
            name={field.name}
            render={({ field: inputField }) => (
                <FormItem className={isGrouped ? "flex-1" : "w-full"}>
                    <FormLabel className="text-sm font-medium text-gray-700">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                    </FormLabel>
                    <FormControl>
                        <Input
                            className="border border-gray-300 hover:border-gray-400 transition-colors"
                            type={field.type}
                            placeholder={field.placeholder}
                            {...inputField}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

export function FormTextareaField({ form, field }: FormFieldProps) {
    return (
        <FormField
            control={form.control}
            name={field.name}
            render={({ field: textareaField }) => (
                <FormItem className="w-full">
                    <FormLabel className="text-sm font-medium text-gray-700">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                    </FormLabel>
                    <FormControl>
                        <div className="border border-gray-300 rounded-md hover:border-gray-400 transition-colors">
                            <div className="flex border-b border-gray-200 p-1.5 bg-gray-50">
                                <button type="button" className="p-1 text-gray-500 hover:text-gray-700 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z" /></svg>
                                </button>
                                <button type="button" className="p-1 text-gray-500 hover:text-gray-700 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V4h16v3" /><path d="M9 20h6" /><path d="M12 4v16" /></svg>
                                </button>
                                <button type="button" className="p-1 text-gray-500 hover:text-gray-700 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" /></svg>
                                </button>
                                <button type="button" className="p-1 text-gray-500 hover:text-gray-700 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" /><path d="M4 21h16" /></svg>
                                </button>
                                <button type="button" className="p-1 text-gray-500 hover:text-gray-700 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8H3" /><path d="M21 12H3" /><path d="M21 16H3" /></svg>
                                </button>
                                <button type="button" className="p-1 text-gray-500 hover:text-gray-700 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 12H3" /><path d="M16 6H3" /><path d="M16 18H3" /><path d="M21 12h-4" /><path d="M21 6h-4" /><path d="M21 18h-4" /></svg>
                                </button>
                                <button type="button" className="p-1 text-gray-500 hover:text-gray-700 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" /><path d="M17 17h-3.5a2.5 2.5 0 0 1 0-5H20" /><path d="M22 12h-3" /></svg>
                                </button>
                                <button type="button" className="p-1 text-gray-500 hover:text-gray-700 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" x2="4" y1="22" y2="15" /></svg>
                                </button>
                            </div>
                            <textarea
                                className="w-full p-3 h-24 border-0 focus:ring-0 focus:outline-none resize-none"
                                placeholder={field.placeholder}
                                {...textareaField}
                            ></textarea>
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

export function DateRangeFields({ form }: { form: UseFormReturn<any> }) {
    return (
        <div className="flex gap-4 w-full">
            <DatePickerField
                form={form}
                fieldName="startDate"
                label="From"
                placeholder="Choose date"
            />
            <DatePickerField
                form={form}
                fieldName="endDate"
                label="To"
                placeholder="Choose date"
            />
        </div>
    );
}

export function CurrentJobCheckbox({ form }: { form: UseFormReturn<any> }) {
    const [isCurrentJob, setIsCurrentJob] = useState(false);

    const handleCheckboxChange = (checked: boolean | string) => {
        setIsCurrentJob(!!checked);
        if (checked) {
            form.setValue("endDate", "Present");
        } else {
            form.setValue("endDate", "");
        }
    };

    return (
        <div className="flex items-center space-x-2 mt-2">
            <Checkbox
                id="currentJob"
                checked={isCurrentJob}
                onCheckedChange={handleCheckboxChange}
            />
            <label
                htmlFor="currentJob"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                I currently work here
            </label>
        </div>
    );
}

export function JobTitleStateFields({ form }: { form: UseFormReturn<any> }) {
    return (
        <div className="flex gap-4 w-full">
            <FormInputField
                form={form}
                field={{ name: "jobtitle", placeholder: "Enter your job title", type: "text", label: "Job title", required: true }}
                isGrouped={true}
            />
            <FormInputField
                form={form}
                field={{ name: "state", placeholder: "Enter state", type: "text", label: "State", required: false }}
                isGrouped={true}
            />
        </div>
    );
}

export function SubmitButton() {
    return (
        <Button
            type="submit"
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition-colors text-white py-2 px-4 rounded-md"
        >
            Submit Work Experience
        </Button>
    );
}
