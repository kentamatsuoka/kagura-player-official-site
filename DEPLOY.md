# DEPLOY

Primary public preview: GitHub Pages. Cloudflare Pages can be connected to the same repository later for a branded domain.

Public URL:

```text
https://kentamatsuoka.github.io/kagura-player-official-site/
```

Every push to `main` runs `.github/workflows/deploy-pages.yml` and publishes the static build automatically.

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
