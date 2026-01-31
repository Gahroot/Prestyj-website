"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { offshoreIsaCompareData } from "@/lib/compare/data/offshore-isa";

export default function PrestyJVsOffshoreIsaPage() {
  return <ComparePageWrapper data={offshoreIsaCompareData} />;
}
