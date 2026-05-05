"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { pencilCompareData } from "@/lib/compare/data/pencil";

export default function PrestyjVsPencilPage() {
  return <ComparePageWrapper data={pencilCompareData} />;
}
