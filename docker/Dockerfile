# syntax=docker/dockerfile:1

# ---- Build stage ---------------------------------------------------------
# Pinned to $BUILDPLATFORM, not the target platform, on purpose: the output of
# `astro build` is plain HTML/CSS/JS with no native code in it, so it is
# identical whichever architecture produced it. This lets an x86_64 machine
# cross-build the ARM64 image at native speed instead of emulating Node under
# QEMU, which is slow enough to be genuinely annoying.
# Node 24 to match local development. Astro 7 requires >=22.12.
FROM --platform=$BUILDPLATFORM node:24-alpine AS build

WORKDIR /app

# Copy the manifests alone first so this layer — the slow one — is only rebuilt
# when dependencies actually change, not on every content edit.
COPY package.json package-lock.json ./

# `npm ci` (not `install`) so the build uses exactly the locked versions.
RUN npm ci

COPY . .

RUN npm run build

# ---- Runtime stage -------------------------------------------------------
# No Node here. The final image is Caddy plus a directory of static files:
# nothing to patch, nothing that can execute on your server.
FROM caddy:2-alpine

COPY docker/Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv

EXPOSE 80 443

# No HEALTHCHECK on purpose. In production Caddy redirects :80 to HTTPS, so the
# obvious `wget http://localhost/` probe follows the redirect out to the public
# hostname and fails from inside the container — reporting "unhealthy" while the
# site is served fine. `docker compose logs web` is the honest signal here.
