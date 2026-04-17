"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { aiAvatarAdsCompareData } from "@/lib/compare/data/ai-avatar-ads";

export default function PrestyJVsAiAvatarAdsPage() {
  return <ComparePageWrapper data={aiAvatarAdsCompareData} />;
}
