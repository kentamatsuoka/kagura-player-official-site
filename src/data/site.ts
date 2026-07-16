export const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export const withBase = (path: string) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}` || "/";
};

export const site = {
  name: "Kagura Player",
  origin: import.meta.env.PUBLIC_SITE_ORIGIN?.replace(/\/$/, "") ?? "",
  version: "Preview build",
  downloadUrl: "#release-status",
};

export const navJa = [
  { href: "/ja/features/quick-clip/", label: "高速切り抜き" },
  { href: "/ja/features/ai-subtitles/", label: "AI字幕・翻訳" },
  { href: "/ja/#roadmap", label: "開発状況" },
  { href: "/ja/download/", label: "ダウンロード" },
  { href: "/ja/#faq", label: "よくある質問" },
];

export const navEn = [
  { href: "/en/features/quick-clip/", label: "Quick Clip" },
  { href: "/en/features/ai-subtitles/", label: "AI Subtitles" },
  { href: "/en/#roadmap", label: "Roadmap" },
  { href: "/en/download/", label: "Download" },
];
