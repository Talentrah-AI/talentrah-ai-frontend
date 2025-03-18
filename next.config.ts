import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "s3-alpha-sig.figma.com",
      "img.freepik.com",
      "cdn-images.zety.com",
      "www.myperfectresume.com",
      "cdn.enhancv.com",
      "encrypted-tbn0.gstatic.com"
    ],
  },
};

export default nextConfig;