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
    const [error, setError] = useState("");
    const router = useRouter();

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Validate inputs
        if (!fullName.trim()) {
            setError("Please enter your full name");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            return;
        }

        if (!phoneNumber.trim()) {
            setError("Please enter your phone number");
            return;
        }

        // Store the data (in a real app, you might use Redux, Context, or localStorage)
        const formData = {
            fullName,
            email,
            phoneNumber: `${countryCode}${phoneNumber}`,
        };

        // You could store the data here if needed
        // localStorage.setItem('registration_step1', JSON.stringify(formData));

        // Navigate to step 2
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
                                className={`w-full max-w-[510px] h-[50px] rounded-lg border ${fullName ? "border-black" : "border-gray-300"
                                    }`}
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
                                className={`w-full max-w-[510px] h-[50px] rounded-lg border ${email ? "border-black" : "border-gray-300"
                                    }`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Phone Number field */}
                        <div className="space-y-2">
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-black">
                                Phone number
                            </label>

                            <div
                                className={`relative flex items-center w-full max-w-[510px] h-[50px] rounded-[8px] px-3 bg-white text-black ${countryCode || phoneNumber ? "border-black" : "border-gray-200"
                                    } border`}
                            >
                                {/* Country code selector and divider */}
                                <div className="relative flex items-center gap-1 text-sm">
                                    <select
                                        value={countryCode}
                                        onChange={(e) => setCountryCode(e.target.value)}
                                        className="bg-transparent appearance-none pr-8 text-black focus:outline-none"
                                    >
                                        <option value="">Code</option>
                                        <option value="+234">+234</option>
                                        <option value="+1">+1</option>
                                        <option value="+44">+44</option>
                                        <option value="+91">+91</option>
                                    </select>

                                    {/* Arrow-down icon (PNG) */}
                                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <Image
                                            src="/arrow-down.png"
                                            alt="Dropdown Arrow"
                                            width={16}
                                            height={16}
                                            className="w-5 h-5 object-contain"
                                        />
                                    </div>

                                    {/* Moved pipe divider to the left */}
                                    <span className="ml-2 text-black">|</span>
                                </div>

                                {/* Phone input */}
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    placeholder="8066518279"
                                    className="flex-1 ml-2 bg-transparent text-sm text-black placeholder-gray-300 focus:outline-none"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                        </div>





                        {/* Submit button */}
                        {error && (
                            <p className="text-red-500 text-sm text-center">{error}</p>
                        )}

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
