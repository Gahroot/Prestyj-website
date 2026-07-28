import type { Metadata } from "next";

const title = "AI-First Audit | Find Your Costliest Workflows";
const description =
  "Find the workflows costing your business the most. See their time cost, business impact, and where an AI agent can help first.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AI-First Audit",
    "business workflow audit",
    "workflow cost audit",
    "AI agents for service businesses",
    "real estate workflow audit",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://prestyj.com/ai-first-audit",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "https://prestyj.com/ai-first-audit",
  },
};

export default function AiFirstAuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
