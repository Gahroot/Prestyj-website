"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { fullTimeEmployeeCompareData } from "@/lib/compare/data/full-time-employee";

export default function FractionalAiConsultantVsFullTimeEmployeePage() {
  return <ComparePageWrapper data={fullTimeEmployeeCompareData} />;
}
