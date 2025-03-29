'use client';

import React from "react";
import { CloudDownload, X } from 'lucide-react';

type ModalImageCvProps = {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
};

export function UpLoadCvImage({ isOpen, onClose, imageUrl }: ModalImageCvProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop" onClick={onClose} />

            {/* Modal Content - Compact but shows full image */}
            <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full mx-auto">
                {/* Modal Header */}
                <div className="flex justify-between items-center p-3 border-b">
                    <h2 className="text-md font-medium">Resume</h2>
                    <button
                        onClick={onClose}
                        className="p-1 rounded hover:bg-gray-100"
                        aria-label="Close"
                    >
                        <X size={18} className="text-gray-500 cursor-pointer" />
                    </button>
                </div>

                {/* Image Container - Scrollable if needed */}
                <div className="max-h-[70vh] overflow-auto p-2">
                    <img
                        src={imageUrl}
                        alt="Resume preview"
                        className="w-full h-auto rounded-sm"
                        style={{ minWidth: '100%' }} // Prevents image from shrinking
                    />
                </div>

                {/* Modal Footer */}
                <div className="p-2 ">
                    <button

                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-sm font-medium flex justify-center gap-2.5 "
                    >
                        <CloudDownload />
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
}