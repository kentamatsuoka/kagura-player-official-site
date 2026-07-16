import type { APIRoute } from "astro";
import { site, withBase } from "@/data/site";

export const GET: APIRoute = () => {
  const lines = [
    "User-agent: *",
    "Allow: /",
    "",
    "User-agent: OAI-SearchBot",
    "Allow: /",
    "",
    "User-agent: GPTBot",
    "Disallow: /",
  ];

  if (site.origin) lines.push("", `Sitemap: ${new URL(withBase("/sitemap-index.xml"), `${site.origin}/`).toString()}`);

  return new Response(`${lines.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
