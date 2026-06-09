import { generateCompareMetadata } from "@/lib/compare/metadata";
import { serviceBusinessOwnersVsSmmaForCompareDataMetadata } from "@/lib/compare/data/prestyj-vs-smma-for-service-business-owners";

export const metadata = generateCompareMetadata(serviceBusinessOwnersVsSmmaForCompareDataMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
