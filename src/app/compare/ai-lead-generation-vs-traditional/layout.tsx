import { generateCompareMetadata } from "@/lib/compare/metadata";
import { aiLeadGenVsTraditionalMetadata } from "@/lib/compare/data/ai-lead-generation-vs-traditional";

export const metadata = generateCompareMetadata(aiLeadGenVsTraditionalMetadata);

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
