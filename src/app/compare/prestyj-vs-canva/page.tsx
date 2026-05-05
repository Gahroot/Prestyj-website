"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { canvaCompareData } from "@/lib/compare/data/canva";

export default function PrestyJVsCanvaPage() {
  return <ComparePageWrapper data={canvaCompareData} />;
}
