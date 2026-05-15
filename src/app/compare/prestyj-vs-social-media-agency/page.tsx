"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { socialMediaAgencyCompareData } from "@/lib/compare/data/social-media-agency";

export default function PrestyjVsSocialMediaAgencyPage() {
  return <ComparePageWrapper data={socialMediaAgencyCompareData} />;
}
