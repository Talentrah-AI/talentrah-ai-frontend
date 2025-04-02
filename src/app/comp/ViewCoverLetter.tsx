'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import coverLetters from '../shadcnFolder/coverLetter/letter';

interface CoverLetterProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function ViewCoverLetter({ open, onOpenChange }: CoverLetterProps) {

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md p-6 rounded-lg shadow-lg">
                <DialogHeader className='flex justify-between'>
                    <DialogTitle className="text-lg font-semibold">Cover letter</DialogTitle>
                    <DialogClose className="absolute right-4 top-4">
                        <span className="sr-only">Close</span>
                    </DialogClose>
                </DialogHeader>
                <div className='flex justify-between bg-[#0967D2] text-white text-[13px] px-3 py-2 rounded-[12px]'>
                    <div>
                        {coverLetters[0].category}
                    </div>
                    <div>
                        <span>Created:</span>
                        {coverLetters[0].createdAt.toLocaleDateString()}
                    </div>
                </div>

                <div className='flex justify-end '>
                    <Button className='h-8 border ' variant="ghost">Copy</Button>
                </div>

                <div className='h-[50vh] overflow-y-auto no-scroll'>
                    <div className='text-xs'>
                        <p>Dear Hiring Manager,</p>

                        <p className='mt-3'>
                            I am writing to express my interest in the Product Designer position at your company, as advertised.
                            With a background in creating intuitive user interfaces for web and mobile applications,
                            I am excited about the opportunity to contribute my skills and knowledge to your team.
                        </p>

                        <p>
                            In my current role at ProDews, I have successfully collaborated with cross-functional teams to deliver exceptional designs that prioritize user experience and drive business success.
                            I have also actively contributed to the development of the company&apos;s design system, ensuring consistency and scalability across multiple projects.
                        </p>

                        <p>
                            With a Bachelor&apos;s degree in Applied Science and certifications in Product, I believe I have the qualifications and expertise to excel in this role.
                            I am proficient in industry-standard tools such as Figma and have a deep passion for creating seamless products that elevate user satisfaction.
                        </p>

                        <p>
                            I am confident that my skills and experience make me a strong candidate for this position. I am eager to bring my creative vision and problem-solving abilities
                            to your team and contribute to the success of your projects. Thank you for considering my application.
                        </p>

                        <p className='mt-3'>Sincerely,</p>

                        <p>Meere Dan</p>
                    </div>

                </div>

                <div className="mt-6 flex gap-4">
                    <Button variant="ghost" className="flex-1 cursor-pointer" onClick={() => onOpenChange(false)}>Cancel</Button>
                    <Button variant="ghost" className="flex-1 bg-[#0967D2] cursor-pointer text-white ">Download</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
