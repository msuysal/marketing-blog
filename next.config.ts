import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname,
  },
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'marketing-blog-teal.vercel.app',
          },
        ],
        destination: 'https://olguuysal.com/:path*',
        permanent: true,
      },
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
