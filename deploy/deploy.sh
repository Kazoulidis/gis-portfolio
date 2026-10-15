#!/usr/bin/env bash
#
# Build on this machine and push the result to the VPS over ssh.
#
#   ./deploy/deploy.sh            # build + sync the site
#   ./deploy/deploy.sh --config   # also sync nginx.conf and reload nginx
#
# The site is a bind mount, not a baked image, so a content deploy is a file
# copy - no docker build, no registry, and nothing to restart. Only a change to
# nginx.conf needs --config.
#
# Assumes `ssh $REMOTE_HOST` already works without a password prompt. If the
# key is not in ~/.ssh, pass it through SSH_OPTS:
#
#   SSH_OPTS="-i ~/keys/oracle.key" ./deploy/deploy.sh
#
# On Windows, run this from Git Bash.

set -euo pipefail

REMOTE_USER="${REMOTE_USER:-debian}"
REMOTE_HOST="${REMOTE_HOST:-portfolio.kazoulidis.com}"
REMOTE_APPDATA="${REMOTE_APPDATA:-/home/debian/docker/appdata/portfolio}"
SSH_OPTS="${SSH_OPTS:-}"
REMOTE="${REMOTE_USER}@${REMOTE_HOST}"

sync_config=0
[[ "${1:-}" == "--config" ]] && sync_config=1

cd "$(dirname "$0")/.."

echo "==> Building"
npm run build

echo "==> Syncing dist/ to ${REMOTE}:${REMOTE_APPDATA}/site"
if command -v rsync >/dev/null 2>&1; then
  # --delete removes files on the server that no longer exist in the build, so
  # a renamed project does not leave its old URL live. Everything under site/
  # is disposable - do not keep anything else there.
  #
  # -z compresses in transit. Most of the payload is webp and zip, which will
  # not shrink, but the GeoJSON very much will.
  rsync -avz --delete -e "ssh ${SSH_OPTS}" \
    dist/ "${REMOTE}:${REMOTE_APPDATA}/site/"
else
  # Git Bash on Windows ships no rsync, so stream a tarball instead, in two
  # steps: upload to a temp file first, so the live site is only empty for the
  # second or two the final extract takes rather than for the whole upload.
  #
  # Extract INTO site/ rather than swapping a new directory in with mv: the
  # container bind-mounts the directory itself, so a swapped-in replacement
  # would leave nginx serving the deleted original. Clearing the contents
  # first gives the same result as rsync --delete.
  echo "    (rsync not found - using tar over ssh)"
  tar -C dist -czf - . | ssh ${SSH_OPTS} "$REMOTE" 'cat > /tmp/portfolio-dist.tgz'
  ssh ${SSH_OPTS} "$REMOTE" "set -e
    find '${REMOTE_APPDATA}/site' -mindepth 1 -delete
    tar -xzf /tmp/portfolio-dist.tgz -C '${REMOTE_APPDATA}/site'
    rm -f /tmp/portfolio-dist.tgz"
fi

if [[ $sync_config -eq 1 ]]; then
  echo "==> Syncing nginx.conf"
  scp ${SSH_OPTS} docker/nginx.conf "${REMOTE}:${REMOTE_APPDATA}/nginx.conf"

  echo "==> Testing the config before applying it"
  # `nginx -t` first: a reload on a broken config leaves the old one running,
  # but a restart on a broken config leaves the site down. sudo because the
  # stack is run with `sudo docker compose` on this box.
  ssh ${SSH_OPTS} "$REMOTE" \
    'sudo docker exec portfolio nginx -t && sudo docker exec portfolio nginx -s reload'
fi

echo "==> Done: https://${REMOTE_HOST}"
