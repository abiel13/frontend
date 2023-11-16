/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    typedRoutes: true,
    serverActions: true,
  },
  images: {
    domains: ["alteflix-dev-assets.s3.amazonaws.com"],
  },
};

module.exports = {
  ...nextConfig,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });

    return config;
  },
};
