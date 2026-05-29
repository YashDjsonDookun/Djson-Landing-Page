#!/usr/bin/env bash
# Cloudflare Pages "Deploy command" when the field cannot be left empty.
# Requires: dist/ from the build step (npm ci && npm run build).
#
# If you see "Authentication error [code: 10000]":
#   Remove CLOUDFLARE_API_TOKEN from Pages → Settings → Environment variables
#   unless that token has "Cloudflare Pages → Edit" permission.
set -euo pipefail

PROJECT="${CF_PAGES_PROJECT_NAME:-${CLOUDFLARE_PROJECT_NAME:-yashdookun}}"
BRANCH="${CF_PAGES_BRANCH:-main}"

if [[ ! -d dist ]]; then
  echo "Error: dist/ not found. Run the build command first."
  exit 1
fi

echo "Deploying dist/ to Cloudflare Pages"
echo "  project: $PROJECT"
echo "  branch:  $BRANCH"

if [[ -n "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  echo "  auth:    CLOUDFLARE_API_TOKEN (custom token)"
  echo "  tip:     token needs Account → Cloudflare Pages → Edit"
else
  echo "  auth:    Cloudflare build system (default)"
fi

ARGS=(pages deploy dist --project-name="$PROJECT" --branch="$BRANCH" --commit-dirty=true)

if [[ -n "${CLOUDFLARE_ACCOUNT_ID:-}" ]]; then
  ARGS+=(--account-id="$CLOUDFLARE_ACCOUNT_ID")
fi

npx wrangler "${ARGS[@]}"
