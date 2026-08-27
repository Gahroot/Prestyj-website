import { audiences } from "@/lib/institutional/audiences";
import { capabilities } from "@/lib/institutional/capabilities";
import { proofRecords } from "@/lib/institutional/proof";
import { researchArticles } from "@/lib/institutional/research";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export function GET(): Response {
  const lines = [
    "# Prestyj",
    "",
    siteConfig.description,
    "",
    "## Audience",
    ...audiences.map(
      (audience) => `- ${audience.navLabel}: ${siteConfig.url}/for/${audience.slug}`,
    ),
    "",
    "## Capabilities",
    ...capabilities.map(
      (capability) =>
        `- ${capability.navLabel}: ${capability.description} ${siteConfig.url}/capabilities/${capability.slug}`,
    ),
    "",
    "## Work",
    ...proofRecords.map((record) => `- [${record.stage}] ${record.name}: ${record.delivered}`),
    "",
    "## Research",
    ...researchArticles.map(
      (article) => `- ${article.title}: ${siteConfig.url}/blog/${article.slug}`,
    ),
    "",
    "## Canonical pages",
    `- Platform: ${siteConfig.url}/platform`,
    `- Work: ${siteConfig.url}/results`,
    `- Engagements: ${siteConfig.url}/pricing`,
    `- Get access: ${siteConfig.url}/book-demo`,
    "",
    "## Claim boundaries",
    "- Vendor names describe potential source systems, not partnerships or prebuilt connectors.",
    "- Proof records are anonymized and labeled by actual stage.",
    "- Reference architecture is not represented as live or in production.",
    "- Prestyj does not provide legal, tax, accounting, or investment advice.",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
