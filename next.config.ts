import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: process.env.NODE_ENV === "production" ? "/gim-ia" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/gim-ia/" : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;