"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { ylopoCompareData } from "@/lib/compare/data/ylopo";

export default function PrestyJVsYlopoPage() {
  return <ComparePageWrapper data={ylopoCompareData} />;
}
