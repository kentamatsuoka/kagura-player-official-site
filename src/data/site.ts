export const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export const withBase = (path: string) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}` || "/";
};

const supportEmail = import.meta.env.PUBLIC_SUPPORT_EMAIL?.trim()
  || "butterflygpu.support@proton.me";

export const site = {
  name: "Kagura Player",
  origin: import.meta.env.PUBLIC_SITE_ORIGIN?.replace(/\/$/, "")
    ?? (import.meta.env.PROD ? "https://kentamatsuoka.github.io" : ""),
  version: "0.6.0 Preview",
  downloadUrl: import.meta.env.PUBLIC_DOWNLOAD_URL?.trim() ?? "",
  checkoutUrl: import.meta.env.PUBLIC_CHECKOUT_URL?.trim() ?? "",
  monthlyCheckoutUrl: import.meta.env.PUBLIC_MONTHLY_CHECKOUT_URL?.trim()
    || import.meta.env.PUBLIC_CHECKOUT_URL?.trim()
    || "",
  annualCheckoutUrl: import.meta.env.PUBLIC_ANNUAL_CHECKOUT_URL?.trim() ?? "",
  proPrice: import.meta.env.PUBLIC_PRO_PRICE?.trim() || "1480",
  proAnnualPrice: "14800",
  proCurrency: import.meta.env.PUBLIC_PRO_CURRENCY?.trim() || "JPY",
  trialDays: 7,
  trialCloudMinutes: 30,
  proCloudMinutes: 600,
  supportEmail,
  supportUrl: import.meta.env.PUBLIC_SUPPORT_URL?.trim()
    || `mailto:${supportEmail}?subject=${encodeURIComponent("Kagura Player support")}`,
  releaseState: "release-candidate",
};

export const localizedRoutePairs = [
  ["/ja/", "/en/"],
  ["/ja/download/", "/en/download/"],
  ["/ja/help/", "/en/help/"],
  ["/ja/pricing/", "/en/pricing/"],
  ["/ja/purchase/success/", "/en/purchase/success/"],
  ["/ja/terms/", "/en/terms/"],
  ["/ja/privacy/", "/en/privacy/"],
  ["/ja/licenses/", "/en/licenses/"],
  ["/ja/changelog/", "/en/changelog/"],
  ["/ja/system-requirements/", "/en/system-requirements/"],
  ["/ja/commercial-transactions/", "/en/sales-disclosure/"],
  ["/ja/features/", "/en/features/"],
  ["/ja/features/quick-clip/", "/en/features/quick-clip/"],
  ["/ja/features/favorites/", "/en/features/favorites/"],
  ["/ja/features/ai-subtitles/", "/en/features/ai-subtitles/"],
  ["/ja/features/clip-library/", "/en/features/clip-library/"],
  ["/ja/features/merge-editor/", "/en/features/merge-editor/"],
  ["/ja/ai-subtitle-video-player/", "/en/ai-subtitle-video-player/"],
  ["/ja/windows-video-clipper/", "/en/windows-video-clipper/"],
  ["/ja/windows-video-joiner/", "/en/windows-video-joiner/"],
] as const;

export const localizedRoute = (path: string) => {
  const pair = localizedRoutePairs.find(([ja, en]) => ja === path || en === path);
  return pair ? { ja: pair[0], en: pair[1] } : undefined;
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
  { href: "/ja/ai-subtitle-video-player/", label: "AI字幕動画プレイヤー" },
  { href: "/ja/windows-video-clipper/", label: "Windows動画切り抜き" },
  { href: "/ja/windows-video-joiner/", label: "Windows動画結合" },
  { href: "/ja/changelog/", label: "更新履歴" },
  { href: "/ja/system-requirements/", label: "動作環境" },
  { href: "/ja/terms/", label: "利用規約" },
  { href: "/ja/privacy/", label: "プライバシー" },
  { href: "/ja/licenses/", label: "ライセンス" },
  { href: "/ja/commercial-transactions/", label: "特定商取引法に基づく表記" },
];

export const footerEn = [
  { href: "/en/download/", label: "Download" },
  { href: "/en/ai-subtitle-video-player/", label: "AI subtitle player" },
  { href: "/en/windows-video-clipper/", label: "Windows video clipper" },
  { href: "/en/windows-video-joiner/", label: "Windows video joiner" },
  { href: "/en/changelog/", label: "Changelog" },
  { href: "/en/system-requirements/", label: "System requirements" },
  { href: "/en/terms/", label: "Terms" },
  { href: "/en/privacy/", label: "Privacy" },
  { href: "/en/licenses/", label: "Licenses" },
  { href: "/en/sales-disclosure/", label: "Sales disclosure" },
];
