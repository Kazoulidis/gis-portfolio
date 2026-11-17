---
title: 'Day 21 - OpenStreetMap: Where the Saints Stand'
summary: 'OpenStreetMap holds 29,231 churches and chapels on Greek land, and their saints keep to their places. Prophet Elias stands on a hilltop 22.5% of the time, against 3.1% for all chapels; Saint Nicholas, patron of sailors, stands on the shore 18% of the time, more than any other saint. Pick a saint and see where its chapels are.'
date: 2026-11-21
created: 2026-11-17
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 21'
tags: ['ArcGIS Pro', 'Python', 'Leaflet', 'OpenStreetMap', 'Overpass']
image: '/images/30dmc-2026-day-21-wide.webp'
imageFull: '/images/30dmc-2026-day-21-full.webp'
imageAlt: 'Printed A4 sheet titled Where the Saints Stand: Greece in green and brown relief with blue seas, red triangles for Prophet Elias chapels on hilltops along the mountains of the mainland, the Peloponnese and Crete, blue dots for Saint Nicholas chapels on the shore around the coasts and islands, and the other chapels of both saints as small pale dots; the side panel holds a legend, bars of the saints most often on a hilltop and on the shore, close-ups of the hills of Messinia and of Paros, and bars of each saint''s median height'
thumbnail: '/images/30dmc-2026-day-21-square.webp'
thumbnailAlt: 'Greece in relief with red triangles for Prophet Elias chapels on hilltops and blue dots for Saint Nicholas chapels on the shore'
dataSource:
  - label: '© OpenStreetMap contributors - places of worship and church and chapel buildings, via the Overpass API, 17 November 2026 (ODbL)'
    href: 'https://www.openstreetmap.org/copyright'
  - label: 'Copernicus DEM GLO-90 - heights of the chapels and the relief'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://emodnet.ec.europa.eu/en/bathymetry'
  - label: 'Hellenic Statistical Authority (ELSTAT) - coast and regions'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: '© EuroGeographics, via Eurostat GISCO - NUTS boundaries of the neighboring countries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-21-map.jpg'
    note: 'JPEG · 7016 × 4961 · 4.3 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-21-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 2.8 MB'
map: '/data/30dmc-2026-day-21-saints.json'
mapComponent: 'saints-map'
mapCaption: 'Pick a saint to see its chapels, with those on a hilltop and on the shore marked, and its figures against all chapels. Click a chapel for its name and height, and open it in OpenStreetMap.'
draft: true
---

**Prompt:** OpenStreetMap.

Greece is full of small churches and chapels: in villages, at crossroads, on
hilltops and by the sea. No official dataset lists them, but OpenStreetMap
does, mapped one by one by volunteers. It holds 29,231 on Greek land. Most are
named after a saint, and the saints turn out to keep to their places.

## On the peak, by the sea

Prophet Elias, who in the Bible rises to heaven in a chariot of fire, is the
saint of the mountain tops. 22.5% of his chapels stand on a hilltop, against
3.1% of all chapels: seven times as often. One hilltop chapel in five in Greece
is his, and his chapels stand at a median height of 519 m, against 211 m for
all chapels.

Saint Nicholas is the patron of sailors, and his chapels go down to the water:
18% of them stand within 200 m of the shore, against 8.2% of all chapels and
more than for any other saint. Saint Andrew, the fisherman apostle, is next at
17%.

| Saint | Chapels | On a hilltop | On the shore | Median height |
| --- | ---: | ---: | ---: | ---: |
| Prophet Elias | 826 | 22.5% | 2.1% | 519 m |
| Saint Nicholas | 1,102 | 1.9% | 18.0% | 206 m |
| All churches and chapels | 29,231 | 3.1% | 8.2% | 211 m |

The map shows every chapel of the two saints. The ones on a hilltop (Elias) and
on the shore (Nicholas) are drawn large; the rest are small and pale.

## How it was made

The churches and chapels were downloaded from OpenStreetMap with the Overpass
API on 17 November 2026: every place of worship in Greece, and every building
tagged as a church, chapel or monastery, 30,418 objects. Buildings are reduced
to their centre. In Python I removed non-Christian places of worship, chapels
mapped twice (as a point and as a building, 887 of them) and anything off Greek
land, which left 29,231.

- **The saint** comes from the name. Greek names come in many forms,
  "Άγιος Νικόλαος", "Αγίου Νικολάου", "Ι.Ν. Αγ. Νικολάου", so the names are
  matched on their stems with accents and case removed. 43% of the chapels name
  a recognisable saint; the rest are unnamed or named otherwise, and count only
  in the totals.
- **The height** is read from the Copernicus 90 m elevation model.
- **A hilltop** is a chapel with no ground within 500 m more than 10 m higher
  than it, and at least 50 m above the lowest ground within 500 m.
- **The shore** is within 200 m of the ELSTAT coast.

The printed map was made in ArcGIS Pro with the depth and elevation styling of
Day 2; the web map draws every chapel with Leaflet.

## What OpenStreetMap does and does not show

OpenStreetMap shows what volunteers have mapped, and Greece is mapped unevenly.
The Peloponnese has its chapels mapped almost one by one; much of Thessaly and
Thrace has far fewer. The shares compare saints
within the same data, so uneven mapping matters less to them than to the
counts, but a saint mapped mostly in one region still carries that region's
landscape with it.
