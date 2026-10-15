---
title: 'Day 1 - Points: UNESCO World Heritage Sites in Greece'
summary: 'All 21 of Greece''s inscribed World Heritage sites, from the Temple of Apollo Epicurius in 1986 to Mount Olympus in 2026, resolving into the 46 individual monuments they are made of as you zoom in.'
date: 2025-11-01
created: 2026-08-05
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 1'
tags: ['ArcGIS Pro', 'Leaflet', 'GDAL/OGR']
image: '/images/30dmc-2025-day-01-wide.webp'
imageAlt: 'Printed A4 map of Greece showing 21 UNESCO World Heritage sites as classical temple symbols, brown for cultural sites and green for mixed sites, over a shaded relief background'
mapComponent: 'unesco-sites'
layers:
  - name: 'UNESCO sites'
    src: '/data/30dmc-2025-day-01-unesco-sites.geojson'
  - name: 'Site components'
    src: '/data/30dmc-2025-day-01-unesco-components.geojson'
mapCaption: 'The interactive version, in the same colours and symbols as the printed map. Click any site for its description and photographs, using the arrows to move through the gallery. Zoom right in and the sites hand off to the 46 individual monuments that make them up - click one of those for what it is and which inscription it belongs to.'
thumbnail: '/images/30dmc-2025-day-01-square.webp'
thumbnailAlt: 'Map of Greece with UNESCO World Heritage sites marked by classical temple symbols'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2025-day-01-map.png'
    note: 'PNG · 7016 × 4961 · 5.4 MB'
  - label: 'Square version'
    href: '/downloads/30dmc-2025-day-01-map-square.png'
    note: 'PNG · 4724 × 4724 · 4.2 MB'
  - label: 'Sites dataset'
    href: '/data/30dmc-2025-day-01-unesco-sites.geojson'
    note: 'GeoJSON · 21 sites · 38 KB'
  - label: 'Components dataset'
    href: '/data/30dmc-2025-day-01-unesco-components.geojson'
    note: 'GeoJSON · 46 components · 9 KB'
dataSource:
  label: 'UNESCO World Heritage List'
  href: 'https://whc.unesco.org/en/statesparties/gr'
---

**Prompt:** Map with point data - individual locations, points of interest, clusters.

Greece has 21 World Heritage sites: 18 Cultural, 3 Mixed, and not one purely
Natural. The list opens in 1986 with the Temple of Apollo Epicurius at Bassae
and runs to the 2026 inscription of Mount Olympus, and what it records is a
country where the history and the landscape tend to be the same argument. The
three Mixed sites - Meteora, Mount Athos and Mount Olympus - are the ones where
that is written into the inscription itself, recognised for their cultural and
their natural value at once. Eleven more sites sit on Greece's tentative list.

A point map of this is deceptively simple, because a World Heritage site is an
administrative unit rather than a place. Some of these points are one building.
Others are not: **Minoan Palatial Centres** is six palaces spread the length of
Crete, from Kydonia in the west to Zakros in the east, and the **Paleochristian
and Byzantine Monuments of Thessalonika** is fifteen separate churches scattered
through a working city. Drawn at country scale they are single icons, which is
correct for what the inscription is and misleading about where you would
actually go.

So the interactive map draws both. Zoomed out it shows the 21 inscriptions, in
the printed map's symbology - a classical temple in brown for Cultural, green
for Mixed. Zoom in far enough that one icon no longer honestly stands for one
place, and the sites hand off to the 46 components underneath them. For most
sites that changes little, because the inscription really is a single monument.
For Thessalonika it turns one icon into fifteen churches you can walk between.

Clicking a site opens its description and its photograph gallery, moved through
with arrow buttons; the image and its credit both link back to the original on
the World Heritage Centre's site. Components carry neither the gallery nor the
description, because both belong to the inscription rather than to any one
monument inside it - repeating the same paragraph and the same photographs under
all fifteen Thessalonika churches would tell you nothing about the church you
actually clicked.

Two notes on the images. All 534 are served from this site rather than hotlinked,
re-encoded from the World Heritage Centre's originals - 753 MB of JPEG, some of
it close to 5,000 pixels across, down to 69 MB of WebP at a size a popup can
actually use. The gallery still fetches only the frame you are looking at. And
the credits are honest about their limits: the dataset carries one photographer
credit per site, for that site's main image, so that is the only image it is
attached to. The rest are credited to the World Heritage Centre, which is where
every photograph came from.

The printed map was made in ArcGIS Pro over a shaded relief background, with the
site symbols drawn as a custom marker. The web version uses Leaflet on the same
data, converted from the file geodatabase with GDAL/OGR and reprojected from the
Greek Grid to WGS84.
