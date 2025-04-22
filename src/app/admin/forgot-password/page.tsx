"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, EyeOff, Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function AdminLoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Mock credentials check
        if (email === "admin@example.com" && password === "password") {
            // Set mock admin cookie
            document.cookie = "mockAdmin=true; path=/; max-age=3600"; // Expires in 1 hour
            router.push("/admin");
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: "#0752A8" }}>
            {/* Background image */}
            <img
                src="/Rectangle.png"
                alt="Decorative background"
                className="absolute bottom-0 w-full object-cover z-0 pointer-events-none"
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

                {/* Login box */}
                <div className="w-full max-w-[558px] max-h-[369.76px] bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                    <div className="mb-3 text-center">
                        <Image
                            src="/Logo (1).png"
                            alt="Talentra"
                            width={116}
                            height={58}
                            priority
                        />
                    </div>
                    <h2 className="text-2xl font-medium text-center mt-0 mb-1">Forgot password?</h2>
                    <p className="text-sm text-gray-500 mb-8 text-center">
                        Enter your email below, and we&apos;ll send you a link to reset it.
                    </p>

                    {/* Login form */}
                    <form className="w-full space-y-6" onSubmit={handleSubmit}>
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

                        {/* Error and submit */}
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <Button
                            type="submit"
                            className="w-full py-3 bg-[#E6F0FD] hover:bg-[#D6E6FA] text-primary"
                        >
                            Reset password
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    );
}