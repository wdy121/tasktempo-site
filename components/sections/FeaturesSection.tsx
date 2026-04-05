import { SectionShell } from "@/components/layout/SectionShell";

const features = [
  { title: "快速新增任务", body: "想到就写，列表立刻可读。" },
  { title: "置顶", body: "把现在最重要的事钉在上面。" },
  { title: "排序", body: "按你的节奏调整顺序，而不是按软件的规则。" },
  { title: "透明度", body: "窗口融入桌面，存在感刚好。" },
  { title: "开始 / 结束计时", body: "点一下开始，点一下结束，状态清楚。" },
  { title: "完成与总用时", body: "任务完成时展示总用时，让投入被看见。" },
  { title: "清晰状态展示", body: "待办、进行中、已完成，一眼分辨。" },
] as const;

export function FeaturesSection() {
  return (
    <SectionShell
      id="features"
      label="功能"
      title="少即是多，但关键的一步都有。"
      className="bg-elevated/40"
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <li
            key={f.title}
            className="rounded-xl border border-border bg-background/50 p-5 backdrop-blur-sm"
          >
            <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-secondary">{f.body}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
