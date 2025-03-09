import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      include: /src\/assets\/.*\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },

  images: {
    domains: ["www.skuniv.ac.kr"],
  },
};

const withPWA = withPWAInit({
  dest: "public",
});

export default withPWA({
  ...nextConfig,
});
