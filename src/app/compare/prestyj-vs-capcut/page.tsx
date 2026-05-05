"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { capcutCompareData } from "@/lib/compare/data/capcut";

export default function PrestyJVsCapCutPage() {
  return <ComparePageWrapper data={capcutCompareData} />;
}
