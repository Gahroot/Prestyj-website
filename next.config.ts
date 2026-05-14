import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      "next/dist/build/polyfills/polyfill-module": "./src/lib/noop.ts",
    },
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-dialog",
    ],
  },
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
      // Consolidate duplicate /get-ads/* → /free-ads/* (identical metadata caused
      // Google to canonicalize one; 301 the rest to preserve link equity).
      {
        source: "/get-ads",
        destination: "/free-ads",
        permanent: true,
      },
      {
        source: "/get-ads/plumbers",
        destination: "/free-ads/plumbers",
        permanent: true,
      },
      {
        source: "/get-ads/hvac",
        destination: "/free-ads/hvac",
        permanent: true,
      },
      {
        source: "/get-ads/roofers",
        destination: "/free-ads/roofers",
        permanent: true,
      },
      {
        source: "/get-ads/contractors",
        destination: "/free-ads/contractors",
        permanent: true,
      },
      // Consolidate 5 near-duplicate social-media product pages → single canonical
      // /ai-content-department (positioned as the AI agent for social media inside
      // Prestyj's marketing & sales AI agent suite).
      {
        source: "/done-for-you-social-media",
        destination: "/ai-content-department",
        permanent: true,
      },
      {
        source: "/done-for-you-social-media/intake",
        destination: "/ai-content-department/intake",
        permanent: true,
      },
      {
        source: "/1000-posts-per-month",
        destination: "/ai-content-department",
        permanent: true,
      },
      {
        source: "/social-media-on-autopilot",
        destination: "/ai-content-department",
        permanent: true,
      },
      {
        source: "/ai-social-media-management",
        destination: "/ai-content-department",
        permanent: true,
      },
      {
        source: "/managed-social-media-service",
        destination: "/ai-content-department",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
