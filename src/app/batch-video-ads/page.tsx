import type { Metadata } from "next";
import { BatchVideoAdsClient } from "./batch-video-ads-client";

export const metadata: Metadata = {
  title: "Batch Video Ads",
  description:
    "Batch Video Ads — part of our AI agents for marketing & sales. Generate 300–1,000 scripted video ad variations from a single recording session, delivered in 24 hours.",
  openGraph: {
    title: "Batch Video Ads",
    description:
      "Batch Video Ads — part of our AI agents for marketing & sales. 300–1,000 scripted video ad variations from one recording session.",
    type: "website",
  },
};

export default function BatchVideoAdsPage() {
  return (
    <>
      <BatchVideoAdsClient />
    </>
  );
}
