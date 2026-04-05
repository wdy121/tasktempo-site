import Link from "next/link";
import { Container } from "./Container";
import { siteLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-14">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-foreground">{siteConfig.name}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-secondary">
              {siteConfig.tagline}。轻量、简洁，适合长期放在桌角。
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted">法律与联系</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href={siteLinks.privacy}
                  className="text-secondary transition-colors hover:text-foreground"
                >
                  隐私政策
                </Link>
                <span className="ml-1 text-xs text-muted">（链接预留）</span>
              </li>
              <li>
                <Link
                  href={siteLinks.terms}
                  className="text-secondary transition-colors hover:text-foreground"
                >
                  用户协议
                </Link>
                <span className="ml-1 text-xs text-muted">（链接预留）</span>
              </li>
              <li>
                <Link
                  href={siteLinks.contact}
                  className="text-secondary transition-colors hover:text-foreground"
                >
                  联系我们
                </Link>
                <span className="ml-1 text-xs text-muted">（入口预留）</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted">产品</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#features" className="text-secondary transition-colors hover:text-foreground">
                  功能
                </Link>
              </li>
              <li>
                <Link href="#download" className="text-secondary transition-colors hover:text-foreground">
                  下载
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 text-xs text-muted">© {new Date().getFullYear()} {siteConfig.name}</p>
      </Container>
    </footer>
  );
}
