---
title: 'Day 5 - Earth: Mountainous Designations in Greece'
summary: 'Two definitions of mountainous Greece: terrain under the EU less-favoured areas directive, and the 2021 census classification of 13,584 settlements. They don''t always agree.'
date: 2025-11-05
created: 2026-08-01
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 5'
tags: ['ArcGIS Pro', 'Leaflet', 'GDAL/OGR']
image: '/images/30dmc-2025-day-05-wide.webp'
imageAlt: 'Printed A4 map of Greece showing mountainous terrain in three shades of green over a grey country outline, overlaid with thousands of small coloured dots marking settlements by mountainous designation'
mapComponent: 'relief-settlements'
layers:
  - name: 'Mountainous areas'
    src: '/data/30dmc-2025-day-05-relief-zones.geojson'
  - name: 'Settlements'
    src: '/data/30dmc-2025-day-05-settlements.geojson'
mapCaption: 'Same colours as the printed map. Terrain zones come from the elevation and slope criteria; settlements carry their census designation. Click a settlement for its name and designation. Turning the terrain off in the legend shows the settlements on their own.'
thumbnail: '/images/30dmc-2025-day-05-square.webp'
thumbnailAlt: 'Map of Greece with mountainous terrain in green and settlements as coloured dots'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2025-day-05-map.png'
    note: 'PNG · 7016 × 4961 · 6.8 MB'
  - label: 'Square version'
    href: '/downloads/30dmc-2025-day-05-map-square.png'
    note: 'PNG · 4724 × 4724 · 5.8 MB'
dataSource:
  label: 'Hellenic Statistical Authority (ELSTAT), 2021 population census'
---

**Prompt:** Focus on the tangible and grounded. Map landforms, geology, soil,
agriculture.

"Mountainous" has two official meanings in Greece, and this map shows both.

The green is terrain, classified under **Directive 81/645/EEC** on
less-favoured farming areas. Land at 800 m or higher qualifies outright.
Between 600 and 800 m it also needs a slope of at least 16%, and below 600 m a
slope of at least 20%. The classification uses only elevation and slope.

The dots are settlements, classified by ELSTAT in the 2021 census as
mountainous, semi-mountainous or lowland. Of 13,584 settlements, 4,725 are
mountainous and 4,475 semi-mountainous, together two thirds of the total.

The two mostly agree along the Pindus and in central Crete, where red dots sit
inside dark green terrain. Elsewhere they don't: some settlements classed as
mountainous stand on land the directive leaves out, and some lowland
settlements sit in valleys surrounded by steep ground. Turning the terrain
layer off makes these mismatches easier to see.

The terrain layer is three dissolved multipolygons with 1.22 million vertices
in 22,911 parts, 23 MB as GeoJSON. For the web I simplified it to about 165 m
and dropped parts smaller than about four hectares, which are below one pixel
at country scale. That brings it to 2.4 MB and keeps **98.1% of the mapped
area**. The printed map uses the full geometry.
