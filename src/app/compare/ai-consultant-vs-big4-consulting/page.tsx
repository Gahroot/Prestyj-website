"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { big4ConsultingCompareData } from "@/lib/compare/data/big4-consulting";

export default function AiConsultantVsBig4ConsultingPage() {
  return <ComparePageWrapper data={big4ConsultingCompareData} />;
}
