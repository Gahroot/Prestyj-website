import type { Metadata } from "next";
import { BatchVideoAdsClient } from "./batch-video-ads-client";

export const metadata: Metadata = {
  title: "Batch Video Ads — Add-on to Your AI Marketing Agent Plan",
  description:
    "AI-produced video ads as an add-on to your AI marketing agent plan. 300+ scripted video ads from a single recording session, delivered in 1–2 business days.",
  openGraph: {
    title: "Batch Video Ads — Add-on to Your AI Marketing Agent Plan",
    description:
      "AI-produced video ads as an add-on to your AI marketing agent plan. 300+ scripted video ads from a single recording session, delivered in 1–2 business days.",
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
