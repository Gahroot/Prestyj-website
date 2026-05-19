"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { inHouseCreativeTeamCompareData } from "@/lib/compare/data/in-house-creative-team";

export default function PrestyjVsInHouseCreativeTeamPage() {
  return <ComparePageWrapper data={inHouseCreativeTeamCompareData} />;
}
