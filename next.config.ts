import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Use static export for maximum performance on any static host.
  output: 'export',
  
  trailingSlash: true,

  images: {
    // Disable Next.js image optimization, as we are using standard <img> tags for external images.
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
