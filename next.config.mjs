/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.goit.study',
      },
    ],
  },
};

export default nextConfig;
