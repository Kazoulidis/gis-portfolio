---
title: 'Day 15 - Fire: Wildfire Scars in Greece'
summary: 'Every burned area MODIS recorded in Greece between November 2000 and May 2026, as a printed composite and as an animation you can run through time. 17,971 patches, each one a piece of ground that burned on a single day.'
date: 2025-11-15
created: 2026-08-04
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 15'
tags: ['ArcGIS Pro', 'Leaflet', 'MODIS', 'GDAL/OGR']
image: '/images/30dmc-2025-day-15-wide.webp'
imageAlt: 'Printed A4 map of Greece showing wildfire scars from 2000 to 2026 as orange and dark red patches, shaded by the area burned per day, concentrated in the Peloponnese, Attica, Evia and Thrace'
map: '/data/30dmc-2025-day-15-burned-area.geojson'
mapComponent: 'fire-timeline'
mapCaption: 'The interactive version. Opens on the total composite - every patch of the 26-year record at once. Press play to run it day by day, every calendar day in sequence, with each patch igniting on its burn date and fading over the following months; the winters are genuinely empty rather than skipped. Switch to By month or By year for discrete frames, use the arrows either side of the timeline to jump to the next day that actually burned, and raise the speed if the full run is too slow.'
thumbnail: '/images/30dmc-2025-day-15-square.webp'
thumbnailAlt: 'Map of Greece showing wildfire scars from 2000 to 2026 in orange and dark red'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2025-day-15-map.png'
    note: 'PNG · 7016 × 4961 · 5.6 MB'
  - label: 'Square version'
    href: '/downloads/30dmc-2025-day-15-map-square.png'
    note: 'PNG · 4724 × 4724 · 4.6 MB'
  - label: 'Burned area dataset (web copy)'
    href: '/data/30dmc-2025-day-15-burned-area.geojson'
    note: 'GeoJSON · 17,971 patches · 4.2 MB'
dataSource:
  label: 'MODIS MCD64A1 Collection 6.1 burned area, NASA LP DAAC (via University of Maryland)'
  href: 'https://lpdaac.usgs.gov/documents/1006/MCD64_User_Guide_V61.pdf#page=23'
---

**Prompt:** Focus on energy, light or transformation. Map heat, wildfires,
energy consumption.

Twenty-six years of Greek wildfire on one sheet is a record of where the country
burns: the Peloponnese, Attica and Evia, the Chalkidiki peninsula, and the Dadia
forest above Alexandroupoli in the far northeast. Run the same data forward
instead of stacking it, and it becomes a rhythm - nothing through the winter, a
build through June, then the pulse.

That pulse is the whole story. Of the 16,446 km² of burned area MODIS recorded
across the full record, **7,372 km² of it burned in August alone** - nearly half.
July adds another 3,106 km² and September 1,953 km². The remaining eight months
of the year together account for less than a fifth of the total.

Some years announce themselves. **2007** is the largest in the record at
3,133 km², most of it in the Peloponnese across a fortnight in late August, with
932 km² burning on 25 August alone. **2021** brings Evia. **2023** reaches
1,717 km², dominated by the Dadia fire, which ran from 19 to 31 August and took
433 km² on its worst single day.

## About the data

These are MODIS MCD64A1 burned-area polygons at 500 m resolution. One consistent
detection method runs across the whole 26 years, so years are genuinely
comparable with one another, and the totals validate well against published
national figures - 2023 comes out at 1,717 km² against roughly 1,750 reported.

Four things are worth knowing before reading too much into it:

- **Each polygon is an area that burned on a single day**, not a fire. One
  wildfire appears as many polygons across the days it was active, which is why
  17,971 patches are spread over 2,734 distinct burn dates.
- These are **burned areas detected from orbit**, not fire perimeters mapped on
  the ground.
- MODIS **misses more than half of fires between 10 and 100 hectares**.
  Aggregate totals hold up; small individual fires are simply absent.
- **2026 is partial** - the record ends on 10 May 2026. And November 2000 is
  where the MODIS record begins, not where fire in Greece begins.

The 16,446 km² figure is the sum of daily patch areas. It double-counts in two
directions - ground that burned in more than one year, and fires that burned
across more than one day - so it is not a measure of how much of Greece has
burned.

## Building it

The source is 17,972 polygons in a file geodatabase in the Greek Grid, converted
to WGS84 with GDAL/OGR. Getting it small enough to animate in a browser turned
out not to be a geometry problem. The obvious move is to simplify the 500 m
staircase edges, but that saved almost nothing: at a 90 m tolerance the vertex
count only fell from 157,000 to 139,000, because most patches are a single cell
with barely any vertices to remove.

The real weight was in the attributes. Every polygon carried its year, month,
ordinal day, production year and month, and a source filename - all of it either
derivable from the burn date or irrelevant to a map. Cutting the properties down
to a date and an area took the file from 6.3 MB to 4.2 MB, and gzip serves it in
469 KB.

Drawing is a custom canvas layer rather than Leaflet vector layers: adding and
removing thousands of paths every frame would be hopeless. Instead the polygons
are projected once per zoom level and cached in pixel space, so each frame only
changes their opacity, and panning moves the canvas without reprojecting
anything.
