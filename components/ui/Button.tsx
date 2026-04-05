import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsLink = Common & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = Common & {
  type?: "button" | "submit";
  onClick?: () => void;
};

function classes(variant: Variant = "primary") {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  if (variant === "primary") {
    return `${base} bg-accent text-white hover:bg-accent/90`;
  }
  if (variant === "secondary") {
    return `${base} border border-border bg-elevated text-foreground hover:border-secondary/40 hover:bg-surface`;
  }
  return `${base} text-secondary hover:text-foreground`;
}

export function ButtonLink({
  href,
  children,
  className = "",
  variant = "primary",
  external,
}: ButtonAsLink) {
  const c = `${classes(variant)} ${className}`.trim();
  if (external) {
    return (
      <a href={href} className={c} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={c}>
      {children}
    </Link>
  );
}

export function Button({
  type = "button",
  onClick,
  children,
  className = "",
  variant = "primary",
}: ButtonAsButton) {
  return (
    <button type={type} onClick={onClick} className={`${classes(variant)} ${className}`.trim()}>
      {children}
    </button>
  );
}
