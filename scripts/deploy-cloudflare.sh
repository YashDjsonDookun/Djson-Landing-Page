#!/usr/bin/env bash
# Build locally and deploy dist/ to Cloudflare Pages.
# First time: make cf-login
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=_lib.sh
source "$SCRIPT_DIR/_lib.sh"

load_env

PROJECT_NAME="${CLOUDFLARE_PROJECT_NAME:-yashdookun}"
BRANCH="${CLOUDFLARE_BRANCH:-main}"

echo "==> Building site (contact vars from .env if present)..."
if [[ -f "$ROOT_DIR/.env" ]]; then
  set -a
  # shellcheck disable=SC1091
  source "$ROOT_DIR/.env"
  set +a
fi
bash "$SCRIPT_DIR/build.sh"

echo ""
echo "==> Deploying to Cloudflare Pages"
echo "    Project: $PROJECT_NAME"
echo "    Branch:  $BRANCH"
echo ""

if [[ -n "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  export CLOUDFLARE_API_TOKEN
fi

npx wrangler pages deploy "$ROOT_DIR/dist" \
  --project-name="$PROJECT_NAME" \
  --branch="$BRANCH" \
  --commit-dirty=true

echo ""
echo "Deploy complete."
echo ""
echo "If this is your first deploy, attach a custom domain in the Cloudflare dashboard:"
echo "  Workers & Pages → $PROJECT_NAME → Custom domains → Set up a domain"
echo "  e.g. yashdookun.com"
