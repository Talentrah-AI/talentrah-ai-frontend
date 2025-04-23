"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, ChevronDown, Mail } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EmailSentPage() {
    const router = useRouter();
    const userEmail = "JaneDoe@gmail.com"; // This would typically come from state or URL params

    const handleResendEmail = () => {
        // Logic to resend email would go here
        console.log("Resending email to", userEmail);
    };

    const handleChangeEmail = () => {
        router.push("/admin/forgot-password");
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-[#0752A8]">
            {/* Background image */}
            <img
                src="/Rectangle.png"
                alt="Decorative background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />


            {/* Overlapping blue color */}
            <div className="absolute bottom-0 w-full" />

            {/* Page Content */}
            <section className="relative z-20 flex flex-col justify-center items-center min-h-screen px-4">
                {/* Language switcher */}
                <div className="absolute top-4 right-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="bg-white rounded-full px-4 py-2 flex items-center gap-2 text-sm font-normal text-gray-500"
                    >
                        <Globe className="h-4 w-4 text-gray-500" />
                        <span>English</span>
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                    </Button>
                </div>

                {/* Email Sent box */}
                <div className="w-full max-w-[558px] max-h-[472px] bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                    <div className="mb-0 text-center">
                        <Image
                            src="/Logo (1).png"
                            alt="Talentrah"
                            width={100}
                            height={50}
                            priority
                        />
                    </div>

                    <div className="w-full max-w-[510px] max-h-[356px] bg-white border border-gray-200 rounded-md p-2 shadow-sm">

                        {/* Email icon */}
                        <div className="my-0 p-0">
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/EmptyState.svg"
                                    alt="Talentrah"
                                    width={200}
                                    height={65}
                                    priority
                                />
                            </div>
                        </div>

                        <h2 className="text-2xl font-medium text-center mt-0 mb-3">Email Sent</h2>
                        <p className="text-sm text-gray-500 mb-8 text-center max-w-md">
                            We have sent you an email at <span className="font-medium text-black">{userEmail}</span>.
                            Check your inbox and follow instructions to reset your password.
                        </p>

                        {/* Action links */}
                        <div className="w-full space-y-2 flex flex-col items-center">
                            {/* First Line: Text + Button */}
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <p>Did not receive the email?</p>
                                <button
                                    onClick={handleResendEmail}
                                    className="text-primary hover:underline font-medium"
                                >
                                    Resend Email
                                </button>
                            </div>

                            {/* Second Line: Text + Button */}
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <p>Wrong email?</p>
                                <button
                                    onClick={handleChangeEmail}
                                    className="text-primary hover:underline font-medium"
                                >
                                    Change Email Address
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
