"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { alannaAiCompareData } from "@/lib/compare/data/alanna-ai";

export default function PrestyjVsAlannaAiPage() {
  return <ComparePageWrapper data={alannaAiCompareData} />;
}
