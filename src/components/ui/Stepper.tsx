"use client";

import { cn } from "@/lib/utils";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div
            className={cn(
              "flex items-center justify-center w-6 h-6 rounded-full text-xs",
              index + 1 <= currentStep
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-500"
            )}
          >
            {index + 1}
          </div>
          <span className="ml-2 text-sm text-gray-600">{step}</span>
          {index < steps.length - 1 && (
            <div
              className={cn(
                "h-[2px] w-16 mx-2",
                index + 1 < currentStep ? "bg-blue-500" : "bg-gray-200"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}