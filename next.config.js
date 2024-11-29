/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.externals = [...config.externals, 'canvas', 'jsdom'];
    return config;
  },  
  images: {
    domains: ['denisasvach.com'],
    unoptimized: true,
  }
};

module.exports = nextConfig;
