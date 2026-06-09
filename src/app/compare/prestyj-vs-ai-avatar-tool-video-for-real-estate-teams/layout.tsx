import { generateCompareMetadata } from "@/lib/compare/metadata";
import { realEstateTeamsVsAiAvatarToolVideoMetadata } from "@/lib/compare/data/prestyj-vs-ai-avatar-tool-video-for-real-estate-teams";

export const metadata = generateCompareMetadata(realEstateTeamsVsAiAvatarToolVideoMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
