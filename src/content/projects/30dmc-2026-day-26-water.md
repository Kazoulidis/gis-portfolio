---
title: 'Day 26 - Water: The Sea Floor off Milos'
summary: 'A raw multibeam survey of 105 million soundings south-east of Milos, decoded, cleaned and gridded at 5 m in Python and checked with crosslines against IHO S-44 Order 1a. It shows two rises and about a hundred pits that the 100 m European grid misses. Turn it in 3D and click for depths.'
date: 2026-11-26
created: 2026-11-25
featured: true
category: '30-day-map-challenge'
fields: ['bathymetry']
context: '#30DayMapChallenge 2026 · Day 26'
tags: ['ArcGIS Pro', 'Python', 'Three.js', 'Bathymetry', 'Hydrography']
image: '/images/30dmc-2026-day-26-wide.webp'
imageFull: '/images/30dmc-2026-day-26-full.webp'
imageAlt: 'Printed A4 sheet titled The Sea Floor off Milos: a shaded 5 m survey surface south-east of the island, pale on the rocky shelf and deep blue in the east, with two rises, small pits in the west and the planned route of the Milos-Folegandros power cable dashed in crimson along its southern edge and a locator map of Greece in relief; two smaller maps show the same ground in EMODnet and the difference between them, red in the east where the survey is deeper; the side panel charts the crosslines by beam angle, the depth along a chain of pits and across the two rises'
thumbnail: '/images/30dmc-2026-day-26-square.webp'
thumbnailAlt: 'Shaded survey of the sea floor off Milos, from pale rock on the shelf to a deep blue basin'
dataSource:
  - label: 'Bühring et al. (2024), PANGAEA 968506 - raw EM710 multibeam data, RV Meteor cruise M192/1 (CC BY 4.0)'
    href: 'https://doi.org/10.1594/PANGAEA.968506'
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://emodnet.ec.europa.eu/en/bathymetry'
  - label: 'ADMIE (IPTO) / ENVECO - environmental study of the Cyclades Interconnection, Phase D (2020), from the EIB register: the planned cable route'
    href: 'https://www.eib.org/attachments/registers/158688226.pdf'
  - label: 'Hellenic Navy Hydrographic Service - Notice to Mariners 177/2025, the Serifos-Milos cable, to test it'
    href: 'https://hnhs.gr/en/online-services/notices-to-mariners/'
  - label: 'ADMIE (IPTO) - network map, compared'
    href: 'https://www.admie.gr/systima/perigrafi/hartis-grammon'
  - label: 'Copernicus DEM - relief of Milos (GLO-30) and of the locator (GLO-90)'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'Hellenic Statistical Authority (ELSTAT) - coast'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: '© EuroGeographics, via Eurostat GISCO - NUTS boundaries of the neighboring countries, in the locator'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-26-map.jpg'
    note: 'JPEG · 7016 × 4961 · 3.3 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-26-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 1.5 MB'
  - label: '5 m depth surface'
    href: '/downloads/30dmc-2026-day-26-surface-5m.tif'
    note: 'GeoTIFF · UTM 35N · 4.3 MB · CC BY 4.0, raw data Bühring et al. (2024) · not for navigation'
map: '/data/30dmc-2026-day-26-seabed.json'
mapComponent: 'seabed-model'
mapCaption: 'The survey on a 15 m grid. Drag to turn it, scroll to zoom, click for the depth. Swap to EMODnet to see what the coarser grid holds in the same place, or color the survey by the difference. Heights start 4 times exaggerated; the slider changes that.'
draft: true
---

**Prompt:** Water.

Between 9 and 13 August 2023 the German research ship Meteor mapped the sea
floor south-east of Milos with a Kongsberg EM710, an echo sounder that measures
400 depths across its track with every ping. The cruise was mapping to find
hydrothermal vents, and its raw files are public. This project goes from those
files to a checked 5 m surface, and asks how much of it the public 100 m grid
already shows.

## From raw files to a surface

1. **Reading:** a Python reader decodes the 61 `.all` files datagram by
   datagram: 104,622,844 soundings with their positions, already corrected on
   board for the ship's motion and for the bending of sound in the water.
2. **Cleaning:** each sounding is compared with the median of its 5 m cell, or
   of the 3 × 3 cells around it where its cell holds fewer than five. Those off
   by more than 1.5 times the Order 1a allowance are rejected, 1.43%. A cell made
   only of bad soundings survives that test, so each cell is then compared with
   its neighbors, and cells on fewer than three soundings, the thin outer rim
   and detached scraps go too: 1.47% of the cells. Nothing is filled in.
3. **Surface:** the mean of the accepted soundings in each 5 m cell, in UTM zone
   35N: 39.8 km², 19.8 to 216.6 m deep, 44 soundings in a typical cell. Inside
   the surveyed area 98.9% of the cells have a depth. It is among the downloads, as
   depths in meters, positive down.

