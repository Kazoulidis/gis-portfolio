---
title: 'Day 10 - Prompting only: Lethousa'
summary: "A Greek island that does not exist. AI came up with its specifications, but having AI make 100% of the map seemed a bit lazy, so the layout and symbology use my own templates. Some of it is plainly wrong, starting with a completely unrealistic 6,000 m peak."
date: 2026-11-10
created: 2026-11-05
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 10'
tags: ['ArcGIS Pro', 'Python', 'Generative', 'AI', 'Cartography']
image: '/images/30dmc-2026-day-10-wide.webp'
imageFull: '/images/30dmc-2026-day-10-full.webp'
imageAlt: 'Printed A4 map of Lethousa, an invented Greek island drawn like a real chart, with hillshaded mountains, villages, roads, streams and depth soundings, and a summit labelled 5,973 m. Panels show where it would sit north of Crete, an invented ferry timetable and an invented census.'
thumbnail: '/images/30dmc-2026-day-10-square.webp'
thumbnailAlt: 'Map of an invented Greek island with green and grey mountains'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-10-map.jpg'
    note: 'JPEG · 7016 × 4961 · 3.1 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-10-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 1.6 MB'
dataSource:
  - label: 'Hellenic Statistical Authority (ELSTAT) - the real islands in panel A. Everything on the main map is invented.'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: 'Copernicus DEM GLO-90 - elevation in panel A (© DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018, provided under COPERNICUS by the European Union and ESA)'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'EMODnet Bathymetry - depths in panel A (2024)'
    href: 'https://doi.org/10.12770/cf51df64-56f9-4a99-b1aa-36b8d7b743a1'
draft: true
---

**Prompt:** Prompting only.

The brief asks for a map made by AI from start to finish, in a chat window or on
the command line. Having an AI make 100% of the map seemed a bit lazy to me, so
this is my own take on the day.

Lethousa does not exist. Its name comes from Lethe, the river of forgetting, and
it sits in empty water in the Cretan Sea. The land, heights and depths around it in
panel A are the only real data on the sheet.

## Who did what

**AI** came up with the island's specifications: its shape, the names, villages,
monastery, castle and shipwreck, the census and the ferry timetable.

**I** set the direction and made the choices: I chose this island out of four
candidates, decided what stayed and what changed, and kept the flaws below. The
layout, type, grid, scale bar and north arrow come from my own templates, and the
height and depth colours, coast and hillshades use my styles from Days 4 and 5.

## What is wrong with it

Some of this is completely unrealistic, and I left it in on purpose.

- **The peaks.** Profitis Ilias at 5,973 m and Stavros at 5,213 m are impossible.
  Olympus, the highest mountain in Greece, is 2,918 m. The terrain simply came out
  too tall on the first attempt.
- **The mountains.** They are blobby, with sudden plateaus and scarps, not
  the branching ridges that rivers carve. The streams are drawn on top of this
  terrain more than they shaped it.
- **The sea.** The pale band hugging the coast is not a real shelf. Depths are just
  made to increase with distance from the shore, so the seafloor has no real
  structure, and the soundings are read from that invented surface.
- **The island itself.** At 932 km² it would be Greece's fifth largest island, yet
  it has only 6,633 invented residents, far fewer than an island that size
  would have. Nothing about the geology of the Cretan Sea explains it being there.
- **The ferries.** They are straight lines from one port at an assumed 18 knots. The
  route to Piraeus crosses real land and all of them leave across the island. The
  real ports' positions were typed from memory, not taken from a source.
- **The names.** They sound right because they are common: places called Vathy and
  Agia Marina exist elsewhere in Greece. The checks only confirmed that no ELSTAT
  settlement is called Lethousa.

## Building it

The terrain is layered noise in Python, with a simple simulation of rivers. The
sheet is built in ArcGIS Pro on my house layout. The sizes in panel A
are measured against ELSTAT's outline of Greece.
