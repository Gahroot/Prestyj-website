import { generateCompareMetadata } from "@/lib/compare/metadata";
import { pictoryMetadata } from "@/lib/compare/data/pictory";

export const metadata = generateCompareMetadata(pictoryMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
