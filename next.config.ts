// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**", // ou mais específico: "/viniciosneves/code-connect-assets/**"
      },
    ],
  },
};

export default nextConfig;
