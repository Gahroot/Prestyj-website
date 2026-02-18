"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { diyAiCompareData } from "@/lib/compare/data/diy-ai";

export default function AiConsultantVsDiyAiPage() {
  return <ComparePageWrapper data={diyAiCompareData} />;
}
