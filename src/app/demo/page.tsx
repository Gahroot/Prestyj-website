import type { Metadata } from "next";

import { DemoPageClient } from "./client";

export const metadata: Metadata = {
  title: "Live Demo",
  description:
    "Try Prestyj's AI agents for marketing & sales live — voice, chat, call, text, and lead form, all in one interactive demo.",
  robots: { index: false, follow: false },
};

export default function DemoPage() {
  return <DemoPageClient />;
}
