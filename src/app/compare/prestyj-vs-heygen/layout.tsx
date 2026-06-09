import { generateCompareMetadata } from "@/lib/compare/metadata";
import { heygenMetadata } from "@/lib/compare/data/heygen";

export const metadata = generateCompareMetadata(heygenMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
