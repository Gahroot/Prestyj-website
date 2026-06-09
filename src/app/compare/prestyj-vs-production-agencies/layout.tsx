import { generateCompareMetadata } from "@/lib/compare/metadata";
import { productionAgenciesMetadata } from "@/lib/compare/data/production-agencies";

export const metadata = generateCompareMetadata(productionAgenciesMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
