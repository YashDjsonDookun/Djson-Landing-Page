#!/usr/bin/env bash
# One-time Hetzner server setup (security baseline + Docker).
# Run from your laptop: make bootstrap SERVER_IP=YOUR_IP
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=_lib.sh
source "$SCRIPT_DIR/_lib.sh"

load_env

SERVER_IP="${SERVER_IP:-${1:-}}"
DEPLOY_USER="${DEPLOY_USER:-deploy}"
DEPLOY_PATH="${DEPLOY_PATH:-/opt/landing-page}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/id_ed25519}"
BOOTSTRAP_USER="${BOOTSTRAP_USER:-root}"

if [[ -z "$SERVER_IP" ]]; then
  echo "Usage: make bootstrap SERVER_IP=1.2.3.4"
  echo "   or: SERVER_IP=1.2.3.4 bash scripts/bootstrap-server.sh"
  exit 1
fi

if [[ ! -f "${SSH_KEY}.pub" ]]; then
  echo "Error: SSH public key not found at ${SSH_KEY}.pub"
  echo "Generate one with: ssh-keygen -t ed25519 -f $SSH_KEY"
  exit 1
fi

PUBKEY="$(cat "${SSH_KEY}.pub")"

echo "==> Bootstrapping $SERVER_IP (connecting as $BOOTSTRAP_USER)..."
echo "    Deploy user: $DEPLOY_USER"
echo "    App path:    $DEPLOY_PATH"
echo ""

ssh -i "$SSH_KEY" -o StrictHostKeyChecking=accept-new \
  "${BOOTSTRAP_USER}@${SERVER_IP}" \
  "DEPLOY_USER='$DEPLOY_USER' DEPLOY_PATH='$DEPLOY_PATH' PUBKEY='$PUBKEY' bash -s" <<'REMOTE'
set -euo pipefail

export DEBIAN_FRONTEND=noninteractive

echo "==> Updating system packages..."
apt-get update -qq
apt-get upgrade -y -qq

echo "==> Installing base packages..."
apt-get install -y -qq \
  ca-certificates curl gnupg ufw fail2ban unattended-upgrades \
  apt-transport-https software-properties-common

echo "==> Creating deploy user: ${DEPLOY_USER}..."
if ! id -u "${DEPLOY_USER}" &>/dev/null; then
  useradd -m -s /bin/bash -G sudo "${DEPLOY_USER}"
  echo "${DEPLOY_USER} ALL=(ALL) NOPASSWD:ALL" > "/etc/sudoers.d/${DEPLOY_USER}"
  chmod 440 "/etc/sudoers.d/${DEPLOY_USER}"
fi

install -d -m 700 -o "${DEPLOY_USER}" -g "${DEPLOY_USER}" "/home/${DEPLOY_USER}/.ssh"
AUTH_KEYS="/home/${DEPLOY_USER}/.ssh/authorized_keys"
touch "$AUTH_KEYS"
chown "${DEPLOY_USER}:${DEPLOY_USER}" "$AUTH_KEYS"
chmod 600 "$AUTH_KEYS"
if ! grep -qF "${PUBKEY}" "$AUTH_KEYS" 2>/dev/null; then
  echo "${PUBKEY}" >> "$AUTH_KEYS"
fi

echo "==> Configuring firewall (ufw)..."
ufw --force reset
ufw default deny incoming
ufw default allow outgoing
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

echo "==> Enabling fail2ban..."
systemctl enable fail2ban
systemctl restart fail2ban

echo "==> Enabling unattended security upgrades..."
dpkg-reconfigure -f noninteractive unattended-upgrades || true

echo "==> Installing Docker..."
if ! command -v docker &>/dev/null; then
  install -m 0755 -d /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
  chmod a+r /etc/apt/keyrings/docker.asc
  . /etc/os-release
  echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
    ${VERSION_CODENAME} stable" > /etc/apt/sources.list.d/docker.list
  apt-get update -qq
  apt-get install -y -qq docker-ce docker-ce-cli containerd.io docker-compose-plugin
fi

usermod -aG docker "${DEPLOY_USER}"

echo "==> Preparing app directory: ${DEPLOY_PATH}..."
mkdir -p "${DEPLOY_PATH}"
chown -R "${DEPLOY_USER}:${DEPLOY_USER}" "${DEPLOY_PATH}"

echo "==> Hardening SSH (key-only for ${DEPLOY_USER})..."
SSHD_CFG="/etc/ssh/sshd_config.d/99-landing-deploy.conf"
cat > "$SSHD_CFG" <<SSHD
PermitRootLogin prohibit-password
PasswordAuthentication no
PubkeyAuthentication yes
ChallengeResponseAuthentication no
SSHD
systemctl reload ssh || systemctl reload sshd || true

echo ""
echo "Bootstrap complete."
echo "  - User ${DEPLOY_USER} can SSH with your key"
echo "  - Docker installed"
echo "  - Firewall: 22, 80, 443 open"
echo "  - App directory: ${DEPLOY_PATH}"
REMOTE

echo ""
echo "Bootstrap finished successfully."
echo ""
echo "Next steps:"
echo "  1. Point DNS A record for your domain to $SERVER_IP"
echo "  2. Set SITE_DOMAIN in .env (e.g. yashdookun.com)"
echo "  3. Run: make deploy-server"
