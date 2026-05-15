"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { smithAiCompareData } from "@/lib/compare/data/smith-ai";

export default function PrestyjVsSmithAiPage() {
  return <ComparePageWrapper data={smithAiCompareData} />;
}
