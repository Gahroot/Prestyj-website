"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { synthflowCompareData } from "@/lib/compare/data/synthflow";

export default function PrestyjVsSynthflowPage() {
  return <ComparePageWrapper data={synthflowCompareData} />;
}
