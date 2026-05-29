#!/usr/bin/env bash
set -euo pipefail

MIN_NODE=18
CURRENT_NODE=$(node -v 2>/dev/null | sed 's/v//' | cut -d. -f1)

if [ -z "$CURRENT_NODE" ]; then
  echo "Error: Node.js is not installed."
  echo "Install Node.js $MIN_NODE+ from https://nodejs.org"
  exit 1
fi

if [ "$CURRENT_NODE" -lt "$MIN_NODE" ]; then
  echo "Error: Node.js $MIN_NODE+ required (found v$CURRENT_NODE)."
  exit 1
fi

if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

echo "Starting dev server..."
npx astro dev
