---
title: "Day 8 - Utopia: Plato's Utopia"
summary: "In the Laws, Plato sets his ideal city, Magnesia, on Crete, and gives enough detail to go looking for it. Tested every 100 m across the island, his rules can all be met almost only in the Dikti mountains. The city is drawn here on the Lasithi Plateau, with its twelve parts and 5,040 lots."
date: 2026-11-08
created: 2026-11-05
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 8'
tags: ['ArcGIS Pro', 'Python', 'GDAL', 'Land cover', 'Cartography']
image: '/images/30dmc-2026-day-08-wide.webp'
imageFull: '/images/30dmc-2026-day-08-full.webp'
imageAlt: "Printed A4 map of eastern Crete with a circular territory centred on Magnesia at the Lasithi Plateau, divided by twelve spokes into parts numbered I to XII and coloured as plain, hillside, rock and forest, with a fine grid of lots on the farmland. Panels show where on Crete the rules can be met, the seven rules measured at the city, and the two plots of each family."
thumbnail: '/images/30dmc-2026-day-08-square.webp'
thumbnailAlt: 'Circular territory on eastern Crete, cut into twelve parts around a city on the Lasithi Plateau'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-08-map.jpg'
    note: 'JPEG · 7016 × 4961 · 6.4 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-08-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 4.8 MB'
map: '/data/30dmc-2026-day-08-rules.json'
mapComponent: 'plato-rules'
mapCaption: 'Click anywhere on Crete, or pick a place, to see which rules it meets and the territory it would need. Every 100 m of the island is tested, with lots of about 6 ha.'
dataSource:
  - label: 'Plato, Laws IV and V - translations by R. G. Bury (Perseus), for the section numbers'
    href: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0166%3Abook%3D4%3Asection%3D704b'
  - label: 'Plato, Laws - translation by B. Jowett (Project Gutenberg)'
    href: 'https://www.gutenberg.org/ebooks/1750'
  - label: 'Copernicus DEM GLO-30 and GLO-90 - elevation (© DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018, provided under COPERNICUS by the European Union and ESA)'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'Copernicus Land Monitoring Service - CORINE Land Cover 2018 (EEA)'
    href: 'https://land.copernicus.eu/en/products/corine-land-cover/clc2018'
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://doi.org/10.12770/cf51df64-56f9-4a99-b1aa-36b8d7b743a1'
  - label: 'Hellenic Statistical Authority (ELSTAT) - coastline and settlements'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: 'T. Okada (2017), Zeugitai and Hoplites - a summary of published farm sizes'
    href: 'https://clsoc.jp/JASCA/2017/2017_vol3_03_Okada.pdf'
draft: true
---

**Prompt:** Utopia.

Most ideal cities are nowhere. Plato's last one is somewhere: in the *Laws*, a
Cretan is about to found a colony, and the speakers say what the site is like.
The city, Magnesia, was never built, but the description is specific enough to
test against the real island.

## The seven rules

| Rule | Laws | How it is tested | At the city |
|---|---|---|---|
| About 80 stadia from the sea | 704b | 13.3 to 16.3 km: Attic stadia of 185 m, give or take a tenth | 13.9 km |
| Excellent harbours | 704b | Sheltered, deep coast inside the territory | 18.0 km, Agios Nikolaos |
| More rock than plain | 704d | Over 15° or bare ground, against under 5° | 59% rock, 10% plain |
| Nothing in abundance | 705b | No more of the territory farmed than Crete as a whole | 31%; Crete 44% |
| Little timber | 705c | Under 5% forest | 4.6% |
| The city at the centre | 745b | Farmland balances round the city | Off by 1.4 km |
| A fit site for a city | 745b | Gentle ground within 500 m | Mean slope about 5° |

A sheltered harbour here is coast open to under a tenth of the horizon within 5
and 15 km, with 10 m of water within 1 km, for at least 1 km. Plato says only
that the harbours are excellent, so this definition is mine. His eighth
condition, that the region is deserted with no neighbours, cannot be tested on
a map of today.

## The result

At about 6 ha a lot, only two patches pass everything, both in the Dikti
mountains: 0.8 km² on the Lasithi Plateau and 4.0 km² in a basin above Kritsa.
I placed the city on Lasithi, the smaller patch, because it is lower, at about
850 m rather than 1,100 m, and the plateau's plain lies right beside it.

The scholar G. R. Morrow placed Magnesia in the Messara, the plain of south
central Crete. Gortyn, in the Messara, is 14 km from the sea but meets only 4 of
the 7 rules: its land is too flat and too rich for Plato's description, and no
sheltered harbour falls inside its territory. The test does not show that Morrow was
wrong. It shows what the rules alone favour.

## The size of a lot is assumed

Plato fixes the number of lots at 5,040 but gives them no size, only that the
land must support people of temperate habits, and no more (737d). I found no
published figure for Magnesia's lots, though I have not read Morrow's book in
full. Published estimates for real Greek farms give a range:

- about 3.6 to 5.5 ha for a family farm, and about 4 ha as the smallest for a
  citizen who served as a hoplite;
- 8 to 13 ha for the better-off class of farmers, the *zeugitai*.

This matters because the territory is the smallest circle round a city with
enough farmland for all 5,040 lots, and bigger lots make it reach further.
**All seven rules can be met only from about 5.25 ha.** At 5 ha, the Lasithi
territory stops short of a harbour. The map uses about 6 ha.

## Laying out the city

The plan follows *Laws* 745b-e. Everything radiates from the acropolis. There
are twelve parts, each with the same farmland, about 26 km², so the poorer ones
are larger: they run from 38 to 120 km². Each of the 5,040 lots has two plots,
one near the city and one far from it. On the map, each part has 20 rings of
farmland, ring 1 paired with ring 20, ring 2 with ring 19 and so on, and each
ring is cut into 42 plots, which panel C shows in colour. The 1 km city wall is
only drawn to be seen; Plato gives it no size.

## What this cannot show

- **The farmland is today's.** It comes from CORINE Land Cover 2018, standing
  in for what could be farmed in Plato's day. The biggest weakness is Lasithi
  itself: its drainage ditches are [Venetian](https://en.wikipedia.org/wiki/Lasithi_Plateau),
  dated to the 16th century, so the plain may have been far less useful earlier.
- **Some rules do most of the work.** "More rock than plain" holds across 94%
  of Crete, while the 80 stadia leave only 9%. The result comes mainly from the
  distance and the harbour, and the harbour passes narrowly: it is 18.0 km away
  in a territory of 18.5 km.
- **Drawn and measured differ slightly.** The map's colours are smoothed so the
  100 m cells do not show: rock is drawn at 61% against the 59% measured. The
  figures come from the unsmoothed analysis.

## Building it

The analysis is in Python, with the circles found by convolution for each cell
of the island. The layers and sheet are made with Python and styled in ArcGIS
Pro, reusing the relief, depths and hillshade of Days 4 and 5.
