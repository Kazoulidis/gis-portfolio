# The portfolio as a ready-to-run image: the built site inside stock nginx.
#
# Built by .github/workflows/release.yml on every push to main and published to
# ghcr.io/kazoulidis/gis-portfolio. The VPS pulls it; nothing is built there.
#
# The site is split over layers so that a pull fetches only what changed: first
# everything that rarely changes, then the files of the 2026 challenge a week at
# a time, then the pages. A code change ships a few MB, and a new day's map only
# its own week. A layer is skipped only if its bytes are identical, so the
# release workflow rewrites the timestamps in every layer (rewrite-timestamp):
# nginx's html folder is otherwise stamped with the time of the build, in every
# layer, which makes them all new. The files are reset here as well, since a
# fresh checkout stamps them with that time too.

# The build runs on the CI machine's own architecture (amd64) even when the
# image is for arm64: the output is plain files, and emulating Node would make
# the build several times slower for nothing.
FROM --platform=$BUILDPLATFORM node:24-slim AS build
# The slim image has no fonts, and the default link-preview card (src/og.ts) draws
# its text at build time: without these every letter comes out as an empty box.
# Liberation stands in for the card's Times New Roman and Arial. The check stops
# the build rather than publishing a broken card.
RUN apt-get update \
 && apt-get install -y --no-install-recommends fontconfig fonts-liberation \
 && rm -rf /var/lib/apt/lists/* \
 && fc-match "Times New Roman" | grep -q Liberation \
 && fc-match Arial | grep -q Liberation
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build \
 && mkdir -p /layers/rest \
 && for dir in downloads images data; do \
      mkdir -p /layers/week1/$dir /layers/week2/$dir /layers/week3/$dir /layers/week4/$dir; \
      for f in dist/$dir/30dmc-2026-day-*; do \
        [ -e "$f" ] || continue; \
        day="${f##*2026-day-}"; day="${day%%[!0-9]*}"; \
        case "$day" in \
          0[1-7]) week=1 ;; \
          0[89]|1[0-4]) week=2 ;; \
          1[5-9]|2[01]) week=3 ;; \
          *) week=4 ;; \
        esac; \
        mv "$f" /layers/week$week/$dir/; \
      done; \
      mv dist/$dir /layers/rest/$dir; \
    done \
 && find /layers dist -exec touch -h -d @0 {} +

FROM nginx:1.29-alpine
# Shown on the package page on GitHub.
LABEL org.opencontainers.image.description="Antonis Kazoulidis's GIS portfolio (portfolio.kazoulidis.com), served by nginx."
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
# Least often changed first.
COPY --from=build /layers/rest/ /usr/share/nginx/html/
COPY --from=build /layers/week1/ /usr/share/nginx/html/
COPY --from=build /layers/week2/ /usr/share/nginx/html/
COPY --from=build /layers/week3/ /usr/share/nginx/html/
COPY --from=build /layers/week4/ /usr/share/nginx/html/
COPY --from=build /app/dist/ /usr/share/nginx/html/
