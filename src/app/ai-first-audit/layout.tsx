import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The AI-First Audit — Find Your $50K/yr Time-Cost in 6 Minutes",
  description:
    "Free interactive audit. Score 5–15 of your team's tasks on leverage and AI-readiness, get your top 3 'automate first' recommendations, a 7-day deployment plan, and the exact tools to use — emailed instantly.",
  keywords: [
    "ai audit",
    "ai-first audit",
    "ai readiness assessment",
    "automation roi calculator",
    "what to automate with ai",
    "ai deployment plan",
  ],
  openGraph: {
    title: "The AI-First Audit",
    description:
      "Find the 3 tasks your team should automate first. Free, 6 minutes, personalized 7-day plan emailed instantly.",
    type: "website",
    url: "https://prestyj.com/ai-first-audit",
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI-First Audit",
    description: "Find the 3 tasks your team should automate first.",
  },
  alternates: {
    canonical: "https://prestyj.com/ai-first-audit",
  },
};

export default function AiFirstAuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
