# DEPLOY

Target: Cloudflare Workers or Pages after the first public build is stable.

Initial static build:

```bash
pnpm run build
```

Output:

```text
dist/
```

Before production:

- Replace `https://kaguraplayer.example.com` in `astro.config.mjs`.
- Add real favicon and OG images.
- Confirm download URL.
- Run Lighthouse on `/ja/`, `/ja/download/`, and feature pages.
- Confirm robots rules for OAI-SearchBot and GPTBot.
