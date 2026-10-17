---
title: 'Day 3 - Polygons: Nationally Designated Areas in Greece'
summary: 'Greece''s 803 nationally designated protected areas, classified by IUCN category. Many of them overlap, so the interactive map lists every area at the point you click.'
date: 2025-11-03
created: 2026-07-26
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 3'
tags: ['ArcGIS Pro', 'Leaflet', 'GDAL/OGR']
image: '/images/30dmc-2025-day-03-wide.webp'
imageAlt: 'Printed A4 map: nationally designated protected areas across Greece, coloured and hatched by IUCN category, with legend and a table matching IUCN categories to national designation codes'
map: '/data/30dmc-2025-day-03-protected-sites.geojson'
mapComponent: 'protected-areas'
mapCaption: 'Same colours as the printed map. Designations overlap, so a click lists every area at that point, not just the top one, with its name, national designation code and categories. Use the legend to turn categories off.'
thumbnail: '/images/30dmc-2025-day-03-square.webp'
thumbnailAlt: 'Map of Greece showing protected areas coloured by IUCN category'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2025-day-03-map.png'
    note: 'PNG · 7016 × 4961 · 4.9 MB'
  - label: 'Square version'
    href: '/downloads/30dmc-2025-day-03-map-square.png'
    note: 'PNG · 4724 × 4724 · 3.9 MB'
  - label: 'Dataset'
    href: '/downloads/30dmc-2025-day-03-protected-sites-full.geojson'
    note: 'GeoJSON · 803 areas · full resolution · 15 MB'
dataSource:
  label: 'European Environment Agency - Nationally designated areas (CDDA)'
  href: 'https://doi.org/10.2909/028003e7-7585-4d69-92fc-7f81e0cc2340'
---

**Prompt:** Create a map focused on area features - administrative regions, land
use.

The 803 protected areas in this dataset often overlap: a strict reserve zone
inside a national park, the park's buffer zone around it, and sometimes a
wildlife refuge or a sustainable-use zone on top. They use 21 different
national designation types, so both maps classify them by **IUCN category**
instead. The seven categories describe what the protection means rather than
which law created it.

Wildlife refuges make up 603 of the 803 areas, almost all in IUCN category IV,
and show up as small blue polygons all over the country. National parks are
few but much larger.

The printed map, made in ArcGIS Pro, uses hatching for categories IV, V and VI
so the overlaps stay readable on paper. The interactive map handles overlaps
differently: **click anywhere and it lists every protected area at that
point**, from the most specific designation outward, with its name, national
code and categories.

## National designation types by IUCN category

The Greek scheme has 28 national designation codes (NatDA), and 21 of them
appear in this dataset. This is how they map onto the IUCN categories used for
the colours.

| IUCN | Code | National designation type |
| --- | --- | --- |
| I | EL01 | Absolute nature reserve area |
| | EL02 | Absolute nature reserve zone in national park |
| | EL03 | Absolute nature reserve zone in national marine park |
| | EL05 | Core zone in national (woodland) park |
| | EL85 | Absolute nature reserve zone in regional park |
| | EL86 | Absolute nature reserve zone in nature reserve area |
| II | EL96 | National park |
| | EL97 | National marine park |
| III | EL06 | Natural monuments and landmarks (protected as strict nature reserve) |
| | EL87 | Protected natural formation |
| IV | EL07 | Nature reserve area |
| | EL08 | Nature reserve zone in national park |
| | EL09 | Nature reserve zone in national marine park |
| | EL21 | Game breeding station |
| | EL84 | Nature reserve zone in regional park |
| | EL95 | Wildlife refuge |
| V | EL12 | Aesthetic forest |
| | EL28 | Protected significant natural formation, protected landscape and landscape elements |
| | EL88 | Protected landscape / seascape |
| | EL89 | Regional park |
| VI | EL11 | National (woodland) park - peripheral zone |
| | EL23 | Controlled hunting area |
| | EL24 | Protected forest |
| | EL90 | Nature reserve area - peripheral zone |
| | EL91 | National marine park - peripheral zone |
| | EL92 | National park - peripheral zone |
| N/A | EL98 | Protected area not yet classified |
| | EL99 | Others |

## Preparing the data

The source file is 15 MB, too heavy for a browser, so the web map uses a copy
simplified to a tolerance of about 44 m. The difference isn't visible at this
scale, and the file drops to 1.7 MB (74,000 vertices instead of 378,000). The
download is the original, unsimplified file.

GDAL's `-simplify` deleted four polygons outright at every tolerance I tried,
and this GDAL build has no `-simplifypreservetopology`. So the simplification
runs as a short script that retries any ring about to collapse at a finer
tolerance. It saved 133 rings, and no feature was lost.
