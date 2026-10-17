---
title: 'Day 15 - Fire: Wildfire Scars in Greece'
summary: 'Every burned area MODIS recorded in Greece from November 2000 to May 2026: 17,971 patches, each one ground that burned on a single day. Shown as a composite map and as an animation.'
date: 2025-11-15
created: 2026-08-04
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 15'
tags: ['ArcGIS Pro', 'Leaflet', 'MODIS', 'GDAL/OGR']
image: '/images/30dmc-2025-day-15-wide.webp'
imageAlt: 'Printed A4 map of Greece showing wildfire scars from 2000 to 2026 as orange and dark red patches, shaded by the area burned per day, concentrated in the Peloponnese, Attica, Evia and Thrace'
map: '/data/30dmc-2025-day-15-burned-area.geojson'
mapComponent: 'fire-timeline'
mapCaption: 'Opens on the composite of the whole record. Press play to run it day by day: each patch appears on its burn date and fades over the following months. Switch to By month or By year for separate frames, use the arrows next to the timeline to jump to the next day with a fire, and raise the speed for a quicker run.'
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

Stacked on one map, 26 years of wildfire show where Greece burns: the
Peloponnese, Attica and Evia, Chalkidiki, and the Dadia forest near
Alexandroupoli. Animated, the same data shows when: very little in winter, a
build-up through June, then a peak in late summer.

Of the 16,446 km² of burned area in the record, **7,372 km² burned in
August**, nearly half. July adds 3,106 km², October 2,462 km² and September
1,953 km². The other eight months together account for about a tenth.

Some years stand out. **2007** is the largest, at 3,133 km², most of it in the
Peloponnese over two weeks in late August, with 932 km² burning on 25 August
alone. **2021** is the year of the Evia fires. **2023** reached 1,717 km²,
mostly from the Dadia fire, which burned from 19 to 31 August and covered
433 km² on its worst day.

## About the data

These are MODIS MCD64A1 burned-area polygons at 500 m resolution. The same
detection method covers all 26 years, so the years can be compared, and the
totals match published national figures well: 2023 comes out at 1,717 km²
against about 1,750 reported.

Some limits to keep in mind:

- **Each polygon is ground that burned on one day**, not a whole fire. A fire
  shows up as several polygons across the days it was active, which is why
  there are 17,971 patches on 2,734 different dates.
- These are **burned areas detected from satellite**, not fire perimeters
  mapped on the ground.
- MODIS **misses more than half of fires between 10 and 100 hectares**. The
  totals hold up, but small fires are missing.
- **2026 is partial**: the record ends on 10 May 2026. November 2000 is simply
  where the MODIS record starts.

The 16,446 km² total is a sum of daily patches. It counts some ground twice,
where an area burned in more than one year, so it isn't the share of Greece
that has burned.

## Building it

The source is a file geodatabase in the Greek Grid, which I converted to WGS84
with GDAL/OGR. Simplifying the 500 m stepped edges barely helped: at a 90 m
tolerance the vertex count only fell from 157,000 to 139,000, because most
patches are a single cell with few vertices to remove.

Most of the file size was in the attributes. Every polygon carried its year,
month, day of year, production date and a source filename, all either
derivable from the burn date or unused. Keeping only the date and area took
the file from 6.3 MB to 4.2 MB, or 469 KB with gzip.

The map draws on a custom canvas layer rather than with Leaflet vector layers,
since adding and removing thousands of paths every frame would be far too
slow. The polygons are projected once per zoom level and cached in pixels, so
each frame only changes their opacity, and panning moves the canvas without
reprojecting anything.
