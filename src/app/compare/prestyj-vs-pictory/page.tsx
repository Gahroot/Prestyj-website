"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { pictoryCompareData } from "@/lib/compare/data/pictory";

export default function PrestyjVsPictoryPage() {
  return <ComparePageWrapper data={pictoryCompareData} />;
}
