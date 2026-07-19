export const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export const withBase = (path: string) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}` || "/";
};

export const site = {
  name: "Kagura Player",
  origin: import.meta.env.PUBLIC_SITE_ORIGIN?.replace(/\/$/, "") ?? "",
  version: "0.6.0 Preview",
  downloadUrl: import.meta.env.PUBLIC_DOWNLOAD_URL?.trim() ?? "",
  checkoutUrl: import.meta.env.PUBLIC_CHECKOUT_URL?.trim() ?? "",
  proPrice: import.meta.env.PUBLIC_PRO_PRICE?.trim() ?? "",
  proCurrency: import.meta.env.PUBLIC_PRO_CURRENCY?.trim() ?? "",
  supportUrl: import.meta.env.PUBLIC_SUPPORT_URL?.trim() ?? "",
  releaseState: "release-candidate",
};

export const navJa = [
  { href: "/ja/features/", label: "機能" },
  { href: "/ja/features/ai-subtitles/", label: "AI字幕" },
  { href: "/ja/features/merge-editor/", label: "切り抜き・結合" },
  { href: "/ja/pricing/", label: "料金" },
  { href: "/ja/help/", label: "ヘルプ" },
];

export const navEn = [
  { href: "/en/features/", label: "Features" },
  { href: "/en/features/ai-subtitles/", label: "AI Subtitles" },
  { href: "/en/features/merge-editor/", label: "Clip & Join" },
  { href: "/en/pricing/", label: "Pricing" },
  { href: "/en/help/", label: "Help" },
];

export const footerJa = [
  { href: "/ja/download/", label: "ダウンロード" },
  { href: "/ja/changelog/", label: "更新履歴" },
  { href: "/ja/system-requirements/", label: "動作環境" },
  { href: "/ja/terms/", label: "利用規約" },
  { href: "/ja/privacy/", label: "プライバシー" },
  { href: "/ja/licenses/", label: "ライセンス" },
  { href: "/ja/commercial-transactions/", label: "特定商取引法に基づく表記" },
];

export const footerEn = [
  { href: "/en/download/", label: "Download" },
  { href: "/en/changelog/", label: "Changelog" },
  { href: "/en/system-requirements/", label: "System requirements" },
  { href: "/en/terms/", label: "Terms" },
  { href: "/en/privacy/", label: "Privacy" },
  { href: "/en/licenses/", label: "Licenses" },
  { href: "/en/sales-disclosure/", label: "Sales disclosure" },
];
