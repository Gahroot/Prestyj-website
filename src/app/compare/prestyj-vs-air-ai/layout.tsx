import { generateCompareMetadata } from "@/lib/compare/metadata";
import { airAiCompareMetadata } from "@/lib/compare/data/air-ai";

export const metadata = generateCompareMetadata(airAiCompareMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
