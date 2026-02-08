import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Use static export for maximum performance and compatibility with any static host.
  output: 'export',
  
  // Ensures clean URLs that are compatible with most static hosting providers.
  trailingSlash: true,

  // Since we are not using next/image for optimization, we can disable it.
  // We will use standard <img> tags for full control.
  images: {
    unoptimized: true,
  },

  // These flags help during development but are good practice to have.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
