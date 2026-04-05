import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionShellProps = {
  id?: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  /** When true, label+title are centered */
  centered?: boolean;
};

export function SectionShell({
  id,
  label,
  title,
  description,
  children,
  className = "",
  centered = false,
}: SectionShellProps) {
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-28 ${className}`}>
      <Container>
        <header
          className={
            centered
              ? "mx-auto mb-12 max-w-2xl text-center sm:mb-14"
              : "mb-12 max-w-2xl sm:mb-14"
          }
        >
          <p className="text-sm font-medium tracking-wide text-accent">{label}</p>
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-pretty text-base leading-relaxed text-secondary">
              {description}
            </p>
          ) : null}
        </header>
        {children}
      </Container>
    </section>
  );
}
