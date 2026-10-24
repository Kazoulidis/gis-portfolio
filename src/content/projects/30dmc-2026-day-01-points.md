---
title: 'Day 1 - Points: How Fast Greece Is Moving'
summary: 'Horizontal velocities of 212 permanent GNSS stations, relative to stable Europe. Northern Greece barely moves; Crete moves 3 cm a year to the south-west. One station, TUC2 in Chania, positioned from raw satellite data and checked against the official solution.'
date: 2026-11-01
created: 2026-10-24
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 1'
tags: ['ArcGIS Pro', 'RTKLIB', 'GNSS', 'PPP', 'Python']
image: '/images/30dmc-2026-day-01-wide.webp'
imageFull: '/images/30dmc-2026-day-01-full.webp'
imageAlt: 'Printed A4 map of Greece with arrows from 212 GNSS stations, short and yellow in the north, long and dark red over the Peloponnese, the Aegean and Crete, all pointing south-west; legend with arrows drawn to scale and a table of positioning results for station TUC2'
thumbnail: '/images/30dmc-2026-day-01-square.webp'
thumbnailAlt: 'Map of Greece with GNSS velocity arrows pointing south-west, longest over Crete'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-01-map.jpg'
    note: 'JPEG · 7016 × 4961 · 6.6 MB'
  - label: 'Square version'
    href: '/downloads/30dmc-2026-day-01-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 4.7 MB'
  - label: 'TUC2 positioning results'
    href: '/downloads/30dmc-2026-day-01-ppp-results.csv'
    note: 'CSV · PPP minus official position, mm · 1 KB'
dataSource:
  - label: 'Nevada Geodetic Laboratory - MIDAS velocities and daily station positions'
    href: 'https://geodesy.unr.edu/'
  - label: 'EUREF Permanent GNSS Network - TUC2 observations (via BKG)'
    href: 'https://epncb.eu/'
  - label: 'CODE (IGS MGEX) - multi-GNSS final orbits, clocks and biases'
    href: 'https://www.aiub.unibe.ch/research/code___analysis_center/'
  - label: 'IGS - antenna calibrations (igs20.atx)'
    href: 'https://files.igs.org/pub/station/general/'
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://doi.org/10.12770/cf51df64-56f9-4a99-b1aa-36b8d7b743a1'
  - label: 'Copernicus DEM GLO-90 - land relief'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: '© EuroGeographics, via Eurostat GISCO - NUTS administrative boundaries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
# Keep off the site until the challenge day.
draft: true
---

**Prompt:** Points.

Each point on this map is a permanent GNSS station: an antenna fixed to bedrock or a
building that records satellite signals around the clock. Over years, its position
shows how the ground beneath it moves. The arrows are the horizontal velocities of
212 stations in and around Greece, relative to stable Europe, from the Nevada
Geodetic Laboratory's MIDAS solution (stations with at least three years of data, to
August 2024). They are drawn to scale: at 1:4,000,000, 1 mm/yr draws 2 km.

The pattern is the Aegean moving away from Europe. North of 40.5° N stations average
2.1 mm/yr; south of 37.5° N they average 31.6 mm/yr toward the south-west, as the
Aegean is drawn toward the Hellenic trench south of Crete, where the African plate
sinks beneath it. TUC2 near Chania moves 29.5 mm/yr toward 213°, about 57 cm since
2007, when the Greek GNSS reference frame HTRS07 was fixed. For surveying, that means
a coordinate in Greece is only complete with its date.

One station, KRIN near Aigio, is left out: it moves 93 mm/yr and sinks 21 mm/yr, which
is local ground movement rather than plate motion.

## Checking one station myself

To test the data behind the map, I positioned TUC2 myself from three days of raw
observations (9-11 September 2026, 24 hours at 30 s each) using precise point
positioning (PPP) in RTKLIB. PPP needs no base station: it combines one receiver's
dual-frequency measurements with precise satellite orbits and clocks, here CODE's
multi-GNSS final products, so GPS and Galileo could both be used. The processing
removes the ionosphere with the iono-free combination, estimates the tropospheric
delay, and corrects for solid Earth tides and antenna phase centres.

| Day | East (mm) | North (mm) | Up (mm) | 3D (mm) |
| --- | ---: | ---: | ---: | ---: |
| 9 Sep 2026 | +3.4 | -3.0 | +3.0 | 5.4 |
| 10 Sep 2026 | +1.0 | +1.5 | +2.6 | 3.1 |
| 11 Sep 2026 | -2.6 | +1.6 | +6.9 | 7.5 |
| Day-to-day range | 6.0 | 4.5 | 4.3 | |

Each day agrees with the official daily position (NGL, IGS20 frame) to within 8 mm.
The height comes out 3-7 mm high on all three days, a small constant offset most
likely from ocean tide loading, which I did not model. With GPS alone (rapid
products, about 9 satellites instead of 13) the results were similar on the first
two days, but the solution broke down on the evening of 11 September; adding
Galileo fixed it.

<figure>
  <img src="/images/30dmc-2026-day-01-within-day.webp" alt="Three panels, one per day, showing east, north and up differences from the official position over 24 hours; all three lines stay flat within about 7 mm" width="1600" height="1120" loading="lazy" />
  <figcaption>Every 30-second solution minus the official position. The lines stay flat all day.</figcaption>
</figure>

<figure>
  <img src="/images/30dmc-2026-day-01-tuc2-track.webp" alt="Scatter of TUC2's daily positions from 2004 to 2026 forming a line toward the south-east, coloured by year, with the three PPP results circled at the end" width="520" height="520" loading="lazy" />
  <figcaption>TUC2's daily positions, 2004-2026, with the three PPP results circled. This track is in the global IGS20 frame, so it runs south-east; relative to Europe, as on the map, the same station moves south-west.</figcaption>
</figure>

The map was made in ArcGIS Pro in the Greek Grid (GGRS87, EPSG:2100), over EMODnet
bathymetry and Copernicus DEM GLO-90 relief; the PPP comparison and figures were done
in Python with pyproj.
