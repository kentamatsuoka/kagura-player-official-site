import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const publicOrigin = process.env.PUBLIC_SITE_ORIGIN?.replace(/\/$/, "");

export default defineConfig({
  ...(publicOrigin ? { site: publicOrigin } : {}),
  base: process.env.PUBLIC_BASE_PATH?.replace(/\/$/, "") || "/",
  integrations: publicOrigin ? [sitemap()] : [],
  output: "static"
});
