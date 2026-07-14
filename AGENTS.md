# Kagura Player Official Site - Agent Guide

## Mission

Build the official website for Kagura Player, a Windows video player focused on watching, organizing, repeating, and quickly clipping local videos.

The site must sell trust through real product evidence. Do not invent UI, reviews, pricing, benchmarks, or completed AI features.

## Roles

- Kenta: product direction, truth source, release decisions.
- Kagura: strategy, copy, information architecture, asset prompts.
- Anon: generated background art, icons, OG image variants.
- Codex: repository implementation, tests, SEO, accessibility, performance, audits.

## Ground Rules

- Real app screenshots and screen recordings beat decorative art.
- AI-generated assets may be used for abstract backgrounds, icons, and OG images only.
- Mark future AI subtitle features as planned or in development.
- Keep pages static by default. Add client JavaScript only when it materially improves UX.
- Do not add analytics that collect unnecessary personal data.
- Keep Japanese pages canonical first; English pages can launch in a smaller subset.

## Commands

```bash
npm install
npm run dev
npm run build
npm run check
```

## Content Truth

Confirmed for initial copy:

- Windows video player.
- Favorites and folders.
- A-B repeat.
- A-B range quick clipping.
- Background save while continuing playback.
- Fine adjustment for clipped ranges.
- Local AI subtitles and subtitle-burned clips are planned Pro features, not completed claims.

## Asset Policy

Place real product media in:

```text
public/media/real-app/
```

Place generated decorative media in:

```text
public/media/generated/
```

Update `ASSET_MANIFEST.md` whenever a media file is added.
