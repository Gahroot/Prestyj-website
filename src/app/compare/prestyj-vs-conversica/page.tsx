"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { conversicaCompareData } from "@/lib/compare/data/conversica";

export default function PrestyjVsConversicaPage() {
  return <ComparePageWrapper data={conversicaCompareData} />;
}
