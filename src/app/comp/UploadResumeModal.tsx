'use client';

import { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface UploadResumeModalProps {
    onFileSelect?: (file: File) => void;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onContinue: () => void;
}

export function UploadResumeModal({ onFileSelect, open, onOpenChange, onContinue }: UploadResumeModalProps) {
    const [file, setFile] = useState<File | null>(null);
    const [progress, setProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const selectedFile = event.target.files[0];
            setFile(selectedFile);
            startUploadProgress();

            if (onFileSelect) {
                onFileSelect(selectedFile);
            }
        }
    };

    const startUploadProgress = () => {
        setIsUploading(true);
        setProgress(0);

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsUploading(false);
                    return 100;
                }
                return prev + 10;
            });
        }, 500);
    };

    const handleClose = () => {
        setFile(null);
        setProgress(0);
        setIsUploading(false);
        onOpenChange(false);
    };

    const handleContinue = () => {
        if (file) {
            onOpenChange(false); // Close this modal
            onContinue(); // Open the next modal
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-lg border shadow-lg">
                <DialogHeader className="px-6 pt-6 pb-0">
                    <DialogTitle className="text-lg font-semibold">Upload CV/Resume</DialogTitle>
                    <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </DialogClose>
                </DialogHeader>

                <div className="p-6 space-y-4">
                    <div className="border-2 border-dashed rounded-lg p-8 text-center">
                        <input
                            type="file"
                            id="resume-upload"
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                        />
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                                <Plus className="w-6 h-6 text-gray-400" />
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Drag and drop or upload from your computer</p>
                        <Button
                            variant="outline"
                            className="mx-auto"
                            onClick={() => document.getElementById('resume-upload')?.click()}
                        >
                            Browse Your Computer
                        </Button>
                    </div>

                    <p className="text-xs text-gray-500">Accepted file types: PDF, DOC, DOCX (max 5MB)</p>

                    {isUploading && (
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                            <div
                                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    )}

                    {file && (
                        <div className="bg-gray-50 p-3 rounded-md mb-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <button onClick={handleClose} className="text-red-500 hover:text-red-600">
                                        <Trash2 size={18} />
                                    </button>
                                    <span className="text-sm text-gray-700">
                                        {file.name.length > 20 ? `${file.name.substring(0, 17)}...` : file.name}
                                    </span>
                                </div>
                                <div className="text-sm text-gray-500">
                                    <span>{progress < 100 ? 'In progress' : 'Complete'}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flex gap-4 mt-6">
                        <Button variant="outline" className="flex-1" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button
                            variant="default"
                            className="flex-1 bg-blue-500 hover:bg-blue-600"
                            onClick={handleContinue}
                            disabled={!file}
                        >
                            Continue
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}