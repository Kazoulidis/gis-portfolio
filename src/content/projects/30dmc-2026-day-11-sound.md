---
title: 'Day 11 - Sound: The FM Dial'
summary: "Greece's broadcasting regulator lists 825 radio stations on air. Bigger places have more of them, but far from in proportion: Attica and Heraklion have 45 each, though Attica has over 12 times the residents. Click a prefecture and turn the dial to hear its stations, live."
date: 2026-11-11
created: 2026-11-05
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 11'
tags: ['ArcGIS Pro', 'Python', 'Web Audio', 'Choropleth', 'Cartography']
image: '/images/30dmc-2026-day-11-wide.webp'
imageFull: '/images/30dmc-2026-day-11-full.webp'
imageAlt: 'Printed A4 map of Greece with its 51 prefectures coloured by radio stations on air per 100,000 residents, palest in Attica and Thessaloniki and darkest on Samos, Chios and in Rethymno. Dark tuner dials show a tick for each station in the fullest and emptiest prefectures, from 48 in Thessaloniki to 2 in Evrytania.'
thumbnail: '/images/30dmc-2026-day-11-square.webp'
thumbnailAlt: 'Greece by prefecture, coloured by radio stations per resident, titled The FM Dial'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-11-map.jpg'
    note: 'JPEG · 7016 × 4961 · 4.9 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-11-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 3.5 MB'
map: '/data/30dmc-2026-day-11-dial.json'
mapComponent: 'fm-dial'
mapCaption: 'Click a prefecture, then turn the knob. Between stations you hear static. On a bright tick you hear that station live, from its own public stream, for up to 15 seconds a visit. What plays is whatever is on air, and it is not chosen by me. Check your volume first.'
dataSource:
  - label: 'National Council for Radio and Television (ESR) - operating radio stations by prefecture, retrieved 5 November 2026'
    href: 'https://www.esr.gr/%cf%81%ce%b1%ce%b4%ce%b9%cf%8c%cf%86%cf%89%ce%bd%ce%bf/'
  - label: 'Radio Browser - a community directory of station streams, matched to the list above and tested on 5 November 2026'
    href: 'https://www.radio-browser.info/'
  - label: 'Hellenic Statistical Authority (ELSTAT) - 2021 census, residents by settlement'
    href: 'https://www.statistics.gr/en/2021-census-pop-hous'
  - label: 'Hellenic Statistical Authority (ELSTAT) - regional units and national boundary'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://doi.org/10.12770/cf51df64-56f9-4a99-b1aa-36b8d7b743a1'
  - label: 'Copernicus DEM GLO-90 - elevation (© DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018, provided under COPERNICUS by the European Union and ESA)'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'Eurostat GISCO - NUTS, for the neighbouring countries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
draft: true
---

**Prompt:** Senses: Sound.

Every radio dial is a small map of a place. It runs from 87.5 to 108 MHz, and what
you find along it depends on where you are. Greece's regulator, ESR, publishes a
list of operating stations for each prefecture, with their frequencies and
transmitter sites, so those dials can be drawn for the whole country.

## What the dials show

| Prefecture | Stations on air | Residents, 2021 | Per 100,000 |
|---|---:|---:|---:|
| Samos | 10 | 42,846 | 23.3 |
| Rethymno | 19 | 84,828 | 22.4 |
| Heraklion | 45 | 304,998 | 14.8 |
| Thessaloniki | 48 | 1,092,898 | 4.4 |
| Attica | 45 | 3,814,031 | 1.2 |
| All of Greece | 825 | 10,480,526 | 7.9 |

Bigger places do have more stations: across the 51 prefectures, the two rankings
agree closely. But the numbers are far from proportional. Attica and Heraklion
have the same 45 stations, and Attica has over 12 times the residents. Per person,
the dial is fullest on islands and in small prefectures. It is emptiest in the two
big metropolitan areas and in Pella and Kilkis. Evrytania has the emptiest dial of
all, with 2 stations.

## How the list was read

- **On air.** ESR lists 1,032 stations and marks 825 as operating. The other 207
  are left out, apart from the note in panel B.
- **Frequencies.** Each entry gives a frequency and a site. On 28 of the stations
  on air, an EETT decision has since moved the station, so I used the frequency
  it moved to.
- **Prefectures.** ESR uses the older prefectures, so I merged ELSTAT's regional
  units back into them. Thasos joins Kavala, the Sporades join Magnesia, and Ikaria
  joins Samos. Mount Athos has no prefecture on the list and stays blank.

## What this cannot show

- **It is what is licensed, not what you receive.** A station counts where it is
  listed. A mountain transmitter carries far past a prefecture's border, so the real
  dial in any one place can be fuller or emptier than this one.
- **Not every station can be heard.** ESR's list holds no audio, so I matched its
  stations to a community directory of streams by name and frequency, and tested
  that each one answered. 255 of the 824 stations with a frequency passed. Others may
  have streams I could not match, and a match can still be wrong. A dim tick means
  no stream was found, and streams can stop working at any time.
- **The list is not perfect.** One station on air in Attica, ΣΤΥΛ FM, has no
  frequency, so Attica shows 44 ticks for 45 stations. Three stations mention a move
  without saying where to, and stay at their listed frequency. About 20 station
  names include a different frequency from the one listed, and I followed the list.
- **Public radio seems to be missing.** I found no ERT stations among those on air,
  so this appears to cover private stations only.

## Building it

The list is read in Python, and the sheet is built in ArcGIS Pro on my house layout,
with the sea, land and hillshades of Days 4 and 5. Each station plays from its own
public stream in your browser, for 15 seconds at most on each visit, with its name
and a link to its site where one is known. Nothing is recorded or passes through this
site, and only the static is generated. If you run one of these stations and would
like it taken off the dial, please get in touch and I will remove it. I used only each station's name, prefecture, frequency and status, and
none of the owner details in ESR's file.
