import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      // enabled: true, // Enable Turbopack explicitly if needed
    },
  },
};

export default nextConfig;
