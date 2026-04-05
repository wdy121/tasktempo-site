import { SectionShell } from "@/components/layout/SectionShell";

const items = [
  {
    title: "太重",
    body: "很多工具功能齐全，却让你在「管理任务」上花掉半天。",
  },
  {
    title: "太吵",
    body: "通知、面板、流程太多，思路刚起就被打断。",
  },
  {
    title: "只记不做",
    body: "任务写下了，却没有「正在做」的感觉，容易一拖再拖。",
  },
  {
    title: "时间看不见",
    body: "做完也不知道自己究竟投入了多少，难以复盘。",
  },
  {
    title: "不想开大块头",
    body: "你只想在桌角放一个小窗口，随手点一下就能继续。",
  },
] as const;

export function PainSection() {
  return (
    <SectionShell
      id="pain"
      label="痛点"
      title="你要的是清单，不是另一套系统。"
      centered
    >
      <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {items.map((item) => (
          <li
            key={item.title}
            className="rounded-xl border border-border bg-elevated p-5 transition-colors hover:border-border hover:bg-surface/40"
          >
            <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-secondary">{item.body}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
