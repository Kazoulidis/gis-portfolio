---
title: 'Day 18 - NULL: No Signal'
summary: 'Where Greece''s internet runs out: fiber in the cities, copper around the villages, mobile alone everywhere else, and 382 km² at the top of the mountains with no usable mobile data on the national map. Click anywhere to see what reaches it.'
date: 2026-11-18
created: 2026-11-13
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 18'
tags: ['ArcGIS Pro', 'Python', 'Leaflet', 'Telecommunications']
image: '/images/30dmc-2026-day-18-wide.webp'
imageFull: '/images/30dmc-2026-day-18-full.webp'
imageAlt: 'Printed A4 sheet titled No Signal: a shaded relief map of Greece with fixed internet in copper tones and purple for fiber around the cities, and small black patches of no mobile data on the mountains, labelled Voras, Pindus, Giona, Evia, Taygetus and Rhodope; a legend, three small maps of each network''s gaps in red, a table of settlements by what reaches them and three figures fill the side panel'
thumbnail: '/images/30dmc-2026-day-18-square.webp'
thumbnailAlt: 'Shaded relief map of Greece with copper and fiber internet coverage and black patches with no usable mobile data'
dataSource:
  - label: 'National Broadband Map and Network Register (ΧΕΜΔ), General Secretariat for Telecommunications and Posts, Ministry of Digital Governance - mobile, copper and fiber coverage'
    href: 'https://www.broadband-assist.gov.gr/public'
  - label: 'Telekom (formerly Cosmote) - mobile speed map, under EETT decision 1097/4Β/2024'
    href: 'https://www.telekom.gr/static/residential/el/map'
  - label: 'Vodafone - mobile coverage and speed map, October 2026'
    href: 'https://www.vodafone.gr/elegxos-taxythtas-internet-diktyou-kinitis'
  - label: 'Nova - mobile speed map'
    href: 'https://nova.gr/kiniti-tilefonia/diktio-kinitis-tilefonias/diktyo-prosbashs-kinhths/xartis-taxititon-speedmap'
  - label: 'Hellenic Statistical Authority (ELSTAT) - coast, settlements and the 2021 census'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: 'Copernicus DEM GLO-90 - hillshade of the land'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'EMODnet Bathymetry - depths'
    href: 'https://doi.org/10.12770/cf51df64-56f9-4a99-b1aa-36b8d7b743a1'
  - label: 'EuroGeographics, via Eurostat GISCO - country boundaries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-18-map.jpg'
    note: 'JPEG · 7016 × 4961 · 4.7 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-18-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 3.2 MB'
map: '/data/30dmc-2026-day-18-signal.json'
mapComponent: 'signal-map'
mapCaption: 'Choose a layer: what reaches the land, as on the printed map, the best mobile speed on the national map, or each network on its own. Click anywhere on the land for every value at that spot. Coverage is what the operators declare, on a grid of about 300 m, not a measurement.'
draft: true
---

**Prompt:** NULL.

Greece is online almost everywhere. Fiber reaches the cities, copper lines reach the villages, and beyond them mobile data covers the rest: 98.6% of the land has mobile internet at 30 Mbit/s or more. But at the top of the mountains the signal runs out. On 382 km², 0.29% of the land, in 1,067 patches, the national broadband map shows no usable mobile data. Those are the nulls on this map, in black.

They are mountain tops and border ridges. The largest groups are on the Taygetus, which has the most dead land at 50 km², and on Voras along the northern border, the southern Pindus, Giona, central Evia and the Rhodope. The Rhodope is the exception: its dead zones lie low, between 180 and 930 m, in the country of the mountain villages north of Xanthi.

Each network on its own leaves more gaps. Telekom has no service on 2.6% of the land, Vodafone on 0.3% and Nova on 3.1%; their maps agree that 0.13% of the land has no service from any of them. The national map, which gathers what the operators declare, is stricter than their own maps, and in places one network's map still shows a signal where the national map shows none. The national map is the one used for the dead zones here, as the official source.

Fixed internet is a different country. Copper lines cover about 30% of the land, around the towns and villages; fiber to the building is still almost only in the cities, yet it is near 69% of the population. 5,129 of Greece's 13,584 settlements, 38%, have no fixed line at all and depend on mobile. They are small: together they hold 318,027 people, 3% of the population. In 56 villages, home to 1,018 people, there is neither a line nor mobile data faster than 2 Mbit/s.

The sources are the National Broadband Map of the Ministry of Digital Governance, and the speed maps that Telekom, Vodafone and Nova publish under EETT's Open Internet rules. All of them are predictions of what the networks deliver, not measurements, and their speed classes were matched to one scale and put on a 250 m grid. The settlements and their population are ELSTAT's, from the 2021 census.
