import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during builds
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // matches any image path
      },
    ],
  },
};

export default nextConfig;
// domains: ['res.cloudinary.com'],  // Add Cloudinary domain here