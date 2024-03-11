/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['zeromq']
  },
  images: {
    domains: ['https://perenual.com']
  },

};

export default nextConfig;
