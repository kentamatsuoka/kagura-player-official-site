# Kagura Player Official Site

公式サイト用リポジトリ。まずは日本語LPと主要機能ページを作り、実アプリのスクリーンショット/15秒デモ動画を差し込める構造にしている。

## 共同開発メモ (2026-07-17 / Codex)

- 日本語トップをKagura Player本体の現行実装へ同期。「先頭3分を先行表示するAI字幕・翻訳」「残りのバックグラウンド生成」「キャッシュ済み字幕の即時ON/OFF」「作品ジャンルと文脈による語彙補正」を試作実装済みとして訴求する。
- ヒーローコピーを「AI字幕でわかる。A-Bですぐ切れる。見るだけが、作品になる。」へ変更。将来機能だけでなく、現在試せる価値を最初の画面で伝える。
- Windowsで演出が停止していた原因は、OSのアニメーション無効設定がChromeの `prefers-reduced-motion: reduce` としてサイトへ伝わり、CanvasとCSSアニメーションを停止していたため。
- ヘッダーに「演出 ON/OFF」を追加。初回はOS設定を尊重し、利用者がONへ切り替えた場合は `localStorage` の `kagura-motion` で明示設定を保持する。
- Chromeで1440x1000、Windows低モーション+手動ON、Pixel相当412x915を検証。3条件とも横方向オーバーフロー0、CanvasとCSSアニメーションの稼働を確認。
- `npm run build`: Astro 22ファイル診断0件、15ページの静的ビルド成功。WSLではNode 22を明示して実行すること。
- 次の販売面の優先素材は、実アプリで「字幕ボタン→先頭3分の字幕表示→再生中に残り生成→A-B切り抜き」までを見せる15秒動画。抽象デモより成約材料として強い。

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

## Public Preview

```text
https://kentamatsuoka.github.io/kagura-player-official-site/
```

Pushes to `main` are built and published automatically by GitHub Actions. Cloudflare Pages can later import the same public repository without changing the application code.

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
