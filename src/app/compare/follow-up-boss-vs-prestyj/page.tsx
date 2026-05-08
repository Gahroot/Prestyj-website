"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { followUpBossCompareData } from "@/lib/compare/data/follow-up-boss";

export default function FollowUpBossVsPrestyjPage() {
  return <ComparePageWrapper data={followUpBossCompareData} />;
}
