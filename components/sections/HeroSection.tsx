import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { siteLinks } from "@/lib/site";

function HeroAppPreview() {
  return (
    <div
      className="relative mx-auto w-full max-w-md animate-fade-up rounded-xl border border-border bg-elevated p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.04] lg:mx-0"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="mb-3 flex items-center justify-between gap-2 border-b border-border pb-3">
        <span className="text-xs font-medium text-muted">任务</span>
        <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-medium text-accent">
          计时中 · 12:04
        </span>
      </div>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center justify-between rounded-lg bg-surface px-3 py-2 ring-1 ring-border">
          <span className="text-foreground">写完首页文案</span>
          <span className="text-xs text-accent">置顶</span>
        </li>
        <li className="flex items-center justify-between rounded-lg bg-surface-inner/60 px-3 py-2">
          <span className="text-secondary">整理本周清单</span>
          <span className="text-xs text-muted">待办</span>
        </li>
        <li className="flex items-center justify-between rounded-lg border border-dashed border-border/80 px-3 py-2">
          <span className="text-muted line-through">回复邮件</span>
          <span className="text-xs text-secondary">用时 18 分</span>
        </li>
      </ul>
      <p className="mt-3 text-center text-[11px] text-muted">界面示意 · 可替换为真实截图</p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="border-b border-border/60 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up">
            <p className="text-sm font-medium text-accent">桌面待办 · 专注计时 · 轻量效率工具</p>
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              在桌面上，
              <span className="text-accent">把事做完</span>。
            </h1>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-secondary sm:text-lg">
              TaskTempo 是一款桌面待办小工具：快速记录、整理顺序、置顶要紧事；需要时开始计时，结束即看到这段任务花了多久。不抢戏，适合长期贴在桌面边。
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href={siteLinks.download}>下载 / 立即体验</ButtonLink>
              <ButtonLink href="#features" variant="secondary">
                了解功能
                <span aria-hidden className="text-secondary">
                  →
                </span>
              </ButtonLink>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-muted">
              占位说明：本地应用 · 低占用 · 具体平台与安装包链接请在上线前替换{" "}
              <code className="rounded bg-surface px-1 py-0.5 text-[10px]">lib/site.ts</code>
            </p>
          </div>
          <HeroAppPreview />
        </div>
      </Container>
    </section>
  );
}
