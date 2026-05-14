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
      // AI-consultant / fractional-CAIO positioning pages were diluting the
      // core "AI agents for marketing & sales" product positioning by
      // competing with Deloitte/PwC/EY/KPMG. 301 to /pricing.
      {
        source: "/compare/ai-consultant-vs-big4-consulting",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/compare/ai-consultant-vs-ai-agency",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/compare/ai-consultant-vs-diy-ai",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/compare/ai-consultant-vs-freelancer",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/compare/ai-consultant-vs-ai-implementation-partner",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/compare/ai-implementation-partner-vs-consultant",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/compare/fractional-ai-consultant-vs-full-time-employee",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/compare/ai-consultant-roi-calculator",
        destination: "/pricing",
        permanent: true,
      },
      // Consulting-positioned solutions pages (fractional CAIO / AI strategy
      // consulting). 301 to /pricing.
      {
        source: "/solutions/fractional-ai-officer",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/solutions/ai-strategy-consulting",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/solutions/ai-implementation-consulting",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/solutions/ai-pilot-program-consulting",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/solutions/ai-proof-of-concept-consulting",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/solutions/ai-rollout-planning",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/solutions/ai-integration-service",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/solutions/ai-workflow-automation-consulting",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/solutions/custom-ai-agent-implementation",
        destination: "/pricing",
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
      // 17 `social-content-for-*` persona pages were re-branding Prestyj as a
      // content service, diluting the AI marketing & sales core positioning.
      // 301 to /best-for hub.
      { source: "/best-for/social-content-for-agencies", destination: "/best-for", permanent: true },
      { source: "/best-for/social-content-for-coaches", destination: "/best-for", permanent: true },
      { source: "/best-for/social-content-for-consultants", destination: "/best-for", permanent: true },
      { source: "/best-for/social-content-for-contractors", destination: "/best-for", permanent: true },
      { source: "/best-for/social-content-for-creators", destination: "/best-for", permanent: true },
      { source: "/best-for/social-content-for-dentists", destination: "/best-for", permanent: true },
      {
        source: "/best-for/social-content-for-ecommerce-brands",
        destination: "/best-for",
        permanent: true,
      },
      {
        source: "/best-for/social-content-for-financial-advisors",
        destination: "/best-for",
        permanent: true,
      },
      {
        source: "/best-for/social-content-for-gyms-fitness",
        destination: "/best-for",
        permanent: true,
      },
      {
        source: "/best-for/social-content-for-insurance-agents",
        destination: "/best-for",
        permanent: true,
      },
      { source: "/best-for/social-content-for-law-firms", destination: "/best-for", permanent: true },
      { source: "/best-for/social-content-for-med-spas", destination: "/best-for", permanent: true },
      {
        source: "/best-for/social-content-for-mortgage-brokers",
        destination: "/best-for",
        permanent: true,
      },
      {
        source: "/best-for/social-content-for-personal-brands",
        destination: "/best-for",
        permanent: true,
      },
      {
        source: "/best-for/social-content-for-real-estate-teams",
        destination: "/best-for",
        permanent: true,
      },
      {
        source: "/best-for/social-content-for-restaurants",
        destination: "/best-for",
        permanent: true,
      },
      {
        source: "/best-for/social-content-for-saas-founders",
        destination: "/best-for",
        permanent: true,
      },
      // 16 CRM/SaaS `*-users` persona pages targeted the wrong ICP and most were
      // already noindexed — an admission of failure. 301 to /best-for hub.
      // (servicetitan-users + jobber-users already redirected above.)
      { source: "/best-for/fieldedge-users", destination: "/best-for", permanent: true },
      { source: "/best-for/gorilladesk-users", destination: "/best-for", permanent: true },
      { source: "/best-for/workiz-users", destination: "/best-for", permanent: true },
      { source: "/best-for/housecall-pro-users", destination: "/best-for", permanent: true },
      { source: "/best-for/kvcore-users", destination: "/best-for", permanent: true },
      { source: "/best-for/follow-up-boss-users", destination: "/best-for", permanent: true },
      { source: "/best-for/real-geeks-users", destination: "/best-for", permanent: true },
      { source: "/best-for/cinc-users", destination: "/best-for", permanent: true },
      { source: "/best-for/sierra-interactive-users", destination: "/best-for", permanent: true },
      { source: "/best-for/boomtown-users", destination: "/best-for", permanent: true },
      { source: "/best-for/chime-users", destination: "/best-for", permanent: true },
      { source: "/best-for/hubspot-users", destination: "/best-for", permanent: true },
      { source: "/best-for/salesforce-users", destination: "/best-for", permanent: true },
      { source: "/best-for/pipedrive-users", destination: "/best-for", permanent: true },
      { source: "/best-for/close-users", destination: "/best-for", permanent: true },
      { source: "/best-for/calendly-users", destination: "/best-for", permanent: true },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
