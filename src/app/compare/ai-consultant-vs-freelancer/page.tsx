"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { freelancerCompareData } from "@/lib/compare/data/freelancer";

export default function AiConsultantVsFreelancerPage() {
  return <ComparePageWrapper data={freelancerCompareData} />;
}
