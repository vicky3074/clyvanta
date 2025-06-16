/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker builds
  output: 'standalone',
  
  // Basic Next.js configuration
  experimental: {
    // Improve build performance
    optimizePackageImports: ['@heroicons/react']
  }
};

module.exports = nextConfig;