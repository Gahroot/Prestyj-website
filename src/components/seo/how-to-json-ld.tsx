import { SafeJsonLd } from "./safe-json-ld";

interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

interface HowToJsonLdProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration e.g. "PT30M"
  estimatedCost?: { currency: string; value: string };
  image?: string;
}

export function HowToJsonLd({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
  image,
}: HowToJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(totalTime && { totalTime }),
    ...(image && { image }),
    ...(estimatedCost && {
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: estimatedCost.currency,
        value: estimatedCost.value,
      },
    }),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
      ...(step.image && { image: step.image }),
    })),
  };

  return <SafeJsonLd data={jsonLd} />;
}
