/**
 * Safe JSON-LD renderer that escapes special characters to prevent XSS
 * Replaces dangerouslySetInnerHTML with a secure approach
 *
 * This component properly escapes HTML special characters in JSON-LD content
 * to prevent script injection attacks while maintaining valid JSON-LD format.
 */
export function SafeJsonLd({ data }: { data: unknown }) {
  // Serialize JSON with proper escaping of HTML special characters
  // This prevents XSS attacks while maintaining valid JSON-LD
  const jsonString = JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}
