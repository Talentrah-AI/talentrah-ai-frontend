'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import coverLetters from '../shadcnFolder/coverLetter/letter';

interface RenameTitleProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function RenameCoverLetter({ open, onOpenChange }: RenameTitleProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md p-6 rounded-lg shadow-lg">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold">Resume cover letter</DialogTitle>
                    <DialogClose className="absolute right-4 top-4">
                        <span className="sr-only">Close</span>
                    </DialogClose>
                </DialogHeader>
                <div className=''>
                    <label className='text-[14px]' htmlFor="">Title</label>
                    <Input className='text-[13px] mt-3' placeholder={coverLetters[3].topic} />
                </div>
                <div className="mt- flex gap-4">
                    <Button variant="outline" className="flex-1 cursor-pointer " onClick={() => onOpenChange(false)}>Cancel</Button>
                    <Button variant="ghost" className="flex-1 bg-[#0967D2] cursor-pointer text-white ">Save</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
