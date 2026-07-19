import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const githubPagesOrigin = "https://kentamatsuoka.github.io";
const githubPagesBase = "/kagura-player-official-site";
const isLocalDev = process.env.npm_lifecycle_event === "dev"
  || process.env.NODE_ENV === "development"
  || process.argv.includes("dev");
const publicOrigin = process.env.PUBLIC_SITE_ORIGIN?.replace(/\/$/, "")
  || (isLocalDev ? undefined : githubPagesOrigin);
const base = process.env.PUBLIC_BASE_PATH?.replace(/\/$/, "")
  || (isLocalDev ? "/" : githubPagesBase);

export default defineConfig({
  ...(publicOrigin ? { site: publicOrigin } : {}),
  base,
  integrations: publicOrigin ? [sitemap()] : [],
  output: "static"
});
