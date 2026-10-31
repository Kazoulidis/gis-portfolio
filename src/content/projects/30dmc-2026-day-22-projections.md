---
title: 'Day 22 - Projections: Greek Coordinates'
summary: 'What the Greek map grid, GPS conversion and height reference do to a coordinate. On the grid, 1 km on the ground comes out up to 78 cm shorter or 1.5 m longer; the default GPS conversion lands up to 2 m from the official model; and GPS heights sit 15 to 45 m away from heights above sea level.'
date: 2026-11-22
created: 2026-10-26
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 22'
tags: ['ArcGIS Pro', 'Python', 'pyproj', 'Geodesy', 'Map projections']
image: '/images/30dmc-2026-day-22-wide.webp'
imageFull: '/images/30dmc-2026-day-22-full.webp'
imageAlt: 'Printed A4 map of Greece coloured by how much the Greek Grid stretches or shrinks distances on the ground: blue in a band along the 24° E meridian and over the mountains, orange towards the west and east edges, with dashed true-scale lines either side of the meridian and labels for Corfu, Athens, the peaks of Crete and Rhodes; a chart in the right column draws the flat grid against the curved ground, and two small maps show GPS conversion arrows and the geoid height'
thumbnail: '/images/30dmc-2026-day-22-square.webp'
thumbnailAlt: 'Map of Greece in blue and orange bands showing how the Greek Grid changes distances'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-22-map.jpg'
    note: 'JPEG · 7016 × 4961 · 4.4 MB'
  - label: 'Square version'
    href: '/downloads/30dmc-2026-day-22-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 2.4 MB'
dataSource:
  - label: 'EPSG Geodetic Parameter Dataset - GGRS87 / Greek Grid (EPSG:2100)'
    href: 'https://epsg.io/2100'
  - label: 'EPSG Geodetic Parameter Dataset - GGRS87 to WGS 84 (1), the default three-value shift (EPSG:1272)'
    href: 'https://epsg.io/1272'
  - label: 'HEPOS (Hellenic Cadastre) - HTRS07 reference frame and transformation model'
    href: 'https://www.hepos.gr/'
  - label: 'Esri - ArcGIS Coordinate Systems Data, Greek HTRS07 to GGRS87 grid (GR_HTRS07_GGRS87_GRID.gsb)'
    href: 'https://pro.arcgis.com/en/pro-app/latest/help/mapping/properties/arcgis-coordinate-systems-data.htm'
  - label: 'Katsambalos, Kotsakis and Gianniou - the HEPOS transformation model'
    href: 'https://ilrs.gsfc.nasa.gov/metsovo/docs/Katsampalos_Kotsakis_Gianniou_HEPOS.pdf'
  - label: 'NGA - Earth Gravitational Model 2008 (EGM2008)'
    href: 'https://earth-info.nga.mil/index.php?dir=wgs84&action=wgs84#tab_egm2008'
  - label: 'PROJ - coordinate transformation software (via pyproj)'
    href: 'https://proj.org/'
  - label: 'Copernicus DEM GLO-90 - land elevation'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'Hellenic Navy Hydrographic Service - Notice to Mariners 70/2021, the Day 12 cable (archived April 2021 issue)'
    href: 'https://web.archive.org/web/20210813160912/https://www.hnhs.gr/images/pdf_aggelies/gr/2021/Docs/0421.pdf'
  - label: 'Hellenic Statistical Authority (ELSTAT) - Greek regional boundaries'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: '© EuroGeographics, via Eurostat GISCO - NUTS boundaries of the neighbouring countries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
draft: true
---

**Prompt:** Projections.

A coordinate looks like a fixed fact, but in Greece three separate choices sit
behind every one: the map grid it is drawn on, the conversion that brought it
there from GPS, and the surface its height is measured from. Each one moves the
result. This sheet shows by how much.

## A. The map grid

Greek maps use the Greek Grid (GGRS87, EPSG:2100), a Transverse Mercator
projection centred on the 24° E meridian with a scale factor of 0.9996. Turning
the curved earth into a flat grid cannot keep every distance true, so this grid
is designed to be a little too small in the middle and a little too large at
the edges. Distances come out true along two lines about 180 km either side of
24° E, the dashed lines on the map.

The main map shows what 1 km measured on the ground becomes on the grid, in
centimetres. On the meridian it is 40 cm short at sea level. Towards the edges
it grows: 1.1 m long at Corfu town, 1.4 m on Rhodes and up to 1.5 m on the
islands off north-west Corfu. Height works the other way. A distance measured
up a mountain is reduced to sea level before it is projected, about 16 cm per
km for every 1,000 m of height, so the high ground near the meridian is the
most shrunk of all: 78 cm per km on the peaks of the Lefka Ori in Crete. The
map uses the Copernicus 90 m elevation model and EGM2008 for those heights.

The chart in panel A draws the same idea in profile. The colour strip is the
grid at sea level, to scale across the map's 800 km; the black curve is the
ground, plotted at its real change in centimetres per km against the scales at
the sides. The Day 12 cable is a worked example: 62 m shorter on the Greek Grid
than on the ellipsoid, over 175 km.

## B. Converting GPS positions

GPS gives positions in a global frame; in Greece the cadastre and the HEPOS
network use HTRS07, which is tied to it. Turning those into Greek Grid
coordinates means a datum conversion to GGRS87. The default in PROJ and ArcGIS
Pro is a three-value shift (EPSG:1272), stated as good to about 1 m. The
official route is the HEPOS transformation model, about 8 cm across the
country, which Esri publishes as a grid file.

I ran both over a 10 km test grid with pyproj. The default lands a median of
0.73 m from the HEPOS model, 1.57 m at the 95th percentile and 1.99 m at most;
on land the median is 0.60 m and the largest 1.87 m. Panel B draws the land
points every 40 km as arrows from the default answer to the official one,
enlarged so that 1 m becomes 60 km. The pattern is not random: in the
north-west the official positions lie to the west of the default ones, in Crete
to the north, so a single shift cannot fit the whole country.

HTRS07 itself is fixed at 2007.5. Greece moves a few centimetres a year, so a
point measured today sits away from its HTRS07 coordinates, by up to about
56 cm in Crete ([Day 1](/projects/30dmc-2026-day-01-points)).

## C. Heights

GPS measures heights from the ellipsoid, a smooth mathematical shape of the
earth. Heights on maps are measured from mean sea level, which follows the
geoid, an uneven surface set by gravity. Panel C shows the gap between the two
from EGM2008: the geoid lies 15 to 45 m above the ellipsoid across Greece,
lowest in the south-west and highest in the north. A GPS height has to be
corrected by that amount before it means height above sea level.

| Step | Default | Official or better | Difference here |
| --- | --- | --- | ---: |
| Map grid | Greek Grid, 24° E, 0.9996 | - | −78 cm to +1.5 m per km |
| GPS to GGRS87 | EPSG:1272, about 1 m | HEPOS model, about 8 cm | up to 2 m |
| Height reference | ellipsoid | EGM2008 geoid | 15 to 45 m |

The computations were done in a Python notebook with pyproj (PROJ 9.8), arcpy
and GDAL: scale factors from the projection, the ground correction from the
elevation model, both conversions over the test grid and the geoid from
EGM2008. A Greek geoid model shipped with the Esri grids, hg2023, was read too
but left out: it differs from EGM2008 by 1.5 to 3.4 m off the Ionian coast and
its source is not documented. The map was made in ArcGIS Pro on the Greek Grid.
