"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { vapiCompareData } from "@/lib/compare/data/vapi";

export default function PrestyjVsVapiPage() {
  return <ComparePageWrapper data={vapiCompareData} />;
}
