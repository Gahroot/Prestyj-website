import type { Metadata } from "next";
import { BatchVideoAdsClient } from "./batch-video-ads-client";

export const metadata: Metadata = {
  title: "100 Video Ads for $497 — Batch Video Ads by Prestyj",
  description:
    "100 vertical video ads in 24 hours for $497. One recording session. Scale to 300, 500, or 1,000 anytime. For anyone running paid ads.",
  openGraph: {
    title: "100 Video Ads for $497 — Batch Video Ads by Prestyj",
    description:
      "100 vertical video ads in 24 hours for $497. One recording session. Scale to 300, 500, or 1,000 anytime. For anyone running paid ads.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "100 Video Ads for $497 — Batch Video Ads by Prestyj",
    description:
      "100 vertical video ads in 24 hours for $497. One recording session. Scale to 300, 500, or 1,000 anytime. For anyone running paid ads.",
  },
};

export default function BatchVideoAdsPage() {
  return (
    <>
      <BatchVideoAdsClient />
    </>
  );
}
