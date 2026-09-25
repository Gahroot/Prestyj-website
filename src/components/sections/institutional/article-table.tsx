import type { ComponentProps, ReactElement } from "react";

/** Preserve readable figures on narrow screens without widening the article rail. */
export function ArticleTable({
  children,
  className,
  ...props
}: ComponentProps<"table">): ReactElement {
  return (
    <div
      role="region"
      aria-label="Article data table"
      tabIndex={0}
      className="my-8 overflow-x-auto"
    >
      <table {...props} className={`min-w-[44rem] [overflow-wrap:normal] ${className ?? ""}`}>
        {children}
      </table>
    </div>
  );
}
