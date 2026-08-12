import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const productionOrigin = "https://yomuvia.com";
const isLocalDev = process.env.npm_lifecycle_event === "dev"
  || process.env.NODE_ENV === "development"
  || process.argv.includes("dev");
const publicOrigin = process.env.PUBLIC_SITE_ORIGIN?.replace(/\/$/, "")
  || (isLocalDev ? undefined : productionOrigin);
const base = process.env.PUBLIC_BASE_PATH?.replace(/\/$/, "") || "/";
const sitemapRoot = `${publicOrigin}${base === "/" ? "/" : `${base}/`}`;

export default defineConfig({
  ...(publicOrigin ? { site: publicOrigin } : {}),
  base,
  integrations: publicOrigin ? [sitemap({
    filter: (page) => !page.includes("/purchase/success/") && page !== sitemapRoot
  })] : [],
  output: "static"
});
