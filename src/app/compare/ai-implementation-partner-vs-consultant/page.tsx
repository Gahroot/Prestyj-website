"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { aiImplementationPartnerCompareData } from "@/lib/compare/data/ai-implementation-partner";

export default function AiImplementationPartnerVsConsultantPage() {
  return <ComparePageWrapper data={aiImplementationPartnerCompareData} />;
}
