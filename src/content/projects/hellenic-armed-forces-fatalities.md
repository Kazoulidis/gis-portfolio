---
title: 'Recorded Hellenic Armed Forces Fatalities by Birthplace'
summary: 'A series of seventeen maps recording where the Hellenic Armed Forces'' fallen came from, across sixteen conflicts from the founding of the Greek state in 1830 to the peacekeeping mission to Somalia in 1993.'
date: 2026-08-21
created: 2026-08-21
category: 'misc'
context: 'Personal project'
tags: ['ArcGIS Pro', 'Leaflet', 'GDAL/OGR']
map: '/data/hellenic-fatalities.geojson'
mapComponent: 'hellenic-fatalities'
mapCaption: 'The printed series above, and the same seventeen maps as an interactive choropleth below. Each steps through the conflicts independently, so one war can be held on the printed sheet while another is read on the live map. Click any regional unit for its figure and its share of that map''s total; on the Total map the popup also breaks the number down by conflict. Every war keeps the class breaks used on its printed counterpart.'
thumbnail: '/images/hellenic-fatalities-square.webp'
thumbnailAlt: 'Choropleth map of Greece showing recorded Hellenic Armed Forces fatalities by regional unit of birth, shaded from pale yellow to dark brown'
downloads:
  - label: 'All maps'
    href: '/downloads/hellenic-fatalities-maps.zip'
    note: 'ZIP · 18 PNG · 7016 × 4961 · 91 MB'
  - label: 'Dataset'
    href: '/data/hellenic-fatalities.geojson'
    note: 'GeoJSON · 75 regional units · 3.3 MB'
dataSource:
  label: 'Hellenic National Defense General Staff'
---

**120,252** members of the Hellenic Armed Forces have been recorded by name as
having died in service between the recognition of Greece as an independent state
in 1830 and the peacekeeping mission to Somalia in 1993. This series asks a
narrow question of that record: where did they come from?

Of the full figure, **31,329 carry no recorded birthplace** and cannot appear on
a map at all. What is mapped here is the remaining **88,923**, distributed across
the 75 regional units of Greece by the place each of the fallen was born, not
where they served or died. That distinction matters for reading it: a dark
regional unit is a place that sent people, not a place that was fought over.

## Seventeen maps rather than one

There are sixteen conflicts in the record plus a combined total, and they differ
in scale by four orders of magnitude. The Asia Minor Campaign accounts for
**25,183** of the mapped fallen; the mission to Somalia accounts for **one**.

| Conflict | Mapped fallen | Share |
|---|---:|---:|
| Asia Minor Campaign 1919-1922 | 25,183 | 28.3% |
| First World War 1914-1919 | 18,300 | 20.6% |
| Greek Civil War 1946-1949 | 15,785 | 17.8% |
| Second World War 1940-1945 | 15,330 | 17.2% |
| Balkan Wars 1912-1913 | 6,927 | 7.8% |
| Civil Conflicts 1941-1944 | 3,208 | 3.6% |
| Cretan Revolts 1841-1898 | 1,161 | 1.3% |
| All nine remaining conflicts | 3,029 | 3.4% |

That spread is why each map is classified on its own breaks rather than a shared
scale. A ramp wide enough for Asia Minor would render the Korean expedition, at
a maximum of eleven fallen from any one unit, as a single flat colour; a ramp
suited to Korea would saturate half the country in the top class for Asia Minor.
The interactive map carries the same per-conflict classes as its printed
counterpart, so the two can be read against each other without silently
recalibrating.

## What the totals show

**Messenia** records the highest total of any regional unit, **4,708**, or 5.3%
of everyone mapped. Aetolia-Acarnania, Ioannina, Euboea and Arcadia follow, all
above 3,100. The pattern is not simply a population map: the heaviest losses
concentrate in the rural Peloponnese and in Epirus and western Greece rather
than in the two large cities, and Thessaloniki, for all its size, sits sixth.

At the other end, **Mount Athos** is the one regional unit with no recorded
fatalities in any conflict, which its monastic status explains. The single
fatality of the Somalia mission was born in **Imathia**.

## Notes on the source

The record comes from the Hellenic National Defense General Staff. The map
geometry is the 75 regional units, joined to the fatality table on the unit code
and converted from a file geodatabase with GDAL/OGR. For the web version the
geometry is reprojected to WGS84 and held at about 11 m precision, which brings
the 1,166 rings that make up the mainland and the islands down to a size a
browser can take without losing anything visible at the scales the map is read
at.
