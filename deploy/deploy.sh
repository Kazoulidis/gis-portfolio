#!/usr/bin/env bash
#
# Build locally and push the result to the VPS over ssh.
#
#   ./deploy/deploy.sh
#
# Assumes you can already `ssh $REMOTE_HOST` without a password prompt, and
# that $REMOTE_PATH exists and is writable by $REMOTE_USER.
#
# On Windows, run this from Git Bash.

set -euo pipefail

REMOTE_USER="${REMOTE_USER:-deploy}"
REMOTE_HOST="${REMOTE_HOST:-example.com}"
REMOTE_PATH="${REMOTE_PATH:-/var/www/portfolio}"

echo "==> Building"
npm run build

echo "==> Syncing dist/ to ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"
# --delete removes files on the server that no longer exist in the build, so a
# renamed project doesn't leave its old URL live. Everything under REMOTE_PATH
# is treated as disposable — don't keep anything else there.
rsync -avz --delete \
  --exclude '.well-known' \
  dist/ "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}/"

echo "==> Done: https://${REMOTE_HOST}"
