import { generateCompareMetadata } from "@/lib/compare/metadata";
import { billoMetadata } from "@/lib/compare/data/billo";

export const metadata = generateCompareMetadata(billoMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
