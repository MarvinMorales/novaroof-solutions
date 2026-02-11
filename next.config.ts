import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'lordsroofing.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'collinsandsonroofing.com',
      },
      {
        protocol: 'https',
        hostname: 'ahouseinthehills.com',
      },
      {
        protocol: 'https',
        hostname: 'www.stahlroofing.ca',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/houston-tx/roof-repair',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
