"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { bufferCompareData } from "@/lib/compare/data/buffer";

export default function PrestyJVsBufferPage() {
  return <ComparePageWrapper data={bufferCompareData} />;
}
