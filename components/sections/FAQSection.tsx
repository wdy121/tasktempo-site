import { SectionShell } from "@/components/layout/SectionShell";

const faqs = [
  {
    q: "这是本地应用还是网页应用？",
    a: "占位：请按实际产品填写（例如 Windows 本地客户端 / Tauri 等）。",
  },
  {
    q: "会不会很占资源？",
    a: "定位为轻量桌面工具，日常常驻应保持低占用。具体数据占位：待实测后在文案中补充。",
  },
  {
    q: "数据会不会丢失？",
    a: "占位：请说明存储位置（本地文件或数据库）、是否自动保存、备份建议。",
  },
  {
    q: "后续会不会持续更新？",
    a: "占位：写明你的更新节奏；若有更新日志页面，可在此加链接。",
  },
  {
    q: "是否支持更多任务管理能力？",
    a: "会谨慎扩展，优先保持轻量与清晰；复杂协作未必是方向。可按实际路线图微调。",
  },
] as const;

export function FAQSection() {
  return (
    <SectionShell id="faq" label="FAQ" title="常见问题。" className="bg-elevated/40">
      <div className="mx-auto max-w-2xl divide-y divide-border rounded-xl border border-border bg-background/30">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-foreground">
              {item.q}
              <span className="text-muted transition-transform group-open:rotate-45" aria-hidden>
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-secondary">{item.a}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}
