/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/fa',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
