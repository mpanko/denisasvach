/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mpanko.github.io', 'denisasvach.com'],
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/denisasvach' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/denisasvach/' : '',
};

module.exports = nextConfig;