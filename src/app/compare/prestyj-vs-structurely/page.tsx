"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { structurelyCompareData } from "@/lib/compare/data/structurely";

export default function PrestyjVsStructurelyPage() {
  return <ComparePageWrapper data={structurelyCompareData} />;
}
