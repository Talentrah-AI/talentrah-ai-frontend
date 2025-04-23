"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, ChevronDown, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CreateAccountStep2Page() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Validate passwords
        if (password.length < 8) {
            setError("Password must be at least 8 characters long");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // In a real app, you would submit the form data here
        // For now, just redirect to success page or dashboard
        router.push("/admin/dashboard");
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

                {/* Registration box */}
                <div className="w-full max-w-[558px] max-h-[620.76px] bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                    {/* Progress indicator */}
                    <div className="flex w-full items-center mb-0 gap-2">
                        {/* First progress bar (completed) */}
                        <div className="w-[251px] h-[9px] rounded-full overflow-hidden">
                            <div
                                className="h-full w-full"
                                style={{
                                    background: 'linear-gradient(to left, #09CBD2, #0967D2)',
                                }}
                            ></div>
                        </div>

                        {/* Second progress bar (active) */}
                        <div className="w-[251px] h-[9px] rounded-full overflow-hidden">
                            <div
                                className="h-full w-full"
                                style={{
                                    background: 'linear-gradient(to left, #09CBD2, #0967D2)',
                                }}
                            ></div>
                        </div>
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
                        {/* Password field */}
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium">
                                Password
                            </label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="************"
                                    className="w-full max-w-[510px] h-[50px] rounded-lg border border-gray-300 pr-10"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password field */}
                        <div className="space-y-2">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium">
                                Confirm password
                            </label>
                            <div className="relative">
                                <Input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="************"
                                    className="w-full max-w-[510px] h-[50px] rounded-lg border border-gray-300 pr-10"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Error message */}
                        {error && (
                            <p className="text-red-500 text-sm text-center">{error}</p>
                        )}

                        {/* Submit button */}
                        <Button
                            type="submit"
                            className="w-full py-3 bg-[#CEE1F6] hover:bg-[#D6E6FA] text-primary"
                        >
                            Create account
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
