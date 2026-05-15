import { generateCompareMetadata } from "@/lib/compare/metadata";
import { retellAiCompareMetadata } from "@/lib/compare/data/retell-ai";

export const metadata = generateCompareMetadata(retellAiCompareMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
