"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { billoCompareData } from "@/lib/compare/data/billo";

export default function PrestyjVsBilloPage() {
  return <ComparePageWrapper data={billoCompareData} />;
}
