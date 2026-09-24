import type { ReactElement, ReactNode } from "react";

export function EditorialPageHeader({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}): ReactElement {
  return (
    <header className="editorial-page-header">
      <h1>{title}</h1>
      {children}
    </header>
  );
}
