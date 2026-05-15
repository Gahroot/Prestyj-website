"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { airAiCompareData } from "@/lib/compare/data/air-ai";

export default function PrestyjVsAirAiPage() {
  return <ComparePageWrapper data={airAiCompareData} />;
}
