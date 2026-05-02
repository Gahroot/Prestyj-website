import { SafeJsonLd } from "./safe-json-ld";

interface ListItem {
  name: string;
  url: string;
  description?: string;
}

interface ItemListJsonLdProps {
  name: string;
  description: string;
  items: ListItem[];
}

export function ItemListJsonLd({
  name,
  description,
  items,
}: ItemListJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      ...(item.description && { description: item.description }),
    })),
  };

  return <SafeJsonLd data={jsonLd} />;
}
