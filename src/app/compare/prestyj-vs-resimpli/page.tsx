"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { resimpliCompareData } from "@/lib/compare/data/resimpli";

export default function PrestyjVsResimpliPage() {
  return <ComparePageWrapper data={resimpliCompareData} />;
}
