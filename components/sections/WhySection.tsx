import { SectionShell } from "@/components/layout/SectionShell";

const points = [
  "比臃肿的项目管理工具更轻：不强迫你搭建一套流程。",
  "比普通便签更有结构：列表、顺序、状态，一目了然。",
  "比纯计时器更有上下文：时间挂在具体任务上，而不是抽象秒表。",
  "随手可用：窗口常开，从「想起来」到「开始做」距离更短。",
  "任务与时间一起完成：记录、执行、统计在同一块空间里完成。",
] as const;

export function WhySection() {
  return (
    <SectionShell
      id="why"
      label="为什么选择 TaskTempo"
      title="小工具，也有清晰分工。"
      className="bg-elevated/40"
    >
      <ol className="mx-auto max-w-2xl space-y-4">
        {points.map((text, i) => (
          <li
            key={text}
            className="flex gap-4 rounded-xl border border-border bg-background/40 px-5 py-4"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-inner text-xs font-semibold text-accent">
              {i + 1}
            </span>
            <p className="text-sm leading-relaxed text-secondary">{text}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
