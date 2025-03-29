'use client';

import React, { useState } from "react";
import { MoreVertical } from "lucide-react";
import { ViewCoverLetter } from "./ViewCoverLetter";
import { RenameCoverLetter } from "./RenameCoverLetter";
import { DeleteCoverLetter } from "./DeleteCoverLetter";

type UserCoverLetter = {
    titles: string;
    createdAt: Date;
    category: string;
    // imageUrl: string; 
};

export function UserCoverLetter({
    titles,
    createdAt,
    category,
    // imageUrl,
}: UserCoverLetter) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [rename, setRename] = useState(false);
    const [coverLetters, setCoverLetters] = useState(false);
    const [close, setClose] = useState(false);

    const menuOptions = [
        { label: "View cover letter" },
        { label: "Rename title" },
        { label: "Delete cover letter" }
    ];

    const handleAction = (action: string) => {
        setIsMenuOpen(false);
        if (action === "View cover letter") {
            setCoverLetters(true);
        }
        if (action === "Rename title") {
            setRename(true);
        }
        if (action === "Delete cover letter") {
            setClose(true);
        }
    };

    return (
        <div className="resume-card rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium">{titles}</h3>
                    </div>

                    <div className="text-sm text-gray-600 mt-2">
                        <span className="mx-2">•</span>
                        <span>Created: {createdAt.toLocaleDateString()}</span>
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

            {/* Modal for Viewing Resume */}

            <ViewCoverLetter open={coverLetters} onOpenChange={setCoverLetters} />
            <RenameCoverLetter open={rename} onOpenChange={setRename} />
            <DeleteCoverLetter open={close} onOpenChange={setClose} />
        </div>
    );
}
