---
title: 'Day 2 - Lines: Railway Network by Gauge and Status in Greece'
summary: 'The Greek railway network classified by track gauge and operating status, from the active electrified spine to the lines that have been suspended or abandoned entirely.'
date: 2025-11-02
created: 2026-07-19
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 2'
tags: ['ArcGIS Pro', 'Leaflet', 'GDAL/OGR']
image: '/images/30dmc-2025-day-02-wide.webp'
imageAlt: 'Printed A4 map: the Greek railway network drawn by gauge and status, with active lines in blue, suspended in orange, inactive in red and tourist routes in magenta'
mapComponent: 'railway-network'
layers:
  - name: 'Railway network'
    src: '/data/30dmc-2025-day-02-railway-network.geojson'
  - name: 'Main railway stations'
    src: '/data/30dmc-2025-day-02-railway-stations.geojson'
mapCaption: 'The interactive version. Lines are coloured by operating status; click any line for its name, gauge and network classification, or a station for its photograph. Use the legend to switch a status on or off.'
thumbnail: '/images/30dmc-2025-day-02-square.webp'
thumbnailAlt: 'Map of the Greek railway network coloured by operating status'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2025-day-02-map.png'
    note: 'PNG · 7016 × 4961 · 4.9 MB'
  - label: 'Square version'
    href: '/downloads/30dmc-2025-day-02-map-square.png'
    note: 'PNG · 4724 × 4724 · 4.0 MB'
  - label: 'Network dataset'
    href: '/data/30dmc-2025-day-02-railway-network.geojson'
    note: 'GeoJSON · 34 lines · 485 KB'
  - label: 'Stations dataset'
    href: '/data/30dmc-2025-day-02-railway-stations.geojson'
    note: 'GeoJSON · 40 stations · 11 KB'
dataSource:
  label: 'Hellenic Railways Organisation (OSE)'
  href: 'https://ose.gr/'
---

**Prompt:** Map linear features - roads, rivers, migration paths, flow lines.

Greece has a small railway network with a complicated history, and the two
attributes that explain most of it are gauge and status. The standard-gauge
spine running from Athens through Thessaloniki to the northern border carries
almost all the traffic and is the only part that is doubled and electrified.
Away from it, the map is mostly a record of retreat: the metre-gauge Peloponnese
network, once a full circuit, is now almost entirely suspended or abandoned, and
what survives of the narrow-gauge lines does so as tourist routes - Diakofto to
Kalavryta on its rack section, and Volos to Milies.

Colour carries status here rather than gauge, because status is the story: the
blue of the active network against the orange and red of everything that has
been switched off. Gauge is in the attributes instead, where you can pull it up
per line without the map having to encode eight categories at once.

The printed version above was built in ArcGIS Pro, where the gauge classes are
drawn as proper cartographic line symbols - doubled lines, hatching for
electrification, dashes for narrow gauge. The interactive map below uses the
same data converted to GeoJSON with GDAL/OGR and reprojected from the Greek Grid
to WGS84; click any station for its photograph.

One wrinkle worth recording: the shapefile ships with an empty `.cpg` file, so
GDAL has no encoding to go on and falls back to a codepage that mangles Greek
text. Twelve of the forty station photo URLs contain Greek characters, and all
twelve came through as broken bytes and 404s until the conversion was rerun with
`SHAPE_ENCODING=CP1253`. Station photographs are by the Hellenic Railways
Organisation.
