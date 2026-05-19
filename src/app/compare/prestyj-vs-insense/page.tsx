"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { insenseCompareData } from "@/lib/compare/data/insense";

export default function PrestyjVsInsensePage() {
  return <ComparePageWrapper data={insenseCompareData} />;
}
