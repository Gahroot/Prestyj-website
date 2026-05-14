import { generateCompareMetadata } from "@/lib/compare/metadata";
import { followUpBossMetadata } from "@/lib/compare/data/follow-up-boss";

export const metadata = generateCompareMetadata(followUpBossMetadata);

export default function PrestyjVsFollowUpBossLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
