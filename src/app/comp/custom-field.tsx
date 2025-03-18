'use client';

export interface CustomField {
    name: string;
    type: string;
    label: string;
    placeholder: string;
    required: boolean;
    unique: boolean;
    value?: string;
}

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useFormContext } from "react-hook-form";

interface AdditionalFieldsProps {
    onCustomFieldsChange?: (fields: CustomField[]) => void;
}

export function AdditionalFields({ onCustomFieldsChange }: AdditionalFieldsProps) {
    const [customFields, setCustomFields] = useState<CustomField[]>([]);
    const form = useFormContext();

    const addCustomField = () => {
        const newField: CustomField = {
            name: ``,
            type: "text",
            label: "Custom Field",
            placeholder: "Enter value",
            required: false,
            unique: false,
            value: ""
        };

        const updatedFields = [...customFields, newField];
        setCustomFields(updatedFields);

        // Register the new field with react-hook-form
        form.register(`customFields.${newField.name}`);

        // Notify parent component
        if (onCustomFieldsChange) {
            onCustomFieldsChange(updatedFields);
        }
    };

    const handleCustomFieldValueChange = (name: string, value: string) => {
        const updatedFields = customFields.map(field =>
            field.name === name ? { ...field, value } : field
        );

        setCustomFields(updatedFields);
        form.setValue(`customFields.${name}`, value);

        // Notify parent component
        if (onCustomFieldsChange) {
            onCustomFieldsChange(updatedFields);
        }
    };

    const removeCustomField = (name: string) => {
        const updatedFields = customFields.filter(field => field.name !== name);
        setCustomFields(updatedFields);

        // Unregister the field from react-hook-form
        form.unregister(`customFields.${name}`);

        // Notify parent component
        if (onCustomFieldsChange) {
            onCustomFieldsChange(updatedFields);
        }
    };

    return (
        <div className="space-y-4 mt-6">
            {customFields.length > 0 && (
                <div className="pt-3 pb-1 border-t border-gray-100">
                    <h3 className="text-sm font-medium text-gray-500 mb-4">Custom Fields</h3>

                    <div className="space-y-4">
                        {customFields.map((field, index) => (
                            <div key={field.name} className="space-y-2">
                                <div className="relative bg-white p-4 rounded-lg border border-gray-100 shadow-sm mb-2">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="font-medium text-gray-800">{field.label}</div>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                                            onClick={() => removeCustomField(field.name)}
                                        >
                                            <span className="sr-only">Remove field</span>
                                            ×
                                        </Button>
                                    </div>

                                    <Input
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        value={field.value || ""}
                                        className="bg-white border-gray-200"
                                        {...form.register(`customFields.${field.name}`)}
                                        onChange={(e) => handleCustomFieldValueChange(field.name, e.target.value)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <button
                type="button"
                onClick={addCustomField}
                className="w-full py-3 px-4 border-2 border-dashed border-blue-200 rounded-lg text-blue-600 hover:bg-blue-50 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-200 flex items-center justify-center space-x-2"
            >
                <PlusIcon size={18} />
                <span className="font-medium">Add custom fields</span>
            </button>
        </div>
    );
}