The second cleaning matters. Before it, the surface's deepest point was 444 m, a
cluster of false soundings at the edge of a swath.

## How good is it

Six lines run across the main direction. They were left out of a second
surface, and their 6.5 million accepted soundings were compared with it:

| Beam angle | Soundings | Mean difference | Standard deviation | Within Order 1a |
| --- | ---: | ---: | ---: | ---: |
| 0-15° | 1,095,206 | -0.22 m | 0.32 m | 99.9% |
| 15-30° | 1,284,004 | -0.18 m | 0.35 m | 99.9% |
| 30-45° | 1,719,795 | 0.00 m | 0.42 m | 99.8% |
| 45-60° | 2,445,308 | +0.35 m | 0.62 m | 97.0% |
| **All** | **6,544,313** | **+0.06 m** | **0.53 m** | **98.8%** |

Order 1a of the International Hydrographic Organization's S-44 standard allows
√(0.5² + (0.013 d)²) meters at 95%: 1.51 m at the median depth of 109 m. The
soundings meet it in every band, but not evenly. The beams under the ship come
out 0.2 m shallow and the outermost 0.5 m deep. A small error in the sound speed
used at sea makes that shape. It is the likely cause, not a proven one: the rays
have not been traced again with another profile.

Five of the six crosslines lie in the west. The deep basin in the east has none,
so it is checked by its overlapping lines: where two or more cover the same cell,
at a median depth of 178 m, each line agrees with the others within 1.7 m in 95%
of cases.

## What the public grid misses

EMODnet's digital terrain model is the public bathymetry for Europe's seas, at
about 100 m. Over the surveyed ground:

- **West** of 280,000 m E the two agree: a median difference of -0.1 m, and 95%
  of the cells within 4.3 m.
- **East** of 282,500 m E the survey is deeper, by 19 m at the median, by more
  than 35 m over 1.4 km² and by 56 m at most. The northern lobe is deeper too, by
  more than 35 m over 0.5 km². In all, 75% of the surveyed ground is within 5 m
  of EMODnet and 10.9% is more than 20 m off. Of the ground, 13% lies deeper than
  160 m in the survey and 5% in EMODnet.
- **Two rises** are missing from it. The first stands 57 m above the ground
  around it, with its top at 70 m where EMODnet has 130. The second climbs to
  57 m where EMODnet has 135, at the edge of the survey, so its full shape is
  unknown.
- **Pits** at least 3 m deeper than the ground around them, about a hundred (80
  to 110 under most rules tried) and typically 4 to 5 m deep, most in the west, are
  too small for a 100 m grid. Panel B follows a chain of them: ten in 1.3 km, none
  of them in EMODnet. The survey shows their shape; it does not say what made them.

One comparison cannot settle which of the two is wrong in the east. But the
survey's own lines agree there to about 2 m, against a gap of 19 m at the median.

## Where the cable runs

The Milos-Folegandros power cable is newer than the survey, and no public source
I found gives its position as laid. The Hellenic Navy's monthly Notices to
Mariners, read from September 2024 to October 2026, chart the next cable in the
same project, Serifos to Milos, but not this one. So the sheet draws the route as
planned in 2020, digitized from the project's environmental study, which the
European Investment Bank publishes. The study lists the landing points as
coordinates but shows the route only as a map, at about 58 m per pixel.

The map was placed on the ELSTAT coast, which it matches to 43 m. The cable on it
sits south-west of its own landing points, by about the difference between the
Greek datum, GGRS87, and WGS 84, so it was moved by that (149 m east, 289 m
north). The same steps on the study's Serifos-Milos map can be checked against
the Navy's chart:

| Serifos-Milos, against the charted cable | Median | 95% within | At most |
| --- | ---: | ---: | ---: |
| Digitized from the 2020 study | 98 m | 352 m | 512 m |
| The operator's network map ("future" line) | 977 m | 1,666 m | 1,893 m |

The operator's map marks both links as future, so it too shows a plan, and a
coarser one. The test covers the digitizing and the change from plan to seabed
together, but for another cable, laid by another contractor. Here the route
passes south of nearly all of the survey and crosses only its southern strip, for
about 1.5 km at 96 to 103 m, more or less if it lies a few hundred meters off.

## Limits

- The depths are below the water line at the time of each ping. No tide was
  applied, and they are not reduced to a chart datum. Not for navigation.
- The crosslines and overlaps test the survey against itself. They find errors
  that differ between lines, not one that shifts them all. Gross errors were
  already rejected on both sides before the comparison.
- The cleaning is automatic. A hydrographer would also check it by eye.
- EMODnet refers to another vertical datum, lowest astronomical tide. The tide
  in the Aegean is small, and so is that gap next to the differences shown.

The sheet was made in ArcGIS Pro with arcpy. The 3D view packs both depth grids
into one image, in 0.1 m steps, and draws it with three.js.
