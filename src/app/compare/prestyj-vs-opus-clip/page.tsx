"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { opusClipCompareData } from "@/lib/compare/data/opus-clip";

export default function PrestyJVsOpusClipPage() {
  return <ComparePageWrapper data={opusClipCompareData} />;
}
