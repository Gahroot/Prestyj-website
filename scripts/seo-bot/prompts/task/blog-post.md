# Institutional article draft

Return one JSON object with exactly these keys:

- `slug`: lowercase hyphen-separated slug matching the human-assigned task.
- `frontmatter`: `title` (10–100 characters), `description` (30–240), optional `category` and `keywords` array. No date, author credential or image claim.
- `body`: complete plain Markdown, at least 600 words. No frontmatter, HTML, JSX, imports, exports, braces, raw executable snippets, embedded assets or scripts.
- `internalLinks`: array of paths from the supplied public allowlist.
- `faqs`: optional question/answer objects only when useful, otherwise an empty array.

The article must contain a practical checklist or method, a concrete example labeled synthetic unless actually evidenced, reviewer responsibilities, and a Sources and limitations section. Differentiate the reader task from all reserved ledger topics. Do not generate without an explicit queued title, keyword and slug.

Do not fill missing evidence with simulated search metrics, invented customers or credentials. Do not claim content is live, reviewed, shipped or deployed. Qualified legal/accounting/security review remains pending where relevant. This artifact will be stored as inert Markdown outside the executable content collection; a human must review it before promotion.
