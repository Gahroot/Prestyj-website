"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { sproutSocialCompareData } from "@/lib/compare/data/sprout-social";

export default function PrestyjVsSproutSocialPage() {
  return <ComparePageWrapper data={sproutSocialCompareData} />;
}
