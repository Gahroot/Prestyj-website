import { generateCompareMetadata } from "@/lib/compare/metadata";
import { synthesiaMetadata } from "@/lib/compare/data/synthesia";

export const metadata = generateCompareMetadata(synthesiaMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
