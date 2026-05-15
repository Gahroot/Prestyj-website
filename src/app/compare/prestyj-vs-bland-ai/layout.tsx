import { generateCompareMetadata } from "@/lib/compare/metadata";
import { blandAiCompareMetadata } from "@/lib/compare/data/bland-ai";

export const metadata = generateCompareMetadata(blandAiCompareMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
