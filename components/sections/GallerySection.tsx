"use client";

import { useState } from "react";
import { SectionShell } from "@/components/layout/SectionShell";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/Button";

const slides = [
  {
    label: "任务列表与基础操作",
    caption: "替换为真实截图：列表、勾选、删除等",
  },
  {
    label: "进行中 / 计时状态",
    caption: "替换为真实截图：计时器与任务绑定展示",
  },
  {
    label: "完成状态与总用时",
    caption: "替换为真实截图：完成态与用时统计",
  },
  {
    label: "透明度与桌面叠放",
    caption: "替换为真实截图：半透明叠在壁纸上",
  },
] as const;

export function GallerySection() {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <SectionShell id="gallery" label="界面" title="看得见的简单。" centered>
      <div className="mx-auto max-w-3xl">
        <PlaceholderImage
          label={slides[index].label}
          caption={slides[index].caption}
          className="shadow-lg shadow-black/20"
        />
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button type="button" variant="secondary" className="px-4 py-2 text-xs" onClick={prev}>
            上一张
          </Button>
          <Button type="button" variant="secondary" className="px-4 py-2 text-xs" onClick={next}>
            下一张
          </Button>
          <span className="text-xs text-muted">
            {index + 1} / {total} · 占位轮播，可改为 next/image
          </span>
        </div>
        <div className="mt-4 flex justify-center gap-1.5" role="tablist" aria-label="截图选择">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-1.5 bg-border hover:bg-secondary"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
