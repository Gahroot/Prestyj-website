import { generateCompareMetadata } from "@/lib/compare/metadata";
import { sproutSocialMetadata } from "@/lib/compare/data/sprout-social";

export const metadata = generateCompareMetadata(sproutSocialMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
