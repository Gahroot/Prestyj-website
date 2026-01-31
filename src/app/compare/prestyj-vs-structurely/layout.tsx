import { generateCompareMetadata } from "@/lib/compare/metadata";
import { structurelyMetadata } from "@/lib/compare/data/structurely";

export const metadata = generateCompareMetadata(structurelyMetadata);

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
