---
title: 'Day 20 - Hexagons: Where the Sun Is Not'
summary: 'Greece in 7 km hexagons: the sun each one gets, and the solar parks asked for in it. Since 2000, 117.6 GW of solar has been asked of the regulator, and 58% of it has since been withdrawn, rejected or lapsed. What is left crowds into Macedonia and Thessaly, while the sunniest quarter of the land holds 6% of it. Play the years to watch the rush.'
date: 2026-11-20
created: 2026-11-15
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 20'
tags: ['ArcGIS Pro', 'Python', 'Leaflet', 'Renewable energy', 'Hexagons']
image: '/images/30dmc-2026-day-20-wide.webp'
imageFull: '/images/30dmc-2026-day-20-full.webp'
imageAlt: 'Printed A4 sheet titled Where the Sun Is Not: Greece drawn as small hexagons tinted from pale yellow in the northern mountains to deep orange and red on Crete, the Cyclades and the Dodecanese, with black hexagons inside them, largest in Thessaly, western Macedonia and around Kozani, and thin outlines for the parks asked for; notes mark two 7 GW claims and Crete, with the most sun and almost no parks; Kastellorizo in an inset; the side panel holds a legend, a bar chart of the solar parks asked for by year, a chart of land and parks by sun class and three figures'
thumbnail: '/images/30dmc-2026-day-20-square.webp'
thumbnailAlt: 'Greece in hexagons tinted by sun, pale in the north and deep orange on the islands, with black hexagons for solar parks clustered in Thessaly and Macedonia'
dataSource:
  - label: 'Regulatory Authority for Energy, Waste and Water (RAAEY) - register of photovoltaic stations, via its WFS service, November 2026'
    href: 'https://geo.rae.gr/'
  - label: 'European Commission, Joint Research Centre - PVGIS 5.3, yearly PV yield at the optimal tilt, SARAH-3, 2005-2023'
    href: 'https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis_en'
  - label: 'Copernicus DEM GLO-90 - the land the hexagons cover'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://emodnet.ec.europa.eu/en/bathymetry'
  - label: 'Hellenic Statistical Authority (ELSTAT) - coast'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: '© EuroGeographics, via Eurostat GISCO - NUTS boundaries of the neighboring countries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-20-map.jpg'
    note: 'JPEG · 7016 × 4961 · 4.4 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-20-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 3.0 MB'
map: '/data/30dmc-2026-day-20-sun.json'
mapComponent: 'solar-hexagons'
mapCaption: 'Move the slider, or press play, to see the register grow year by year: the outline is everything asked for by then, the solid hexagon what is still alive today. Click a hexagon for its sun and its parks; zoom in to see the parks themselves.'
draft: true
---

**Prompt:** Hexagons.

Greece gets more sun than almost anywhere in Europe, and it has been building
solar parks fast. But the parks are not where the sun is strongest. This map
cuts the country into hexagons of 7 km a side, 1,662 of them, and shows two
things in each: how much sun it gets, and how much solar power has been asked
for in it.

## The sun

The tint is the yearly output of 1 kWp of solar panels at the best tilt, from
the EU's PVGIS model (SARAH-3 satellite data, 2005-2023), averaged over the land
in each hexagon. It runs from about 1,150 kWh in the Pindus mountains to over
1,700 kWh on the south coast of Crete and in the Dodecanese, and the islands of
the south Aegean as a whole get the most.

## The parks

The parks come from the register of the energy regulator, RAAEY: 4,877 solar
parks with their outlines, power and licence stage. Each park's power is shared
among the hexagons it covers, by area. Inside each hexagon, a dark hexagon is
the power still alive (licensed, under review or sent to the grid operator), and
an outline is everything ever asked for. Both grow with the area, and a hexagon
is full at 1 GW.

| | Power | Share |
| --- | ---: | ---: |
| Asked for since 2000 | 117.6 GW | 100% |
| Withdrawn, rejected or lapsed | 68.1 GW | 58% |
| Still alive | 49.6 GW | 42% |

Almost all of it came in one rush: 88% of the power in the register was asked
for between 2019 and 2024. The slider on the web map shows it arriving.

## Not where the sun is

Apart from the two claims below, what is alive crowds into the plains of
Thessaly and Macedonia, and around Kozani and Ptolemaida, where solar parks are being built on the old lignite
mines. These are places with flat, open land and with the big power lines and
substations that once served the lignite plants. The sunniest quarter of the
land, at 1,500 kWh/kWp and more, holds only 6% of the power still alive.
Crete has the most sun and almost no parks.

| Sun, kWh per kWp | Share of the land | Share of the power alive |
| --- | ---: | ---: |
| under 1,300 | 4.6% | 0.8% |
| 1,300 to 1,400 | 28.3% | 14.1% |
| 1,400 to 1,500 | 41.7% | 79.1% |
| 1,500 to 1,600 | 19.1% | 5.7% |
| 1,600 to 1,700 | 5.9% | 0.2% |
| 1,700 and more | 0.4% | 0.0% |

## Two 7 GW claims

Two applications from 2024 stand out. Two energy communities each ask for
7,000 MW, one in Boeotia and Evia, one at Boukka on the Amvrakikos Gulf. Both are
still under review, so they count as alive: together 14 of the 49.6 GW. The
map labels them. Both had applied in 2023 as well, for 7 GW at Boukka and
11.65 GW in Boeotia, Evia and Phthiotis, and withdrawn those applications.

## What the register does not show

- **Small parks and rooftops.** The register lists parks that need RAAEY's
  licence. Rooftop systems and most small parks never pass through it, and in
  Greece they are a large part of what is built.
- **What is built.** Only 3 GW in the register carries an operating licence, but
  more than that runs today: many built parks keep the stage they had when they
  were licensed. So "alive" here means not withdrawn, not built.
- **The grid.** The pattern points to the grid, but the map does not draw it.
  How much room each substation has left is not published in a form that can be
  mapped.

## How it was made

The register was downloaded from RAAEY's WFS service and the PVGIS yield raster
from the JRC. In Python with geopandas and rasterio, I built a hexagon grid on
the Greek Grid, kept the hexagons that touch land, sampled the yield on a 1 km
lattice of land points in each and shared every park's power among the
hexagons by area. The printed sheet was made in ArcGIS Pro, with Kastellorizo in
an inset as on Day 9; the web map draws the same hexagons with Leaflet and works
out each year's state in the browser.
