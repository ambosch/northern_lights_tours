/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export for SPA mode
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig

