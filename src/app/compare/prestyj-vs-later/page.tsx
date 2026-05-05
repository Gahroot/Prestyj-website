"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { laterCompareData } from "@/lib/compare/data/later";

export default function PrestyJVsLaterPage() {
  return <ComparePageWrapper data={laterCompareData} />;
}
