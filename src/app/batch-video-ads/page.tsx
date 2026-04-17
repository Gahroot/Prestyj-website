import type { Metadata } from "next";
import { BatchVideoAdsClient } from "./batch-video-ads-client";
import { BatchVideoAdsProductJsonLd } from "@/components/seo/batch-video-ads-product-json-ld";

export const metadata: Metadata = {
  title: "Batch Video Ads | 300–1000 Scripted Ads in 24 Hours | PRESTYJ",
  description:
    "Send us 15–20 minutes of casual selfie footage. Get back hundreds of scripted ad variations that look like content, not ads. Find winning hooks in days — not six months of one-a-day posting.",
  openGraph: {
    title: "Batch Video Ads | Hundreds of Ad Variations in 24 Hours",
    description:
      "One recording session. Hundreds of ad angles tested in parallel. Stop guessing what works.",
    type: "website",
  },
};

export default function BatchVideoAdsPage() {
  return (
    <>
      <BatchVideoAdsProductJsonLd />
      <BatchVideoAdsClient />
    </>
  );
}
