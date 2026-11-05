---
title: 'Day 9 - Urban-rural: The Veins of Greece'
summary: "All 13,584 settlements in Greece, each joined to a neighbour on the easiest way to Athens or Thessaloniki. A line thickens with the 2021 residents it carries, so villages become veins and cities become hearts. Click any village to light up its way to the city."
date: 2026-11-09
created: 2026-11-05
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 9'
tags: ['ArcGIS Pro', 'Python', 'Network analysis', 'Census', 'Cartography']
image: '/images/30dmc-2026-day-09-wide.webp'
imageFull: '/images/30dmc-2026-day-09-full.webp'
imageAlt: 'Printed A4 map of Greece with every settlement joined by lines that thicken towards two cities, red for Athens and blue for Thessaloniki, like two trees of veins on a faint relief. Panels show one chain of 204 links from eastern Crete to Athens, a table comparing the two trees, and bars of where residents were born by size of settlement.'
thumbnail: '/images/30dmc-2026-day-09-square.webp'
thumbnailAlt: 'Red and blue branching lines across Greece, thickening towards Athens and Thessaloniki'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-09-map.jpg'
    note: 'JPEG · 7016 × 4961 · 5.4 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-09-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 3.9 MB'
map: '/data/30dmc-2026-day-09-veins.json'
mapComponent: 'vein-route'
mapCaption: 'Click near any settlement, search for one or pick a place to draw its chain. Names are spelled as in the ELSTAT file. Kastellorizo lies east of this frame, so its chain starts off the map.'
dataSource:
  - label: 'Hellenic Statistical Authority (ELSTAT) - 2021 census, residents and place of birth by settlement'
    href: 'https://www.statistics.gr/en/2021-census-pop-hous'
  - label: 'Hellenic Statistical Authority (ELSTAT) - settlements and national boundary'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: 'Copernicus DEM GLO-90 - elevation (© DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018, provided under COPERNICUS by the European Union and ESA)'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://doi.org/10.12770/cf51df64-56f9-4a99-b1aa-36b8d7b743a1'
  - label: 'Eurostat GISCO - NUTS, for the neighbouring countries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
draft: true
---

**Prompt:** Urban-rural.

Maps of this theme usually sort places into two colours, urban or rural. This one
draws the two as a single body instead. Every settlement in Greece is joined to
a neighbour, that neighbour to the next, and so on until the chain reaches Athens
or Thessaloniki. Each line then carries everyone living upstream of it. A hamlet
is a hair-thin line, and the lines grow as they gather villages and towns.

## How the lines are chosen

The lines are not roads. They are the cheapest chains through neighbouring
settlements, with neighbours taken from a Delaunay triangulation. The cost of a
link is my own recipe:

- its length, plus 8 times the height climbed or dropped along it;
- all of that times 4 where the link crosses the sea;
- 50 m more for each metre over another country, so that chains stay inside
  Greece.

Links over 60 km are dropped, since they are side effects of the triangulation.
The one exception is the 117 km link that keeps Ro, by Kastellorizo, on the map.
Each settlement then takes the cheapest chain to either city, so the two trees
meet where the costs are equal. The result follows valleys and coasts, and takes
to the water only where it has to.

## Two trees

| | To Athens | To Thessaloniki |
|---|---:|---:|
| Settlements | 8,555 | 5,029 |
| Residents | 6,745,819 | 3,736,444 |
| Share of residents | 64% | 36% |
| Listed with no residents | 826 | 207 |

The heaviest line is the last link into Athens through Peristeri, with 2,522,540
residents. A typical settlement is 49 links and 215 km from its city, and the
inhabited settlement with the most links is Agkathia, near Siteia, home to 123
people. Its chain in panel A runs 204 links and 677 km, along the length of Crete
and across Kythira and the Peloponnese.

The split did not depend much on my numbers. I tried eight settings, from no
penalty for climbs or sea up to double the climb cost and twice the sea cost.
Athens took between 64.3% and 65.4% of residents in all of them, and Corfu,
Ioannina, Volos, Mytilene and Patras stayed on the same side each time.

## Who stayed

Panel C asks a related question of the same census: did residents stay where they
were born?

| Size of settlement | Their municipality | Elsewhere in Greece | Abroad |
|---|---:|---:|---:|
| Under 100 | 71% | 22% | 7% |
| 100 to 999 | 74% | 18% | 8% |
| 1,000 to 9,999 | 64% | 25% | 11% |
| 10,000 to 99,999 | 50% | 39% | 11% |
| 100,000 and over | 51% | 34% | 15% |
| All of Greece | 57% | 32% | 11% |

In villages, about seven in ten live in the municipality where they were born. In
settlements of 10,000 or more, about half do.

## What this cannot show

- **Nobody travels these lines.** Links are between neighbours, and those over the
  sea are not ferry routes. Thickness counts where people live, not trips, and
  the choice of two cities is mine.
- **Thick lines are capped.** Everything above 1 million residents is drawn at the
  same 7 pt, or the last links into Athens would swallow Attica.
- **Birthplace is hard to read.** I could not find whether ELSTAT counts the
  hospital or the family home as the place of birth. If it is the hospital, some
  people from villages would count as born elsewhere. Cities are also cut into
  several municipalities, so someone born in Athens and living in Peristeri counts
  as "elsewhere in Greece". The gap between villages and cities may partly come
  from this.
- **The settlements are not all alike.** 1,033 of them list no residents in 2021
  and are kept as points on the chain, and the settlement figures sum to 224 fewer
  residents than the national total of 10,482,487. The gap appears to be in the
  source.

## Building it

The chains and figures are made in Python, with SciPy for the triangulation and
the shortest paths. The layers and sheet are made with Python and styled in ArcGIS
Pro, over a faint hillshade of height and depth with the colours left out.
