"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { loftyCompareData } from "@/lib/compare/data/lofty";

export default function LoftyVsPrestyjPage() {
  return <ComparePageWrapper data={loftyCompareData} />;
}
