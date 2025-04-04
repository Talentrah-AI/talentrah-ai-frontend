'use client';

import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import { UpLoadCvImage } from './UploadCvImage';
import { DeleteResume } from './DeleteResume';
import { EditResumeInfo } from './EditResumeInfo';

type ResumeModalProps = {
  title: string;
  lastUpdated: Date;
  created: Date;
  category: string;
  imageUrl: string;
  isOptimized?: boolean;
  isDefault?: boolean;
};

export function ResumeModal({
  title,
  lastUpdated,
  created,
  category,
  imageUrl,
  isOptimized = false,
  isDefault = false,
}: ResumeModalProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [close, setClose] = useState(false);

  const menuOptions = [
    { label: 'View resume' },
    { label: 'Edit resume info' },
    { label: 'Download' },
    { label: 'Delete' },
  ];

  const handleAction = (action: string) => {
    setIsMenuOpen(false);
    if (action === 'View resume') {
      setIsModalOpen(true);
    }
    if (action === 'Edit resume info') {
      setEdit(true);
    }
    if (action === 'Delete') {
      setClose(true);
    }
  };

  return (
    <div className="resume-card rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium">{title}</h3>
            {isDefault && (
              <span className="px-2 py-1 text-xs rounded-full bg-[#e6fafb] text-[#126165]">
                Default
              </span>
            )}
            {isOptimized && (
              <span className="px-2 py-1 text-xs rounded-full text-blue-600 bg-blue-100">
                AI optimized
              </span>
            )}
          </div>

          <div className="text-sm text-gray-600 mt-2">
            <span>Last updated: {lastUpdated.toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>Created: {created.toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{category}</span>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1.5 rounded-full hover:bg-gray-100 cursor-pointer "
          >
            <MoreVertical size={20} className="text-gray-500" />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10 cursor-pointer">
              {menuOptions.map((option) => (
                <button
                  key={option.label}
                  onClick={() => handleAction(option.label)}
                  className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 hover:bg-gray-50 cursor-pointer `}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <UpLoadCvImage
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={imageUrl}
      />
      <EditResumeInfo open={edit} onOpenChange={setEdit} />
      <DeleteResume open={close} onOpenChange={setClose} />
    </div>
  );
}
