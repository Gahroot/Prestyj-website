import { generateCompareMetadata } from "@/lib/compare/metadata";
import { internalIsaTeamMetadata } from "@/lib/compare/data/internal-isa-team";

export const metadata = generateCompareMetadata(internalIsaTeamMetadata);

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
