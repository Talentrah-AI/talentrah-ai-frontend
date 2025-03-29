'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface EditModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function EditResumeInfo({ open, onOpenChange }: EditModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md p-6 rounded-lg ">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold">Edit resume info</DialogTitle>
                    <DialogClose className="absolute right-4 top-4 cursor-pointer">
                        <span className="sr-only cursor-pointer">Close</span>
                    </DialogClose>
                </DialogHeader>
                <div className='flex flex-col'>
                    <label className='text-[14px]' htmlFor="">Target job title</label>
                    <Input className='text-[13px] mt-2' placeholder='Enter your targeted job title' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-[14px]' htmlFor="">Name your resume</label>
                    <Input className='text-[13px] mt-2' placeholder='e.g John-Doe-Resume' />
                </div>
                <div className="mt-6 flex gap-4">
                    <Button variant="outline" className="flex-1 cursor-pointer" onClick={() => onOpenChange(false)}>Cancel</Button>
                    <Button variant="outline" className="flex-1 bg-blue-500 text-white cursor-pointer">Save changes</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
