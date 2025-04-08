import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // eslint: {
  //   ignoreDuringBuilds: true, // Disables ESLint during builds
  // },
  images: {
    domains: ['res.cloudinary.com'],  // Add Cloudinary domain here
  },
};

export default nextConfig;
