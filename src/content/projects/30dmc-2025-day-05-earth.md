---
title: 'Day 5 - Earth: Mountainous Designations in Greece'
summary: 'Greece measured two ways: terrain classified as mountainous under the EU less-favoured areas directive, and the 13,584 settlements classified as mountainous, semi-mountainous or lowland in the 2021 census. The two do not always agree.'
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
mapCaption: 'The interactive version, in the same colours as the printed map. Terrain zones come from the elevation and slope criteria; settlement dots carry their census designation. Click a settlement for its name and designation, and use the legend to switch any of the six classes off - turning the terrain off is the quickest way to see how the settlement designations fall on their own.'
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

Greece is a mountainous country, but "mountainous" turns out to be two different
claims depending on who is asking. This map puts both on the same sheet.

The green is terrain, classified under **Directive 81/645/EEC** on less-favoured
farming areas, which sets its thresholds explicitly: land at 800 m or above
qualifies outright; between 600 and 800 m it also needs a slope of at least 16%;
below 600 m the slope has to reach 20%. That is a measurement, taken from
elevation and slope, with no reference to who lives there.

The dots are settlements, and their designation comes from the **ELSTAT
framework** used in the 2021 census: mountainous, semi-mountainous, or lowland.
Of the 13,584 settlements, 4,725 are mountainous and 4,475 semi-mountainous -
between them, two thirds of every inhabited place in the country.

Putting the two together is the interesting part. They agree along the Pindus
spine and through central Crete, where dark red dots sit inside dark green
terrain. They disagree in places worth noticing: settlements designated
mountainous on ground the directive does not classify at all, and
lowland-designated settlements in valleys threaded through steep terrain. Switch
the terrain off in the legend and the settlement pattern stands on its own,
which makes the mismatch easier to see.

A note on the data. The terrain layer arrives as three dissolved multipolygons
carrying 1.22 million vertices across 22,911 separate parts - 23 MB of GeoJSON,
far more than a browser should be asked to take. For the web version the
geometry is generalised to about 165 m, and parts smaller than roughly four
hectares are dropped, since at country scale those are smaller than a single
pixel. That cuts it to 2.4 MB while keeping **98.1% of the mapped area**. The
printed version above uses the full-resolution geometry.
