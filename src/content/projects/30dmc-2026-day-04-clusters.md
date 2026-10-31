---
title: 'Day 4 - Clusters: Earthquake Clusters'
summary: '61,449 Greek earthquakes of M2.5 and over, February 2011 to September 2026, sorted into 297 clusters in space and time. If the largest quake comes first, it is a mainshock with aftershocks; if it comes part-way through, a swarm. Explore the record day by day.'
date: 2026-11-04
created: 2026-10-31
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 4'
tags: ['ArcGIS Pro', 'Python', 'scikit-learn', 'ST-DBSCAN', 'Leaflet']
image: '/images/30dmc-2026-day-04-wide.webp'
imageFull: '/images/30dmc-2026-day-04-full.webp'
imageAlt: 'Printed A4 map of Greece with 61,449 earthquakes as dots: faint grey background quakes, dark red mainshock-aftershock clusters such as Zakynthos 2018 and Kefalonia 2014, and yellow swarms such as Santorini-Amorgos 2025; the right column holds close-ups of Santorini-Amorgos and Thessaly coloured by days since the first event, and two charts of magnitude against the order of events'
thumbnail: '/images/30dmc-2026-day-04-square.webp'
thumbnailAlt: 'Map of Greece with earthquake clusters in red and yellow, and two close-ups in the corner'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-04-map.jpg'
    note: 'JPEG · 7016 × 4961 · 6.1 MB'
  - label: 'Square version'
    href: '/downloads/30dmc-2026-day-04-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 4.7 MB'
map: '/data/30dmc-2026-day-04-earthquakes.json'
mapComponent: 'quake-timeline'
mapCaption: 'Opens on the whole record. Press play to run it day by day: each quake flashes on its day and fades over the next month. Switch to By month or By year for separate frames, use the arrows next to the timeline to jump to the next day a cluster began, or pick a sequence to zoom to it and watch it unfold.'
dataSource:
  - label: 'National Observatory of Athens, Institute of Geodynamics (NOA-IG) - earthquake catalogue, via its FDSN event service'
    href: 'https://eida.gein.noa.gr/'
  - label: 'Hellenic Seismological Network (HL), NOA-IG'
    href: 'https://doi.org/10.7914/SN/HL'
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://doi.org/10.12770/cf51df64-56f9-4a99-b1aa-36b8d7b743a1'
  - label: 'Copernicus DEM GLO-90 - land elevation'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'Hellenic Statistical Authority (ELSTAT) - Greek regional boundaries'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: '© EuroGeographics, via Eurostat GISCO - NUTS boundaries of the neighbouring countries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
draft: true
---

**Prompt:** Clusters.

Earthquakes are not spread evenly in time. They come in bursts: a large quake
and its aftershocks, or a swarm of similar-sized quakes that can run for weeks
with no clear main event. This map takes every earthquake of magnitude 2.5 and
over that the National Observatory of Athens recorded in and around Greece
from February 2011 to September 2026, 61,449 in all, and sorts them into
clusters.

## Finding the clusters

A cluster here is a group of quakes that are close in both space and time. I
used ST-DBSCAN, a version of the DBSCAN clustering method that measures
distance in time as well as in space. Two quakes count as neighbours if they
are within 10 km and 3 days of each other, and a cluster needs at least 10
quakes. A quake that is neighbour to a neighbour joins the same cluster, so a
sequence can spread along a fault over weeks.

That gives **297 clusters holding a third of all quakes** (20,332). The rest,
41,117, are background: quakes with too few neighbours to form a group. The
exact numbers depend on the settings. Across 5 to 20 km, 1 to 7 days and 5 or
10 quakes per cluster, between a fifth and a half of all quakes are clustered.
The settings used here sit in the middle of that range.

## Mainshock or swarm

Each cluster is then sorted by when its largest quake came. If it came within
the first tenth of the cluster's quakes, the cluster is a **mainshock with
aftershocks**: the big one first, then a decaying tail. If it came later, the
cluster is a **swarm**, building up before its peak or with no single peak at
all.

Swarms are more common, 170 against 127, but smaller: 7,885 quakes against
12,447. The largest sequences in the record are mainshocks. Zakynthos 2018
(3,827 quakes, largest ML 6.6) and Kefalonia 2014 (1,387) are the biggest
patches of red on the map.

## A. Santorini-Amorgos, 2025

The largest swarm in the record began on 28 January 2025 between Santorini
and Amorgos. It ran for 64 days and produced 3,114 quakes of M2.5 and over,
with a peak of 595 on 3 February alone. There was no main shock: 51 quakes
reached M4.5 or more, and the largest, M5.3 on 10 February, came after two
thirds of the sequence had passed.

## B. Thessaly, 2021

The Thessaly earthquake of 3 March 2021 is the opposite case. Its main shock,
ML 5.9 in this catalogue, came first, followed the next day by a second shock
of 5.9. Over 32 days the sequence grew to 583 quakes and spread north-west. Thessaly is widely reported as Mw 6.3, a different magnitude scale (see
below).

## C. Largest first, or part-way through

The two charts set every quake of the two sequences in order. Thessaly's
largest quake is at the start, inside the shaded first tenth; Santorini's sits
two thirds of the way along, among dozens of quakes almost as large.

## About the data

The catalogue is NOA-IG's, downloaded from its FDSN event service. It is
built from the Hellenic Seismological Network and starts on 1 February 2011.
Some limits:

- **Magnitudes are local magnitude (ML)**, the catalogue's own scale. For the
  largest quakes it runs below the moment magnitude (Mw) usually reported in
  the news, which is why Thessaly appears here as 5.9.
- **The catalogue misses small quakes far from the network.** It is complete
  from about M2.3 within Greece and M2.9 farther out, so M2.5 was the cut-off.
  Quakes offshore and in the neighbouring countries thin out on the map for
  that reason.
- **Locations are approximate**, more so offshore and outside the network,
  which is one reason the clustering distance is 10 km rather than less.
- The classification is a simple rule, meant to read the map, not a
  seismological study. Some swarms contain a mainshock sequence, and some
  mainshocks had foreshocks.

## Building it

The catalogue came down month by month over FDSN. The service returns at most
5,000 events per request, so busy months were split in half until each piece
fitted: 135,857 events of M2 and over. Clustering and classification were done
in Python with NumPy, SciPy and scikit-learn, on the Greek Grid. A k-d tree
finds every pair of quakes within 10 km and 3 days, and DBSCAN groups them
from that list of pairs. The map was made in ArcGIS Pro on the Greek Grid
(EPSG:2100), over the EMODnet 2024 bathymetry and the Copernicus 90 m
elevation model.

The interactive map works like the [wildfire map](/projects/30dmc-2025-day-15-fire)
from last year's challenge. The quakes are drawn on a canvas rather than as
map markers, and the file is sorted by time, so each day, month or year is one
slice of it and each frame only redraws the quakes in that slice.
