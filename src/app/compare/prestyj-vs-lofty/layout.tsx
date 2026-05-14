import { generateCompareMetadata } from "@/lib/compare/metadata";
import { loftyMetadata } from "@/lib/compare/data/lofty";

export const metadata = generateCompareMetadata(loftyMetadata);

export default function PrestyjVsLoftyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
