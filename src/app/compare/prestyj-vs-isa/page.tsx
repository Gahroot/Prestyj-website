"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { isaCompareData } from "@/lib/compare/data/isa";

export default function PrestyJVsIsaPage() {
  return <ComparePageWrapper data={isaCompareData} />;
}
