/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com', // YouTube Avatars
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Sanity CMS
      }
    ],
  },
};

export default nextConfig;
