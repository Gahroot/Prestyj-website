import { generateCompareMetadata } from "@/lib/compare/metadata";
import { smithAiCompareMetadata } from "@/lib/compare/data/smith-ai";

export const metadata = generateCompareMetadata(smithAiCompareMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
