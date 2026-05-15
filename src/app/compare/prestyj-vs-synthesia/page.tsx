"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { synthesiaCompareData } from "@/lib/compare/data/synthesia";

export default function PrestyjVsSynthesiaPage() {
  return <ComparePageWrapper data={synthesiaCompareData} />;
}
