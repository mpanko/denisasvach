/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.externals = [...config.externals, 'canvas', 'jsdom'];
    return config;
  },  
  images: {
    domains: ['mpanko.github.io', 'denisasvach.com'],
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/denisasvach' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/denisasvach/' : '',
};

module.exports = nextConfig;