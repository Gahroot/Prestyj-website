import { generateCompareMetadata } from "@/lib/compare/metadata";
import { offshoreIsaMetadata } from "@/lib/compare/data/offshore-isa";

export const metadata = generateCompareMetadata(offshoreIsaMetadata);

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
