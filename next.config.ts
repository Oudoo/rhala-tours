import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/rhala-tours' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/rhala-tours/' : '',
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: 'lookaside.instagram.com',
      },
      {
        protocol: 'https',
        hostname: 'instagram.com',
      },
    ],
  },
};

export default nextConfig;
