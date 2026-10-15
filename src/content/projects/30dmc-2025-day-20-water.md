---
title: 'Day 20 - Water: Passenger-Ship Traffic in Greek Waters'
summary: 'Every passenger-ship crossing recorded by AIS in Greek waters during 2024, counted into 1 km cells. In an archipelago the sea is the road network, and this is what its traffic map looks like.'
date: 2025-11-20
created: 2026-08-10
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2025 · Day 20'
tags: ['ArcGIS Pro']
image: '/images/30dmc-2025-day-20-wide.webp'
imageAlt: 'Printed A4 map of Greek waters showing passenger-ship traffic density in eight shades of blue, with bright corridors fanning out from Piraeus across the Aegean and a dense band in the Corfu channel'
thumbnail: '/images/30dmc-2025-day-20-square.webp'
thumbnailAlt: 'Map of passenger-ship traffic density across the Aegean and Ionian seas'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2025-day-20-map.png'
    note: 'PNG · 7016 × 4961 · 6.1 MB'
  - label: 'Square version'
    href: '/downloads/30dmc-2025-day-20-map-square.png'
    note: 'PNG · 4724 × 4724 · 4.9 MB'
dataSource:
  label: 'EMODnet Human Activities, EMSA Route Density'
  href: 'https://emodnet.ec.europa.eu/en/human-activities'
---

**Prompt:** Focus on the fluid - hydrology, oceans, currents, water accessibility.

Water usually gets mapped as a physical thing: depth, currents, catchments. This
takes the last item on the prompt instead and maps the sea as infrastructure.
With around 6,000 Greek islands and islets and something over 200 of them
inhabited, the sea is not a barrier between places so much as the thing that
connects them - and like any transport network, it carries traffic that can be
counted.

Every cell is 1 km square and holds the number of passenger-ship crossings
recorded there during 2024, from satellite and terrestrial AIS. The result is a
network nobody drew: it emerges from ships repeating the same tracks until the
tracks show up as lines on open water.

The distribution is severe, which is why the legend needs eight classes rather
than a smooth ramp. Roughly **half the sea shown carries no passenger traffic at
all**, and of the cells that carry any, about **two thirds see fewer than ten
crossings in a year** - one boat every few weeks. Nearly all the movement is
concentrated into a handful of corridors, and the densest of them, the
**Corfu - Igoumenitsa channel**, is a shuttle run frequent enough to behave like
a bridge rather than a ferry.

The shape the map exposes is a hub. Corridors fan out of the Saronic Gulf toward
the Cyclades, the Dodecanese and Crete in a pattern that makes the centrality of
Piraeus impossible to miss - for most islands, getting anywhere means getting to
Athens first. Around the edges of that, the through-traffic crossing the Ionian
and the southern Aegean belongs to ships passing rather than serving, and it is
worth reading separately: a bright line near an island does not necessarily mean
that island is well connected.

That is what makes it a water map rather than a transport one. The same stretch
of sea is a highway in one place and empty in another, and nothing about the
water itself explains which is which. The dark corridors are where the sea works
like a road; the enormous pale expanse between them is not distance exactly, but
the absence of anything scheduled.

Built in ArcGIS Pro over shaded relief in the Greek Grid (GGRS87).

One flaw in the source data is worth recording, because it bites exactly where
the map is most interesting. The EMSA rasters are signed 16-bit integers, so a
cell counting more than 32,767 crossings does not clip at the top - it wraps
around into a large negative number. Twenty-nine cells inside this extent have
done so, and they are not scattered noise: they sit in the busiest ferry
crossings in the region, the Bosphorus and the Sea of Marmara, the approaches to
Izmir, the Corfu - Igoumenitsa channel, and the mouth of Piraeus. Read back as
unsigned, they imply between about 33,000 and 61,000 crossings a year.

The consequence is that the very busiest cells are the ones the map cannot
draw - they fall outside every class and vanish into the background, so the
apparent maximum is not the real one. It is a good reminder that the minimum of
a count raster is worth checking before the maximum: a negative number in data
that can only be positive is the tell.
