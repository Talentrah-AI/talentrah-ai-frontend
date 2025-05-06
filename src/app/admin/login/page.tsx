"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, ChevronDown, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { login, setAuthToken, getAuthToken } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      console.log('Sending login to Strapi:', { email });
      const { jwt } = await login(email, password);
      console.log('Login JWT:', jwt);
      setAuthToken(jwt);
      const storedToken = getAuthToken();
      console.log('Stored token:', storedToken);
      if (!storedToken) {
        throw new Error("Failed to store authentication token");
      }
      console.log('Redirecting to /admin/overview');
      // Add a slight delay to ensure cookie is set
      setTimeout(() => {
        router.replace("/admin/overview");
        console.log('Navigation to /admin/overview attempted');
      }, 100);
    } catch (err: any) {
      console.error('Login error:', err.message);
      setError(err.message || "Invalid email or password");
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0752A8]">
      <img
        src="/Rectangle.png"
        alt="Decorative background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <section className="relative z-20 flex flex-col justify-center items-center min-h-screen px-4">
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
        <div className="w-full max-w-[558px] bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <div className="mb-3 mt-3 text-center">
            <Image
              src="/Polygon color.png"
              alt="polygon logo"
              width={100}
              height={50}
              priority
            />
          </div>
          <h2 className="text-2xl font-medium text-center mt-0 mb-1">Login</h2>
          <p className="text-sm text-gray-500 mb-8 text-center">
            Access your admin dashboard.
          </p>
          <form className="w-full space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className={`w-full max-w-[510px] h-[50px] rounded-lg border ${email ? "border-black" : "border-gray-300"}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="************"
                  className={`w-full max-w-[510px] h-[50px] rounded-lg border pr-10 ${password ? "border-black" : "border-gray-300"}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${password ? "text-black" : "text-gray-400"}`}
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
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <Button
              type="submit"
              className="w-full py-3 bg-[#CEE1F6] hover:bg-[#D6E6FA] text-primary"
            >
              Login
            </Button>
          </form>
          <div className="mt-4 text-center text-gray-500 text-sm">
            Don’t have an account?{" "}
            <Link href="/admin/register" className="text-primary hover:underline">
              Create account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}