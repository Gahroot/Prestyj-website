import { generateCompareMetadata } from "@/lib/compare/metadata";
import { adcreativeAiMetadata } from "@/lib/compare/data/adcreative-ai";

export const metadata = generateCompareMetadata(adcreativeAiMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
