"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { rubyReceptionistsCompareData } from "@/lib/compare/data/ruby-receptionists";

export default function PrestyjVsRubyReceptionistsPage() {
  return <ComparePageWrapper data={rubyReceptionistsCompareData} />;
}
