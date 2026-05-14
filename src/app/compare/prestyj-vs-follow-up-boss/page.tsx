"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { followUpBossCompareData } from "@/lib/compare/data/follow-up-boss";

export default function PrestyjVsFollowUpBossPage() {
  return <ComparePageWrapper data={followUpBossCompareData} />;
}
