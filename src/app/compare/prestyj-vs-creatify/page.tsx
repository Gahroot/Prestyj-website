"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { creatifyCompareData } from "@/lib/compare/data/creatify";

export default function PrestyJVsCreatifyPage() {
  return <ComparePageWrapper data={creatifyCompareData} />;
}
