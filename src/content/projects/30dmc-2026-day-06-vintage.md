---
title: 'Day 6 - Vintage: The Gulf of Salonica, 1850'
summary: 'The Thermaic Gulf drawn as a British Admiralty chart of about 1850, from today''s data: soundings in fathoms from the EMODnet bathymetry, hills in hachures from the Copernicus elevation model, a compass rose and a view of Mount Olympus from the sea. Swipe to the same waters on a present-day map.'
date: 2026-11-06
created: 2026-11-03
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 6'
tags: ['ArcGIS Pro', 'Python', 'GDAL', 'Bathymetry', 'Cartography']
image: '/images/30dmc-2026-day-06-wide.webp'
imageFull: '/images/30dmc-2026-day-06-full.webp'
imageAlt: 'Printed A4 sea chart of the Thermaic and Kassandra gulfs in the manner of 1850: soundings in fathoms and dotted fathom lines across the water, hills drawn in short hachure strokes, black stars for the lights, a compass rose, a chequered border of minutes, a calligraphic title panel and, along the foot, the outline of Mount Olympus as seen from off Cape Epanomi'
thumbnail: '/images/30dmc-2026-day-06-square.webp'
thumbnailAlt: 'Old-style sea chart of the Thermaic Gulf with soundings, hachured hills and a compass rose'
downloads:
  - label: 'Full-resolution chart'
    href: '/downloads/30dmc-2026-day-06-map.jpg'
    note: 'JPEG · 7016 × 4961 · 9.5 MB'
  - label: 'Square chart'
    href: '/downloads/30dmc-2026-day-06-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 5.7 MB'
  - label: 'Present-day map'
    href: '/downloads/30dmc-2026-day-06-map-modern.jpg'
    note: 'JPEG · 7016 × 4961 · 3.0 MB'
  - label: 'Present-day map, square'
    href: '/downloads/30dmc-2026-day-06-map-modern-square.jpg'
    note: 'JPEG · 4724 × 4724 · 1.8 MB'
map: '/data/30dmc-2026-day-06-swipe.json'
mapComponent: 'chart-swipe'
mapCaption: 'Drag across the map, or use the arrow keys, to swipe between the chart and the present-day map. Both are drawn on the same Mercator frame, so the coasts line up.'
dataSource:
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://doi.org/10.12770/cf51df64-56f9-4a99-b1aa-36b8d7b743a1'
  - label: 'Copernicus DEM GLO-30 and GLO-90 - elevation (© DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018, provided under COPERNICUS by the European Union and ESA)'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'Copernicus Land Monitoring Service - EU-Hydro River Network v1.3 (EEA)'
    href: 'https://doi.org/10.2909/393359a7-7ebd-4a52-80ac-1a18d5f3db9c'
  - label: 'Hellenic Statistical Authority (ELSTAT) - coastline and municipal communities'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: '© OpenStreetMap contributors - lights and their characters (ODbL)'
    href: 'https://www.openstreetmap.org/copyright'
draft: true
---

**Prompt:** Vintage.

Before satellites and echo sounders, a sea chart was built from thousands of
lead-line soundings, written one by one across the water in fathoms, with
the hills behind the coast drawn stroke by stroke so a navigator could
recognise the land. This map draws the Gulf of Salonica, the Thermaic Gulf,
that way, but from today's data.

## How it is drawn

- **Soundings** are read from the EMODnet 2024 bathymetry on a staggered
  grid and written in fathoms, the old unit of 6 feet (1.83 m), with halves
  below 10. The dotted lines are the 5, 10, 20, 50 and 100 fathom lines.
- **Hills** are about 54,000 hachures: short strokes running straight down
  the slope of the Copernicus 30 m elevation model, heavier where it is
  steeper. Flat ground is left blank, as the engravers left it.
- **The coast** is lined with water-lines, the parallel strokes engravers
  drew offshore, and the lights carry their characters in the old manner,
  such as *Fl. 15s 24M* at Cape Posidi: a flash every 15 seconds, seen
  24 miles.
- **The view** along the foot is Mount Olympus as it would appear from a
  ship off Cape Epanomi, 26 nautical miles away, computed from the terrain
  with the curve of the Earth, the way old charts carried drawn views of
  the coast.
- **Heights** are in English feet: Olympus is 9,573 ft.

The lettering is Pinyon Script, a copperplate of the kind engravers used
for cartouches, and IM Fell English, a revival of 17th-century type, both
from Google Fonts. The paper and its grain are generated, not scanned.

## Then and now

The interactive map swipes between the chart and the same waters on a
present-day map, made with the depth colours, relief and hillshading of the
other maps in this series. Both use one World Mercator frame, the
projection of sea charts, so every cape and town lines up as you swipe.

## Building it

The chart's layers are made in Python with GDAL from the elevation and
depth grids, then styled and laid out in ArcGIS Pro, where the minute
border, the lettering and the paper are added. The rivers are the
Copernicus EU-Hydro network, the community borders those of ELSTAT.
