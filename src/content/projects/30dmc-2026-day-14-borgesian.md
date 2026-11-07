---
title: 'Day 14 - Borgesian Map: Greece, in Paper'
summary: 'What Borges''s map would really take for Greece: at 1:1, its land and EEZ fill 15.4 trillion sheets of 20 cm. Stacked, the land stops 54,326 km short of the Moon. With the sea, the stack ends 813 km short of four times the distance.'
date: 2026-11-14
created: 2026-11-07
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 14'
tags: ['ArcGIS Pro', 'Python', 'Canvas', 'Map scale']
image: '/images/30dmc-2026-day-14-wide.webp'
imageFull: '/images/30dmc-2026-day-14-full.webp'
imageAlt: 'Printed A4 chart, to scale, of the Earth, the Moon and a stack of paper rising from Greece, with satellite views of a bundle of sheets at the Parthenon and of one sheet, a small map of Greek land and the EEZ and a table of stats, titled Greece, in Paper'
thumbnail: '/images/30dmc-2026-day-14-square.webp'
thumbnailAlt: 'To scale: the Earth and the Moon as tiny dots, and a stack of paper running from Greece to almost four times the distance to the Moon'
dataSource:
  - label: 'GEBCO 2026 - heights and depths in the bundles'
    href: 'https://www.gebco.net/'
  - label: 'NASA - Blue Marble and LROC maps of the Earth and Moon'
    href: 'https://svs.gsfc.nasa.gov/4720'
  - label: 'Hellenic Statistical Authority (ELSTAT) - coast, and with the EEZ the area counted'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: 'Google - satellite imagery on the sheet and in the bundles'
    href: 'https://www.google.com/maps'
  - label: 'Hellenic Statistical Authority (ELSTAT) - 2021 census, for sheets per resident'
    href: 'https://www.statistics.gr/en/2021-census-pop-hous'
  - label: 'Marine Regions (VLIZ) - Greek Exclusive Economic Zone, indicative and not a legal delimitation'
    href: 'https://www.marineregions.org/gazetteer.php?p=details&id=5679'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-14-map.jpg'
    note: 'JPEG · 7016 × 4961 · 2.2 MB'
  - label: 'Square chart'
    href: '/downloads/30dmc-2026-day-14-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 1.0 MB'
map: '/images/30dmc-2026-day-14-square.webp'
mapComponent: 'exact-map'
mapCaption: 'Everything here is drawn to one scale, except the thickness of the stack. Hover over the Earth, the Moon or the stack, and click the stack to open a bundle. Paper is taken as 0.1 mm a sheet, and the limits of the EEZ are indicative, not a legal delimitation.'
draft: true
---

**Prompt:** Borgesian map. A map so detailed it becomes the territory.

In Borges's story "On Exactitude in Science", cartographers draw a map of the empire at the size of the empire. Later generations find it useless and leave it to fall apart in the desert.

So what would that map take for Greece? Print its land and its Exclusive Economic Zone at 1:1, cut the paper into sheets of 20 cm, and you get 15,367,874,013,300 of them. At 0.1 mm a sheet, the stack is 1,536,787 km tall.

The chart draws that stack with the Earth and the Moon, all to one scale. Only the stack's thickness is enlarged, because a true 20 cm would be far thinner than a pixel. The land alone, 3.3 trillion sheets, stops 54,326 km short of the Moon. Add the sea, and the stack ends just 813 km short of exactly four times the distance.

Each bundle you open is a real piece of that stack. Land comes first, then sea, so a height on the stack is a place on the ground. Click anywhere on the stack and a bundle of 4,096 sheets comes out, just under 13 m across, on satellite imagery. Click a square of it, and again, until a single sheet is left: about 7 × 7 pixels of the sharpest imagery there is. That is Borges's point: past a certain scale, a map has nothing left to add.

The Earth and the Moon were rendered in ArcGIS Pro in orthographic projections, at one map scale, so their sizes are true to each other. The night shading and thin atmosphere were calculated separately and added as a raster layer. Area was measured in an equal-area projection.

The limits of the EEZ come from Marine Regions. They are indicative and not a legal delimitation: only parts of them are settled by agreement with neighbours, and others are disputed. Greece's 2025 maritime spatial plan is the official map, but the government states that it does not delimit the EEZ, and I found no published data for it.

Weight assumes ordinary 80 g/m² paper, and sheets per resident use the 2021 census.
