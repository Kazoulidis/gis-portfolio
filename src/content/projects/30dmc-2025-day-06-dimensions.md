---
title: 'Day 6 - Dimensions: Population Density of Thessaloniki'
summary: 'Kontur''s population hexagons for Greece, extruded so that height shows the number of people. Thessaloniki''s centre rises out of a landscape where 96% of hexagons hold fewer than 300 people.'
date: 2025-11-06
created: 2026-08-06
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 6'
tags: ['ArcGIS Pro', 'MapLibre GL', 'H3']
image: '/images/30dmc-2025-day-06-wide.webp'
imageAlt: 'Printed A4 map: a 3D view of population hexagons around Thessaloniki, with low yellow hexagons across the countryside rising into a dense column of tall red hexagons over the city centre'
map: '/data/30dmc-2025-day-06-population-h3.json'
mapComponent: 'population-hex-3d'
mapCaption: 'The interactive version covers all of Greece: 108,125 populated hexagons, in the printed map''s five colour classes. Drag to pan, right-click or ctrl-drag to rotate and tilt, and scroll to zoom. Height is population × 0.5 m, so a hexagon of 25,236 people stands 12.6 km tall. Click a hexagon for its population.'
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

Population in Greece is extremely concentrated, which a flat map shows badly.
Extruding the hexagons gives each value a height as well as a colour.

The data is Kontur's population dataset, built from satellite settlement
imagery and building footprints and calibrated to UN population figures. It
comes as H3 hexagons at resolution 8, about 0.83 km² each. Greece has
**108,125 populated hexagons holding 10.35 million people**:

- 104,174 hexagons (96.3%) hold fewer than 300 people each, together 27% of
  the population.
- 659 hexagons (0.6%) hold 3,000 or more, together 48% of the population.
- The densest hexagon, in central Athens, holds 25,236 people. Thessaloniki's
  densest holds 21,946.

On a flat choropleth the top class covers a few pixels, and stretching the
colour ramp to show them washes out everything else. Height has much more range
than colour: the countryside stays a low yellow surface and the city centre
becomes a tall column. Colour and height show the same variable, so the pattern
reads either way.

Thessaloniki has a sharp edge. The red column stands along the waterfront and
drops off within a couple of kilometres inland. The orange strips running
southeast are the coastal suburbs along the Thermaic Gulf, and the scattered
orange hexagons further out are the towns of the plain.

The printed map is an ArcGIS Pro local scene in the Greek Grid (GGRS87), seen
from 50 km up at a 65° downward pitch with a 55° field of view. At that angle
the columns look solid and the near ones don't hide those behind them. The
legend's five classes are the same breaks used for the colours.
