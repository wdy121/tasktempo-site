import Link from "next/link";
import { Container } from "./Container";
import { ButtonLink } from "@/components/ui/Button";
import { siteLinks, siteConfig } from "@/lib/site";

const nav = [
  { href: "#features", label: "功能" },
  { href: "#scenarios", label: "场景" },
  { href: "#why", label: "为什么选择" },
  { href: "#faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between gap-4 sm:h-16">
        <Link href="/" className="flex items-center gap-2.5 text-foreground">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-inner ring-1 ring-border"
            aria-hidden
          >
            <span className="h-3 w-3 rounded-sm bg-accent shadow-[0_0_12px_rgba(76,125,255,0.45)]" />
          </span>
          <span className="text-sm font-semibold tracking-tight sm:text-base">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="页面导航">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-secondary transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ButtonLink href={siteLinks.download} variant="primary" className="px-4 py-2 text-xs sm:text-sm">
            下载 / 体验
          </ButtonLink>
        </div>
      </Container>
      <div className="border-b border-border/60 md:hidden">
        <Container className="flex gap-5 overflow-x-auto py-2.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 text-xs text-secondary transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </Container>
      </div>
    </header>
  );
}
