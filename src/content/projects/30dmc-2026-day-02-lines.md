---
title: 'Day 2 - Lines: Measuring the Greek Coast'
summary: 'The Greek coast walked with rulers from 100 km down to 200 m. The 100 km ruler gives 2,079 km, the 200 m ruler 13,512 km, and every point of the EU-Hydro coastline adds up to 15,273 km. There is no single length: the coastline paradox.'
date: 2026-11-02
created: 2026-10-28
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 2'
tags: ['ArcGIS Pro', 'Python', 'GeoPandas', 'Shapely', 'Fractals']
image: '/images/30dmc-2026-day-02-wide.webp'
imageFull: '/images/30dmc-2026-day-02-full.webp'
imageAlt: 'Printed A4 map of Greece on relief and bathymetry with the coast traced three times: a yellow 100 km ruler cutting straight across gulfs and peninsulas, an orange 20 km ruler and a dark red 5 km ruler that follows the bays; the right column has a guide map, a chart of measured coast length against ruler length rising from 2,079 km to 13,512 km, a table of quoted lengths and a close-up of Chalkidiki'
thumbnail: '/images/30dmc-2026-day-02-square.webp'
thumbnailAlt: 'Map of Greece with the coast traced by straight ruler steps of 100, 20 and 5 km'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-02-map.jpg'
    note: 'JPEG · 7016 × 4961 · 6.8 MB'
  - label: 'Square version'
    href: '/downloads/30dmc-2026-day-02-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 4.8 MB'
dataSource:
  - label: 'Copernicus Land Monitoring Service - EU-Hydro Coastline v1.3 (EEA)'
    href: 'https://doi.org/10.2909/393359a7-7ebd-4a52-80ac-1a18d5f3db9c'
  - label: 'Hellenic Statistical Authority (ELSTAT) - Greek regional boundaries, the comparison coastline'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: 'CIA World Factbook - Greece, coastline length'
    href: 'https://www.cia.gov/the-world-factbook/countries/greece/'
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://doi.org/10.12770/cf51df64-56f9-4a99-b1aa-36b8d7b743a1'
  - label: 'Copernicus DEM GLO-90 - land elevation'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: '© EuroGeographics, via Eurostat GISCO - NUTS boundaries of the neighbouring countries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
  - label: 'Natural Earth - countries for the guide map'
    href: 'https://www.naturalearthdata.com/'
draft: true
---

**Prompt:** Lines.

How long is the Greek coast? The often-quoted figure is 13,676 km, from the
CIA World Factbook, but no scale or method is given for it. The honest answer
is that it depends on the ruler. A coast is wiggly at every scale: a shorter
ruler fits into more bays and around more headlands, so the total keeps
growing. Lewis Fry Richardson first measured the effect and Benoit Mandelbrot
made it famous as the coastline paradox. This map measures the Greek coast
with rulers from 100 km down to 200 m and shows what each one sees.

## The coastline

The coast comes from Copernicus EU-Hydro Coastline v1.3, photo-interpreted
from satellite images at about 1:30,000. Greece's own ELSTAT boundaries are
drawn for cartography and statistics, not as a legal or surveyed coastline,
so they serve here only as a comparison. EU-Hydro leaves out stretches of the
larger lagoons and deltas, such as Messolonghi, the Amvrakikos and the Evros
delta. Land
borders with Albania, North Macedonia, Bulgaria and Turkey are cut out, so
only shoreline is measured.

## A. Shorter ruler, longer coast

Each ruler walks the coast like a pair of dividers: from a starting point it
steps to the first point of the coast exactly one ruler length away, then
repeats until the shore runs out, and the steps are added up. I wrote the walk
in Python with GeoPandas and Shapely on the Greek Grid (EPSG:2100), for every
island and stretch of mainland coast separately.

| Ruler | Measured coast |
| ---: | ---: |
| 100 km | 2,079 km |
| 20 km | 5,060 km |
| 5 km | 8,037 km |
| 1 km | 10,834 km |
| 200 m | 13,512 km |
| as drawn | 15,273 km |

The chart plots these on log scales, and the line keeps rising with no sign of
levelling off. The 200 m ruler lands close to the Factbook's 13,676 km, so
that figure is probably a measurement at about that resolution. Following
every point of the EU-Hydro line gives 15,273 km; ELSTAT's generalised line
gives 15,650 km. A more detailed map would give more still.

The main map draws three of the walks: 100 km in yellow, 20 km in orange and
5 km in dark red, each on a white casing so they read over relief and sea.

## B. Chalkidiki up close

The close-up shows the three rulers on Chalkidiki. The 100 km ruler skips the
three peninsulas entirely, the 20 km ruler cuts across them and the 5 km ruler
follows each bay.

The map was made in ArcGIS Pro on the Greek Grid, over the EMODnet 2024
bathymetry and the Copernicus 90 m elevation model.
