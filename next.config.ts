// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: [
//       "s3-alpha-sig.figma.com",
//       "img.freepik.com",
//       "cdn-images.zety.com",
//       "www.myperfectresume.com",
//       "cdn.enhancv.com",
//       "encrypted-tbn0.gstatic.com"
//     ],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn-images.zety.com',
      },
      {
        protocol: 'https',
        hostname: 'www.myperfectresume.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.enhancv.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
    ],
  },
};

export default nextConfig;