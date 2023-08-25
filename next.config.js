/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
      typedRoutes: true,
    },
      images: {
        domains: ['alteflix-dev-assets.s3.amazonaws.com'],
      }
  }
   


module.exports = nextConfig
