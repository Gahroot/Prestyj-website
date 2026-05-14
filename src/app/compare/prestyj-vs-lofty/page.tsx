"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { loftyCompareData } from "@/lib/compare/data/lofty";

export default function PrestyjVsLoftyPage() {
  return <ComparePageWrapper data={loftyCompareData} />;
}
