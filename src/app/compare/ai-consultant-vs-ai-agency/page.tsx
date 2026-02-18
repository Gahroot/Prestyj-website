"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { aiAgencyCompareData } from "@/lib/compare/data/ai-agency";

export default function AiConsultantVsAiAgencyPage() {
  return <ComparePageWrapper data={aiAgencyCompareData} />;
}
