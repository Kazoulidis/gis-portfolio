---
title: 'Day 23 - Senses: Taste: Where Greece''s Wines Come From'
summary: 'Greece protects 33 wines by place of origin, each tied to its own area and grapes. Xinomavro holds the north, Assyrtiko and Muscat the islands, and more than a third of the PDOs are for sweet wine alone, nearly all of them by the sea. Pick a grape and see where it is allowed.'
date: 2026-11-23
created: 2026-11-18
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 23'
tags: ['ArcGIS Pro', 'Python', 'Leaflet', 'Wine', 'EU geographical indications']
image: '/images/30dmc-2026-day-23-wide.webp'
imageFull: '/images/30dmc-2026-day-23-full.webp'
imageAlt: 'Printed A4 sheet titled Where Greece''s Wines Come From: Greece pale under a hillshade with blue seas, the 33 wine PDO areas filled dark red, gold or brown by style and the sweet-only ones hatched purple, each labeled with its name and grape, from Naoussa and Amyntaio in the north to Santorini, Rhodes and Crete; the side panel holds a legend, a list of grapes and their places, close-ups of the Patras and Heraklion areas, and a dot chart of the maximum yields'
thumbnail: '/images/30dmc-2026-day-23-square.webp'
thumbnailAlt: 'Map of Greece with its wine PDO areas in red, gold and brown, and the sweet-wine areas hatched purple'
dataSource:
  - label: 'Candiago et al. 2022 - A geospatial inventory of regulatory information for wine protected designations of origin in Europe, Scientific Data 9, 394 (dataset on Figshare, CC0, register as of 4 November 2021)'
    href: 'https://doi.org/10.1038/s41597-022-01513-0'
  - label: 'European Commission - eAmbrosia, the EU geographical indications register'
    href: 'https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/'
  - label: 'Copernicus DEM GLO-90 - the hillshade'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://emodnet.ec.europa.eu/en/bathymetry'
  - label: 'Hellenic Statistical Authority (ELSTAT) - coast and regions'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: '© EuroGeographics, via Eurostat GISCO - NUTS boundaries of the neighboring countries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-23-map.jpg'
    note: 'JPEG · 7016 × 4961 · 5.0 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-23-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 3.3 MB'
map: '/data/30dmc-2026-day-23-wines.json'
mapComponent: 'wine-pdos'
mapCaption: 'Pick a grape to see the PDOs that allow it. Click anywhere on an area for every PDO there, with its grapes, wine types and maximum yield.'
draft: true
---

**Prompt:** Senses: Taste.

A taste can have an address. In the European Union a wine with a protected
designation of origin (PDO) may carry its name only if it comes from its own
area, from the grapes its rules allow and within a set yield. Greece has 33 of
them, and together they make a map of what the country tastes like.

## A grape for each place

Most PDOs lean on one or two grapes of their own, and the grapes keep to their
regions. Xinomavro, a sharp, long-lived red, is the grape of the north: it is
the only grape of Naoussa and Amyntaio, and the main one of Goumenissa and
Rapsani. The Peloponnese has Agiorgitiko in Nemea and the pink-skinned
Moschofilero in Mantinia; Santorini has Assyrtiko, grown in the volcanic ash;
Kefalonia has Robola; Crete has Kotsifali, Mandilaria, Liatiko and Vilana.

Counting every grape the rules name, Assyrtiko and Muscat Blanc are the most
widely allowed, in 8 PDOs each, followed by Mandilaria in 7.

| Style | PDOs | Examples |
| --- | ---: | --- |
| Red | 8 | Naoussa, Nemea, Rapsani, Archanes |
| White | 6 | Santorini, Mantinia, Zitsa, Robola of Kefalonia |
| Red and white | 7 | Paros, Rhodes, Candia, Limnos |
| Sweet only | 12 | Samos, Mavrodaphne of Patras, Muscat of Rhodes |

## Sweet by the sea

Twelve PDOs, more than a third, are for sweet wine alone: liqueur wines and
wines from sun-dried grapes. All of them but Monemvasia lie on an island or
in the northwest Peloponnese around Patras. They come from three old families: Muscat (Samos,
Patras, Rio Patras, Kefalonia, Rhodes and Limnos), Mavrodaphne (Patras and
Kefalonia), and Malvasia, the sweet wine that Venetian ships carried from
Monemvasia and Crete across medieval Europe. The Malvasia names came back as
PDOs only in 2011, for Monemvasia, Paros, Sitia and Candia. Five more PDOs
for still wine also allow a sweet one, among them Santorini, for its Vinsanto.

## How much a vine may give

Each PDO caps how much wine a hectare may make. The strictest is Robola of
Kefalonia, at 56 hectoliters per hectare, followed by Santorini and Malvasia of
Sitia at 60; the most generous are Nemea and the Muscats of Limnos, Kefalonia
and Rhodes, at 114.4.

## How it was made

The areas and their rules come from a dataset by Candiago and colleagues
(2022), who read the product specification of every wine PDO in the EU register
(eAmbrosia) and mapped each one to the municipalities it names. The Greek part
has 33 PDOs, as the register stood on 4 November 2021. In Python I matched each PDO to
an English name, a style from its wine types and its signature grapes from the
varieties listed; the printed map was made in ArcGIS Pro, and the web map draws
the areas with Leaflet.

- **The style** comes from the wine types: a PDO that names only liqueur wine
  or wine from sun-dried grapes counts as sweet only; the others are red, white
  or both by their grapes.
- **The areas overlap.** Candia and Malvasia of Candia share one area, as do
  Limnos and Muscat of Limnos, Paros and Malvasia of Paros, and Sitia and
  Malvasia of Sitia. Around Patras, Muscat of Patras lies almost wholly inside
  Mavrodaphne of Patras, and the three sweet PDOs overlap the white Patras by a
  third to a half. Archanes and Peza lie inside Candia, and most of Dafnes.
- **The areas are coarse.** They follow whole municipal units, as the rules
  name them, so they include towns, forests and mountains as well as the
  vineyards. Together they cover 8,810 km², far more than is planted.
