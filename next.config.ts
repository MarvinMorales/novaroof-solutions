import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static export is removed to allow for server actions for the contact form.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
