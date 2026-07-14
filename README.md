# Kagura Player Official Site

公式サイト用リポジトリ。まずは日本語LPと主要機能ページを作り、実アプリのスクリーンショット/15秒デモ動画を差し込める構造にしている。

## Stack

- Astro 7
- TypeScript strict
- CSS Variables
- Static output
- Sitemap / robots / JSON-LD ready

## Local Development

Astro 7 requires Node 22.12 or newer. In this WSL environment:

```bash
source ~/.nvm/nvm.sh
nvm use 22
```

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Pages

- `/ja/`
- `/ja/download/`
- `/ja/features/quick-clip/`
- `/ja/features/favorites/`
- `/ja/features/ai-subtitles/`
- `/ja/use-cases/stream-clipping/`
- `/ja/changelog/`
- `/ja/help/`
- `/ja/privacy/`
- `/en/`
- `/en/download/`
- `/en/features/quick-clip/`
- `/en/features/favorites/`
- `/en/features/ai-subtitles/`

## Next Truth Inputs Needed

- Kagura Player本体のリポジトリ/実行ファイル場所
- 現在のバージョン番号
- 対応動画形式
- 配布方法
- 実アプリのスクリーンショット
- A-B切り抜き15秒デモ動画
