#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=_lib.sh
source "$SCRIPT_DIR/_lib.sh"

load_env
require_var SERVER_IP

DEPLOY_USER="${DEPLOY_USER:-deploy}"
DEPLOY_PATH="${DEPLOY_PATH:-/opt/landing-page}"

ssh_cmd "$(ssh_target)" "cd ${DEPLOY_PATH} && docker compose ps && echo '' && curl -sI http://127.0.0.1 | head -5"
