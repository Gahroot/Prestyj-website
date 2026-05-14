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
      // Best-for pages targeting wrong ICP (non-marketing/sales-AI verticals).
      // 301 to /best-for hub to preserve link equity and re-route visitors.
      { source: "/best-for/solo-agents", destination: "/best-for", permanent: true },
      { source: "/best-for/new-agents", destination: "/best-for", permanent: true },
      { source: "/best-for/hvac", destination: "/best-for", permanent: true },
      { source: "/best-for/roofing", destination: "/best-for", permanent: true },
      { source: "/best-for/plumbing", destination: "/best-for", permanent: true },
      { source: "/best-for/solar", destination: "/best-for", permanent: true },
      { source: "/best-for/contractors", destination: "/best-for", permanent: true },
      { source: "/best-for/electricians", destination: "/best-for", permanent: true },
      { source: "/best-for/landscaping-lawn-care", destination: "/best-for", permanent: true },
      { source: "/best-for/painting-contractors", destination: "/best-for", permanent: true },
      {
        source: "/best-for/window-and-door-manufacturers",
        destination: "/best-for",
        permanent: true,
      },
      { source: "/best-for/siding-contractors", destination: "/best-for", permanent: true },
      { source: "/best-for/garage-door", destination: "/best-for", permanent: true },
      { source: "/best-for/flooring-contractors", destination: "/best-for", permanent: true },
      { source: "/best-for/pest-control", destination: "/best-for", permanent: true },
      { source: "/best-for/movers", destination: "/best-for", permanent: true },
      { source: "/best-for/dental", destination: "/best-for", permanent: true },
      { source: "/best-for/law-firms", destination: "/best-for", permanent: true },
      { source: "/best-for/plastic-surgery", destination: "/best-for", permanent: true },
      { source: "/best-for/mental-health-clinics", destination: "/best-for", permanent: true },
      { source: "/best-for/veterinary-clinics", destination: "/best-for", permanent: true },
      { source: "/best-for/accounting-firms", destination: "/best-for", permanent: true },
      { source: "/best-for/auto-dealerships", destination: "/best-for", permanent: true },
      { source: "/best-for/auto-repair-shops", destination: "/best-for", permanent: true },
      { source: "/best-for/senior-care", destination: "/best-for", permanent: true },
      { source: "/best-for/retail-stores", destination: "/best-for", permanent: true },
      { source: "/best-for/restaurants", destination: "/best-for", permanent: true },
      { source: "/best-for/salons-and-spas", destination: "/best-for", permanent: true },
      { source: "/best-for/gyms-and-fitness-centers", destination: "/best-for", permanent: true },
      { source: "/best-for/servicetitan-users", destination: "/best-for", permanent: true },
      { source: "/best-for/jobber-users", destination: "/best-for", permanent: true },
      {
        source: "/best-for/ai-voice-receptionist-dental",
        destination: "/best-for",
        permanent: true,
      },
      {
        source: "/best-for/ai-voice-receptionist-legal",
        destination: "/best-for",
        permanent: true,
      },
      {
        source: "/best-for/ai-voice-receptionist-medical",
        destination: "/best-for",
        permanent: true,
      },
      {
        source: "/best-for/ai-voice-receptionist-insurance",
        destination: "/best-for",
        permanent: true,
      },
      // 51 metro-level `video-ads-for-realtors-[city]` pages were programmatic-SEO
      // geo-spam pitching batch video ads at $1,497 — conflicts with the AI
      // marketing & sales core positioning. 301 to /pricing.
      {
        source: "/best-for/video-ads-for-realtors-:city",
        destination: "/pricing",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
