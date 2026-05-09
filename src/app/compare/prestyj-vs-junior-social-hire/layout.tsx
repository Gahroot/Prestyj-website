import type { Metadata } from "next";
import { generateCompareMetadata } from "@/lib/compare/metadata";
import { juniorSocialHireMetadata } from "@/lib/compare/data/junior-social-hire";

export const metadata: Metadata = generateCompareMetadata(juniorSocialHireMetadata);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
