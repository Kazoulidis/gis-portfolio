---
title: 'Day 6 - Dimensions: Population Density of Thessaloniki'
summary: 'Kontur''s 400 m population hexagons for Greece, extruded so that height carries the count. Thessaloniki''s core rises out of a landscape where 96% of the hexagons hold fewer than 300 people each.'
date: 2025-11-06
created: 2026-08-06
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 6'
tags: ['ArcGIS Pro', 'MapLibre GL', 'H3']
image: '/images/30dmc-2025-day-06-wide.webp'
imageAlt: 'Printed A4 map: a 3D view of population hexagons around Thessaloniki, with low yellow hexagons across the countryside rising into a dense column of tall red hexagons over the city centre'
map: '/data/30dmc-2025-day-06-population-h3.json'
mapComponent: 'population-hex-3d'
mapCaption: 'The interactive version, extended from Thessaloniki to the whole country - all 108,125 populated hexagons in Greece, in the printed map''s five colour classes. The camera is fully free: drag to pan, right-click or ctrl-drag to swing the heading and tilt the horizon, scroll to zoom. Height is population × 0.5, so a hexagon of 25,236 people stands 12.6 km tall. Click any hexagon for its figure.'
thumbnail: '/images/30dmc-2025-day-06-square.webp'
thumbnailAlt: '3D extruded hexagon map of population density around Thessaloniki'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2025-day-06-map.png'
    note: 'PNG · 7016 × 4961 · 3.1 MB'
  - label: 'Square version'
    href: '/downloads/30dmc-2025-day-06-map-square.png'
    note: 'PNG · 4724 × 4724 · 1.3 MB'
  - label: 'Dataset'
    href: '/downloads/30dmc-2025-day-06-population-hexagons.geojson'
    note: 'GeoJSON · 108,125 hexagons · 27 MB'
dataSource:
  label: 'Kontur Population Density for 400 m H3 hexagons'
  href: 'https://www.kontur.io/portfolio/population-dataset/'
---

**Prompt:** Map beyond 2D - 3D models, extrusions, building heights.

The third dimension is usually decoration. Here it is the only reason the map
works, because the underlying numbers are too skewed to survive being flattened.

The data is Kontur's population dataset, which fuses high-resolution settlement
imagery with global building footprints, discards uninhabitable terrain and
calibrates the totals against UN demographic figures. It arrives as H3 hexagons
at resolution 8 - about 0.83 km² each, roughly 400 m across. Greece comes to
**108,125 populated hexagons holding 10.35 million people**, and the way those
people are spread is the story:

- 104,174 hexagons - **96.3% of them** - hold fewer than 300 people each, and
  between them account for just 27% of the population.
- 659 hexagons - **0.6% of them** - hold 3,000 or more, and between them account
  for **48%** of everyone in the country.
- The single densest hexagon holds **25,236 people** in 0.83 km², in central
  Athens. Thessaloniki's densest holds 21,946.

Put that on a flat choropleth and the top class is a handful of pixels you would
miss at a glance; stretch the ramp to make them visible and everywhere else
turns into an undifferentiated wash. Extruding solves it because height has far
more usable range than colour does. The countryside stays a low yellow plate,
legible as inhabited but unremarkable, and the city centre becomes a physical
column you cannot read past. Colour and height carry the same variable here,
deliberately - the redundancy means the pattern survives whether you read the
scene by hue or by silhouette.

Thessaloniki is a good subject for it because the shape is so abrupt. The city
does not taper into its surroundings; it stops. The red column sits tight
against the waterfront and falls away within a couple of kilometres inland, and
the thin orange spurs running southeast trace the coastal suburbs along the
Thermaic Gulf. The scattered orange hexagons out in the yellow are the market
towns of the plain, each one a small step up from the fields around it.

Built in ArcGIS Pro as a local scene in the Greek Grid (GGRS87), with the camera
pitched 65° down from 50 km up and a 55° field of view - low enough that the
columns read as solid objects rather than a bar chart seen from above, high
enough that the near hexagons do not hide the ones behind them. The five classes
in the legend are the same breaks used for the fill colour.
