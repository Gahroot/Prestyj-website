import { permanentRedirect } from "next/navigation";

// next.config.ts redirects this path first; this keeps the route safe if that rule is removed.
export default function Page(): never {
  permanentRedirect("/custom-ai-agents");
}
