'use client';

import React from 'react';
import { X, Plus, Upload } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface CreateResumeModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onCreateFromScratch: () => void;
    onUploadResume: () => void;
}

export function CreateResumeModal({
    open,
    onOpenChange,
    onCreateFromScratch,
    onUploadResume,
}: CreateResumeModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-lg border shadow-lg cursor-pointer">
                <DialogHeader className="px-6 pt-6 pb-0 ">
                    <DialogTitle className="text-lg font-semibold">
                        How do you want to create your resume?
                    </DialogTitle>
                    <DialogClose className=" cursor-pointer  absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                        <X className="h-4 w-4 cursor-pointer " />
                        <span className="sr-only">Close</span>
                    </DialogClose>
                </DialogHeader>

                <div className="p-6 space-y-4">
                    <p className="text-sm text-gray-600 text-[12.5px]">
                        Start fresh or upload an existing resume, we'll guide you step-by-step to create a polished, professional resume tailored to your goals.
                    </p>

                    <Button
                        variant="outline"
                        className="w-full justify-center border-blue-100 hover:bg-blue-50 hover:text-blue-600 cursor-pointer "
                        onClick={onCreateFromScratch}
                    >
                        <Plus className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="text-blue-500 font-medium">Create from scratch</span>
                    </Button>

                    <Button
                        variant="outline"
                        className="w-full justify-center border-blue-100 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                        onClick={onUploadResume}
                    >
                        <Upload className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="text-blue-500 font-medium">Upload existing resume</span>
                    </Button>

                    <div className="bg-green-50 rounded-md p-4 flex items-start">
                        <div className="text-green-500 mt-0.5 mr-2">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="currentColor" />
                                <path d="M10 8.5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="10" cy="6" r="1" fill="currentColor" />
                            </svg>
                        </div>
                        <p className="text-xs text-green-700">
                            Whichever option you choose, we'll provide access to expertly designed templates to help you craft the perfect resume.
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
