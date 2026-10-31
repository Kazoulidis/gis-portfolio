---
title: 'Day 3 - Polygons: Polygons of Greece'
summary: 'All 332 Greek municipalities ranked by how close their shape comes to a circle, from Aegaleo (0.64) to the islands of Alonnissos (0.03). Explore the ranking on a map, or draw a shape and see which municipality it matches.'
date: 2026-11-03
created: 2026-10-31
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 3'
tags: ['ArcGIS Pro', 'Python', 'GeoPandas', 'Leaflet', 'Shape analysis']
image: '/images/30dmc-2026-day-03-wide.webp'
imageFull: '/images/30dmc-2026-day-03-full.webp'
imageAlt: 'Printed A4 sheet: a 5 by 5 grid of Greek municipality outlines, each enlarged to fill its square and coloured by score, from compact dark teal Athens suburbs at the top left to scattered orange island groups at the bottom right; the right column holds a map of Greece coloured by score, a scatter chart of score against area with islands as triangles, and a row of eight example shapes ending in a circle'
thumbnail: '/images/30dmc-2026-day-03-square.webp'
thumbnailAlt: 'Grid of 25 Greek municipality outlines, from round teal shapes to scattered orange islands'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-03-map.jpg'
    note: 'JPEG · 7016 × 4961 · 2.5 MB'
  - label: 'Square version'
    href: '/downloads/30dmc-2026-day-03-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 1.1 MB'
map: '/data/30dmc-2026-day-03-municipalities.geojson'
mapComponent: 'municipality-shapes'
mapCaption: 'Every shape on the wall is drawn at the same area, so only the shape differs. Hover or click a shape or the map to link the two.'
dataSource:
  - label: 'Hellenic Statistical Authority (ELSTAT) - municipalities (Kleisthenis I, 2019)'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: '© EuroGeographics, via Eurostat GISCO - NUTS boundaries of the neighbouring countries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
draft: true
---

**Prompt:** Polygons.

Greece has 332 municipalities, and no two have the same shape. Some are
almost round, some are long and thin, and some are a scatter of islands. This
sheet ranks every one by how close it comes to a circle.

## The score

The score is the Polsby-Popper test: a shape's area divided by the area of a
circle with the same perimeter. A circle scores 1, a square 0.79. Anything
long, ragged or broken into pieces has a long perimeter for its area and scores
near 0. I computed it in Python with GeoPandas on ELSTAT's municipal boundaries
(Kleisthenis I, 2019) on the Greek Grid. Mount Athos is self-governing, not a
municipality, so it is left out.

The roundest is Aegaleo in West Athens at 0.64, just ahead of Prespes (0.64)
and Papagos - Cholargos (0.63). The least round is Alonnissos at 0.03: a
string of islands in the Sporades whose combined coastline is far longer than
any circle of the same area. The median is 0.27, about Rodos.

## The grid

The main grid shows 25 of the 332, evenly spaced through the ranking, from
Aegaleo at the top left to Alonnissos at the bottom right. Each shape is
enlarged or reduced to fill its square, so they are not to scale; the label
gives the rank, the regional unit and the score.

## A, B and C

**A. Scores across Greece** maps every municipality in the same five classes.

**B. Small and round, ragged islands** plots the score against area. The
roundest municipalities are small city districts: 45 municipalities under
20 km² have a median score of 0.34. Islands sit at the bottom: their median is
0.17 against 0.30 on the mainland, and 24 of the 27 municipalities scoring
under 0.10 are islands. The other three reach the mainland but are broken up
all the same: Arta and Messolonghi by their lagoon islets, Poros by the island
that makes up half of it.

**C. What the score means** lines up eight examples from Alonnissos to a
circle, so the numbers have shapes to go with them.

Here an island municipality is one with no land on the mainland or the
Peloponnese. The Corinth and Potidea canals cut the Peloponnese and Kassandra
off in the boundary file, so both count as mainland. That gives 98 island
municipalities, from Crete and Evia to the Cyclades.

## The catch

As on [Day 2](/projects/30dmc-2026-day-02-lines), the perimeter depends on how
detailed the boundary is. ELSTAT's boundaries are generalised for cartography
and statistics, so a more detailed file would give longer perimeters and lower
scores, most of all on the coast. The ranking is for this file.

## Online

The map and the wall below link every municipality both ways: hover a shape
to find it on the map, or click the map to find its shape. The second tab is a
game: [draw a shape](/projects/30dmc-2026-day-03-polygons/match) and it is
compared with all 332 at the same size and at any angle, then morphs into the
closest one, with a match percentage. The match is the overlap of the two
shapes divided by the area they cover together.
