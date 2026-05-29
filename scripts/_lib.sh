#!/usr/bin/env bash
# Shared helpers for deploy scripts. Source from other scripts; do not execute directly.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

load_env() {
  if [[ -f "$ROOT_DIR/.env" ]]; then
    set -a
    # shellcheck disable=SC1091
    source "$ROOT_DIR/.env"
    set +a
  fi
}

require_var() {
  local name="$1"
  local value="${!name:-}"
  if [[ -z "$value" ]]; then
    echo "Error: $name is not set."
    echo "Copy .env.example to .env and fill in the server section."
    exit 1
  fi
}

ssh_target() {
  echo "${DEPLOY_USER}@${SERVER_IP}"
}

ssh_cmd() {
  local key="${SSH_KEY:-$HOME/.ssh/id_ed25519}"
  ssh -i "$key" -o StrictHostKeyChecking=accept-new "$@"
}

rsync_to_server() {
  local key="${SSH_KEY:-$HOME/.ssh/id_ed25519}"
  rsync -avz --delete \
    -e "ssh -i $key -o StrictHostKeyChecking=accept-new" \
    "$@"
}
