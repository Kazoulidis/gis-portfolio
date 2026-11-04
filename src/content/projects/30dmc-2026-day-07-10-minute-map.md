---
title: "Day 7 - 10 minute map: Time's Up"
summary: 'A different take on the prompt: a map about running out of time. Greece is drawn from west to east against a clock, and each minute takes something away, until only a pen is left and Rhodes is never drawn. For clarity, this took well over 10 minutes. The hurry is the theme.'
date: 2026-11-07
created: 2026-11-04
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 7'
tags: ['ArcGIS Pro', 'Python', 'GDAL', 'Cartography']
image: '/images/30dmc-2026-day-07-wide.webp'
imageFull: '/images/30dmc-2026-day-07-full.webp'
imageAlt: "Printed A4 map of Greece drawn from west to east under a countdown clock: full relief, hillshade and depths in the west, flat colours in the middle, shaky pen outlines and half-finished shapes in the east, and scribbles past 00:00, where TIME'S UP is written. The title reads GREEC and the legend runs out of its box."
thumbnail: '/images/30dmc-2026-day-07-square.webp'
thumbnailAlt: 'Map of Greece that starts fully finished in the west and ends in pen scribbles in the east, under a countdown clock'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-07-map.jpg'
    note: 'JPEG · 7016 × 4961 · 3.6 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-07-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 2.2 MB'
map: '/data/30dmc-2026-day-07-countdown.json'
mapComponent: 'countdown-reveal'
mapCaption: 'The clock plays once, in nine seconds rather than ten minutes. Drag across the map, or use the arrow keys, to stop it at any minute.'
dataSource:
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://doi.org/10.12770/cf51df64-56f9-4a99-b1aa-36b8d7b743a1'
  - label: 'Copernicus DEM GLO-90 - land elevation (© DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018, provided under COPERNICUS by the European Union and ESA)'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'Hellenic Statistical Authority (ELSTAT) - Greek coastline and regional boundaries'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: '© EuroGeographics, via Eurostat GISCO - NUTS boundaries of the neighbouring countries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
draft: true
---

**Prompt:** 10 minute map.

The prompt asks for a map made in no more than 10 minutes. This is a different
take on it: a map about running out of time. For clarity, this took well over
10 minutes. The hurry is the theme.

## The ten minutes

The clock runs across the top, and each minute is a band of the map 70 km wide,
from 100 km to 800 km east on the Greek Grid. Each one takes something away:

- **10:00 to 07:00:** everything. Relief, hillshade, depths, the shaded seafloor
  and the regional borders.
- **07:00 to 05:00:** the shading has gone.
- **05:00 to 03:00:** flat land and flat sea, but still the true coast.
- **03:00 to 02:00:** a pen outline. The lettering turns to handwriting.
- **02:00 to 01:00:** a rougher outline, with small islands as circles.
- **01:00 to 00:00:** shapes begun and given up on.
- **After 00:00:** scribbles. Rhodes is never drawn.

The rest of the sheet is in the same hurry. The title stops at GREEC, the legend's
patches overlap and run out of their box, two of the boxes in the right-hand
column sit a millimetre out of line, the frame is finished by hand and the text
has typos. The sources are the one thing left complete.

## How the pen lines were made

Nothing in the pen section is drawn by hand. The lines are the real coast from
ELSTAT, made to look hurried in Python:

1. **Simplify.** The coast is simplified to 3 km for the first pen minute and
   10 km for the second, so that the bays disappear.
2. **Shake.** Each line gets a new point every 4 or 7 km, and every point is
   pushed by a random offset, of about 500 m and then 1,300 m. Smoothing the
   offsets makes the line wander rather than jitter.
3. **Trace twice.** Each line is drawn a second time with new, larger offsets,
   as if the hand had gone back over it.
4. **Leave it open.** Where a minute's edge cuts a shape, that edge is not drawn,
   so there are no ruled sides. In the last minute only 30 to 55% of each island's
   outline is kept.

The scribbles past 00:00 are one zigzag along each island's long axis, and over
a few short stretches of the Turkish coast.

## Reused from earlier days

Most of the map was already there. The relief, depths, seafloor shading and
neighbouring countries keep their Day 4 styles, the land hillshade comes from
Day 5, the boxes and lettering come from Day 4's sheet and the extent from Day 2's.
What is new is the cutting into minutes and the pen.
