#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
publish_dir="$(mktemp -d -t yomuvia-pages.XXXXXX)"

cleanup() {
  case "$publish_dir" in
    /tmp/yomuvia-pages.*) rm -rf -- "$publish_dir" ;;
    *) printf 'Refusing to remove unexpected path: %s\n' "$publish_dir" >&2 ;;
  esac
}
trap cleanup EXIT

cd "$repo_root"
npm run build
git push origin main

git clone --quiet --branch gh-pages --single-branch \
  https://github.com/kentamatsuoka/kagura-player-official-site.git "$publish_dir"
rsync -a --delete --exclude=.git "$repo_root/dist/" "$publish_dir/"
touch "$publish_dir/.nojekyll"

git -C "$publish_dir" config user.name "$(git config user.name || printf Kenta)"
git -C "$publish_dir" config user.email "$(git config user.email || printf kenta@example.local)"
git -C "$publish_dir" add -A

if git -C "$publish_dir" diff --cached --quiet; then
  printf 'GitHub Pages is already current.\n'
  exit 0
fi

source_commit="$(git rev-parse --short HEAD)"
git -C "$publish_dir" commit -m "Deploy site $source_commit"
git -C "$publish_dir" push origin gh-pages

printf 'Published: https://kentamatsuoka.github.io/kagura-player-official-site/ja/\n'
