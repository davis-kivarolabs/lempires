import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['images.example-cdn.com', 'assets.vercel.com'],
    formats: ['image/avif', 'image/webp'],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'no-referrer-when-downgrade' },
        ],
      },
    ];
  },
};

export default nextConfig;


// const path = require('path');

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   // No need for this in Next.js 13+
//   // experimental: { appDir: true },

//   images: {
//     domains: ['images.example-cdn.com', 'assets.vercel.com'],
//     formats: ['image/avif', 'image/webp'],
//   },

//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           { key: 'X-Frame-Options', value: 'DENY' },
//           { key: 'X-Content-Type-Options', value: 'nosniff' },
//           { key: 'Referrer-Policy', value: 'no-referrer-when-downgrade' },
//         ],
//       },
//     ];
//   },

 
// };

// module.exports = nextConfig;