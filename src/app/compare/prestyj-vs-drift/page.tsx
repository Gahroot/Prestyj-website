"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { driftCompareData } from "@/lib/compare/data/drift";

export default function PrestyjVsDriftPage() {
  return <ComparePageWrapper data={driftCompareData} />;
}
