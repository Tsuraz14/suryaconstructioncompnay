import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // Add this
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

