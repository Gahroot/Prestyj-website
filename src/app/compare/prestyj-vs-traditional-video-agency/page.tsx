"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { traditionalVideoAgencyCompareData } from "@/lib/compare/data/traditional-video-agency";

export default function PrestyjVsTraditionalVideoAgencyPage() {
  return <ComparePageWrapper data={traditionalVideoAgencyCompareData} />;
}
