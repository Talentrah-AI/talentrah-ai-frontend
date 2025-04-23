"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, EyeOff, Globe, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLoginPage() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Password don't match. Please try again.");
            return;
        }

        setError(""); // Clear error if matched
        // Proceed with form submission logic
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-[#0752A8]">
            {/* Background image */}
            <img
                src="/Rectangle.png"
                alt="Decorative background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />


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
                <div className="w-full max-w-[558px] max-h-[546.76px] bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                    <div className="mb-3 text-center">
                        <Image
                            src="/Logo (1).png"
                            alt="Talentra"
                            width={116}
                            height={58}
                            priority
                        />
                    </div>
                    <h2 className="text-2xl font-medium text-center mt-0 mb-1">Reset password</h2>
                    <p className="text-sm text-gray-500 mb-0 text-center">
                        Enter your new password below to secure your account.
                    </p>
                    <p className="text-sm text-gray-500 mb-8 text-center">
                        Make sure it&apos;s strong and easy to remember!
                    </p>

                    {/* Form */}
                    <form className="w-full space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            {/* New Password */}
                            <div>
                                <label htmlFor="new-password" className="block text-sm font-medium">
                                    Enter new Password
                                </label>
                                <div className="relative">
                                    <Input
                                        id="new-password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="************"
                                        className="w-full max-w-[510px] h-[50px] rounded-lg border border-gray-300"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label htmlFor="confirm-password" className="block text-sm font-medium">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <Input
                                        id="confirm-password"
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="************"
                                        className="w-full max-w-[510px] h-[50px] rounded-lg border border-gray-300"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                                {error && (
                                    <p className="text-red-500 text-sm mt-2">{error}</p>
                                )}
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full py-3 bg-[#CEE1F6] hover:bg-[#D6E6FA] text-primary"
                        >
                            Reset password
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    );
}
