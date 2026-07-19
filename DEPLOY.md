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

## Google Search Console

1. Add the URL-prefix property `https://kentamatsuoka.github.io/kagura-player-official-site/`.
2. Choose the HTML tag verification method and copy only the value inside `content="..."`.
3. In GitHub, open repository Settings, then Secrets and variables, Actions, and create `GOOGLE_SITE_VERIFICATION`.
4. Run the `Deploy Kagura Player site` workflow again, then complete verification in Search Console.
5. Submit `https://kentamatsuoka.github.io/kagura-player-official-site/sitemap-index.xml`.

## Remaining launch gates

- Set the verified public installer URL as `PUBLIC_DOWNLOAD_URL`.
- Set the production Stripe Checkout URL as `PUBLIC_CHECKOUT_URL` only after seller disclosures are complete.
- Set the support endpoint as `PUBLIC_SUPPORT_URL`.
- Run Lighthouse on `/ja/`, `/ja/download/`, and feature pages.
- Confirm the signed update manifest and installer work from a clean Windows account.
