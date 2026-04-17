"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { ugcCreatorsCompareData } from "@/lib/compare/data/ugc-creators";

export default function PrestyJVsUgcCreatorsPage() {
  return <ComparePageWrapper data={ugcCreatorsCompareData} />;
}
