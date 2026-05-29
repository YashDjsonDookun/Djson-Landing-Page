#!/usr/bin/env bash
# Deploy site to Hetzner via Docker (rsync + remote build).
# Run from your laptop: make deploy-server
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=_lib.sh
source "$SCRIPT_DIR/_lib.sh"

load_env

require_var SERVER_IP
require_var SITE_DOMAIN

DEPLOY_USER="${DEPLOY_USER:-deploy}"
DEPLOY_PATH="${DEPLOY_PATH:-/opt/landing-page}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/id_ed25519}"
TARGET="$(ssh_target)"

echo "==> Deploying to $TARGET ($DEPLOY_PATH)"
echo "    Domain: $SITE_DOMAIN"
echo ""

echo "==> Syncing project files..."
rsync_to_server \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude 'dist' \
  --exclude '.astro' \
  --exclude 'test-results' \
  --exclude 'playwright-report' \
  --exclude '.DS_Store' \
  "$ROOT_DIR/" "${TARGET}:${DEPLOY_PATH}/"

if [[ -f "$ROOT_DIR/.env" ]]; then
  echo "==> Syncing .env..."
  rsync_to_server "$ROOT_DIR/.env" "${TARGET}:${DEPLOY_PATH}/.env"
else
  echo "==> Warning: no local .env found; using server .env if present"
fi

echo "==> Building and starting containers on server..."
ssh_cmd "$TARGET" bash -s <<REMOTE
set -euo pipefail
cd "$DEPLOY_PATH"

if [[ ! -f .env ]]; then
  echo "Error: $DEPLOY_PATH/.env missing on server."
  echo "Copy .env.example to .env locally, set SITE_DOMAIN and contact vars, then redeploy."
  exit 1
fi

set -a
source .env
set +a

export SITE_DOMAIN="${SITE_DOMAIN:-yashdookun.com}"

echo "Using SITE_DOMAIN=\$SITE_DOMAIN"
docker compose build --pull
docker compose up -d
docker compose ps
REMOTE

echo ""
echo "Deploy complete."
echo "  https://${SITE_DOMAIN}"
echo ""
echo "If DNS was just updated, HTTPS may take a minute while Caddy provisions a certificate."
