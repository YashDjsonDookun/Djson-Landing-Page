#!/usr/bin/env bash
set -euo pipefail

if [ -f .env ]; then
  set -a
  # shellcheck disable=SC1091
  source .env
  set +a
fi

if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

echo "Cleaning dist/..."
rm -rf dist

echo "Running type check..."
npx astro check 2>&1 || true

echo "Building..."
npx astro build

echo ""
echo "Build complete. Output:"
du -sh dist/
find dist -type f | wc -l | xargs printf "  %s files\n"
