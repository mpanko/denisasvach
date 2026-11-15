import type { NextConfig } from 'next'

// The site is exported as static HTML (`out/`) and hosted on GitHub Pages
// at https://denisasvach.com, so no basePath is needed.
const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
