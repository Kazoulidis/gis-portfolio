---
title: 'Day 25 - Hexagons: Concentration of Greek Refugee Settlements in 1928'
summary: 'Villages with a refugee majority after the 1923 population exchange, grouped into hexagons at country scale and shown as individual settlements when you zoom in.'
date: 2025-11-25
created: 2026-07-18
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 25'
tags: ['ArcGIS Pro', 'Leaflet', 'd3-hexbin']
image: '/images/30dmc-2025-day-25-wide.webp'
imageAlt: 'Printed A4 map: concentration of Greek refugee settlements in 1928, shown as hexagons over Greece, shaded from pale to dark red by refugee share, with legend and scale bar'
map: '/data/30dmc-2025-day-25-refugees.geojson'
mapComponent: 'refugee-hexbin'
mapCaption: 'Every village shown had at least 100 refugees, making up 50% or more of its population in the 1928 census. Zoomed out, each hexagon is shaded by the average refugee share of its villages, in the printed map''s five classes. Zoom in and the hexagons split into the individual settlements. Click a hexagon or a point for the figures.'
thumbnail: '/images/30dmc-2025-day-25-square.webp'
thumbnailAlt: 'Hexagon map of refugee-majority villages across Greece, 1928'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2025-day-25-map.png'
    note: 'PNG · 7016 × 4961 · 4.7 MB'
  - label: 'Square version'
    href: '/downloads/30dmc-2025-day-25-map-square.png'
    note: 'PNG · 4724 × 4724 · 3.7 MB'
  - label: 'Dataset'
    href: '/data/30dmc-2025-day-25-refugees.geojson'
    note: 'GeoJSON · 883 settlements · 147 KB'
dataSource:
  label: 'Laboratory of Informatics Applications and Computational Economics, University of Ioannina'
  href: 'https://stavrakoudis.econ.uoi.gr/deth/oikismoi-prosfyges-main80.html'
---

**Prompt:** Use hexagonal binning or a hexagonal grid system.

After the Greco-Turkish war of 1919-1922 and the 1923 Convention Concerning the
Exchange of Greek and Turkish Populations, about 1.2 million Orthodox refugees
were resettled in Greece. This map shows the villages that the 1928 census
recorded with a refugee majority: at least 100 refugees, making up 50% or more
of the population. Most are in Macedonia and Thrace, where the departing Muslim
population had left land and houses for the new arrivals.

At country scale the 883 villages overlap too much to read as points, so the
map groups them into hexagons, each shaded by the average refugee share of the
villages inside it. The result is an almost continuous band of 80-100% refugee
villages across Macedonia and Thrace, with fewer and weaker clusters south of
Thessaly.

I used hexagons rather than squares because all six neighbours of a hexagon
are the same distance away, so clusters look the same in every direction. A
square grid favours its own two axes.

The printed map was made in ArcGIS Pro, aggregating the points with *Generate
Tessellation* and *Summarize Within* onto an equal-area hexagon grid in the
Greek Grid (GGRS87). The interactive map uses Leaflet and d3-hexbin on the same
data and recalculates the hexagons at every zoom level, so the grouping always
fits the current scale. Zoom in far enough and the hexagons give way to the
individual villages, each shaded by its own refugee share.
