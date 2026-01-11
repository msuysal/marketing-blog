import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/knowledge-base',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/article/:slug',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
