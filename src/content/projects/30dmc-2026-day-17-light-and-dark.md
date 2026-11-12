---
title: 'Day 17 - Light & dark: In the Moon''s Shadow'
summary: 'Every total eclipse of the Sun over Greece from 500 BC to AD 2500, one small map for each century: 50 paths of totality over Greek land, from none in three centuries to four in the 17th. Step through all of them, or watch one cross the map.'
date: 2026-11-17
created: 2026-11-12
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 17'
tags: ['ArcGIS Pro', 'Python', 'Canvas', 'Astronomy']
image: '/images/30dmc-2026-day-17-wide.webp'
imageFull: '/images/30dmc-2026-day-17-full.webp'
imageAlt: 'Printed A4 sheet titled In the Moon''s Shadow: a grid of thirty small maps of Greece, one for each century from the 5th century BC to the 25th century AD, each crossed by dark bands for the paths of total eclipses with their years, and three of them empty; a legend, a map of the share of the Sun covered on 29 March 2006, a table of cities and three figures fill the side panel'
thumbnail: '/images/30dmc-2026-day-17-square.webp'
thumbnailAlt: 'Thirty small maps of Greece crossed by the dark paths of total solar eclipses, one map for each century'
dataSource:
  - label: 'Eclipse Predictions by Fred Espenak, NASA''s GSFC - Five Millennium Canon of Solar Eclipses, with its Besselian elements'
    href: 'https://eclipse.gsfc.nasa.gov/SEcat5/SEcatalog.html'
  - label: 'Copernicus DEM GLO-90 - hillshade of the land'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'EMODnet Bathymetry - hillshade of the seafloor'
    href: 'https://doi.org/10.12770/cf51df64-56f9-4a99-b1aa-36b8d7b743a1'
  - label: 'Hellenic Statistical Authority (ELSTAT) - coast'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: 'EuroGeographics, via Eurostat GISCO - country boundaries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-17-map.jpg'
    note: 'JPEG · 7016 × 4961 · 4.6 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-17-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 3.5 MB'
map: '/data/30dmc-2026-day-17-eclipses.json'
mapComponent: 'eclipse-paths'
mapCaption: 'Play, or drag the slider, to step through the eclipses in order of date; the earlier paths stay behind faintly. Pick any one from the list to see how much of the Sun it covered across the map, and press Watch it pass to follow its shadow minute by minute. Dates before 1582 are in the Julian calendar.'
draft: true
---

**Prompt:** Light & dark.

A total eclipse is the darkest thing that can happen to a place in daylight. For a few minutes the Moon covers the whole Sun and the sky turns to night, but only inside a narrow path of the Moon's shadow, rarely more than 250 km wide. This map follows that path over Greece across three thousand years, from 500 BC to AD 2500, one small map for each century.

In that time the shadow of a total eclipse crossed Greek land 50 times. Three centuries had none: the 3rd century BC, the 8th, and the 22nd still to come. The 17th century had four. Every place on land saw about nine total eclipses over the whole period, and none more than 15. Athens' last was in 1661, and its next will be in 2299. The last total eclipse over Greek land was on 29 March 2006, over Kastellorizo, and the next will cross from the Ionian to Thessaly on 21 April 2088.

A few of them were written down. A total eclipse in 463 BC is probably the one Pindar wrote his ninth Paean about, for Thebes. In 310 BC, as Agathocles' fleet sailed from Syracuse for Africa, Diodorus says the stars came out by day. Pliny and Tacitus record the eclipse of AD 59, in the reign of Nero. The eclipse of AD 968, whose shadow crossed northern Greece to Constantinople, gave the first clear description of the Sun's corona, by the Byzantine historian Leo the Deacon.

The paths were computed rather than copied. NASA's Five Millennium Canon, by Fred Espenak and Jean Meeus, gives each eclipse as a set of Besselian elements: the position and size of the Moon's shadow as polynomials in time. For a grid of places 2.5 km apart, every 10 seconds, I tested whether each lay inside the umbra with the Sun above the horizon, and drew the path around the ones that did. The centre line is where the shadow's axis met the Earth. As a check, the point of greatest eclipse computed this way lies a median 0.8 km from the canon's own. Delta T, the drift of the Earth's rotation, is the canon's, and it is the main uncertainty for the oldest paths.

The same elements give the share of the Sun covered outside the path, which is what most of Greece actually sees. On 29 March 2006 the Moon hid 84% of the Sun in Athens and 94% in Heraklion. The interactive map works this out in the browser for any of the 176 central eclipses over Greece and its seas, total, annular and hybrid, and can play them through in order or move a single eclipse's shadow across the map.
