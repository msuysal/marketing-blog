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
    ]
  },
};

export default nextConfig;
