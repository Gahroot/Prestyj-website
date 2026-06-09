import { generateCompareMetadata } from "@/lib/compare/metadata";
import { agencyOwnersVsVaPlusTemplatesForCompareDataMetadata } from "@/lib/compare/data/prestyj-vs-va-plus-templates-for-agency-owners";

export const metadata = generateCompareMetadata(agencyOwnersVsVaPlusTemplatesForCompareDataMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
