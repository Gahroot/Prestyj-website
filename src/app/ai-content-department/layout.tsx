import type { Metadata } from "next";

const PAGE_URL = "https://prestyj.com/ai-content-department";

export const metadata: Metadata = {
  title: "AI Content Department",
  description:
    "AI Content Department — the social media AI agent in our marketing & sales agent suite. 1,000+ posts per month across 7 platforms, live in 24 hours, from $1,997/mo.",
  keywords: [
    "AI content department",
    "AI agent for social media",
    "AI social media agent",
    "AI agents for marketing",
    "AI agents for sales",
    "AI social media management",
    "AI social media manager",
    "done for you social media",
    "managed social media service",
    "social media on autopilot",
    "1000 posts per month",
    "high volume social media",
    "multi-account social media",
    "content swarm",
    "AI content engine",
    "AI content generation",
    "social media automation",
    "replace social media hire",
    "social media hiring cost",
    "cost per post social media",
  ],
  openGraph: {
    title: "AI Content Department",
    description:
      "AI Content Department — the social media AI agent in our marketing & sales agent suite. 1,000+ posts per month across 7 platforms, live in 24 hours, from $1,997/mo.",
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Department",
    description:
      "AI Content Department — the social media AI agent in our marketing & sales agent suite. 1,000+ posts per month across 7 platforms.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function AIContentDepartmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
