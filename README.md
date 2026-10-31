# Antonios Kazoulidis - GIS portfolio

The source of my portfolio at **[portfolio.kazoulidis.com](https://portfolio.kazoulidis.com)**.

I am a GIS specialist and spatial planning engineer in Thessaloniki. The site
collects my cartographic and analysis work: printed map sheets made in ArcGIS
Pro, with interactive web maps of the same data, my entries to the
[30 Day Map Challenge](https://30daymapchallenge.com/) (2025 and 2026), and my
CV.

## How it is built

- **[Astro](https://astro.build/)** builds the site to static HTML, with no
  client-side framework.
- **Leaflet** and **MapLibre GL** draw the interactive maps. Each project with
  its own kind of map has a component in `src/components/`, such as the
  animated wildfire and earthquake timelines.
- The maps themselves are made in ArcGIS Pro, QGIS and Python (GeoPandas,
  GDAL, scikit-learn). The data sources are credited on each project page.

| Folder | Holds |
| --- | --- |
| `src/content/projects/` | one Markdown file per project |
| `src/components/` | the map components |
| `src/pages/` | the About, Projects, Experience, Education and Contact pages |
| `public/` | map images, downloads and web data |
| `docker/nginx.conf` | the web server configuration |

## Running it locally

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # the finished site in dist/
```

## Deployment

The site runs as a Docker image on my server, behind Nginx Proxy Manager. Each
push to `main` runs a GitHub Actions workflow that builds the site into an
nginx image for arm64 and publishes it to `ghcr.io/kazoulidis/gis-portfolio`,
as `latest` and as the date and commit (`2026-11-04-cf63338`). The server then
pulls the new image.
