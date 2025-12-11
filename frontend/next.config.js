/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
