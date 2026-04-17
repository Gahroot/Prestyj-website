"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { heygenCompareData } from "@/lib/compare/data/heygen";

export default function PrestyJVsHeyGenPage() {
  return <ComparePageWrapper data={heygenCompareData} />;
}
