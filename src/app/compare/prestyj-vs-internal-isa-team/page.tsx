"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { internalIsaTeamCompareData } from "@/lib/compare/data/internal-isa-team";

export default function PrestyJVsInternalIsaTeamPage() {
  return <ComparePageWrapper data={internalIsaTeamCompareData} />;
}
