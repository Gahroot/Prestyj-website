import { generateCompareMetadata } from "@/lib/compare/metadata";
import { synthflowCompareMetadata } from "@/lib/compare/data/synthflow";

export const metadata = generateCompareMetadata(synthflowCompareMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
