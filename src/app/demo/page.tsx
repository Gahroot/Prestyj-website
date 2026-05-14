import type { Metadata } from "next";

import { DemoPageClient } from "./client";

export const metadata: Metadata = {
  title: "Live Demo",
  description:
    "Test Prestyj's AI agents live. Call, text, or fill out the form — our AI will respond as if you were a real lead.",
  robots: { index: false, follow: false },
};

export default function DemoPage() {
  return <DemoPageClient />;
}
