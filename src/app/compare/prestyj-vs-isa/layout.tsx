import { generateCompareMetadata } from "@/lib/compare/metadata";
import { isaMetadata } from "@/lib/compare/data/isa";

export const metadata = generateCompareMetadata(isaMetadata);

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
