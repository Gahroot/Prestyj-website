"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { hootsuiteManagedCompareData } from "@/lib/compare/data/hootsuite-managed";

export default function PrestyjVsHootsuiteManagedPage() {
  return <ComparePageWrapper data={hootsuiteManagedCompareData} />;
}
