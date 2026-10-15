---
title: 'Day 25 - Hexagons: Concentration of Greek Refugee Settlements in 1928'
summary: 'Villages that were majority-refugee after the 1923 population exchange, binned into hexagons at country scale and resolving to the individual settlements as you zoom in.'
date: 2025-11-25
created: 2026-07-18
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 25'
tags: ['ArcGIS Pro', 'Leaflet', 'd3-hexbin']
image: '/images/30dmc-2025-day-25-wide.webp'
imageAlt: 'Printed A4 map: concentration of Greek refugee settlements in 1928, shown as hexagons over Greece, shaded from pale to dark red by refugee share, with legend and scale bar'
map: '/data/30dmc-2025-day-25-refugees.geojson'
mapComponent: 'refugee-hexbin'
mapCaption: 'The interactive version of the same data. Each village had at least 100 refugees and a refugee share of 50% or more in the 1928 census. Zoomed out, hexagons are shaded by the mean refugee share of the villages they cover, in the same five classes as the printed map; zoom in past the country view and they separate into the individual settlements. Click any hexagon or point for the figures.'
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

After the 1919-1922 war and the 1923 Convention Concerning the Exchange of Greek
and Turkish Populations, roughly 1.2 million Orthodox refugees were resettled
across Greece. This map shows the villages that the 1928 census recorded as
majority refugee - at least 100 refugees, and a refugee share of 50% or higher -
concentrated heavily in Macedonia and Thrace, where departing Muslim populations
left room to settle new arrivals.

The hexagons are there because the data demands them. At country scale the 883
villages overlap into an unreadable smear, and a dot map would say only that
northern Greece has a lot of them. Binning to a hexagon grid and shading each
cell by the mean refugee share of the villages inside it turns that smear into a
gradient, and the pattern it exposes is the point: an almost unbroken band of
80-100% refugee settlement running the length of Macedonia and Thrace, with
scattered, weaker concentrations south of Thessaly.

Hexagons rather than squares because their neighbours are all equidistant, so a
cluster reads the same whichever direction it runs; a square grid quietly
favours the axes it is drawn on.

The printed map was made in ArcGIS Pro - the points aggregated with *Generate
Tessellation* and *Summarize Within* onto an equal-area hexagon grid in the Greek
Grid (GGRS87), then laid out for A4. The interactive map uses Leaflet and
d3-hexbin on the same data, recomputing the bins in the browser on every zoom so
the aggregation always matches the current scale. Zoom in far enough and the
hexagons hand off to the individual settlements, each shaded by its own share -
the aggregation dissolving back into the points it was built from.
