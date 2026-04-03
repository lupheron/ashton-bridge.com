import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/trarget",
        destination: "/services/smm",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
