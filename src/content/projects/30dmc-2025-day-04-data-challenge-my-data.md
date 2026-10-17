---
title: 'Day 4 - My Data: A Trip to Edessa'
summary: 'Twenty-eight photographs from a field trip to Edessa in March 2023, placed where the phone recorded them and grouped by subject: waterfalls, old buildings, paths, views and landmarks.'
date: 2025-11-04
created: 2026-07-30
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 4'
tags: ['ArcGIS Pro', 'Leaflet', 'EXIF', 'GDAL/OGR']
image: '/images/30dmc-2025-day-04-wide.webp'
imageAlt: 'Printed map of central Edessa with coloured pin symbols marking where each photograph was taken, surrounded by seven of the photographs themselves'
map: '/data/30dmc-2025-day-04-edessa-trip.geojson'
mapComponent: 'photo-trip'
mapCaption: 'Click a pin to see the photograph taken there. Some spots have several photographs (one has five), so a click shows all of them, oldest first, with thumbnails to move between them.'
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
residents for an Urban and Regional Development Planning class. I took
photographs between interviews, and since the phone records a position with
every photo, the day left a small dataset behind. This map is that dataset: 28
photographs, each placed at the coordinates in its EXIF data and grouped by
subject.

Edessa sits on the edge of a plateau where the Edessaios river drops to the
plain, which is why more than half the photographs are of water. The rest are
from the walk between the falls: the cobbled paths along the cliff, the old
mill buildings at Kannavourgeio, the view over the Giannitsa plain and the
bronze statues in the square.

The points cluster where I stopped: 28 photographs at 19 locations, with five
taken within a couple of minutes at one spot. Because those share a pin, the
interactive map shows every photograph within a few pixels of a click instead
of only the one drawn on top.

The printed map was laid out in ArcGIS Pro, with the photographs around the
frame and leader lines to where each was taken. The points were built in the
Greek Grid (GGRS87), like the rest of the series, and reprojected to WGS84 for
the web with GDAL/OGR.
