---
title: 'Recorded Hellenic Armed Forces Fatalities by Birthplace'
summary: 'Seventeen maps of where the Hellenic Armed Forces'' fallen were born, across sixteen conflicts from the founding of the Greek state in 1830 to the peacekeeping mission to Somalia in 1993.'
date: 2026-08-21
created: 2026-08-21
category: 'misc'
context: 'Personal project'
tags: ['ArcGIS Pro', 'Leaflet', 'GDAL/OGR']
map: '/data/hellenic-fatalities.geojson'
mapComponent: 'hellenic-fatalities'
mapCaption: 'The printed series above, and the same seventeen maps as an interactive choropleth below. Each can be set to a different conflict, so you can compare two wars side by side. Click a regional unit for its figure and its share of that map''s total; on the Total map the popup also breaks the number down by conflict. Each war uses the same class breaks as its printed map.'
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

**120,252** members of the Hellenic Armed Forces are recorded by name as having
died in service between Greek independence in 1830 and the peacekeeping mission
to Somalia in 1993. These maps show where they were born.

**31,329** of them have no recorded birthplace and can't be mapped. The other
**88,923** are counted by the regional unit they were born in, not where they
served or died. A dark unit on these maps is a place many soldiers came from,
not a place where fighting happened.

## Seventeen maps

The record covers sixteen conflicts, plus a map of the combined total, and
their sizes differ by four orders of magnitude: the Asia Minor Campaign
accounts for **25,183** of the mapped fallen, the Somalia mission for one.

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

Because of that range, each map has its own class breaks. A scale wide enough
for Asia Minor would show the Korean War, with at most eleven fallen from any
one unit, as a single colour; a scale suited to Korea would put half the
country in the top class for Asia Minor. The interactive maps use the same
classes as the printed ones, so the two can be compared directly.

## What the totals show

**Messenia** has the highest total, **4,708**, or 5.3% of everyone mapped,
followed by Aetolia-Acarnania, Ioannina, Euboea and Arcadia, all above 3,100.
This is not simply a population map: the highest losses are in the rural
Peloponnese, Epirus and western Greece, not the two large cities, and
Thessaloniki is only sixth.

**Mount Athos** is the only regional unit with no recorded fatalities in any
conflict, as expected for a monastic community. The one fatality of the Somalia
mission was born in **Imathia**.

## Data

The record comes from the Hellenic National Defense General Staff. I joined it
to the 75 regional units on the unit code and converted the file geodatabase
with GDAL/OGR. For the web, the geometry is reprojected to WGS84 and stored at
about 11 m precision, which keeps the 1,166 rings of the mainland and islands
small enough for a browser with no visible loss at these scales.
