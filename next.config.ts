import type { NextConfig } from 'next'

// Exported as static HTML to `out/` and served by GitHub Pages at https://denisasvach.com.
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
}

export default nextConfig
