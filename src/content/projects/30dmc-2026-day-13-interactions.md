---
title: 'Day 13 - Interactions: Where the Sea Is Calm'
summary: 'Wind meets sea around Mykonos, Paros and Naxos: turn the wind, and a wave model answers with the waves it makes, the sea state and the calmest bathing waters.'
date: 2026-11-13
created: 2026-10-30
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 13'
tags: ['SWAN', 'Python', 'Leaflet', 'Waves', 'Bathymetry']
image: '/images/30dmc-2026-day-13-wide.webp'
imageFull: '/images/30dmc-2026-day-13-full.webp'
imageAlt: 'Printed A4 map of the sea around Mykonos, Paros and Naxos in a 15 m/s north wind, coloured by sea state from calm to rough, with arrows for the wave direction and dots for the bathing waters, a small map of the same sea in a south wind and tables of the model checks, titled Where the Sea Is Calm'
thumbnail: '/images/30dmc-2026-day-13-square.webp'
thumbnailAlt: 'Waves in a strong north wind around Mykonos, Paros and Naxos: rough open sea to the north and east, and calm water in the lee of each island'
dataSource:
  - label: 'SWAN wave model (TU Delft), version 41.51'
    href: 'https://swanmodel.sourceforge.io/'
  - label: 'Copernicus Marine - global hourly winds from scatterometer and model (KNMI), 2007-2023'
    href: 'https://doi.org/10.48670/moi-00185'
  - label: 'Copernicus Marine and HCMR POSEIDON - Mykonos wave buoy'
    href: 'https://doi.org/10.48670/moi-00044'
  - label: 'ESA Sea State CCI, via Copernicus Marine - satellite wave heights, 2007-2023'
    href: 'https://climate.esa.int/en/projects/sea-state/'
  - label: 'Copernicus Marine (HCMR) - Mediterranean wave reanalysis, 2023'
    href: 'https://marine.copernicus.eu/'
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://doi.org/10.12770/cf51df64-56f9-4a99-b1aa-36b8d7b743a1'
  - label: 'Hellenic Statistical Authority (ELSTAT) - coast'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: 'European Environment Agency - bathing waters, 2025 season'
    href: 'https://www.eea.europa.eu/en/topics/in-depth/bathing-water'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-13-map.jpg'
    note: 'JPEG · 7016 × 4961 · 2.7 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-13-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 1.3 MB'
map: '/data/30dmc-2026-day-13-waves.json'
mapComponent: 'wave-dial'
mapCaption: 'Drag the compass or pick a preset, and set the speed. Click the sea for the waves at a spot. This is a wave model, not a forecast or a guide to safe swimming.'
draft: true
---

**Prompt:** Interactions.

In summer a strong, dry wind blows down the Aegean from the north, often for days on end. On Mykonos, Paros and Naxos it decides which beach is worth the trip: the north coasts take the waves, while the islands themselves shelter their south coasts and leave the water flat.

The map lets you set the wind and see what the sea does. Drag the compass or pick a preset, set the speed, and the waves redraw. A line under the compass says how often a wind like that really blows here, in summer and over the year. Click the sea for the wave height, period and direction at that spot, with a rose of how they change as the wind turns. The list beside it ranks the bathing waters the EEA monitors, calmest first, for the wind you set.

The waves come from SWAN, an open-source wave model from TU Delft. It runs on two grids: the whole Aegean at 2.5 km, so waves that build up far away still arrive, and the central Cyclades at 300 m, with depths from EMODnet. Real winds are not the same everywhere over the islands, so each run takes the shape that winds from its direction have here in Copernicus Marine's hourly winds, scaled to the speed on the dial. The 64 runs cover 16 directions at 5, 10, 15 and 20 m/s, and the page blends between the nearest ones for any wind in between.

Before trusting it, I checked it against years of measurements. Against the HCMR wave buoy off Mykonos, the model's wave height is 2% low on average, with an error of 0.30 m and a correlation of 0.92. Against satellite altimeters, from ESA's Sea State CCI, it is 3% low. In winds of 7 m/s and over, which make the waves that matter, the bias is 0% and +1%. It is weakest in light winds, where it runs 14% to 25% low, but then the sea is calm either way. Next to Copernicus Marine's own Mediterranean wave reanalysis, this model comes out 17% lower, and there the buoy sides with this model.

The sheet shows a strong north wind of 15 m/s, run again on a finer and wider grid of 100 m. Open water to the north and east goes rough, while every island trails a calm shadow to the south. Of the 80 bathing waters on the sheet, 19 have calm water offshore, 53 smooth and just one moderate. The small map shows the same sea in a 10 m/s wind from the south, which turns it round.

This is a model, not a forecast or a guide to safe swimming. It shows the waves a steady wind makes, not swell from a storm far away, and not currents. It is least certain right at the coast, where a 300 m cell cannot see a small cove or a breakwater, so each bathing water takes its waves from the nearest sea cell at least one cell offshore.
