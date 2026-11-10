---
title: 'Day 15 - Inside out: Every Height Correct, Every Place Wrong'
summary: 'A relief map of Greece where something is not quite right: its plains and mountains have swapped places. Olympus lies in a basin at 649 m, while the plain of Thessaly rises to an upland. Slide between the real relief and the swapped one.'
date: 2026-11-15
created: 2026-11-10
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 15'
tags: ['ArcGIS Pro', 'Python', 'Canvas', 'Relief']
image: '/images/30dmc-2026-day-15-wide.webp'
imageFull: '/images/30dmc-2026-day-15-full.webp'
imageAlt: 'Printed A4 relief map of Greece in green and brown bands with shading, titled Greece, Every height correct, every place wrong: the Pindus and Olympus sit in green lowlands, labelled with heights such as Olympus 649 m, while the plain of Thessaly is brown upland; a small map of the real relief, a table of real and swapped heights and two percentages fill the side panel'
thumbnail: '/images/30dmc-2026-day-15-square.webp'
thumbnailAlt: 'Relief map of Greece that looks normal at first, but with its mountains and plains swapped'
dataSource:
  - label: 'Copernicus DEM GLO-90 - heights of the land'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://doi.org/10.12770/cf51df64-56f9-4a99-b1aa-36b8d7b743a1'
  - label: 'Hellenic Statistical Authority (ELSTAT) - coast and regions'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: 'EuroGeographics, via Eurostat GISCO - country boundaries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-15-map.jpg'
    note: 'JPEG · 7016 × 4961 · 4.6 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-15-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 3.1 MB'
map: '/data/30dmc-2026-day-15-swap.json'
mapComponent: 'relief-swap'
mapCaption: 'Drag the slider to move the height between the real relief (0%) and the swapped one (100%), and on to 200%, where the swap is pushed twice as far. The labels show each place''s height at the slider''s mix.'
draft: true
---

**Prompt:** Inside out. Something on this map is not quite right.

At first sight this is an ordinary relief map of Greece, in the same colours and shading as the other days. Look closer and the labels give it away. Olympus, the highest mountain in Greece, sits in a basin at 649 m. The plain of Thessaly around Larissa is an upland, and the ground under Kalambaka rises to 1,819 m. The plains and the mountains have swapped places.

A plain flip, where the highest point becomes the lowest, does not work: the coast is the lowest ground in the country, so it would turn into a wall almost 3 km high. Instead, the 100 m terrain model was split by size into three parts. The regional level is the land smoothed over about 25 km. The landforms are everything from about 3 to 25 km across: whole ranges, plains and basins. The detail is everything smaller, the ridges and gullies. Only the landforms were turned upside down, so a range became a valley and a plain ringed by mountains became an upland. The regional level stayed, and so did the coast, which is held at sea level over its first 3 km.

A plain has almost no texture of its own, so raised as it is, it would come out as a smooth dome that looks nothing like a mountain. The detail was redrawn instead at the roughness real Greek ground has at the new height: the real mountains keep their own texture, toned down where they now lie low, and the old plains get fractal texture with the same character. Finally, every height was matched by rank to the real ones. The swapped Greece has exactly as much land at every height as the real one: 13.2% of it lies above 1,000 m, as in reality, but only 14% of that ground is land that is really that high.

The slider moves the heights between the real relief at 0% and the swapped one at 100%. Halfway, mountains and plains meet in the middle and Greece goes oddly flat. Past 100% it keeps going: at 200% the old peaks sink below sea level and the new ranges pass 3,000 m.

The map uses the relief bands and shading from Day 12, with Day 2's sea and frame. The page draws the same bands in the browser, shading them again for every position of the slider.
