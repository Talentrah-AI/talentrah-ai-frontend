"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, ChevronDown, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

export default function CreateAccountPage() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("+234");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would validate and submit the form data
        // For now, just navigate to the next step
        router.push("/admin/register/step2");
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

                {/* Registration box */}
                <div className="w-full max-w-[558px] max-h-[620.76px] bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                    {/* Progress indicator */}
                    <div className="flex items-center mb-0 gap-2">
                        {/* Filled progress bar */}
                        <div className="w-[251px] h-[9px] rounded-full overflow-hidden">
                            <div
                                className="h-full"
                                style={{
                                    width: '100%',
                                    background: 'linear-gradient(to left, #09CBD2, #0967D2)',
                                }}
                            ></div>
                        </div>

                        {/* Empty progress bar (gray outline) */}
                        <div className="w-[251px] h-[9px] rounded-full bg-gray-200 border border-gray-200"></div>
                    </div>



                    <div className="mb-3 mt-3 text-center">
                        <Image
                            src="/Logo (1).png"
                            alt="Talentrah"
                            width={100}
                            height={50}
                            priority
                        />
                    </div>
                    <h2 className="text-2xl font-medium text-center mt-0 mb-1">Create account</h2>
                    <p className="text-sm text-gray-500 mb-8 text-center">
                        Stay in control with powerful admin tools.
                    </p>

                    {/* Registration form */}
                    <form className="w-full space-y-6" onSubmit={handleSubmit}>
                        {/* Full Name field */}
                        <div className="space-y-2">
                            <label htmlFor="fullName" className="block text-sm font-medium">
                                Full name
                            </label>
                            <Input
                                id="fullName"
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full max-w-[510px] h-[50px] rounded-lg border border-gray-300"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>

                        {/* Email field */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email Address
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full max-w-[510px] h-[50px] rounded-lg border border-gray-300"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Phone Number field */}
                        <div className="space-y-2">
                            <label htmlFor="phoneNumber" className="block text-sm font-medium">
                                Phone number
                            </label>
                            <div className="flex items-center w-full max-w-[510px] h-[50px] rounded-[8px] border border-gray-300 overflow-hidden bg-white text-gray-400 px-3">
                                <div className="flex items-center gap-1 text-sm">
                                    <select
                                        value={countryCode}
                                        onChange={(e) => setCountryCode(e.target.value)}
                                        className="bg-transparent appearance-none pr-4 text-gray-400 focus:outline-none"
                                    >
                                        <option value="+234">+234</option>
                                        <option value="+1">+1</option>
                                        <option value="+44">+44</option>
                                        <option value="+91">+91</option>
                                    </select>
                                    <ChevronDown className="w-4 h-4" />
                                </div>

                                <span className="mx-2 text-gray-500">|</span>

                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    placeholder="8066518279"
                                    className="flex-1 bg-transparent text-sm text-black placeholder-gray-500 focus:outline-none"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                        </div>


                        {/* Submit button */}
                        <Button
                            type="submit"
                            className="w-full py-3 bg-[#CEE1F6] hover:bg-[#D6E6FA] text-primary flex items-center justify-center gap-2"
                        >
                            <span>Next</span>
                        </Button>
                    </form>

                    {/* Login link */}
                    <div className="mt-4 text-center text-gray-500 text-sm">
                        Already have an account?{" "}
                        <Link href="/admin/login" className="text-primary hover:underline">
                            Login
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
