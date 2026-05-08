"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { alannaAiCompareData } from "@/lib/compare/data/alanna-ai";

export default function AlannaAiVsPrestyjPage() {
  return <ComparePageWrapper data={alannaAiCompareData} />;
}
