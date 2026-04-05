/** Replace with real URLs when ready. */
export const siteLinks = {
  download: "#download",
  /** TODO: installer / store URL */
  downloadFile: "#" as const,
  /** TODO: GitHub Releases / newsletter / etc. */
  followUpdates: "#" as const,
  privacy: "#" as const,
  terms: "#" as const,
  /** TODO: mailto: or form */
  contact: "#" as const,
  /** TODO: absolute URL for OG image when deployed */
  ogImage: "/og.png" as const,
} as const;

export const siteConfig = {
  name: "TaskTempo",
  tagline: "桌面待办与专注计时",
  description:
    "轻量桌面待办，随手记录、置顶排序、可调透明度。为任务开始与结束计时，完成即可看见总投入。适合学习与轻办公。",
} as const;
