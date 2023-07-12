/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/Admin',
        destination: '/pages/Admin.js',
      },
    ];
  },
}

module.exports = nextConfig
