"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { hootsuiteCompareData } from "@/lib/compare/data/hootsuite";

export default function PrestyJVsHootsuitePage() {
  return <ComparePageWrapper data={hootsuiteCompareData} />;
}
