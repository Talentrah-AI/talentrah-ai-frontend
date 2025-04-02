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
import {
    UseFormReturn,
    Path,
    Control,
    FieldValues,
    FieldPath,
    FieldError,
    ControllerRenderProps,
} from "react-hook-form";
import { useState } from "react";
import { WorkExperienceFormValues } from "../shadcnFolder/props/types";

// Base field configuration
interface FieldConfig<T extends FieldValues> {
    name: Path<T>;
    placeholder: string;
    type: string;
    label: string;
    required?: boolean;
}

// Form field props
interface FormFieldProps<T extends FieldValues> {
    form: UseFormReturn<T>;
    field: FieldConfig<T>;
    isGrouped?: boolean;
}

// Type-safe FormField wrapper props
interface TypeSafeFormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: FieldPath<T>;
    render: (props: {
        field: ControllerRenderProps<T, FieldPath<T>>;
        fieldState: {
            error?: FieldError;
        };
    }) => React.ReactElement;
}

// Type-safe FormField wrapper
const TypeSafeFormField = <T extends FieldValues>({
    control,
    name,
    render,
}: TypeSafeFormFieldProps<T>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field, fieldState }) => render({ field, fieldState })}
        />
    );
};

// Generic Input Field
export function FormInputField<T extends FieldValues>({
    form,
    field,
    isGrouped = false
}: FormFieldProps<T>) {
    return (
        <TypeSafeFormField
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

// Date Picker Field props
interface DatePickerFieldProps<T extends FieldValues> {
    form: UseFormReturn<T>;
    fieldName: FieldPath<T>;
    label: string;
    placeholder: string;
}

// Date Picker Field
export function DatePickerField<T extends FieldValues>({
    form,
    fieldName,
    label,
    placeholder
}: DatePickerFieldProps<T>) {
    return (
        <TypeSafeFormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
                <FormItem className="flex-1">
                    <FormLabel className="text-sm font-medium text-gray-700">
                        {label}
                        <span className="text-red-500 ml-1">*</span>
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
                                        field.value === "Present" ? "Present" : format(new Date(field.value as string), "MMM dd, yyyy")
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
                                selected={field.value && field.value !== "Present" ? new Date(field.value as string) : undefined}
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

// Work Experience Field Props
interface WorkExperienceFieldProps {
    form: UseFormReturn<WorkExperienceFormValues>;
    index?: number;
}

// Job Title and State Fields
export function JobTitleStateFields({ form, index = 0 }: WorkExperienceFieldProps) {
    return (
        <div className="flex gap-4 w-full">
            <FormInputField<WorkExperienceFormValues>
                form={form}
                field={{
                    name: `workExperiences.${index}.jobtitle`,
                    placeholder: "Enter job title",
                    type: "text",
                    label: "Job Title",
                    required: true
                }}
                isGrouped={true}
            />
            <FormInputField<WorkExperienceFormValues>
                form={form}
                field={{
                    name: `workExperiences.${index}.state`,
                    placeholder: "Enter state",
                    type: "text",
                    label: "State",
                    required: false
                }}
                isGrouped={true}
            />
        </div>
    );
}

// Date Range Fields
export function DateRangeFields({ form, index = 0 }: WorkExperienceFieldProps) {
    return (
        <div className="flex gap-4 w-full">
            <DatePickerField<WorkExperienceFormValues>
                form={form}
                fieldName={`workExperiences.${index}.startDate`}
                label="From"
                placeholder="Choose date"
            />
            <DatePickerField<WorkExperienceFormValues>
                form={form}
                fieldName={`workExperiences.${index}.endDate`}
                label="To"
                placeholder="Choose date"
            />
        </div>
    );
}

// Current Job Checkbox
export function CurrentJobCheckbox({ form, index = 0 }: WorkExperienceFieldProps) {
    const [isCurrentJob, setIsCurrentJob] = useState(false);

    const handleCheckboxChange = (checked: boolean) => {
        setIsCurrentJob(checked);
        if (checked) {
            form.setValue(`workExperiences.${index}.endDate`, "Present");
        } else {
            form.setValue(`workExperiences.${index}.endDate`, "");
        }
    };

    return (
        <div className="flex items-center space-x-2 mt-2">
            <Checkbox
                id={`currentJob-${index}`}
                checked={isCurrentJob}
                onCheckedChange={handleCheckboxChange}
            />
            <label
                htmlFor={`currentJob-${index}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                I currently work here
            </label>
        </div>
    );
}

// Submit Button
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