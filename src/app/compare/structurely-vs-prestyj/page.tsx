"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { structurelyCompareData } from "@/lib/compare/data/structurely";

export default function StructurelyVsPrestyjPage() {
  return <ComparePageWrapper data={structurelyCompareData} />;
}
