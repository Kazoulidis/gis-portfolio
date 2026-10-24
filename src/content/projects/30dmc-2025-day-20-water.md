---
title: 'Day 20 - Water: Passenger-Ship Traffic in Greek Waters'
summary: 'Every passenger-ship crossing recorded by AIS in Greek waters during 2024, counted in 1 km cells. In a country of islands, the sea is the road network.'
date: 2025-11-20
created: 2026-08-10
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 20'
tags: ['ArcGIS Pro']
image: '/images/30dmc-2025-day-20-wide.webp'
imageFull: '/images/30dmc-2025-day-20-full.webp'
imageAlt: 'Printed A4 map of Greek waters showing passenger-ship traffic density in eight shades of blue, with bright corridors fanning out from Piraeus across the Aegean and a dense band in the Corfu channel'
thumbnail: '/images/30dmc-2025-day-20-square.webp'
thumbnailAlt: 'Map of passenger-ship traffic density across the Aegean and Ionian seas'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2025-day-20-map.png'
    note: 'PNG · 7016 × 4961 · 6.1 MB'
  - label: 'Square version'
    href: '/downloads/30dmc-2025-day-20-map-square.png'
    note: 'PNG · 4724 × 4724 · 4.9 MB'
dataSource:
  label: 'EMODnet Human Activities, EMSA Route Density Map (1 km, 2024 passenger)'
  href: 'https://emodnet.ec.europa.eu/geonetwork/srv/eng/catalog.search#/metadata/74eef9c6-13fe-4630-b935-f26871c8b661'
---

**Prompt:** Focus on the fluid - hydrology, oceans, currents, water accessibility.

Instead of depth or currents, this map treats the sea as transport
infrastructure. Greece has around 6,000 islands and islets, a little over 200
of them inhabited, and ferries are what connect them.

Each 1 km cell holds the number of passenger-ship crossings recorded there in
2024 by satellite and coastal AIS receivers. Nobody drew the routes: they
appear because ships repeat the same tracks all year.

The traffic is very uneven, which is why the legend has eight classes. About
**half the sea shown has no passenger traffic at all**, and about **two thirds
of the cells with traffic see fewer than ten crossings a year**. Most of the
movement runs along a few corridors. The busiest is the **Corfu - Igoumenitsa
channel**, where ferries run so often the crossing works almost like a bridge.

The corridors fan out from the Saronic Gulf to the Cyclades, the Dodecanese
and Crete, which shows how central Piraeus is: from most islands, you go
through Athens to get anywhere. Some of the lines across the Ionian and the
southern Aegean are ships passing through rather than serving Greek ports, so a
bright line near an island doesn't always mean the island is well connected.

Made in ArcGIS Pro over shaded relief, in the Greek Grid (GGRS87).

## A flaw in the source data

The EMSA rasters are signed 16-bit integers, so a cell with more than 32,767
crossings doesn't stop at the maximum: it wraps around to a large negative
number. Twenty-nine cells in this area have wrapped, and they are the busiest
ferry crossings in the region: the Bosphorus and the Sea of Marmara, the
approaches to Izmir, the Corfu - Igoumenitsa channel and the entrance to
Piraeus. Read as unsigned values, they come to between about 33,000 and 61,000
crossings a year.

Because they fall outside every class, these cells disappear from the map, so
the highest value shown is not the real maximum. A negative value in a raster
of counts is the sign to look for.
