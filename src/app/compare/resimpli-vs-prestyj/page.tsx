"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { resimpliCompareData } from "@/lib/compare/data/resimpli";

export default function REsimpliVsPrestyjPage() {
  return <ComparePageWrapper data={resimpliCompareData} />;
}
