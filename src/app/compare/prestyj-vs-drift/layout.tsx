import { generateCompareMetadata } from "@/lib/compare/metadata";
import { driftMetadata } from "@/lib/compare/data/drift";

export const metadata = generateCompareMetadata(driftMetadata);

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
