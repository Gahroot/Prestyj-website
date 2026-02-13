"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { answeringServiceCompareData } from "@/lib/compare/data/answering-service";

export default function PrestyJVsAnsweringServicePage() {
  return <ComparePageWrapper data={answeringServiceCompareData} />;
}
