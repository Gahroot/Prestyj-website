import { generateCompareMetadata } from "@/lib/compare/metadata";
import { aiAvatarAdsMetadata } from "@/lib/compare/data/ai-avatar-ads";

export const metadata = generateCompareMetadata(aiAvatarAdsMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
