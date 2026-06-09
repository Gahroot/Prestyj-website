import { generateCompareMetadata } from "@/lib/compare/metadata";
import { hvacCompaniesVsUgcCreatorVideoMetadata } from "@/lib/compare/data/prestyj-vs-ugc-creator-video-for-hvac-companies";

export const metadata = generateCompareMetadata(hvacCompaniesVsUgcCreatorVideoMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
