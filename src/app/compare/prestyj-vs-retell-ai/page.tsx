"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { retellAiCompareData } from "@/lib/compare/data/retell-ai";

export default function PrestyjVsRetellAiPage() {
  return <ComparePageWrapper data={retellAiCompareData} />;
}
