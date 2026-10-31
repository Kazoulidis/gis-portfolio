# The portfolio as a ready-to-run image: the built site inside stock nginx.
#
# Built by .github/workflows/release.yml on every version tag and published to
# ghcr.io/kazoulidis/gis-portfolio. The VPS pulls it; nothing is built there.
#
# The site is split over four layers - downloads, images, data, then the pages
# - so a release that only changes text ships a few MB, not the whole 450 MB.
# Docker skips a layer it already has only if its bytes are identical, so every
# file's timestamp is reset to the same instant first: a fresh checkout stamps
# every file with the time of the build, which would make each layer new.

# The build runs on the CI machine's own architecture (amd64) even when the
# image is for arm64: the output is plain files, and emulating Node would make
# the build several times slower for nothing.
FROM --platform=$BUILDPLATFORM node:24-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build \
 && mkdir /layers \
 && mv dist/downloads dist/images dist/data /layers/ \
 && find /layers dist -exec touch -h -d @0 {} +

FROM nginx:1.29-alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
# Largest and least often changed first.
COPY --from=build /layers/downloads /usr/share/nginx/html/downloads
COPY --from=build /layers/images /usr/share/nginx/html/images
COPY --from=build /layers/data /usr/share/nginx/html/data
COPY --from=build /app/dist/ /usr/share/nginx/html/
