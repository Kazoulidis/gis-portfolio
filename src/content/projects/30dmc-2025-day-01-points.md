---
title: 'Day 1 — Points: Refugee Settlement in Greece, 1928'
summary: 'Villages that were majority-refugee after the 1923 population exchange, aggregated into hexagons at country scale and resolving to individual settlements as you zoom in.'
date: 2025-11-01
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 1'
tags: ['Leaflet', 'd3-hexbin', 'QGIS']
map: '/data/30dmc-2025-day-01-refugees.geojson'
mapComponent: 'refugee-hexbin'
mapCaption: 'Each village had at least 100 refugees and a refugee share of 50% or more in the 1928 census. Zoomed out, hexagons are coloured by the mean refugee share of the villages they cover; zoom in past the country view and they separate into the individual settlements. Click any hexagon or point for the figures.'
# thumbnail: '/images/30dmc-2025-day-01.png'
# thumbnailAlt: 'Hexagon map of refugee-majority villages across Greece'
---

**Prompt:** Map with point data — individual locations, points of interest,
clusters.

After the 1919–1922 war and the 1923 Convention Concerning the Exchange of Greek
and Turkish Populations, roughly 1.2 million Orthodox refugees were resettled
across Greece. This map shows the villages that the 1928 census recorded as
majority refugee — at least 100 refugees, and a refugee share of 50% or higher —
concentrated heavily in Macedonia and Thrace, where departing Muslim populations
left room to settle new arrivals.

At country scale 883 points overlap into an unreadable smear, so they are binned
into hexagons coloured by the mean refugee share within each. Zoom in and the
hexagons hand off to the individual settlements, each coloured by its own share.

Built with Leaflet and d3-hexbin; the hexagons are recomputed in the browser on
each zoom rather than pre-rendered, so the binning always matches the current
scale.
