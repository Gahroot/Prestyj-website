import { generateCompareMetadata } from "@/lib/compare/metadata";
import { alannaAiMetadata } from "@/lib/compare/data/alanna-ai";

export const metadata = generateCompareMetadata(alannaAiMetadata);

export default function PrestyjVsAlannaAiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
