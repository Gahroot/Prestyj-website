import { generateCompareMetadata } from "@/lib/compare/metadata";
import { arcadsMetadata } from "@/lib/compare/data/arcads";

export const metadata = generateCompareMetadata(arcadsMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
