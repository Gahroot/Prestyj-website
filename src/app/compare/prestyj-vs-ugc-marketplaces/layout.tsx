import { generateCompareMetadata } from "@/lib/compare/metadata";
import { ugcMarketplacesMetadata } from "@/lib/compare/data/ugc-marketplaces";

export const metadata = generateCompareMetadata(ugcMarketplacesMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
