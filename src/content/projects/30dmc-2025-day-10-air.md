---
title: 'Day 10 - Air: Wind Resource of Greece'
summary: 'The mean annual wind speed over Greece on a 150 m grid, at three turbine hub heights, with all 9,088 licensed wind turbines placed on top of the resource they were sited for.'
date: 2025-11-10
created: 2026-08-23
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 10'
tags: ['ArcGIS Pro', 'Leaflet', 'GDAL/OGR']
image: '/images/30dmc-2025-day-10-wide.webp'
imageAlt: 'Printed A4 map of Greece showing mean annual wind speed at 100 metres above ground, pale cyan over the lowlands rising through blue and yellow to red along the Aegean ridgelines and islands'
map: '/data/wind/wind-meta.json'
mapComponent: 'wind-resource'
mapCaption: 'The same grid, live and at all three hub heights. Switch between 80, 100 and 120 metres, and click anywhere to read the exact modelled mean annual speed for that 150 m cell. Zoom in and the licensed turbine fleet appears, coloured by licence type and switchable; click a turbine for its model, operator, rated power, rotor diameter and hub height, along with the wind modelled beneath it.'
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

Wind is the one part of the atmosphere Greece has built an industry on, and the
map that industry runs on is this one: mean annual wind speed, modelled on a
**150 m × 150 m grid** covering the whole country, at the heights a turbine hub
actually sits. Each height is **5,865,840 cells**.

The pattern is almost the inverse of where people live. The interior plains sit
in the pale cyan of the lowest class, while the strong winds run along the
eastern ridgelines and out into the Aegean, where Evia, the Cyclades, Karpathos
and eastern Crete carry the red of the top class. Wind is a coastal and upland
resource here, and the islands that have the least of everything else have the
most of this.

## Three heights, and why the middle one is the honest one

The grid comes at 80, 100 and 120 metres. The interactive map opens at 100 m
because that is where the fleet actually sits: the median hub height across
Greece's licensed turbines is exactly **100 metres**, with a median rotor
diameter of 136 metres.

There is a catch in the source data that matters more than it looks. The 80 m
and 120 m grids are **clipped at 20 m/s** - every cell that would model faster
is flattened to exactly 20.00 - while the **100 m grid is uncapped** and runs up
to **32.10 m/s** on the most exposed ridges. So the three are not directly
comparable at the top of the scale: switching from 100 m to 120 m makes the
windiest places look calmer, which is an artefact of the ceiling rather than
anything about the wind. The map says so where it matters, and flags any cell
sitting on the cap.

| Hub height | Modelled range | Ceiling |
|---|---|---|
| 80 m | 0.00 - 20.00 m/s | capped |
| 100 m | 0.42 - 32.10 m/s | none |
| 120 m | 0.53 - 20.00 m/s | capped |

## The fleet on top of the resource

Greece's licensed wind turbines are drawn over the grid once you zoom in far
enough for a single machine to mean something, split by the stage each licence
has reached:

- **5,599 with a production licence** - permitted, not necessarily built
- **3,058 operating**
- **431 under installation**

Putting them on the resource rather than beside it is the point of the pairing.
Click a turbine and you get its model, operator, rated and maximum power, rotor
diameter and hub height, together with the modelled wind at the height you are
currently viewing - which is the number that decides whether the machine was
worth erecting.

## Notes on the source

The grid and the turbine registry both come from the Regulatory Authority for
Energy, Waste and Water. Almost six million polygons per height is far more than
a browser can be handed as vector data, so for the web each height is carried as
a lossless image with the speed encoded into the red and green channels rather
than as colour. The page colours a reduced copy of it for display and reads a
single pixel back when you click, which is why the popup can quote a cell value
to two decimal places: it is the modelled number, not a sample of a picture of
one. The printed sheet above uses the full-resolution grid directly.
