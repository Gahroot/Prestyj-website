import type { Metadata } from "next";

const PAGE_URL = "https://prestyj.com/ai-content-department/intake";

export const metadata: Metadata = {
  title: "Brand Kit Intake | AI Content Department — Prestyj",
  description:
    "Send us your brand kit — business info, audience, voice, platforms, colors, and logo — so we can have your AI Content Department ready before your strategy call.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Brand Kit Intake | AI Content Department — Prestyj",
    description:
      "Send us your brand kit so we can hit the ground running on your AI Content Department.",
    type: "website",
    url: PAGE_URL,
  },
};

export default function ContentEngineIntakeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
