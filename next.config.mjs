/** @type {import('next').NextConfig} */
const nextConfig = {
  // Config options to allow testing from local network IP
  allowedDevOrigins: ['192.168.0.143', 'localhost'],
  // Add images.remotePatterns for the fake API images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
