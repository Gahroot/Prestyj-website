import { generateCompareMetadata } from "@/lib/compare/metadata";
import { insenseMetadata } from "@/lib/compare/data/insense";

export const metadata = generateCompareMetadata(insenseMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
