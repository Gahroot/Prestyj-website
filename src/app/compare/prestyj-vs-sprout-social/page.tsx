"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { sproutSocialCompareData } from "@/lib/compare/data/sprout-social";

export default function PrestyJVsSproutSocialPage() {
  return <ComparePageWrapper data={sproutSocialCompareData} />;
}
