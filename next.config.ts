import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/compare/prestyj-vs-ylopo",
        destination: "/alternatives/ylopo",
        permanent: true,
      },
      {
        source: "/compare/prestyj-vs-isa",
        destination: "/alternatives/human-isa",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
