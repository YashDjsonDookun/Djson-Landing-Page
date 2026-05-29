#!/usr/bin/env bash
# Used as Cloudflare Pages "Deploy command" when the field cannot be left empty.
# Build must run first and produce dist/ (e.g. npm ci && npm run build).
set -euo pipefail

PROJECT="${CF_PAGES_PROJECT_NAME:-${CLOUDFLARE_PROJECT_NAME:-yashdookun}}"
BRANCH="${CF_PAGES_BRANCH:-main}"

echo "Deploying dist/ to Cloudflare Pages"
echo "  project: $PROJECT"
echo "  branch:  $BRANCH"

npx wrangler pages deploy dist \
  --project-name="$PROJECT" \
  --branch="$BRANCH" \
  --commit-dirty=true
