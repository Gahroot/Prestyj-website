"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { goodcallCompareData } from "@/lib/compare/data/goodcall";

export default function PrestyjVsGoodcallPage() {
  return <ComparePageWrapper data={goodcallCompareData} />;
}
