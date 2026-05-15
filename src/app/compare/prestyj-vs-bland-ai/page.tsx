"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { blandAiCompareData } from "@/lib/compare/data/bland-ai";

export default function PrestyjVsBlandAiPage() {
  return <ComparePageWrapper data={blandAiCompareData} />;
}
