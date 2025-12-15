const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // No need for this in Next.js 13+
  // experimental: { appDir: true },

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

  // // Canonical + multi-language links
  // alternates: {
  //   canonical: 'https://www.example.com/page-url',
  //   languages: {
  //     'en-US': '/en-US/page',
  //     'hi-IN': '/hi-IN/page',
  //   },
  // },

  // // SCSS setup (keeps your structure clean)
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'app/styles')],
  //   additionalData: `
  //     @use 'variables' as *;
  //     @use 'mixins' as *;
  //   `,
  // },
};

module.exports = nextConfig;


// // import path from "path";
// const path = require('path');

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   experimental: { appDir: true },
//   images: {
//     // add domains you host images on (CDNs)
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
//   alternates: {
//     canonical: 'https://www.example.com/page-url',
//     languages: {
//       'en-US': '/en-US/page',
//       'hi-IN': '/hi-IN/page'
//     }
//   },
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'app/styles')],
//     prependData: `
//       @use 'variables' as *;
//       @use 'mixins' as *;
//     `,
//   }
// };

// module.exports = nextConfig;