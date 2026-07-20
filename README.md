# YOMUVIA Official Site

公式サイト用リポジトリ。日本語/英語のLP、機能、価格、配布、ヘルプ、更新履歴、法務ページを静的生成する。

## 共同開発メモ (2026-07-19 / Codex)

- 現行0.6.0 Previewに合わせ、AI字幕、字幕編集/修正学習、切り抜きライブラリ、字幕焼き込み、動画結合、Pro認証、更新機構の状態を日英で反映した。
- 日本語ヒーローは「ずっと探してた。が、ここにある。」を感情フックにし、「AI字幕でわかる。一瞬で切り抜く。そのまま、一本につなげる。」を製品価値として表示する。
- 演出は全環境で初期状態からON。ヘッダーの演出ON/OFFボタンと保存設定は削除した。
- 価格、購入、配布、サポート先は公開環境変数からのみ注入し、未確定の価格やURLを捏造しない。
- 利用規約、プライバシー、特商法表記は公開前ドラフトとして用意し、事業者情報など未確定項目をリリースゲートとして明示する。
- Node 22で34ページを静的生成。1440x900、Pixel相当412x915、iPhone相当390x844で横方向オーバーフロー0、画像破損0、コンソールエラー0、演出ON、切替ボタン0件を確認した。

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

`robots.txt` allows `OAI-SearchBot` and `ChatGPT-User` to retrieve the public site while keeping training-oriented `GPTBot` disallowed.

## Pages

- `/ja/`、`/en/`
- `download/`、`pricing/`、`help/`、`changelog/`
- `features/`、`features/ai-subtitles/`、`features/quick-clip/`、`features/favorites/`、`features/clip-library/`、`features/merge-editor/`
- `terms/`、`privacy/`、`licenses/`、`system-requirements/`
- 日本語 `commercial-transactions/`、英語 `sales-disclosure/`
- 日本語 `use-cases/stream-clipping/`

## Public Release Inputs Needed

- 正式な販売者名、所在地、連絡先、返品/解約条件
- Pro価格、通貨、Stripe Checkout URL
- 公開インストーラーURLと更新マニフェストURL
- 公開サポート窓口
- 個人動画やファイル名を含まない実アプリのスクリーンショット
- A-B切り抜き15秒デモ動画
