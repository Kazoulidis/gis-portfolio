---
title: 'Day 1 - Points: UNESCO World Heritage Sites in Greece'
summary: 'Greece''s 21 World Heritage sites, from the Temple of Apollo Epicurius (1986) to Mount Olympus (2026). Zoom in and they split into the 46 monuments they are made of.'
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
mapCaption: 'Same colours and symbols as the printed map. Click a site for its description and photographs. Zoom in and the sites split into their 46 components; click one to see what it is and which site it belongs to.'
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

Greece has 21 World Heritage sites: 18 cultural, 3 mixed and none purely
natural. The first, the Temple of Apollo Epicurius at Bassae, was inscribed in
1986; the most recent, Mount Olympus, in 2026. The three mixed sites, Meteora,
Mount Athos and Mount Olympus, are listed for both their cultural and their
natural value. Another eleven sites are on Greece's tentative list.

A World Heritage site is not always a single place. Some are one building, but
the **Minoan Palatial Centres** are six palaces spread across Crete, from
Kydonia to Zakros, and the **Paleochristian and Byzantine Monuments of
Thessalonika** are fifteen churches around the city. At country scale each of
them is one symbol.

The interactive map uses two layers for this. Zoomed out, it shows the 21 sites
with the printed map's symbols: a temple in brown for cultural sites and in
green for mixed ones. Zoomed in, it switches to the 46 individual components.
For most sites nothing changes; for Thessalonika one symbol becomes fifteen
churches.

Clicking a site opens its description and photo gallery, with links back to the
originals on the World Heritage Centre's website. The components don't repeat
the gallery or the description, since both describe the site as a whole rather
than any one monument in it.

The 534 photographs are hosted on this site rather than linked from UNESCO. I
converted them from 753 MB of JPEG, some close to 5,000 pixels wide, to 69 MB
of WebP, and the gallery loads only the photo on screen. The dataset has one
photographer credit per site, for its main image, so only that image carries a
name. The rest are credited to the World Heritage Centre.

The printed map was made in ArcGIS Pro over shaded relief, with a custom marker
for the sites. For the web version I converted the file geodatabase to GeoJSON
with GDAL/OGR and reprojected it from the Greek Grid to WGS84.
