---
title: 'Day 5 - Senses: Sight: Seeing Olympus'
summary: 'Where Mount Olympus can be seen from: a viewshed of Mytikas, 2,918 m, on 30 m terrain with the curve of the Earth and the bending of light. From Thessaloniki the bottom 322 m of the mountain is below the horizon; from Samothrace, 283 km away, its top still shows above Mount Athos. Drag a viewer anywhere and see it for yourself.'
date: 2026-11-05
created: 2026-11-01
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 5'
tags: ['ArcGIS Pro', 'GDAL', 'Python', 'Viewshed', 'Leaflet']
image: '/images/30dmc-2026-day-05-wide.webp'
imageFull: '/images/30dmc-2026-day-05-full.webp'
imageAlt: 'Printed A4 map of northern Greece around Mount Olympus, with the land coloured orange where the summit can be seen and in paler shades where you would need to stand higher; the right column holds a small map of the full reach into Bulgaria, a profile from Thessaloniki showing the curve of the sea hiding the base of Olympus, and a computed skyline from Thessaloniki with Olympus, Ossa, the Pierian mountains and Vermio labelled'
thumbnail: '/images/30dmc-2026-day-05-square.webp'
thumbnailAlt: 'Map of northern Greece with the areas that can see Mount Olympus in orange'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-05-map.jpg'
    note: 'JPEG · 7016 × 4961 · 8.4 MB'
  - label: 'Square version'
    href: '/downloads/30dmc-2026-day-05-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 6.9 MB'
map: '/data/30dmc-2026-day-05-meta.json'
mapComponent: 'olympus-sightline'
mapCaption: 'Drag the figure, click the map or pick a place. The view and the sightline are computed in your browser from a 300 m terrain model, with the ground under you at 90 m, so they are coarser than the coloured layer, which comes from the 30 m model of the printed map; near the edge of a coloured patch the two can disagree.'
dataSource:
  - label: 'Copernicus DEM GLO-30 and GLO-90 - elevation (© DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018, provided under COPERNICUS by the European Union and ESA)'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://doi.org/10.12770/cf51df64-56f9-4a99-b1aa-36b8d7b743a1'
  - label: 'Hellenic Statistical Authority (ELSTAT) - Greek regional boundaries'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: '© EuroGeographics, via Eurostat GISCO - NUTS boundaries of the neighbouring countries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
draft: true
---

**Prompt:** Senses: Sight.

On a clear day Mount Olympus is part of the view from Thessaloniki, across
the Thermaic Gulf. This map asks the question the other way round: from
where can Mytikas, its highest summit at 2,918 m, be seen at all?

## A line of sight runs both ways

If you can see the summit from a spot, the summit can see that spot. So the
places that see Mytikas are its viewshed: everything a viewer standing on
the summit would see. I computed it with GDAL on the Copernicus 30 m
elevation model, for a person with eyes 1.7 m above the ground.

Two corrections matter at these distances:

- **The Earth curves.** At 78 km, the distance to Thessaloniki, the ground
  drops 411 m below a level line from the viewer.
- **Light bends** slightly around the curve, which lets you see a little
  farther. The usual allowance for this, a refraction coefficient of 1/7, is
  included.

Where the summit is hidden, the map shows how much higher you would need to
stand to see it: up to 25 m, 25 to 100 m, or 100 to 300 m. On land within
the map, 12,830 km² can see the summit, and a viewer up to 100 m higher
would add another 13,500 km². A faint wash marks the sea that sees it: all of
the Thermaic Gulf and well beyond.

## A. As far as Samothrace

On the 90 m model of the whole region, the summit is visible from
15,200 km² of land. The farthest is on Samothrace, 283 km away: on the east
slopes of Fengari, only the top 157 m of Olympus clears Mount Athos and the
curve of the sea. Close behind is Veykata, on the border of Bulgaria and
Greece in the Rhodope, at 279 km. Vihren, in the Pirin mountains, 206 km
away, Parnassus, 174 km, and the summit of Mount Athos, 168 km, also see it. Musala, Bulgaria's highest peak, does not: it
would need to be 414 m higher. At sea, the summit's horizon is 213 km out.

## B. What the curve hides

From Thessaloniki's waterfront, at the White Tower, 78 km away, Olympus is in
plain view, but not all of it. Nothing on land stands in the way: the curve of the sea
across the Thermaic Gulf alone hides the mountain below 322 m.

## C. The view from Thessaloniki

The panorama is computed from the terrain the same way: for each direction,
the highest angle any ridge reaches, with the curve and refraction applied,
and ridges shaded lighter with distance. A peak is labelled only where its own
summit makes the skyline: Ossa, Olympus, the Pierian mountains and Vermio.
Heights are drawn about eight times taller than they are, or the mountains
would be a thin line.

## About the data

- **GLO-30 is a surface model.** It includes buildings and trees, so the
  result is reliable over areas but not at a single point in a town.
- **Haze is not modelled.** These are the places with a clear line of sight;
  on most days the air hides Olympus long before the horizon does.
- **The peaks named on the map are checked**: each one's summit was found in
  the elevation model within 60 m of its official height. A peak that could
  not be matched would be left out.

## Building it

The viewshed runs on grids centred on the summit, so distances from it are
true in every direction: 30 m out to 175 km and 90 m out to 430 km, the
farthest a summit this high could be seen from another mountain top. The
map was made in ArcGIS Pro on the Greek Grid (EPSG:2100), over the EMODnet
2024 bathymetry.

The interactive map computes its sightline and panorama in the browser,
from a 300 m version of the terrain, 300 km around the summit, and 60 m
within 25 km of Thessaloniki. The ground you stand on comes from 90 m tiles,
loaded only where you are, since a 300 m cell would average a hilltop down
by as much as 250 m. All of it is stored as PNG images, with each height
packed into two of their colour channels.
