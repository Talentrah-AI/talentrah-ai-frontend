"use client";

import { useState } from "react";
import { Upload, Plus, FileText, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function ResumeUpload() {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files?.[0]) {
      await handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.[0]) {
      await handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = async (file: File) => {
    setUploading(true);
    setUploadProgress(0);

    // Simulate file upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Upload className="w-6 h-6 text-blue-500" />
          <h1 className="text-xl font-semibold">Upload resume</h1>
        </div>
        <p className="text-gray-600">
          Accepted file types: PDF, DOC, DOCX (no more than 5MB)
        </p>
      </div>

      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-8 transition-colors",
          dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300",
          "relative"
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="resume-upload"
          className="hidden"
          accept=".pdf,.doc,.docx"
          onChange={handleFileSelect}
        />
        <label
          htmlFor="resume-upload"
          className="flex flex-col items-center cursor-pointer"
        >
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Plus className="w-6 h-6 text-gray-600" />
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Drag and drop or upload from your computer
          </p>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <FileText className="w-4 h-4" />
            Browse from Computer
          </button>
          <p className="text-sm text-blue-600 mt-4">Import from LinkedIn</p>
        </label>

        {uploading && (
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-gray-700">Uploading resume...</span>
            </div>
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-200"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-8">
        <p className="text-sm text-gray-600 mb-4">
          Don't have a resume?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Create one manually
          </a>
        </p>

        <div className="flex items-center gap-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
          <span className="text-sm text-gray-700">
            Turn on auto-apply, and AI will submit applications for you based on
            your job preferences—saving you time and effort.
          </span>
        </div>

        <div className="mt-4 p-4 bg-green-50 rounded-lg flex items-start gap-2">
          <Info className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-green-700">
            Your resume is privately stored and shared only when you Apply for jobs.
            You're always in control—with updates or delete it anytime.{" "}
            <a href="#" className="text-green-600 hover:underline">
              Learn More
            </a>
          </div>
        </div>

        <button className="w-full mt-6 bg-blue-100 text-blue-600 py-3 px-4 rounded-md hover:bg-blue-200 transition-colors duration-200">
          Next
        </button>
      </div>
    </div>
  );
}