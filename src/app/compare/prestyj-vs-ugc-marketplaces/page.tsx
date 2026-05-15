"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { ugcMarketplacesCompareData } from "@/lib/compare/data/ugc-marketplaces";

export default function PrestyjVsUgcMarketplacesPage() {
  return <ComparePageWrapper data={ugcMarketplacesCompareData} />;
}
