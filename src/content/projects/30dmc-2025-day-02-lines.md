---
title: 'Day 2 - Lines: Railway Network by Gauge and Status in Greece'
summary: 'The Greek railway network by track gauge and operating status: an electrified standard-gauge main line, and a metre-gauge network that is now mostly suspended or closed.'
date: 2025-11-02
created: 2026-07-19
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 2'
tags: ['ArcGIS Pro', 'Leaflet', 'GDAL/OGR']
image: '/images/30dmc-2025-day-02-wide.webp'
imageFull: '/images/30dmc-2025-day-02-full.webp'
imageAlt: 'Printed A4 map: the Greek railway network drawn by gauge and status, with active lines in blue, suspended in orange, inactive in red and tourist routes in magenta'
mapComponent: 'railway-network'
layers:
  - name: 'Railway network'
    src: '/data/30dmc-2025-day-02-railway-network.geojson'
  - name: 'Main railway stations'
    src: '/data/30dmc-2025-day-02-railway-stations.geojson'
mapCaption: 'Lines are coloured by operating status. Click a line for its name, gauge and classification, or a station for its photograph. Use the legend to turn each status on or off.'
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

The Greek railway network is small, and two attributes explain most of it:
gauge and status. The standard-gauge main line from Athens through Thessaloniki
to the northern border carries almost all the traffic and is the only part that
is double-track and electrified. The metre-gauge network of the Peloponnese,
once a full loop, is now almost entirely suspended or closed. What is left of
the narrow-gauge lines runs as tourist routes: the Diakofto-Kalavryta rack
railway and the Volos-Milies line.

Colour shows status, since that is the main contrast: blue for the active
network, orange and red for lines out of use. Gauge is in the attributes, so
the map doesn't have to show eight categories at once.

The printed map was made in ArcGIS Pro, with the gauge classes drawn as line
symbols: double lines, hatching for electrification and dashes for narrow
gauge. The web map uses the same data, converted to GeoJSON with GDAL/OGR and
reprojected from the Greek Grid to WGS84.

One problem during conversion: the shapefile comes with an empty `.cpg` file,
so GDAL couldn't tell the text encoding and garbled the Greek characters.
Twelve of the forty station photo links contain Greek, and all twelve broke
until I reran the conversion with `SHAPE_ENCODING=CP1253`. Station photographs
are by the Hellenic Railways Organisation.
