// @ts-nocheck
import * as __fd_glob_3 from "../content/blog/why-leads-go-cold.mdx?collection=blog"
import * as __fd_glob_2 from "../content/blog/speed-to-lead.mdx?collection=blog"
import * as __fd_glob_1 from "../content/blog/isa-vs-ai.mdx?collection=blog"
import * as __fd_glob_0 from "../content/blog/ai-sales-agents-explained.mdx?collection=blog"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const blog = await create.docs("blog", "content/blog", {}, {"ai-sales-agents-explained.mdx": __fd_glob_0, "isa-vs-ai.mdx": __fd_glob_1, "speed-to-lead.mdx": __fd_glob_2, "why-leads-go-cold.mdx": __fd_glob_3, });