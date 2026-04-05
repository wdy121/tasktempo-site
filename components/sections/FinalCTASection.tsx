import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { siteLinks } from "@/lib/site";

export function FinalCTASection() {
  return (
    <section id="download" className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-surface via-elevated to-background px-8 py-14 text-center sm:px-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
            aria-hidden
          />
          <h2 className="relative text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            让下一件事，从桌面开始。
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-secondary sm:text-base">
            轻量、简洁、可计时。适合长期放在桌角。
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={siteLinks.download}>下载 / 立即体验</ButtonLink>
            <ButtonLink href={siteLinks.followUpdates} variant="secondary">
              关注更新
            </ButtonLink>
          </div>
          <p className="relative mt-4 text-xs text-muted">
            「关注更新」链接请在 <code className="rounded bg-surface px-1">lib/site.ts</code>{" "}
            中替换为 GitHub Releases / 邮件订阅等
          </p>
        </div>
      </Container>
    </section>
  );
}
