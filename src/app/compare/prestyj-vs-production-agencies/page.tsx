"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { productionAgenciesCompareData } from "@/lib/compare/data/production-agencies";

export default function PrestyJVsProductionAgenciesPage() {
  return <ComparePageWrapper data={productionAgenciesCompareData} />;
}
