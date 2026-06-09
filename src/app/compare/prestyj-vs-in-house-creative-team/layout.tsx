import { generateCompareMetadata } from "@/lib/compare/metadata";
import { inHouseCreativeTeamMetadata } from "@/lib/compare/data/in-house-creative-team";

export const metadata = generateCompareMetadata(inHouseCreativeTeamMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
