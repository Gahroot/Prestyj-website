"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { driftCompareData } from "@/lib/compare/data/drift";

export default function PrestyJVsDriftPage() {
  return <ComparePageWrapper data={driftCompareData} />;
}
