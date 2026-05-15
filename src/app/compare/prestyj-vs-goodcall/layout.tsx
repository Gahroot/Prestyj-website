import { generateCompareMetadata } from "@/lib/compare/metadata";
import { goodcallCompareMetadata } from "@/lib/compare/data/goodcall";

export const metadata = generateCompareMetadata(goodcallCompareMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
