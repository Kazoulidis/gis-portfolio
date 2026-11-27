---
title: 'Day 27 - New Tool: The Lake That Came Back'
summary: 'Storm Daniel''s flood on the plain of Thessaly, mapped from Sentinel-2 in ESA SNAP, a tool new to me. 577 km² of new water on 10 September 2023, 94% of it on farmland; most drained within weeks, but by 19 November 118 km² remained, 96% of it where Lake Karla was drained in 1962. Step through the dates and compare them with the official Copernicus map.'
date: 2026-11-27
created: 2026-11-26
category: '30-day-map-challenge'
fields: ['remote-sensing', 'hazards']
context: '#30DayMapChallenge 2026 · Day 27'
tags: ['ESA SNAP', 'Sentinel-2', 'Python', 'Leaflet', 'Flood', 'Remote sensing']
image: '/images/30dmc-2026-day-27-wide.webp'
imageFull: '/images/30dmc-2026-day-27-full.webp'
imageAlt: 'Printed A4 sheet titled The Lake That Came Back: the plain of Thessaly in pale relief with the water of 2023, light blue where the flood of 10 September had drained by mid-October, mid blue by mid-November and purple where it was still water on 19 November, a long band around Lake Karla; three natural-colour satellite images of Karla on 21 August, 10 September and 19 November 2023; charts of the new water by date, the official standing water draining by area, and the land cover under the flood'
thumbnail: '/images/30dmc-2026-day-27-square.webp'
thumbnailAlt: 'The flooded plain of Thessaly in blues, with a purple band where Lake Karla came back'
dataSource:
  - label: 'Copernicus Sentinel-2 L2A, 21 August, 10 September, 15 October and 19 November 2023 (contains modified Copernicus Sentinel data 2023), from Google Cloud''s public copy of the archive'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/sentinel-data/sentinel-2'
  - label: 'ESA SNAP 14, the Sentinel Application Platform'
    href: 'https://step.esa.int/main/download/snap-download/'
  - label: 'Copernicus Emergency Management Service (© European Union), rapid mapping EMSR692, Storm Daniel, Thessaly'
    href: 'https://rapidmapping.emergency.copernicus.eu/EMSR692'
  - label: 'Copernicus Land Monitoring Service - CORINE Land Cover 2018'
    href: 'https://land.copernicus.eu/en/products/corine-land-cover/clc2018'
  - label: 'European Commission JRC - GHSL built-up surface, GHS-BUILT-S R2023A, epoch 2020'
    href: 'https://human-settlement.emergency.copernicus.eu/download.php?ds=builtS'
  - label: 'Hellenic Statistical Authority (ELSTAT) - 2021 census settlements and the coast'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: 'Copernicus DEM GLO-30 and GLO-90 - relief'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://emodnet.ec.europa.eu/en/bathymetry'
  - label: '© EuroGeographics, via Eurostat GISCO - NUTS boundaries of the neighboring countries, in the locator'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-27-map.jpg'
    note: 'JPEG · 7016 × 4961 · 5.9 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-27-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 2.7 MB'
map: '/data/30dmc-2026-day-27-flood.json'
mapComponent: 'flood-map'
mapCaption: 'Sentinel-2 in natural colour, with the water found on each date. Pick a date, switch on what the official Copernicus EMS map of 10 September adds in red, or compare any date with 21 August by dragging the line. Click anywhere for the water there on each date.'
draft: true
---

**Prompt:** New tool.

In the first week of September 2023 Storm Daniel brought days of rain to Thessaly,
and the plain flooded. This map follows the water with Sentinel-2, from before
the storm to the middle of November, and the new tool is ESA SNAP, the European
Space Agency's free toolbox for its satellite data.

## The method

Four Sentinel-2 dates with almost no cloud over the plain: 21 August (before),
10 September, 15 October and 19 November 2023, three tiles each. Every scene went
through SNAP:

1. **Resample** all bands to 10 m. The short-wave infrared band (B11) is 20 m.
2. **Subset** to the plain.
3. **Band Maths:** the water index MNDWI = (green - SWIR) / (green + SWIR). Water
   reflects green light and absorbs short-wave infrared, so it comes out positive
   and dry land negative.

The threshold is 0. On 10 September the histogram of the index has two humps,
land and water, and Otsu's method puts the valley between them at -0.006.
*New water* is water on a date that was not water on 21 August, with the 9 km² of
cloud on 10 September left out and patches under a quarter of a hectare dropped.

The same steps were then written in Python with rasterio, independently. On every
scene the two agree on which cells are water in 99.6% or more of them, which is
also a check that I used SNAP as intended.

## What the water did

| Date | New water since 21 August | Of the 10 September flood, still water |
| --- | ---: | ---: |
| 7 September (Copernicus EMS, radar) | 1,116 km² flooded | |
| 10 September | **577 km²** | |
| 15 October | 131 km² | 100 km² |
| 19 November | **118 km²** | 90 km² |

The area studied is 3,960 km² of the plain, the four areas that Copernicus EMS
mapped on 10 September. The radar map of 7 September is a different sensor and
method, and counts mud left by the water as well, so it is not directly
comparable. It does show that by 10 September much of the plain had already
drained.

Most of the plain was dry again within weeks. **Lake Karla** was not. The lake
was drained in 1962 for farmland, and a smaller reservoir was later rebuilt in
part of its bed. In 2023 the flood refilled the old basin: on 19 November, 96%
of the remaining new water lay around Karla.

## What it covered

On 10 September, 94% of the new water was on farmland in CORINE's 2018 map, and
84% on irrigated arable land. That is 540 km² of fields under water in the middle
of the growing season.

Twenty settlements in the 2021 census, with 5,391 residents, lie within 100 m of
the water of 10 September; forty, with 14,760, within 250 m. The built-up area
under it, from the JRC's built-up surface for 2020, is 2.5 km². These count only
what was still flooded on 10 September: towns such as Palamas had flooded earlier
and drained by then.

## The check against Copernicus EMS

The Copernicus Emergency Management Service mapped the flood from satellite
images as sharp as 1.5 m. Its standing water of 10 September, over the
same area and with the same cloud left out:

- the Sentinel-2 map finds **87%** of the water EMS drew;
- **92%** of the Sentinel-2 water is also in the EMS map;
- the two overlap on 81% of their combined area, from 75% around Karditsa and
  Palamas to 87% around Karla.

The EMS map for the Karditsa area was itself drawn from the same Sentinel-2 image
of 10 September, so there the check is not fully independent. Elsewhere it came
from GeoEye-1 images taken the same day.

EMS also followed the water day by day. Its standing water around Palamas fell
from 134 km² on 10 September to 19 km² on 19 September; around Karla it barely
moved, from 155 to 127 km².

## Limits

- At 10 m, the water index misses water under crops or trees and very shallow,
  muddy water, and it can count wet shadow as water. The EMS check above measures
  how much that matters here.
- Lake Karla's reservoir and the rivers are counted as water before the storm, so
  they are not part of the flood.
- The first date is 10 September, three days after the radar map's peak, so the
  largest extent of the flood is not in the Sentinel-2 figures.

The sheet was made in ArcGIS Pro with arcpy. The Sentinel-2 scenes came from
Google Cloud's public copy of the Copernicus archive; they are the products as
first processed in 2023.
