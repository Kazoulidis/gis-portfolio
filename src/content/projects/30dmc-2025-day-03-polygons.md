---
title: 'Day 3 - Polygons: Nationally Designated Areas in Greece'
summary: 'The 803 nationally designated protected areas of Greece, classified by IUCN category. They overlap heavily - a strict reserve inside a national park inside a wider sustainable-use zone - so the interactive version reports every area under the point you click.'
date: 2025-11-03
created: 2026-07-26
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 3'
tags: ['ArcGIS Pro', 'Leaflet', 'GDAL/OGR']
image: '/images/30dmc-2025-day-03-wide.webp'
imageAlt: 'Printed A4 map: nationally designated protected areas across Greece, coloured and hatched by IUCN category, with legend and a table matching IUCN categories to national designation codes'
map: '/data/30dmc-2025-day-03-protected-sites.geojson'
mapComponent: 'protected-areas'
mapCaption: 'The interactive version. Areas are coloured by IUCN category, in the same colours as the printed map. Because designations nest and overlap, clicking lists every area at that point rather than only the topmost one - with its name, national designation code, and categories. Use the legend to switch a category off.'
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

Greece protects a lot of ground, but not in tidy, separate parcels. The 803
nationally designated areas in this dataset sit on top of one another: an
absolute nature reserve zone inside a national park, the park's peripheral zone
around that, and often a wildlife refuge or a sustainable-use designation
overlapping the lot. Twenty-one different national designation types are in
play, which is why both versions of this map classify by **IUCN category**
instead - seven classes that say what the protection actually means rather than
which law created it.

Wildlife refuges dominate by count: 603 of the 803 areas, almost all of them
IUCN category IV, scattered as small blue polygons across the whole country.
The green national parks are far fewer but far larger.

The printed version was made in ArcGIS Pro, using hatching to separate
categories IV, V and VI so the overlaps stay readable on paper. The interactive
map takes the opposite approach to the same problem: instead of trying to draw
the overlaps apart, it answers the question directly. **Click anywhere and it
lists every protected area at that point**, ordered from the most specific
designation outward, with each area's name, its national designation code, and
its categories.

## National designation types by IUCN category

Each area carries a national designation code (NatDA), which is what the popups
show. There are 28 of them, and this is how they map onto the seven IUCN
categories that drive the colouring.

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
| | EL95 | Wildlife refugee |
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

A note on preparing the data. The source is 15 MB - too heavy to send to a
browser - so the map above draws a simplified copy, generalised to about 44 m of
tolerance. That is invisible at this scale and cuts the file to 1.7 MB (74,000
vertices, down from 378,000). The dataset offered for download is the original,
unsimplified one.

Simplifying it was less routine than expected. GDAL's `-simplify` destroyed four
polygons outright at every tolerance tried, and this build has no
`-simplifypreservetopology`, so the generalisation runs as a small script that
catches any ring about to collapse and retries it at a finer tolerance. It
rescued 133 rings; no feature was lost.
