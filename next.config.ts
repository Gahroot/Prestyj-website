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
      // Off-positioning compare pages (video editors, generic social schedulers).
      // These products don't actually compete with Prestyj's AI marketing & sales
      // agents — they were SEO orphan content diluting positioning. 301 to /compare.
      { source: "/compare/prestyj-vs-capcut", destination: "/compare", permanent: true },
      { source: "/compare/prestyj-vs-opus-clip", destination: "/compare", permanent: true },
      { source: "/compare/prestyj-vs-invideo", destination: "/compare", permanent: true },
      { source: "/compare/prestyj-vs-fiverr-video-ads", destination: "/compare", permanent: true },
      {
        source: "/compare/prestyj-vs-fiverr-social-media",
        destination: "/compare",
        permanent: true,
      },
      { source: "/compare/prestyj-vs-buffer", destination: "/compare", permanent: true },
      { source: "/compare/prestyj-vs-later", destination: "/compare", permanent: true },
      { source: "/compare/prestyj-vs-hootsuite", destination: "/compare", permanent: true },
      { source: "/compare/prestyj-vs-canva", destination: "/compare", permanent: true },
      // Enterprise CX / telephony alternatives pages targeting the wrong segment
      // (Voiceflow, Lindy, Ada, Decagon, Sierra AI — enterprise dev/CX platforms;
      // Dialpad, RingCentral, CloudTalk — telephony platforms). 301 to /.
      { source: "/alternatives/voiceflow", destination: "/", permanent: true },
      { source: "/alternatives/lindy", destination: "/", permanent: true },
      { source: "/alternatives/ada", destination: "/", permanent: true },
      { source: "/alternatives/decagon-ai", destination: "/", permanent: true },
      { source: "/alternatives/sierra-ai", destination: "/", permanent: true },
      { source: "/alternatives/dialpad", destination: "/", permanent: true },
      { source: "/alternatives/ring-central", destination: "/", permanent: true },
      { source: "/alternatives/cloudtalk", destination: "/", permanent: true },
      // AI vs human-staff comparison pages consolidated under canonical
      // /alternatives/human-isa to remove overlapping content (was 4 near-duplicate
      // pages: prestyj-vs-isa, prestyj-vs-internal-isa-team, prestyj-vs-offshore-isa,
      // prestyj-vs-answering-service).
      {
        source: "/compare/prestyj-vs-isa",
        destination: "/alternatives/human-isa",
        permanent: true,
      },
      {
        source: "/compare/prestyj-vs-internal-isa-team",
        destination: "/alternatives/human-isa",
        permanent: true,
      },
      {
        source: "/compare/prestyj-vs-offshore-isa",
        destination: "/alternatives/human-isa",
        permanent: true,
      },
      {
        source: "/compare/prestyj-vs-answering-service",
        destination: "/alternatives/human-isa",
        permanent: true,
      },
      // Reverse-orientation duplicate compare pages (X-vs-prestyj) consolidated to
      // canonical prestyj-vs-X orientation to eliminate duplicate content.
      {
        source: "/compare/structurely-vs-prestyj",
        destination: "/compare/prestyj-vs-structurely",
        permanent: true,
      },
      {
        source: "/compare/alanna-ai-vs-prestyj",
        destination: "/compare/prestyj-vs-alanna-ai",
        permanent: true,
      },
      {
        source: "/compare/follow-up-boss-vs-prestyj",
        destination: "/compare/prestyj-vs-follow-up-boss",
        permanent: true,
      },
      {
        source: "/compare/lofty-vs-prestyj",
        destination: "/compare/prestyj-vs-lofty",
        permanent: true,
      },
      {
        source: "/compare/resimpli-vs-prestyj",
        destination: "/compare/prestyj-vs-resimpli",
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
      {
        source: "/best-for/social-content-for-agencies",
        destination: "/best-for",
        permanent: true,
      },
      { source: "/best-for/social-content-for-coaches", destination: "/best-for", permanent: true },
      {
        source: "/best-for/social-content-for-consultants",
        destination: "/best-for",
        permanent: true,
      },
      {
        source: "/best-for/social-content-for-contractors",
        destination: "/best-for",
        permanent: true,
      },
      {
        source: "/best-for/social-content-for-creators",
        destination: "/best-for",
        permanent: true,
      },
      {
        source: "/best-for/social-content-for-dentists",
        destination: "/best-for",
        permanent: true,
      },
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
      {
        source: "/best-for/social-content-for-law-firms",
        destination: "/best-for",
        permanent: true,
      },
      {
        source: "/best-for/social-content-for-med-spas",
        destination: "/best-for",
        permanent: true,
      },
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
      // ---------------------------------------------------------------------
      // Solutions consolidation: 78 near-duplicate "AI for X" /solutions/* pages
      // were diluting the core "AI agents for marketing & sales" positioning.
      // Collapsed to 12 canonical solutions; rest 301 to the absorbing canonical.
      // ---------------------------------------------------------------------
      // → ai-virtual-receptionist (canonical inbound voice / answering)
      {
        source: "/solutions/ai-answering-service",
        destination: "/solutions/ai-virtual-receptionist",
        permanent: true,
      },
      {
        source: "/solutions/ai-answering-service-hvac",
        destination: "/solutions/ai-virtual-receptionist",
        permanent: true,
      },
      {
        source: "/solutions/ai-answering-service-plumbing",
        destination: "/solutions/ai-virtual-receptionist",
        permanent: true,
      },
      {
        source: "/solutions/ai-phone-answering",
        destination: "/solutions/ai-virtual-receptionist",
        permanent: true,
      },
      {
        source: "/solutions/ai-inbound-call-handling",
        destination: "/solutions/ai-virtual-receptionist",
        permanent: true,
      },
      {
        source: "/solutions/ai-receptionist-cost",
        destination: "/solutions/ai-virtual-receptionist",
        permanent: true,
      },
      {
        source: "/solutions/ai-receptionist-real-estate",
        destination: "/solutions/ai-virtual-receptionist",
        permanent: true,
      },
      {
        source: "/solutions/ai-missed-call-text-back",
        destination: "/solutions/ai-virtual-receptionist",
        permanent: true,
      },
      {
        source: "/solutions/ai-text-back-service",
        destination: "/solutions/ai-virtual-receptionist",
        permanent: true,
      },
      {
        source: "/solutions/ai-web-chat-widget",
        destination: "/solutions/ai-virtual-receptionist",
        permanent: true,
      },
      {
        source: "/solutions/ai-conversation-platform",
        destination: "/solutions/ai-virtual-receptionist",
        permanent: true,
      },
      // → ai-voice-agent-pricing (canonical voice agent + outbound)
      {
        source: "/solutions/ai-voice-assistant-business",
        destination: "/solutions/ai-voice-agent-pricing",
        permanent: true,
      },
      {
        source: "/solutions/ai-calling-service",
        destination: "/solutions/ai-voice-agent-pricing",
        permanent: true,
      },
      {
        source: "/solutions/ai-outbound-calls",
        destination: "/solutions/ai-voice-agent-pricing",
        permanent: true,
      },
      {
        source: "/solutions/ai-cold-calling",
        destination: "/solutions/ai-voice-agent-pricing",
        permanent: true,
      },
      {
        source: "/solutions/ai-dialer",
        destination: "/solutions/ai-voice-agent-pricing",
        permanent: true,
      },
      // → ai-appointment-setter (canonical appointment / show-rate page)
      {
        source: "/solutions/ai-appointment-scheduling",
        destination: "/solutions/ai-appointment-setter",
        permanent: true,
      },
      {
        source: "/solutions/ai-show-rate-optimization",
        destination: "/solutions/ai-appointment-setter",
        permanent: true,
      },
      {
        source: "/solutions/ai-no-show-reduction",
        destination: "/solutions/ai-appointment-setter",
        permanent: true,
      },
      {
        source: "/solutions/ai-closing-assistant",
        destination: "/solutions/ai-appointment-setter",
        permanent: true,
      },
      {
        source: "/solutions/ai-objection-handling",
        destination: "/solutions/ai-appointment-setter",
        permanent: true,
      },
      // → ai-lead-response (canonical follow-up / nurture umbrella)
      {
        source: "/solutions/ai-follow-up-system",
        destination: "/solutions/ai-lead-response",
        permanent: true,
      },
      {
        source: "/solutions/ai-lead-nurturing",
        destination: "/solutions/ai-lead-response",
        permanent: true,
      },
      {
        source: "/solutions/ai-email-follow-up",
        destination: "/solutions/ai-lead-response",
        permanent: true,
      },
      // → sales-automation (canonical pipeline / CRM automation)
      {
        source: "/solutions/ai-pipeline-automation",
        destination: "/solutions/sales-automation",
        permanent: true,
      },
      {
        source: "/solutions/ai-crm-automation",
        destination: "/solutions/sales-automation",
        permanent: true,
      },
      {
        source: "/solutions/business-automation",
        destination: "/solutions/sales-automation",
        permanent: true,
      },
      // → lead-reactivation (canonical absorbs all real-estate vertical pages)
      {
        source: "/solutions/agentic-ai-real-estate",
        destination: "/solutions/lead-reactivation",
        permanent: true,
      },
      {
        source: "/solutions/real-estate",
        destination: "/solutions/lead-reactivation",
        permanent: true,
      },
      {
        source: "/solutions/real-estate-lead-conversion",
        destination: "/solutions/lead-reactivation",
        permanent: true,
      },
      {
        source: "/solutions/lead-reactivation-real-estate",
        destination: "/solutions/lead-reactivation",
        permanent: true,
      },
      {
        source: "/solutions/ai-for-real-estate-investors",
        destination: "/solutions/lead-reactivation",
        permanent: true,
      },
      {
        source: "/solutions/ai-for-real-estate-wholesalers",
        destination: "/solutions/lead-reactivation",
        permanent: true,
      },
      {
        source: "/solutions/ai-for-home-builders",
        destination: "/solutions/lead-reactivation",
        permanent: true,
      },
      {
        source: "/solutions/ai-for-title-companies",
        destination: "/solutions/lead-reactivation",
        permanent: true,
      },
      // → speed-to-lead (absorbs home-services / roofing vertical pages)
      {
        source: "/solutions/home-services",
        destination: "/solutions/speed-to-lead",
        permanent: true,
      },
      {
        source: "/solutions/roofing",
        destination: "/solutions/speed-to-lead",
        permanent: true,
      },
      // → ai-lead-generation (paid-ad lead-gen umbrella)
      {
        source: "/solutions/facebook-ad-leads",
        destination: "/solutions/ai-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/youtube-ad-leads",
        destination: "/solutions/ai-lead-generation",
        permanent: true,
      },
      // → batch-video-ads-for-lead-generation (canonical video ad service)
      {
        source: "/solutions/batch-video-ads-real-estate",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/batch-video-ads-for-meta",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/batch-video-ads-for-tiktok",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/batch-video-ads-for-youtube-shorts",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/batch-video-ads-for-personal-brand",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/batch-video-ads-for-contractors",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/batch-video-ads-for-hvac-companies",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/batch-video-ads-for-mortgage-brokers",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/batch-video-ads-for-roofers",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/batch-video-ads-for-agency-owners",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/ad-creative-testing-service",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/ad-creative-testing-agency",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/facebook-ad-creative-testing-agency",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/facebook-ad-creative-volume",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/tiktok-ad-creative-testing",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/youtube-shorts-ad-production",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/video-ad-production-volume",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/video-ad-script-writing-service",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/video-ad-testing-framework",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/ad-hook-testing-service",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/winning-ad-angle-finder",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/ad-fatigue-management",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/creative-refresh-service",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/ugc-style-ad-production",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/ai-ad-creative-generator",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/ai-image-generation-for-business",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      {
        source: "/solutions/ai-creative-studio-service-businesses",
        destination: "/solutions/batch-video-ads-for-lead-generation",
        permanent: true,
      },
      // Top-level /ai-sales-assistant was a duplicate-positioning landing page
      // (composed entirely of generic shared sections — same as the home page)
      // selling a real-estate-only "AI team member". Consolidated under the
      // canonical /solutions/ai-lead-response page to align with core
      // "AI agents for marketing & sales" positioning.
      {
        source: "/ai-sales-assistant",
        destination: "/solutions/ai-lead-response",
        permanent: true,
      },
      // → /ai-content-department (top-level page absorbs all social-media
      // product variants from earlier consolidation task).
      {
        source: "/solutions/social-media-content-service",
        destination: "/ai-content-department",
        permanent: true,
      },
      {
        source: "/solutions/social-media-posting-service",
        destination: "/ai-content-department",
        permanent: true,
      },
      {
        source: "/solutions/automated-social-media-posts",
        destination: "/ai-content-department",
        permanent: true,
      },
      {
        source: "/solutions/ai-social-media-manager",
        destination: "/ai-content-department",
        permanent: true,
      },
      {
        source: "/solutions/ai-social-media-content-generator",
        destination: "/ai-content-department",
        permanent: true,
      },
      {
        source: "/solutions/ai-instagram-posts-service",
        destination: "/ai-content-department",
        permanent: true,
      },
      {
        source: "/solutions/instagram-carousel-content-service",
        destination: "/ai-content-department",
        permanent: true,
      },
      {
        source: "/solutions/ai-content-calendar-service",
        destination: "/ai-content-department",
        permanent: true,
      },
      {
        source: "/solutions/multi-platform-content-creation",
        destination: "/ai-content-department",
        permanent: true,
      },
      {
        source: "/solutions/multi-platform-publishing-tool",
        destination: "/ai-content-department",
        permanent: true,
      },
      // ── Thin-content consolidation (near-duplicate audit
      //    scripts/output/near-duplicate-report-2026-06-04T15-07-19-737Z.md).
      //    105 near-duplicate programmatic pages 301 to one strong canonical
      //    per cluster so fewer differentiated pages carry the domain.
      // best-for — 75 pruned/merged cells
      { source: "/best-for/batch-video-ads-for-agency-owners", destination: "/best-for/batch-video-ads-for-real-estate-teams", permanent: true },
      { source: "/best-for/batch-video-ads-for-chiropractors", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/batch-video-ads-for-cmos", destination: "/best-for/batch-video-ads-for-real-estate-teams", permanent: true },
      { source: "/best-for/batch-video-ads-for-coaches", destination: "/best-for/batch-video-ads-for-real-estate-teams", permanent: true },
      { source: "/best-for/batch-video-ads-for-consultants", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/batch-video-ads-for-creators", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/batch-video-ads-for-ecommerce-brands", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/batch-video-ads-for-electricians", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/batch-video-ads-for-financial-advisors", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/batch-video-ads-for-garage-door-companies", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/batch-video-ads-for-general-contractors", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/batch-video-ads-for-gyms", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/batch-video-ads-for-hvac-companies", destination: "/best-for/batch-video-ads-for-real-estate-teams", permanent: true },
      { source: "/best-for/batch-video-ads-for-insurance-agents", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/batch-video-ads-for-landscapers", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/batch-video-ads-for-law-firms", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/batch-video-ads-for-med-spas", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/batch-video-ads-for-media-buyers", destination: "/best-for/batch-video-ads-for-real-estate-teams", permanent: true },
      { source: "/best-for/batch-video-ads-for-mortgage-brokers", destination: "/best-for/batch-video-ads-for-real-estate-teams", permanent: true },
      { source: "/best-for/batch-video-ads-for-personal-brands", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/batch-video-ads-for-pest-control-companies", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/batch-video-ads-for-plumbing-contractors", destination: "/best-for/batch-video-ads-for-real-estate-teams", permanent: true },
      { source: "/best-for/batch-video-ads-for-pool-service-companies", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/batch-video-ads-for-restoration-companies", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/batch-video-ads-for-roofing-contractors", destination: "/best-for/batch-video-ads-for-real-estate-teams", permanent: true },
      { source: "/best-for/batch-video-ads-for-saas-founders", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/batch-video-ads-for-service-business-owners", destination: "/best-for/batch-video-ads-for-real-estate-teams", permanent: true },
      { source: "/best-for/batch-video-ads-for-solar-companies", destination: "/best-for/batch-video-ads-for-dentists", permanent: true },
      { source: "/best-for/cost-per-tested-ad-angle-for-agency-owners", destination: "/best-for/cost-per-tested-ad-angle-for-real-estate-teams", permanent: true },
      { source: "/best-for/cost-per-tested-ad-angle-for-cmos", destination: "/best-for/cost-per-tested-ad-angle-for-real-estate-teams", permanent: true },
      { source: "/best-for/cost-per-tested-ad-angle-for-coaches", destination: "/best-for/cost-per-tested-ad-angle-for-real-estate-teams", permanent: true },
      { source: "/best-for/cost-per-tested-ad-angle-for-hvac-companies", destination: "/best-for/cost-per-tested-ad-angle-for-real-estate-teams", permanent: true },
      { source: "/best-for/cost-per-tested-ad-angle-for-media-buyers", destination: "/best-for/cost-per-tested-ad-angle-for-real-estate-teams", permanent: true },
      { source: "/best-for/cost-per-tested-ad-angle-for-mortgage-brokers", destination: "/best-for/cost-per-tested-ad-angle-for-real-estate-teams", permanent: true },
      { source: "/best-for/cost-per-tested-ad-angle-for-plumbing-contractors", destination: "/best-for/cost-per-tested-ad-angle-for-real-estate-teams", permanent: true },
      { source: "/best-for/cost-per-tested-ad-angle-for-roofing-contractors", destination: "/best-for/cost-per-tested-ad-angle-for-real-estate-teams", permanent: true },
      { source: "/best-for/cost-per-tested-ad-angle-for-service-business-owners", destination: "/best-for/cost-per-tested-ad-angle-for-real-estate-teams", permanent: true },
      { source: "/best-for/creative-testing-for-chiropractors", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-consultants", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-creators", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-dentists", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-ecommerce-brands", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-electricians", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-financial-advisors", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-garage-door-companies", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-general-contractors", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-gyms", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-insurance-agents", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-landscapers", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-law-firms", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-med-spas", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-personal-brands", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-pest-control-companies", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-pool-service-companies", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-restoration-companies", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-saas-founders", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/creative-testing-for-solar-companies", destination: "/best-for/creative-testing-for-auto-dealerships", permanent: true },
      { source: "/best-for/done-for-you-social-for-agency-owners", destination: "/best-for/done-for-you-social-for-service-business-owners", permanent: true },
      { source: "/best-for/done-for-you-social-for-cmos", destination: "/best-for/done-for-you-social-for-service-business-owners", permanent: true },
      { source: "/best-for/done-for-you-social-for-coaches", destination: "/best-for/done-for-you-social-for-service-business-owners", permanent: true },
      { source: "/best-for/done-for-you-social-for-consultants", destination: "/best-for/done-for-you-social-for-service-business-owners", permanent: true },
      { source: "/best-for/done-for-you-social-for-creators", destination: "/best-for/done-for-you-social-for-service-business-owners", permanent: true },
      { source: "/best-for/done-for-you-social-for-ecommerce-brands", destination: "/best-for/done-for-you-social-for-service-business-owners", permanent: true },
      { source: "/best-for/done-for-you-social-for-media-buyers", destination: "/best-for/done-for-you-social-for-service-business-owners", permanent: true },
      { source: "/best-for/done-for-you-social-for-personal-brands", destination: "/best-for/done-for-you-social-for-service-business-owners", permanent: true },
      { source: "/best-for/done-for-you-social-for-saas-founders", destination: "/best-for/done-for-you-social-for-service-business-owners", permanent: true },
      { source: "/best-for/social-volume-strategy-for-agency-owners", destination: "/best-for/social-volume-strategy-for-service-business-owners", permanent: true },
      { source: "/best-for/social-volume-strategy-for-cmos", destination: "/best-for/social-volume-strategy-for-service-business-owners", permanent: true },
      { source: "/best-for/social-volume-strategy-for-coaches", destination: "/best-for/social-volume-strategy-for-service-business-owners", permanent: true },
      { source: "/best-for/social-volume-strategy-for-consultants", destination: "/best-for/social-volume-strategy-for-service-business-owners", permanent: true },
      { source: "/best-for/social-volume-strategy-for-creators", destination: "/best-for/social-volume-strategy-for-service-business-owners", permanent: true },
      { source: "/best-for/social-volume-strategy-for-ecommerce-brands", destination: "/best-for/social-volume-strategy-for-service-business-owners", permanent: true },
      { source: "/best-for/social-volume-strategy-for-media-buyers", destination: "/best-for/social-volume-strategy-for-service-business-owners", permanent: true },
      { source: "/best-for/social-volume-strategy-for-personal-brands", destination: "/best-for/social-volume-strategy-for-service-business-owners", permanent: true },
      { source: "/best-for/social-volume-strategy-for-saas-founders", destination: "/best-for/social-volume-strategy-for-service-business-owners", permanent: true },
      // alternatives — 18 pruned/merged cells
      { source: "/alternatives/agency-owners-social-media-agency-alternative", destination: "/alternatives/service-business-owners-social-media-agency-alternative", permanent: true },
      { source: "/alternatives/agency-owners-video-production-alternative", destination: "/alternatives/real-estate-teams-video-production-alternative", permanent: true },
      { source: "/alternatives/cmos-social-media-agency-alternative", destination: "/alternatives/service-business-owners-social-media-agency-alternative", permanent: true },
      { source: "/alternatives/cmos-video-production-alternative", destination: "/alternatives/real-estate-teams-video-production-alternative", permanent: true },
      { source: "/alternatives/coaches-social-media-agency-alternative", destination: "/alternatives/service-business-owners-social-media-agency-alternative", permanent: true },
      { source: "/alternatives/coaches-video-production-alternative", destination: "/alternatives/real-estate-teams-video-production-alternative", permanent: true },
      { source: "/alternatives/consultants-social-media-agency-alternative", destination: "/alternatives/service-business-owners-social-media-agency-alternative", permanent: true },
      { source: "/alternatives/creators-social-media-agency-alternative", destination: "/alternatives/service-business-owners-social-media-agency-alternative", permanent: true },
      { source: "/alternatives/ecommerce-brands-social-media-agency-alternative", destination: "/alternatives/service-business-owners-social-media-agency-alternative", permanent: true },
      { source: "/alternatives/hvac-companies-video-production-alternative", destination: "/alternatives/real-estate-teams-video-production-alternative", permanent: true },
      { source: "/alternatives/media-buyers-social-media-agency-alternative", destination: "/alternatives/service-business-owners-social-media-agency-alternative", permanent: true },
      { source: "/alternatives/media-buyers-video-production-alternative", destination: "/alternatives/real-estate-teams-video-production-alternative", permanent: true },
      { source: "/alternatives/mortgage-brokers-video-production-alternative", destination: "/alternatives/real-estate-teams-video-production-alternative", permanent: true },
      { source: "/alternatives/personal-brands-social-media-agency-alternative", destination: "/alternatives/service-business-owners-social-media-agency-alternative", permanent: true },
      { source: "/alternatives/plumbing-contractors-video-production-alternative", destination: "/alternatives/real-estate-teams-video-production-alternative", permanent: true },
      { source: "/alternatives/roofing-contractors-video-production-alternative", destination: "/alternatives/real-estate-teams-video-production-alternative", permanent: true },
      { source: "/alternatives/saas-founders-social-media-agency-alternative", destination: "/alternatives/service-business-owners-social-media-agency-alternative", permanent: true },
      { source: "/alternatives/service-business-owners-video-production-alternative", destination: "/alternatives/real-estate-teams-video-production-alternative", permanent: true },
      // compare — 12 pruned/merged cells
      { source: "/compare/prestyj-vs-agency-video-for-mortgage-brokers", destination: "/compare/prestyj-vs-agency-video-for-service-business-owners", permanent: true },
      { source: "/compare/prestyj-vs-ai-avatar-tool-video-for-agency-owners", destination: "/compare/prestyj-vs-ai-avatar-tool-video-for-real-estate-teams", permanent: true },
      { source: "/compare/prestyj-vs-bland-ai", destination: "/compare/prestyj-vs-retell-ai", permanent: true },
      { source: "/compare/prestyj-vs-fiverr-for-ecommerce-brands", destination: "/compare/prestyj-vs-fiverr-for-creators", permanent: true },
      { source: "/compare/prestyj-vs-fiverr-video-for-media-buyers", destination: "/compare/prestyj-vs-fiverr-video-for-plumbing-contractors", permanent: true },
      { source: "/compare/prestyj-vs-in-house-hire-for-cmos", destination: "/compare/prestyj-vs-in-house-hire-for-saas-founders", permanent: true },
      { source: "/compare/prestyj-vs-in-house-hire-for-coaches", destination: "/compare/prestyj-vs-in-house-hire-for-saas-founders", permanent: true },
      { source: "/compare/prestyj-vs-in-house-video-for-roofing-contractors", destination: "/compare/prestyj-vs-in-house-video-for-cmos", permanent: true },
      { source: "/compare/prestyj-vs-smma-for-consultants", destination: "/compare/prestyj-vs-smma-for-service-business-owners", permanent: true },
      { source: "/compare/prestyj-vs-smma-for-media-buyers", destination: "/compare/prestyj-vs-smma-for-service-business-owners", permanent: true },
      { source: "/compare/prestyj-vs-ugc-creator-video-for-coaches", destination: "/compare/prestyj-vs-ugc-creator-video-for-hvac-companies", permanent: true },
      { source: "/compare/prestyj-vs-va-plus-templates-for-personal-brands", destination: "/compare/prestyj-vs-va-plus-templates-for-agency-owners", permanent: true },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
