---
title: 'Day 28 - Senses: Feeling: How Hard Greece Shakes'
summary: 'The shaking each place in Greece should expect about once in 475 years, from the European hazard model ESHM20, turned into felt intensity: a third of the residents live where it reaches VIII, severe, or more. Against it, what people felt in the Samos earthquake of 2020, M7.0: all 51 places within 100 km that reported it felt less. Click anywhere for what that shaking would feel like.'
date: 2026-11-28
created: 2026-11-26
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 28'
tags: ['ArcGIS Pro', 'Python', 'Leaflet', 'Earthquakes', 'Hazard']
image: '/images/30dmc-2026-day-28-wide.webp'
imageFull: '/images/30dmc-2026-day-28-full.webp'
imageAlt: 'Printed A4 sheet titled How Hard Greece Shakes: Greece in solid bands from pale orange to deep red for the earthquake intensity expected once in 475 years, darkest around the Gulf of Corinth and Kefalonia; open rings mark the strongest earthquakes since 1900, dashed lines the depth of the Hellenic slab and an arrow where Africa sinks under the Aegean; a close-up of Samos shows the 2020 earthquake''s shaking and the felt reports; the side panel holds the intensity scale in words, bars of land and residents by expected intensity, a chart of felt intensity fading with distance and a chart of felt against expected intensity at six places'
thumbnail: '/images/30dmc-2026-day-28-square.webp'
thumbnailAlt: 'Map of Greece in bands of orange and red for the expected earthquake shaking, with rings for the strongest earthquakes since 1900'
dataSource:
  - label: 'EFEHR - European Seismic Hazard Model 2020 (ESHM20), mean peak ground acceleration with a 10% chance of exceedance in 50 years, through its hazard API (Danciu et al. 2021, doi:10.12686/a15, CC BY 4.0)'
    href: 'https://hazard.efehr.org/en/Documentation/specific-hazard-models/europe/eshm2020-overview/'
  - label: 'INGV - European Fault-Source Model 2020 (EFSM20), the Hellenic subduction slab (Basili et al. 2022, doi:10.13127/efsm20, CC BY 4.0)'
    href: 'https://seismofaults.eu/efsm20'
  - label: 'USGS - ShakeMap and "Did You Feel It?" for the M7.0 Samos earthquake of 30 October 2020 (us7000c7y0)'
    href: 'https://earthquake.usgs.gov/earthquakes/eventpage/us7000c7y0/'
  - label: 'USGS - Comprehensive Catalog (ComCat), earthquakes of M6.3 and over since 1900, with the ISC-GEM relocations before 1973'
    href: 'https://earthquake.usgs.gov/fdsnws/event/1/'
  - label: 'Hellenic Statistical Authority (ELSTAT) - 2021 census settlements, the coast and boundaries'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: 'Copernicus DEM GLO-90 - relief'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://emodnet.ec.europa.eu/en/bathymetry'
  - label: '© EuroGeographics, via Eurostat GISCO - NUTS boundaries of the neighboring countries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-28-map.jpg'
    note: 'JPEG · 7016 × 4961 · 3.9 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-28-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 2.4 MB'
map: '/data/30dmc-2026-day-28-shaking.json'
mapComponent: 'shaking-map'
mapCaption: 'The shaking expected once in 475 years, as felt intensity. Click anywhere on land for what it would feel like there. Switch on Samos 2020 for the ShakeMap and the places that reported what they felt, each against its 475-year level.'
draft: true
---

**Prompt:** Senses: Feeling.

An earthquake is the hazard you feel. This map asks two questions: how hard should
the ground in Greece shake, and how hard did it, the last time a large earthquake
struck close to a Greek island?

## Expected: once in 475 years

The European Seismic Hazard Model 2020 (ESHM20) gives, for every place, the
ground shaking with a 10% chance of being exceeded in 50 years, which is about
once in 475 years. Building codes use the same level. It comes as peak ground
acceleration on reference rock; over Greek land it runs from 0.10 g in the
central Cyclades to 0.72 g on the Gulf of Corinth.

Acceleration is not what people feel, so I turned it into intensity, the
I-to-X scale of what shaking feels like and does, with the relation of Worden et
al. (2012) that the USGS ShakeMap uses. The map shows whole classes.

| Expected intensity | Share of land | Share of residents |
| --- | ---: | ---: |
| VI strong | 8.1% | 3.4% |
| VII very strong | 41.7% | 63.5% |
| VIII severe | 48.8% | 31.6% |
| IX violent | 1.4% | 1.5% |

Shares of the 2021 census population of 10.5 million, by the intensity at each
settlement. Athens sits at 7.1, Thessaloniki 7.4, Heraklion 7.5, Patras 8.3,
Argostoli 8.6 and Aigio, on the Gulf of Corinth, 8.8.

The highest bands follow the plate boundary. In the west, Africa sinks under the
Aegean along the Hellenic subduction zone; the map draws its front off the
Ionian coast and the depth of the sinking slab from the European Fault-Source
Model (EFSM20). The rings are the earthquakes of M6.9 and over since 1900 in
Greece and its seas, eleven besides Samos 2020; the largest was Amorgos in 1956,
M7.7.

## Felt: Samos, 30 October 2020

The M7.0 earthquake north of Samos killed 117 people in Turkey, nearly all in
İzmir, and two on Samos. The USGS collected 668 "Did You Feel It?" reports for it
from 238 places, grouped in 10 km boxes, 63 of them in Greece.

Shaking faded fast with distance: around VII within 70 km (Kokkari on Samos,
Söke, İzmir), about III in Athens, 270 km away, and II in Istanbul.

Against the 475-year level, every one of the 51 places within 100 km that sent
reports felt less, by 2.5 intensity units at the median. The closest calls were
Söke, 7.5 felt against 7.8 expected, and Kokkari, 7.5 against 8.2. Of the 233
places inside the hazard grid, only one felt more than its 475-year level, and
by less than one unit.

That is what the 475-year level means: a rare, strong level for each place, not
what every large earthquake brings. One earthquake cannot test a hazard model.

## Limits

- ESHM20 is for reference rock. Soft ground, such as river plains and fill,
  shakes harder, so the expected intensity there is higher than shown.
- The relation from acceleration to intensity has a spread of about one unit.
- "Did You Feel It?" depends on who sends reports. In Greece few did, so the
  boxes are sparse, and each is the average of everyone in it.
- The ShakeMap already uses the felt reports, so the two are not independent.
- The 1903 earthquake off Kythira, M7.9, is left out: the catalog gives its
  position only to whole degrees.

The sheet was made in ArcGIS Pro with arcpy, and the analysis in Python.
