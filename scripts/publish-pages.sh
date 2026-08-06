#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
publish_dir="$(mktemp -d -t yomuvia-pages.XXXXXX)"
worktree_added=0

cleanup() {
  case "$publish_dir" in
    /tmp/yomuvia-pages.*)
      if [[ "$worktree_added" == "1" ]]; then
        git -C "$repo_root" worktree remove --force "$publish_dir"
      else
        rm -rf -- "$publish_dir"
      fi
      ;;
    *) printf 'Refusing to remove unexpected path: %s\n' "$publish_dir" >&2 ;;
  esac
}
trap cleanup EXIT

cd "$repo_root"
npm run build
git push origin main

rmdir "$publish_dir"
git fetch --quiet origin gh-pages
git worktree add --quiet --detach "$publish_dir" origin/gh-pages
worktree_added=1
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
git -C "$publish_dir" push origin HEAD:gh-pages

printf 'Published: https://kentamatsuoka.github.io/kagura-player-official-site/ja/\n'
