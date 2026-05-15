import { generateCompareMetadata } from "@/lib/compare/metadata";
import { vapiCompareMetadata } from "@/lib/compare/data/vapi";

export const metadata = generateCompareMetadata(vapiCompareMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
