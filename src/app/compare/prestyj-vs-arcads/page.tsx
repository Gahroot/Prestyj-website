"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { arcadsCompareData } from "@/lib/compare/data/arcads";

export default function PrestyJVsArcadsPage() {
  return <ComparePageWrapper data={arcadsCompareData} />;
}
