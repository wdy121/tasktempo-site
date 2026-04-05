import { SectionShell } from "@/components/layout/SectionShell";

const scenarios = [
  { title: "学习", body: "作业与章节拆成条目，计时看见真实学习长度。" },
  { title: "开发", body: "小需求、修复、重构，一项一项收尾。" },
  { title: "自由职业", body: "多客户、多线程时，用置顶与排序稳住优先级。" },
  { title: "轻办公", body: "会议跟进、杂事清单，不占屏幕中心。" },
  { title: "番茄式专注", body: "以任务为单位的开始与结束，记录自然留下。" },
] as const;

export function ScenariosSection() {
  return (
    <SectionShell id="scenarios" label="场景" title="贴在桌边，用在日常里。" centered>
      <div className="mx-auto grid max-w-3xl gap-3">
        {scenarios.map((s) => (
          <div
            key={s.title}
            className="flex flex-col gap-1 rounded-xl border border-border bg-elevated px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <span className="shrink-0 text-sm font-semibold text-foreground">{s.title}</span>
            <p className="text-sm leading-relaxed text-secondary sm:text-right">{s.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
