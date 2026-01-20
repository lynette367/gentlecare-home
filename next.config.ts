import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/caregivers",
        destination: "/",
        permanent: true,
      },
      {
        source: "/caregivers/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
