import type { Metadata } from "next";

const PAGE_URL = "https://prestyj.com/ai-content-department";

export const metadata: Metadata = {
  title:
    "Replace Your Junior Social Media Hire With an AI Content Department — Prestyj",
  description:
    "Stop paying $55K–$75K/year for one junior hire who posts 30 times/month. Prestyj's AI content department ships 1,000+ posts across 7 platforms for $2K–$5K/mo. Live in 24 hours.",
  keywords: [
    "AI content department",
    "replace social media hire",
    "AI social media manager",
    "replace junior social media hire",
    "social media automation",
    "AI content generation",
    "social media cost savings",
    "done for you social media",
    "AI content engine",
    "content department as a service",
    "social media hiring cost",
    "cost per post social media",
  ],
  openGraph: {
    title:
      "Replace Your Junior Social Media Hire With an AI Content Department — Prestyj",
    description:
      "A full content department — strategists, designers, copywriters, schedulers — for less than one junior hire's salary. 1,000+ posts/month across 7 platforms.",
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Replace Your Junior Social Media Hire With an AI Content Department",
    description:
      "Stop paying $55K–$75K/yr for one hire who posts 30x/month. Prestyj ships 1,000+ posts across 7 platforms for $2K–$5K/mo.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function AIContentDepartmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
