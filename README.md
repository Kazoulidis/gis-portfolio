# GIS Portfolio

A static, multi-page portfolio site. Astro builds it to plain HTML; Leaflet
renders your GeoJSON. No client-side framework, no tracking, no web fonts, no
scroll effects.

## First run

```sh
npm install
npm run dev      # http://localhost:4321
```

`npm run build` writes the finished site to `dist/`. Verified on Node 24.

Docker is not needed for local work - see [Running it](#running-it).

## Making it yours

Work through these in order:

1. **`src/site.ts`** - your name, role, tagline, email, LinkedIn/GitHub URLs.
   Everything else reads from here.
2. **`astro.config.mjs`** - set `site` to your real domain.
3. **`src/pages/index.astro`** - the About text and the skills sidebar.
4. **`src/pages/experience.astro`** and **`src/pages/education.astro`** - the
   `roles`, `degrees` and `certifications` arrays near the top of each file.
5. **`public/cv.pdf`** - drop your CV here, or set `cv: null` in `src/site.ts`
   to hide the download links.

## Adding a project

Create `src/content/projects/my-project.md`. The filename becomes the URL
(`/projects/my-project`).

```markdown
---
title: 'Flood Risk Modelling, Thessaly'
summary: 'One or two sentences. This is what shows on the projects index.'
date: 2025-03-01
category: 'misc'
context: 'Thessaly, Greece'
tags: ['QGIS', 'PostGIS', 'Python']
thumbnail: '/images/flood-risk.png'
thumbnailAlt: 'Flood extent map of the Thessaly plain'
map: '/data/flood-risk.geojson'
mapCaption: 'Modelled extent at a 100-year return period.'
links:
  - label: 'Full report (PDF)'
    href: '/files/flood-risk-report.pdf'
---

## What the question was

Markdown from here down.
```

Every field except `title`, `summary` and `date` is optional - a project with no
map or no thumbnail renders fine. Set `draft: true` to keep one out of the index
while you write it.

The schema in `src/content.config.ts` is checked at build time, so a typo in
frontmatter fails `npm run build` rather than shipping a broken page. A bad
`category` reports the valid options:

```
[InvalidContentEntryDataError] projects → example-coastal-survey
  category: Invalid option: expected one of "30-day-map-challenge"|"school"|"misc"
```

## Project categories

The tabs on the Projects page (`30 Day Map Challenge`, `School`,
`Miscellaneous`) come from `projectCategories` in `src/site.ts`. That array is
the single source of truth: the tabs, the `/projects/<slug>` routes, the values
`category` will accept in frontmatter, where the Projects nav item points, and
what the About page highlights all derive from it. Adding one is the whole job:

```ts
{
  slug: 'fieldwork',
  label: 'Fieldwork',
  blurb: 'Shown under the heading on that category page.',
  link: { href: 'https://example.com', label: 'example.com' },  // or null
  order: 'desc',     // 'desc' newest first | 'asc' oldest first (sequences)
  homepage: true,    // may appear in "Recent projects" on the About page
}
```

**There is no combined "All" tab.** The categories are separate collections, not
one pool - a 30-entry challenge in a shared list buries everything else. The
Projects nav item lands on the *first* category in the array, so put the work
you most want seen at the top. A bare `/projects` redirects there for anyone who
types it; nothing links to it, so the redirect is never on a real navigation
path.

`homepage: false` keeps a category out of "Recent projects" on the About page.
It is off for the challenge: those are daily exercises, and thirty of them would
crowd out your actual work on the one page a recruiter is guaranteed to see.

A project with no `category` falls into `misc`. A category with nothing in it
still gets a page showing "Nothing under X yet."

Changing a `slug` changes that category's URL, which is free now and less so
once the site is public. Individual projects stay at `/projects/<filename>`
regardless of category, so re-categorising one never breaks a link to it.

### The 30 Day Map Challenge entries

`src/content/projects/30dmc-2025-day-NN-*.md` holds one file per completed day.
Only finished entries are kept; to add a day, copy an existing one and change
the prompt (the official 2025 prompts are in the
[challenge archive](https://github.com/tjukanovt/30DayMapChallenge/blob/main/archive/2025/README.md)).
Set `draft: true` to hide an entry while you work on it.

A category with no published projects drops out of the Projects tabs entirely
and gets no page, so an empty School or Miscellaneous tab never shows. It
reappears as soon as one project in it is published.

The category is set to `order: 'asc'` so the page reads Day 1 → Day 30 rather
than newest-first.

The 2026 prompts are not published yet. When they are, the same filenames with
`2026` and the new dates will slot in alongside these.

## Preparing GeoJSON

Put the file in `public/data/` and reference it as `/data/name.geojson`.

- **Reproject to EPSG:4326.** Leaflet assumes WGS84. In QGIS: right-click the
  layer → Export → Save Features As → GeoJSON, CRS `EPSG:4326`.
- **Drop the columns you don't need.** Every remaining attribute shows up in the
  popup, and every one you keep is bytes over the wire.
- **Simplify the geometry.** Vector → Geometry Tools → Simplify. Web maps rarely
  need survey precision, and this is usually the difference between a 40 MB file
  and a 400 KB one.
- **Set the coordinate precision** to ~6 decimal places (about 10 cm).

Two attributes get special treatment in popups: `name` (or `title`) becomes the
heading, and `description` becomes the body. A `color` attribute overrides the
feature's colour - useful for categorical layers.

Rules of thumb for size: under ~1 MB loads instantly; up to ~5 MB is tolerable
gzipped; past that, switch to vector tiles (`tippecanoe` → PMTiles) rather than
making people wait.

## Maps with toggleable layers and a legend

A project's map takes one of two frontmatter fields - use one, never both (the
build stops you if you do):

`map:` - a single GeoJSON file, drawn plain, no legend. The simple case.

```yaml
map: '/data/flood-extent.geojson'
mapCaption: 'Modelled extent at a 100-year return period.'
```

`layers:` - several named files, each its own colour, each switchable. Together
they form the legend in the bottom-right of the map; each row is a colour
swatch, the layer name, and a checkbox that shows or hides that layer.

```yaml
layers:
  - name: 'Flood extent'          # legend label and toggle
    src: '/data/flood-extent.geojson'
    color: '#1c5d5d'              # legend swatch and feature colour
  - name: 'Gauging stations'
    src: '/data/stations.geojson'
    color: '#a8452f'
    visible: false                # starts switched off; default is on
mapCaption: 'Toggle the gauging stations over the modelled extent.'
```

Notes:

- **One file per layer.** A layer is a whole GeoJSON file. Keep each theme in
  its own file rather than one file with a type column - that is what makes them
  switch independently. Prepare each exactly as above.
- **`color` sets the swatch and the features**, but a feature's own `color`
  property still wins for that feature - so a single layer can carry a graduated
  scheme (e.g. severity bands) while the legend shows the layer's headline
  colour. For a true classified legend (one swatch per class), split the classes
  into separate layers.
- **The legend only appears with two or more layers.** A lone layer needs no
  swatch to disambiguate and nothing to compare against, so it stays clean.
- **A layer that fails to load** shows as "(unavailable)" in the legend with its
  checkbox disabled; the other layers still work. If *every* layer fails, the
  map shows a short error instead.


## Bespoke maps (a custom component per project)

`map:` and `layers:` cover the common cases. When a project needs a map they
can't express - a different aggregation, a custom interaction - it can point at
a purpose-built component instead:

```yaml
map: '/data/my-data.geojson'          # the data source, as usual
mapComponent: 'refugee-hexbin'        # the component to render it with
```

`mapComponent` is a key in the `CUSTOM_MAPS` registry near the top of
`src/pages/projects/[...slug].astro`. Register a component there, reference its
key, and that project uses it; every other project is untouched, and the
component's JavaScript ships only on the pages that use it.

The one shipped is **`refugee-hexbin`** (`src/components/HexbinPointMap.astro`),
built for the Day 1 map. It bins dense points into hexagons coloured by the mean
of a chosen field, and swaps them for individual points once you zoom in past a
threshold - both clickable, with a graduated legend. Its fields are props
(`valueField`, `nameField`, `countField`, `pointZoom`, `radius`), so it suits
any "too many points to show at once, colour by a 0–1 value" layer, not just the
refugee data. It depends on `d3-hexbin` (~2 KB) for the binning maths; the
hexagons are recomputed in the browser on each zoom, so the binning always
matches the current scale.

## Running it

Two supported paths. They serve byte-identical HTML and resolve URLs the same
way, so what you see on Windows is what the server will do.

### Windows, no Docker (day-to-day)

```sh
npm run dev       # http://localhost:4321, hot reload
npm run preview   # http://localhost:4321, serves the real build output
```

Use `dev` while writing. Use `preview` before you publish - it serves `dist/`,
which is what actually ships, and it is the honest check that a new project page
and its map work.

**The dev server is not how the site performs.** It compiles each page on
request and serves ~13 unbundled modules per page; the built site serves one or
two files and loads in roughly a third of the time. If navigation ever feels
sluggish, check `npm run preview` before believing it. (`devToolbar` is disabled
in `astro.config.mjs` for the same reason - it was the single heaviest thing on
a dev page load, and it only helps when debugging client islands, which this
site does not use.)

If your terminal can't find `node`, open a new one: the installer adds it to
PATH, but shells started beforehand keep the old value.

### Production (Oracle ARM64 VPS, behind Nginx Proxy Manager)

The site ships as a Docker image: the built site and `docker/nginx.conf` inside
`nginx:1.29-alpine`. GitHub builds it (`.github/workflows/release.yml`, from the
`Dockerfile`) and publishes it to `ghcr.io/kazoulidis/gis-portfolio`; the VPS
only pulls it, so there is no Node and no build on the server. Nginx Proxy
Manager, a separate stack on the same box, terminates TLS and proxies to it.

| Piece | Where |
| --- | --- |
| Compose file | kept outside this repo (it holds Umami's secrets): `E:\Claude\vps\portfolio\docker-compose.yml` → `/home/debian/docker/portfolio/` |
| Image | `ghcr.io/kazoulidis/gis-portfolio`, tagged per release and `latest`, arm64 |
| Host port | `8082`; NPM forwards `portfolio.kazoulidis.com` to `172.17.0.1:8082` |

Publishing a change - tag the commit, and the workflow builds and publishes the
image in a few minutes (follow it in the repository's Actions tab):

```sh
git push
git tag v2026.11.04 && git push origin v2026.11.04
```

Then on the VPS, in `/home/debian/docker/portfolio/`:

```sh
sudo docker compose pull portfolio && sudo docker compose up -d portfolio
```

The image is split into layers (downloads, images, data, pages), so a release
that only changes text pulls a few MB. A changed nginx.conf ships the same way.

**The repository is public, drafts included.** `draft: true` keeps a page off
the live site, not off GitHub, so commit a 30 Day Map Challenge page on its day.

The older route still works while the image is new: `./deploy/deploy.sh` builds
here and copies `dist/` to the server over ssh. It needs the bind-mount version
of the compose file, so it is a fallback, not something to mix with the image.

Two settings in `docker/nginx.conf` are load-bearing:

- `gzip_proxied any`: NPM adds a `Via` header, and the default would then serve
  every response uncompressed.
- Cache lifetimes are set with `expires`, not `add_header`. A location that
  declares any `add_header` drops the server-level security headers.

Analytics: self-hosted Umami, in the same compose file as the site, with its
data under `appdata/portfolio/umami/` (see `analytics` in `src/site.ts`). The
tracker is only added once a website ID is set there.

## Design notes

If you change the look, start with the custom properties at the top of
`src/styles/global.css` - colours, fonts and measure all come from there.

The deliberate choices, so you don't undo them by accident:

- **Multi-page, not single-page.** Each section is its own URL, so a recruiter
  can land on `/projects` directly and link to it.
- **Almost no JavaScript.** Leaflet (~150 KB) is only bundled into pages that
  actually use `ProjectMap`; every other page ships just the 2.4 KB prefetch
  script. The whole built site is around 209 KB.
- **Navigation is prefetched, not single-page.** Links are fetched before they
  are clicked (`prefetch` in `astro.config.mjs`), and the nav opts up to the
  `load` strategy so all five tabs are in cache from the moment a page opens.
  A click is then a zero-transfer cache hit - measured at 0 ms time-to-first-byte
  and ~25 ms to fully loaded - while still being an ordinary browser navigation
  to a real URL. No view transitions, no client-side router, nothing to break
  the back button.

  This depends on the `Cache-Control: max-age=300` the server sets on pages. If
  you drop that header, the browser revalidates on every click and you are back
  to a round trip per navigation.
- **Light only, warm paper** (`#f7f5f1`) rather than pure white - less glare.
  There is deliberately no dark mode; `color-scheme: light` tells the browser
  not to dark-style scrollbars and controls even when the OS is set to dark.
  For pure white, set `--bg: #fff` (and probably `--bg-subtle: #f4f4f4`).
- **A solid background, no texture.** `--texture` is kept as a hook (`none` by
  default) if you ever want to try one again.
- **Two independent widths.** `--page-width` (72rem) is the frame: the header,
  footer, rules and entry borders all span it, which is what makes the page read
  as wide. `--measure` (72ch, ~71 characters per line) is the text column, and
  is kept narrow because long lines are the main reason a page is tiring to
  read. Widen the frame, not the measure, if the side margins feel heavy.
- **System fonts only.** Nothing is fetched from Google; the page renders on
  first paint.
- **Scroll-wheel zoom is off** until you click a map, so maps don't trap the
  page scroll.
- **The only animation** is a link colour transition.
- **Print styles** are included - the CV pages print cleanly, because some
  recruiters really do print them.

## Basemap

Maps use Esri's World Light Gray (and, for the fire timeline, World Dark Gray)
canvas basemaps: free, no API key, attribution already wired in. Over Greece
these services have real tiles only up to zoom 16; above that they answer with a
"Map data not yet available" placeholder. Every map therefore sets
`maxNativeZoom: 16` (MapLibre: the source's `maxzoom: 16`), so Leaflet stretches
the zoom-16 tiles instead and the data stays zoomable past it. Keep that if you
change the basemap URL.
