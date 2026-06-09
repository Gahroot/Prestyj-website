import { generateCompareMetadata } from "@/lib/compare/metadata";
import { creatorsVsFiverrForCompareDataMetadata } from "@/lib/compare/data/prestyj-vs-fiverr-for-creators";

export const metadata = generateCompareMetadata(creatorsVsFiverrForCompareDataMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
