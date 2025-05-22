import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during builds
  },
  images: {
    domains: ['res.cloudinary.com'],  // Add Cloudinary domain here

  },
};

export default nextConfig;
