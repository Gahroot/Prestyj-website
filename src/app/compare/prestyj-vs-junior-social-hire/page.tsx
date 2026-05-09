"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { juniorSocialHireCompareData } from "@/lib/compare/data/junior-social-hire";

export default function PrestyjVsJuniorSocialHirePage() {
  return <ComparePageWrapper data={juniorSocialHireCompareData} />;
}
