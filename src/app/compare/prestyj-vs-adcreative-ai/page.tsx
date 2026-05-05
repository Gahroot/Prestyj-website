"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { adcreativeAiCompareData } from "@/lib/compare/data/adcreative-ai";

export default function PrestyJVsAdCreativeAiPage() {
  return <ComparePageWrapper data={adcreativeAiCompareData} />;
}
