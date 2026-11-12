---
title: 'Day 16 - Collaborative map: Twelve Years in One Tower'
summary: 'Twelve years of one person''s location history as a tower over Greece. Time rises upward, so staying home draws a trunk and every trip a branch: 55,011 hours, 28 trips, two of them abroad.'
date: 2026-11-16
created: 2026-11-11
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 16'
tags: ['Python', 'three.js', 'Time geography', 'GNSS']
image: '/images/30dmc-2026-day-16-wide.webp'
imageFull: '/images/30dmc-2026-day-16-full.webp'
imageAlt: 'Printed A4 sheet titled Twelve Years in One Tower: a glowing vertical trunk rising from a dark relief map of Greece, with coloured branches reaching out to trips such as Ios, Sami, Corfu and Patras, and dashed branches to England and the Netherlands; a legend of years, a small map of the trips from above, a table of the farthest trips and three figures fill the side panel'
thumbnail: '/images/30dmc-2026-day-16-square.webp'
thumbnailAlt: 'A glowing tower of twelve years of location history rising over a dark relief map of Greece'
dataSource:
  - label: 'Location history: Google Maps Timeline and a phone tracker, 2014-2026'
  - label: 'Copernicus DEM GLO-90 - relief of Greece'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'GEBCO 2026 - relief of the neighbouring countries'
    href: 'https://www.gebco.net/'
  - label: 'Hellenic Statistical Authority (ELSTAT) - coast and municipalities'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-16-map.jpg'
    note: 'JPEG · 7016 × 4961 · 1.8 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-16-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 0.7 MB'
map: '/data/30dmc-2026-day-16-cube.json'
mapComponent: 'time-tower'
mapCaption: 'Drag to turn the tower, scroll to zoom, and play or slide to grow it year by year. Positions are rounded to 1 km, and home is shown only to within 10 km.'
draft: true
---

**Prompt:** Collaborative map.

This map is built from twelve years of one person's location history: Google Maps Timeline from 2014, and a phone tracker in recent years, close to a million positions in all.

It is drawn as a space-time cube, an idea from Torsten Hägerstrand's time geography. The map of Greece is the floor and time rises upward, a year to each ring. Days at home stack up into a single trunk. Every trip leaves the trunk as a branch, reaching out over the map to the place it went and coming back a few days higher. Ios in July 2022 is the longest branch in Greece, at 468 km; Corfu, Sami and Patras are the others that reach the far side of the country.

Two trips left Greece, to England in December 2021 and the Netherlands in March 2022. At true scale they would be several times wider than the whole map, so beyond 450 km from home their distance is compressed, in the true direction. They are drawn dashed, with their real distances in the labels.

Hourly positions were used, the median of each hour. Of 55,011 hours with a position, 95% were within 10 km of home. A trip here is a stretch of a day or more spent 40 km or farther from home, and there were 28 of them. Gaps in the record, such as the thin years from 2017 to 2020, are drawn faintly rather than left out.

Location history is personal, so the page holds only a coarsened copy: every position is rounded to 1 km, home is shown only as the centre of its 10 km square, and the data is not offered for download.

The tower is drawn in three.js on a relief of Greece from Copernicus and of its neighbours from GEBCO. The printed sheet uses a still of the same scene.
