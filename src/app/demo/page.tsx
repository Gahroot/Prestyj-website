import type { Metadata } from "next";

import { DemoPageClient } from "./client";

export const metadata: Metadata = {
  title: "Live Demo | Prestige AI",
  description: "Experience the AI system firsthand — voice, chat, call, text, and lead form.",
  robots: { index: false, follow: false },
};

export default function DemoPage() {
  return <DemoPageClient />;
}
