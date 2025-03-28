"use client";

import { cn } from "@/lib/utils";

interface CheckboxGroupProps {
  options: {
    id: string;
    label: string;
  }[];
  name: string;
  className?: string;
}

export function CheckboxGroup({ options, name, className }: CheckboxGroupProps) {
  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      {options.map((option) => (
        <label
          key={option.id}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name={name}
            value={option.id}
            className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
}