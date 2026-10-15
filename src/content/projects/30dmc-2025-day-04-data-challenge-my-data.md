---
title: 'Day 4 - My Data: A Trip to Edessa'
summary: 'Twenty-eight photographs from a field trip to Edessa in March 2023, placed by the coordinates their phone recorded and grouped by what they show - waterfalls, old buildings, paths, views and landmarks.'
date: 2025-11-04
created: 2026-07-30
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 4'
tags: ['ArcGIS Pro', 'Leaflet', 'EXIF', 'GDAL/OGR']
image: '/images/30dmc-2025-day-04-wide.webp'
imageAlt: 'Printed map of central Edessa with coloured pin symbols marking where each photograph was taken, surrounded by seven of the photographs themselves'
map: '/data/30dmc-2025-day-04-edessa-trip.geojson'
mapComponent: 'photo-trip'
mapCaption: 'Click any pin to see the photograph taken there. Several photographs were often taken from the same spot - one point holds five - so clicking a stack shows all of them, oldest first, with a thumbnail strip to move between them.'
thumbnail: '/images/30dmc-2025-day-04-square.webp'
thumbnailAlt: 'Map of central Edessa with coloured pins marking photograph locations'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2025-day-04-map.jpg'
    note: 'JPEG · 7016 × 4961 · 7.9 MB'
  - label: 'Square version'
    href: '/downloads/30dmc-2025-day-04-map-square.png'
    note: 'PNG · 4724 × 4724 · 1.8 MB'
dataSource:
  label: 'My own photographs and their EXIF coordinates. Basemap: OpenStreetMap contributors'
---

**Prompt:** Visualise a personal dataset, such as GPS traces or your commute.

On 28 March 2023 I spent a day in Edessa collecting survey responses from
residents for an Urban and Regional Development Planning class. Between
interviews I took photographs, and because a phone stamps every frame with a
position, that afternoon left behind a small dataset without my intending it.
This map is that dataset: 28 photographs, each at the coordinates its EXIF
header recorded, classified by what it shows.

The town sits on a shelf where the Edessaios river drops off the plateau, which
is why more than half the photographs are of water. The rest is the walk between
them - the cobbled paths along the cliff, the old mill buildings at Kannavourgeio
below the falls, the view out over the Giannitsa plain, and the bronze figures
in the square.

The pattern the map shows best is not geographic but behavioural. The points are
not evenly spread; they cluster tightly where I stopped, and one spot holds five
frames taken within a couple of minutes of each other. Nineteen locations, 28
photographs. That is what photographing a place actually looks like - long gaps
of walking, then a burst.

Because those bursts stack into a single pin, the interactive version gathers
every photograph within a few pixels of the one clicked and shows them together
rather than surfacing only whichever happened to be drawn on top.

The printed version was laid out in ArcGIS Pro with the photographs arranged
around the frame and leader lines to their positions. Coordinates came out of
the EXIF headers, the points were built in the Greek Grid (GGRS87) to match the
rest of this series, and the web version reprojects them to WGS84 with GDAL/OGR.
