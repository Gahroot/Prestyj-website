import { generateCompareMetadata } from "@/lib/compare/metadata";
import { ugcCreatorsMetadata } from "@/lib/compare/data/ugc-creators";

export const metadata = generateCompareMetadata(ugcCreatorsMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
