import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
            value: 'www.olguuysal.com',
          },
        ],
        destination: 'https://olguuysal.com/:path*',
        statusCode: 301,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'marketing-blog-teal.vercel.app',
          },
        ],
        destination: 'https://olguuysal.com/:path*',
        statusCode: 301,
      },
      {
        source: '/knowledge-base',
        destination: '/articles',
        statusCode: 301,
      },
      {
        source: '/blog/:slug',
        destination: '/article/:slug',
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
