import { generateCompareMetadata } from "@/lib/compare/metadata";
import { serviceBusinessOwnersVsAgencyVideoMetadata } from "@/lib/compare/data/prestyj-vs-agency-video-for-service-business-owners";

export const metadata = generateCompareMetadata(serviceBusinessOwnersVsAgencyVideoMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
