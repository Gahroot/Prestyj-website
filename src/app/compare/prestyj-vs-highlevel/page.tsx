"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { highlevelCompareData } from "@/lib/compare/data/highlevel";

export default function PrestyjVsHighLevelPage() {
  return <ComparePageWrapper data={highlevelCompareData} />;
}
