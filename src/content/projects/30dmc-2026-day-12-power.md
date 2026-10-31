---
title: 'Day 12 - Power: The Crete-Peloponnese Cable'
summary: 'The 175 km power cable that links Crete to the mainland grid, at its charted position: chainage, depth along the route and crossings with telecom cables. The route on the grid operator''s network map lies up to 2.2 km from where the cable is charted.'
date: 2026-11-12
created: 2026-10-26
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 12'
tags: ['ArcGIS Pro', 'Python', 'GDAL', 'Cable route', 'Bathymetry']
image: '/images/30dmc-2026-day-12-wide.webp'
imageFull: '/images/30dmc-2026-day-12-full.webp'
imageAlt: 'Printed A4 map of the sea between western Crete and the south-eastern Peloponnese, with the power cable drawn in red from Chania to Vatika Bay, shaded darker where the sea is deeper, ticked every kilometre and labelled every 10 km; a dashed line beside it shows the route on the grid operator''s map; two circles mark crossings with telecom cables; a depth profile along the route sits in the legend'
thumbnail: '/images/30dmc-2026-day-12-square.webp'
thumbnailAlt: 'Map of the Crete-Peloponnese power cable crossing the sea between Crete and Kythira, ticked every kilometre'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-12-map.jpg'
    note: 'JPEG · 7016 × 4961 · 5.1 MB'
  - label: 'Square version'
    href: '/downloads/30dmc-2026-day-12-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 3.2 MB'
dataSource:
  - label: 'Hellenic Navy Hydrographic Service - Notice to Mariners 70/2021, charted cable position (archived April 2021 issue)'
    href: 'https://web.archive.org/web/20210813160912/https://www.hnhs.gr/images/pdf_aggelies/gr/2021/Docs/0421.pdf'
  - label: 'ADMIE (IPTO) - network map, indicative route and onshore sections'
    href: 'https://www.admie.gr/systima/perigrafi/hartis-grammon'
  - label: 'ADMIE (IPTO) - Crete-Peloponnese interconnection project'
    href: 'https://www.admie.gr/en/erga/erga-diasyndeseis/diasyndesi-tis-kritis-me-tin-peloponniso'
  - label: 'EMODnet Human Activities - telecom cables charted by SHOM'
    href: 'https://emodnet.ec.europa.eu/en/human-activities'
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://doi.org/10.12770/cf51df64-56f9-4a99-b1aa-36b8d7b743a1'
  - label: 'Copernicus DEM GLO-90 - land elevation'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'Hellenic Statistical Authority (ELSTAT) - Greek regional boundaries'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: '© EuroGeographics, via Eurostat GISCO - NUTS boundaries of the neighbouring countries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
  - label: 'Natural Earth - country boundaries of the locator map'
    href: 'https://www.naturalearthdata.com/'
draft: true
---

**Prompt:** Power.

Since 2021, Crete has drawn part of its electricity from the mainland through a
150 kV cable to the Peloponnese. This map treats it the way a survey firm treats
a cable route: as a line with a chainage. Distance along the route is given in
kilometre points (KP), counted from the substation near Chania (KP 0). The route
crosses 33 km of Crete to Kissamos Bay, runs 132 km under the sea past
Antikythera and Kythira, and comes ashore in Vatika Bay for the last 10 km to
the Peloponnese grid.

The colour of the line is the water depth beneath it, from the EMODnet
Bathymetry surface, in four bands from light red (less than 250 m) to dark red
(750-1,000 m). The deepest point is 972 m at KP 80.7, in the strait between
Crete and Antikythera. The profile in the legend shows the same depths along
the route, in the same colours. At a 100 m grid the steepest slopes are
smoothed, so the real seabed is rougher than the profile shows.

## Two positions for one cable

The grid operator, ADMIE, shows the cable on its online network map. That line
is schematic. The cable's charted position comes from the Hellenic Navy
Hydrographic Service: in April 2021 its Notices to Mariners added the cable to
six nautical charts as lists of WGS 84 points, with ADMIE as the source of the
positions. The 2021 issues are no longer on the service's website, so I read
them from the Wayback Machine's copy of the old site. Notice 70/2021 gives 37
points from the Kissamos shore to the Vatika shore, and that is the route on
the map.

Against it, the network map's line is a median of about 1 km off, more than
1 km for half the submarine section and up to 2.2 km near Kythira. It is drawn
dashed beside the charted route. For anything that touches the seabed, such as
anchoring, fishing or a new cable, the charted position is the one that
counts.

## Crossings and lengths

Two telecom cables charted by France's hydrographic office, SHOM, cross the
route, at KP 64.8 and KP 76.6. Open data does not hold every cable on the
seabed, so these are the crossings that open data shows, not a full list.

| Measure | Length |
| --- | ---: |
| On the UTM zone 34N grid | 175.30 km |
| On the GGRS87 / Greek Grid | 175.20 km |
| On the ellipsoid | 175.27 km |

The same line measures 100 m differently on two official grids. Transverse
Mercator grids stretch distances away from their central meridian and shrink
them near it. The route lies 2-3° east of UTM 34N's meridian at 21° E, where
grid distances come out longer than on the ellipsoid, and close to the Greek
Grid's 24° E, where the 0.9996 scale factor makes them shorter.

The map was made in ArcGIS Pro in UTM zone 34N. The route, KP ticks, depth
bands and profile were built with Python and arcpy, and the relief and seafloor
shading with GDAL.
