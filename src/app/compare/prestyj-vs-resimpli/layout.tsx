import { generateCompareMetadata } from "@/lib/compare/metadata";
import { resimpliMetadata } from "@/lib/compare/data/resimpli";

export const metadata = generateCompareMetadata(resimpliMetadata);

export default function PrestyjVsResimpliLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
