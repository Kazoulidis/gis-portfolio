---
title: 'Day 24 - Network: If Slime Mold Built Greece''s Motorways'
summary: 'A slime mold model grown between the 47 mainland cities of Greece, against the real motorways. For about the same length of network, 2,944 km against 2,904 km, the mold links the cities with shorter detours and survives more single cuts. Watch it spread, find its veins and let the rest wither.'
date: 2026-11-24
created: 2026-11-18
category: '30-day-map-challenge'
fields: ['transport']
context: '#30DayMapChallenge 2026 · Day 24'
tags: ['ArcGIS Pro', 'Python', 'Network analysis', 'Simulation', 'OpenStreetMap']
image: '/images/30dmc-2026-day-24-wide.webp'
imageFull: '/images/30dmc-2026-day-24-full.webp'
imageAlt: 'Printed A4 sheet titled If Slime Mold Built Greece''s Motorways: mainland Greece in near-black like a petri dish, glowing yellow-green slime mold tubes joining amber dots for 47 cities, with a faint web of abandoned veins around them and the real motorways as thin blue lines, with a note on how to read it; the side panel holds a legend, four small maps of the mold growing, a scorecard against the motorways and a chart of length against fault tolerance'
thumbnail: '/images/30dmc-2026-day-24-square.webp'
thumbnailAlt: 'Glowing yellow-green slime mold network joining the cities of mainland Greece on a dark background'
dataSource:
  - label: 'Tero et al. (2010), Rules for biologically inspired adaptive network design, Science 327: 439-442 - the slime mold model'
    href: 'https://doi.org/10.1126/science.1177894'
  - label: 'Hellenic Statistical Authority (ELSTAT) - 2021 census population by settlement, and the settlements'
    href: 'https://www.statistics.gr/en/2021-census-pop-hous'
  - label: '© OpenStreetMap contributors - motorways, trunk and primary roads, via the Overpass API, 18 November 2026 (ODbL)'
    href: 'https://www.openstreetmap.org/copyright'
  - label: 'Copernicus DEM GLO-90 - heights for the cost of climbing'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'Hellenic Statistical Authority (ELSTAT) - coast'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: '© EuroGeographics, via Eurostat GISCO - NUTS boundaries of the neighboring countries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-24-map.jpg'
    note: 'JPEG · 7016 × 4961 · 2.7 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-24-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 1.2 MB'
map: '/data/30dmc-2026-day-24-slime.json'
mapComponent: 'slime-timelapse'
mapCaption: 'The slime mold model growing over 3,000 steps. Every tube starts the same; the ones that carry flow between the cities thicken and glow, the rest fade. The real motorways are drawn in blue; untick them to see the mold alone.'
draft: true
---

**Prompt:** Network.

The slime mold *Physarum polycephalum* has no brain, yet it builds good
networks. Put oat flakes on a plate and it spreads over all of it, then keeps
the tubes that carry food between the flakes and lets the rest wither. In 2010
Atsushi Tero and colleagues placed the flakes where the cities around Tokyo
are, and the mold grew a network much like the region's railways: about as
long, as efficient and as robust. They also wrote down the rule it follows,
which can be run on a computer.

This map runs that rule on Greece. The food is the 47 mainland cities of
10,000 people or more, and the plate is the land itself, where climbing costs
more than walking on the flat.

## The scorecard

The real motorways are 2,904 km long, measured the same way as the mold. The
mold's run that spends about the same length, 2,944 km, does better on the
two measures Tero used:

| | Slime mold | Motorways |
| --- | ---: | ---: |
| Total length | 2,944 km | 2,904 km |
| Times the shortest network joining all cities | 1.45 | 1.43 |
| Mean detour between two cities | 1.39× | 1.98× |
| Share of the network that survives any single cut | 57% | 41% |

The detour is the trip along the network against the shortest trip across the
land. Twelve of the 47 cities are more than 10 km from a motorway, among them
Volos, Drama, Agrinio and Livadeia, and their trips include the way to one. The
motorways were not built to join every city of 10,000 people, and the mold was.

## Where it agrees and where it does not

Of the mold's length, 39% runs within 5 km of a motorway, against about a
fifth of all the land. Where it leaves the motorways, it follows a national
road 42% of the time, and the rest crosses country no main road takes.

It follows the A1 from Larissa to Thessaloniki and most of the Ionia Odos in
the west. But from Thebes it heads inland by Livadeia to Lamia, where the A1
swings out to the coast at Atalanti, and its thickest way west runs from
Livadeia to Nafpaktos and over the Rio bridge to Patras.

## A dial between cheap and strong

One setting, the flow I0, decides how much the mold keeps. At low flow it
keeps a bare tree, close to the shortest network that joins all the cities, but
one cut anywhere isolates a city. At high flow it keeps loops everywhere and
grows nearly twice as long. The motorways sit on the same curve, just below the mold:
a little weaker for their length.

| Flow I0 | Length | Mean detour | Survives a cut |
| ---: | ---: | ---: | ---: |
| 1 | 2,350 km | 1.67× | 0% |
| 4 | 2,529 km | 1.51× | 34% |
| 6 | 2,944 km | 1.39× | 57% |
| 8 | 3,201 km | 1.32× | 63% |
| 16 | 4,349 km | 1.25× | 71% |

## How it was made

- **The plate** is a random mesh, as Tero used: points 3 km apart over
  mainland Greece, the Peloponnese and Evia, each moved at random, and joined
  to their neighbours over land. The Rio-Antirrio and Chalkida bridges and the
  Isthmus of Corinth join the three. A link's cost is its length plus 8 times
  the height climbed or dropped, from the Copernicus elevation model.
- **The food** is the 2021 census settlements of 10,000 people or more, merged
  with any within 12 km, so Athens is one city of 3.45 million. Each city is
  weighted by the square root of its population, so Athens matters without
  swallowing the network.
- **The rule**: at each step one city sends flow to all the others through
  the tubes, as water through pipes. A tube that carries flow thickens, and
  one that does not withers, by the equations of Tero and colleagues. After
  3,000 steps the network stops changing.
- **The comparison**: the motorways from OpenStreetMap are traced onto the
  same mesh, so both networks are measured alike. The printed map was made in
  ArcGIS Pro, the model and measures in Python, and the timelapse draws all
  35,304 tubes at 88 moments of the growth.

The model is a model: it knows nothing of money, politics, earthquakes or the
traffic each road carries, and Crete and the islands are left out because the
mold cannot cross the sea.
