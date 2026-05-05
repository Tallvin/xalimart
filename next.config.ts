import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
    localPatterns: [
      { pathname: '/media/**' },
    ],
  },
}

export default nextConfig
