import { generateCompareMetadata } from "@/lib/compare/metadata";
import { traditionalVideoAgencyMetadata } from "@/lib/compare/data/traditional-video-agency";

export const metadata = generateCompareMetadata(traditionalVideoAgencyMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
