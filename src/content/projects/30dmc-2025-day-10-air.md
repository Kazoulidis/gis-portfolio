---
title: 'Day 10 - Air: Wind Resource of Greece'
summary: 'Mean annual wind speed over Greece on a 150 m grid, at three turbine hub heights, with all 9,088 licensed wind turbines on top.'
date: 2025-11-10
created: 2026-08-23
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 10'
tags: ['ArcGIS Pro', 'Leaflet', 'GDAL/OGR']
image: '/images/30dmc-2025-day-10-wide.webp'
imageAlt: 'Printed A4 map of Greece showing mean annual wind speed at 100 metres above ground, pale cyan over the lowlands rising through blue and yellow to red along the Aegean ridgelines and islands'
map: '/data/wind/wind-meta.json'
mapComponent: 'wind-resource'
mapCaption: 'The full grid at all three hub heights. Switch between 80, 100 and 120 m, and click anywhere for the modelled mean speed of that 150 m cell. Zoom in to see the licensed turbines, coloured by licence stage; click one for its model, operator, power, rotor diameter, hub height and the modelled wind at its location.'
thumbnail: '/images/30dmc-2025-day-10-square.webp'
thumbnailAlt: 'Map of Greece shaded by mean annual wind speed, with the strongest winds along the Aegean islands and eastern ridgelines'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2025-day-10-map.png'
    note: 'PNG · 7016 × 4961 · 5.4 MB'
  - label: 'Square version'
    href: '/downloads/30dmc-2025-day-10-map-square.png'
    note: 'PNG · 4724 × 4724 · 4.3 MB'
dataSource:
  label: 'Regulatory Authority for Energy, Waste and Water (RAAEY)'
  href: 'https://www.rae.gr/'
---

**Prompt:** Focus on the atmosphere - weather, wind patterns, air traffic, pollution.

This is the wind model used for wind-energy planning in Greece: mean annual
wind speed on a **150 m grid** covering the whole country, at three turbine
hub heights, with 5,865,840 cells per height.

Most of the interior plains fall in the lowest class (pale cyan). The strongest
winds are on the eastern ridges and the Aegean islands, where Evia, the
Cyclades, Karpathos and eastern Crete reach the top class.

## Hub heights

The grid comes at 80, 100 and 120 m. The interactive map opens at 100 m, the
median hub height of Greece's licensed turbines (their median rotor diameter is
136 m).

The 80 m and 120 m grids are **capped at 20 m/s**: every faster cell is stored
as exactly 20.00. The 100 m grid has no cap and reaches **32.10 m/s** on the
most exposed ridges. So at the top of the scale the three heights can't be
compared directly, and switching from 100 m to 120 m makes the windiest places
look calmer than they are. The map notes this and flags cells that sit on the
cap.

| Hub height | Modelled range | Ceiling |
|---|---|---|
| 80 m | 0.00 - 20.00 m/s | capped |
| 100 m | 0.42 - 32.10 m/s | none |
| 120 m | 0.53 - 20.00 m/s | capped |

## Turbines

The licensed turbines appear once you zoom in, split by licence stage:

- 5,599 with a production licence (permitted, not necessarily built)
- 3,058 operating
- 431 under installation

Clicking a turbine shows its model, operator, rated and maximum power, rotor
diameter and hub height, plus the modelled wind speed at that point for the
selected height.

## Data

The wind grid and the turbine register both come from the Regulatory Authority
for Energy, Waste and Water (RAAEY). Nearly six million polygons per height is
too much for a browser as vector data, so on the web each height is stored as a
lossless image with the speed encoded in its red and green channels. The page
colours a reduced copy for display and reads the exact value back on click,
which is why the popup can show the modelled speed to two decimals. The printed
map uses the full-resolution grid.
