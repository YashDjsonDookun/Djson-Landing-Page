#!/usr/bin/env bash
set -euo pipefail

if [ -f .env ]; then
  set -a
  source .env
  set +a
fi

DEPLOY_METHOD="${DEPLOY_METHOD:-rsync}"
DEPLOY_HOST="${DEPLOY_HOST:-}"
DEPLOY_PATH="${DEPLOY_PATH:-/var/www/site}"

echo "Building site..."
bash scripts/build.sh

case "$DEPLOY_METHOD" in
  rsync)
    if [ -z "$DEPLOY_HOST" ]; then
      echo ""
      echo "Error: DEPLOY_HOST is not set."
      echo "Set it in .env or export it:"
      echo "  DEPLOY_HOST=user@your-server.com"
      exit 1
    fi
    echo ""
    echo "Deploying to $DEPLOY_HOST:$DEPLOY_PATH via rsync..."
    rsync -avz --delete dist/ "$DEPLOY_HOST:$DEPLOY_PATH/"
    echo "Deploy complete."
    ;;
  docker)
    echo ""
    echo "Building Docker image..."
    docker build -t djson-landing-page .
    if [ -n "$DEPLOY_HOST" ]; then
      echo "Pushing image and deploying to $DEPLOY_HOST..."
      docker save djson-landing-page | ssh "$DEPLOY_HOST" 'docker load && docker compose -f /opt/landing-page/docker-compose.yaml up -d'
    else
      echo "Image built: djson-landing-page"
      echo "Run locally: docker compose up -d"
    fi
    ;;
  *)
    echo "Error: Unknown DEPLOY_METHOD '$DEPLOY_METHOD'"
    echo "Supported: rsync, docker"
    exit 1
    ;;
esac
