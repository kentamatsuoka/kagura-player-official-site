import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://kaguraplayer.example.com",
  integrations: [sitemap()],
  output: "static"
});
