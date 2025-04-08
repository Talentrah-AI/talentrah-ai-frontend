// src/components/JobDetailsModal.tsx
"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

interface JobDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
    company: string;
}

export function JobDetailsModal({ isOpen, onClose }: JobDetailsModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[649px] h-[628px] p-6 bg-white rounded-[12px] shadow-lg">
                <DialogHeader className="flex flex-row items-center justify-between">
                    <DialogTitle className="font-gabarito font-normal text-[20px] text-[#08121D]">
                        Job details
                    </DialogTitle>
                </DialogHeader>
                <div className="mt-0 space-y-5">
                    {/* Job Description */}
                    <p className="font-gabarito font-normal text-[12px] leading-[16px] text-[#414A53]">
                        The position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability. You will also contribute to the development of design systems, ensuring consistency and scalability across digital products.
                    </p>
                    <p className="font-gabarito font-normal text-[12px] leading-[16px] text-[#414A53]">
                        <strong>Salary: #500,000</strong> 
                    </p>

                    {/* Divider */}
                    <div className="border-t border-gray-300 w-3/4 mr-auto my-4 opacity-50"></div>

                    {/* Job Responsibilities */}
                    <div>
                        <h3 className="font-gabarito font-normal text-[16px] text-[#08121D] mb-2">
                            Job Responsibilities:
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Design user-friendly interfaces for web and mobile applications.",
                                "Conduct user research and usability testing to improve designs.",
                                "Conduct user research and usability testing to improve designs.",
                                "Collaborate with developers to ensure pixel-perfect implementation.",
                            ].map((responsibility, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="w-4 h-4 bg-[#22C55E] rounded-full flex items-center justify-center text-white text-[10px]">
                                        ✓
                                    </span>
                                    <span className="font-gabarito font-normal text-[12px] text-[#414A53]">
                                        {responsibility}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Divider */}
                    <div className="border-t border-gray-300 w-3/4 mr-auto my-4 opacity-50"></div>


                    {/* Required Skills */}
                    <div>
                        <h3 className="font-gabarito font-normal text-[16px] text-[#08121D] mb-2">
                            Required Skills:
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Proficiency in Figma, Sketch, or Adobe XD.",
                                "Proficiency in Figma, Sketch, or Adobe XD.",
                                "Strong understanding of UX principles and accessibility.",
                                "Strong understanding of UX principles and accessibility.",
                                "Experience working in Agile environments.",
                            ].map((skill, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="w-4 h-4 bg-[#22C55E] rounded-full flex items-center justify-center text-white text-[10px]">
                                        ✓
                                    </span>
                                    <span className="font-gabarito font-normal text-[12px] text-[#414A53]">
                                        {skill}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Deadline */}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/calendar.svg"
                            alt="Calendar"
                            width={14}
                            height={14}
                            className="inline-block align-middle"
                            priority
                        />
                        <p className="font-gabarito font-normal text-[12px] leading-none text-[#414A53] m-0">
                            <strong>DEADLINE: 06 - Feb - 2025</strong> 
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}