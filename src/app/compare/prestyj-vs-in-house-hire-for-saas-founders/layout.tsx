import { generateCompareMetadata } from "@/lib/compare/metadata";
import { saasFoundersVsInHouseHireForCompareDataMetadata } from "@/lib/compare/data/prestyj-vs-in-house-hire-for-saas-founders";

export const metadata = generateCompareMetadata(saasFoundersVsInHouseHireForCompareDataMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
