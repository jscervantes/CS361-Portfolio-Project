/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['zeromq']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'perenual.com'
      }
    ]
  },

};

export default nextConfig;
