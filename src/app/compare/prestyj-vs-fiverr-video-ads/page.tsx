"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { fiverrVideoAdsCompareData } from "@/lib/compare/data/fiverr-video-ads";

export default function PrestyJVsFiverrVideoAdsPage() {
  return <ComparePageWrapper data={fiverrVideoAdsCompareData} />;
}
