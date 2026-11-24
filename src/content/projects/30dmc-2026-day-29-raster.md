---
title: 'Day 29 - Raster: What Burns'
summary: 'Twenty-five fire seasons of MODIS burned area over Greece, laid on land cover, terrain and buildings. 38% of the burned area is in patches mostly on arable land, likely farm burning; of the wildfire since the 2018 land cover map, woodland-shrub burned twice its share, and in Attica 27% of the land has burned since 2001. Pick a land cover or a slope and see where it burned.'
date: 2026-11-29
created: 2026-11-22
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 29'
tags: ['ArcGIS Pro', 'Python', 'Leaflet', 'Wildfire', 'Remote sensing']
image: '/images/30dmc-2026-day-29-wide.webp'
imageFull: '/images/30dmc-2026-day-29-full.webp'
imageAlt: 'Printed A4 sheet titled What Burns: Greece in gray relief with land burned by wildfire in 2001-2025 in pale to deep orange, likely farm burning in khaki, most of it on the plains of Thessaly and Thrace, and the 2026 wildfires hatched purple; notes name Evros 2023, North Evia 2021, the Peloponnese fires of 2007 and Rhodes 2023; a close-up of Attica shows burns reaching the edge of Athens, and a column charts the burned area of every year; the side panel holds a legend, a bar chart of how much of each 2018 land cover burned in 2019-2025 against its share, a rose and bars for slope direction and steepness, and a chart of the burned area by month'
thumbnail: '/images/30dmc-2026-day-29-square.webp'
thumbnailAlt: 'Map of Greece with wildfire burns in shades of orange, farm burning in khaki and the 2026 wildfires hatched purple'
dataSource:
  - label: 'NASA / University of Maryland - MODIS Collection 6.1 burned area (MCD64A1), monthly shapefiles for window 8, November 2000 to September 2026'
    href: 'https://modis-fire.umd.edu/ba.html'
  - label: 'NASA FIRMS - MODIS and VIIRS active fire archive, for the fires'' radiative power'
    href: 'https://firms.modaps.eosdis.nasa.gov/download/'
  - label: 'Copernicus Land Monitoring Service - CORINE Land Cover 2018'
    href: 'https://land.copernicus.eu/en/products/corine-land-cover/clc2018'
  - label: 'European Commission JRC - GHSL built-up surface, GHS-BUILT-S R2023A, epoch 2020, 100 m'
    href: 'https://human-settlement.emergency.copernicus.eu/download.php?ds=builtS'
  - label: 'Copernicus DEM GLO-90 - slope, aspect and hillshade'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'EMODnet Bathymetry - digital terrain model (2024)'
    href: 'https://emodnet.ec.europa.eu/en/bathymetry'
  - label: 'Hellenic Statistical Authority (ELSTAT) - coast and regions'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: '© EuroGeographics, via Eurostat GISCO - NUTS boundaries of the neighboring countries'
    href: 'https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-29-map.jpg'
    note: 'JPEG · 7016 × 4961 · 5.0 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-29-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 3.4 MB'
map: '/data/30dmc-2026-day-29-burns.json'
mapComponent: 'what-burns'
mapCaption: 'Pick a land cover, a slope direction or a slope band: the land it covers is tinted blue and the wildfire on it shows in orange, the rest in gray. Click anywhere for its cover, slope and fire record.'
draft: true
---

**Prompt:** Raster.

Since November 2000 a NASA satellite product, MODIS MCD64A1, has mapped burned
land over Greece: 17,972 patches to May 2026, each the land that burned on one
day, at 500 m. This sheet lays twenty-five complete fire seasons, 2001 to 2025,
on a 100 m grid and asks what burns: which land cover, which slopes, and how
close to buildings.

## Not every burn is a wildfire

Counted as they come, the burns made non-irrigated arable land burn 2.6 times
its share of the land and rice fields 5.6 times. MODIS also sees fields being
burned, and some on the plain of Thessaly burned in 12 of the 25 seasons.

So every patch is sorted first. A patch at least half on arable land (CORINE
classes 211 to 213) counts as likely farm burning, the rest as wildfire. By that
rule 11,183 of the 17,916 patches, and **38% of the burned area**, are set
apart. The share moves little with the threshold: 40% if three tenths of a patch
must be arable, 36% if seven tenths.

The rule infers farm burning from land cover; nothing on the ground confirms it.
The heat of the fires is a partial check. Each active fire was matched to the
patch it lies in, within eight days of the patch's date:

| Sensor | Likely farm burning, median | Wildfire, median | Farm, top 10% from | Wildfire, top 10% from |
| --- | ---: | ---: | ---: | ---: |
| MODIS (Terra, Aqua) | 20 MW | 67 MW | 72 MW | 476 MW |
| VIIRS (Suomi NPP) | 6 MW | 11 MW | 25 MW | 75 MW |
| VIIRS (NOAA-20) | 6 MW | 11 MW | 50 MW | 89 MW |

The fires on the arable patches are weaker, by 3.3 times at the median on MODIS
and 1.7 to 1.8 times on VIIRS. That fits the split without proving it. MODIS
is not a separate witness either, as the burned-area product itself uses MODIS
active fires; VIIRS is. The seasons differ too: the arable patches peak in
October, wildfire in August. The arable patches shrank from about 300 km² a
year in 2001-2020 to 46 in 2021-2025, a fall already under way by 2019. The
data do not say why.

## What burns

Of the wildfire, **9,052 km² of land burned at least once** in 2001-2025, 7% of
Greece: 1,062 km² at least twice, and 74 km² three times or more, up to seven.

Land cover needs care. CORINE 2018 shows the land after most of these fires,
and forest that burned in 2007 may be shrub by 2018. Measured over all 25
seasons, conifers seemed to burn 0.8 times their share and mixed forest 1.2
times. Panel A therefore uses only the fires after the map, 2019 to 2025:

| Land cover | Share of the land | Share of the wildfire, 2019-2025 | Burned, 2019-2025 | Without 2021 and 2023 |
| --- | ---: | ---: | ---: | ---: |
| Mixed forest | 4.6% | 11.4% | 2.5× its share | 0.6× |
| Transitional woodland-shrub | 8.3% | 16.3% | 2.0× | 2.1× |
| Coniferous forest | 5.9% | 8.7% | 1.5× | 0.9× |
| Sclerophyllous scrub (maquis) | 17.9% | 21.2% | 1.2× | 1.2× |
| Olive groves | 6.3% | 5.5% | 0.9× | 1.3× |
| Natural grassland | 7.5% | 5.4% | 0.7× | 1.3× |
| Broad-leaved forest | 9.8% | 5.6% | 0.6× | 0.2× |

Seven seasons are few, and two of them, 2021 (North Evia) and 2023 (Evros), hold
71% of the burned area. The last column leaves them out. Woodland-shrub burned
about twice its share either way and broad-leaved forest stayed low; mixed
forest and conifers depend on those two seasons, so their figures are not a
general rate.

## Terrain

On natural land, slopes facing south and south-west burn 1.14 and 1.12 times the
average, those facing north 0.91 times. Slopes under 5 degrees burn 1.4 times
the average and slopes over 35 degrees 0.4 times, although fire runs faster
uphill. Height explains part of it: land below 500 m burns 1.5 to 1.7 times the
average, land above 800 m about a third of it or less. Below 500 m alone, the
steepest slopes still burn less (0.45 times), for reasons not tested here. The
map does not claim that steepness protects.

## Where it meets buildings

GHSL's built-up surface for 2020 puts **76 km² of buildings within 500 m of land
that burned** since 2001, 6.5% of the built-up area in Greece; 11 km² stand
within 500 m of land that burned twice or more. Attica stands out: 27% of its
land has burned since 2001, a rate 4.3 times the country's, and 24 km² of its
buildings, 11%, are within 500 m of a burn. The close-up shows the burns of
Parnitha in 2007, Varnavas in 2009 and again in 2024, and Mati in 2018.

The largest fires in this record are Evros in August 2023, 883 km², and North
Evia in August 2021, 520 km². In August 2007 five fires of more than 100 km²
each burned 1,696 km² of the Peloponnese. A fire here is a season's wildfire
patches that touch, merged. 2026 to September added 314 km² of wildfire: below
the 2001-2025 mean of 410 km², which 2007, 2021 and 2023 pull up, and above the
median of 189.

## Method

Everything runs as a Python pipeline (GeoPandas, rasterio, NumPy, SciPy) on the
100 m grid of the Copernicus GLO-90 elevation model in the Greek Grid
(EPSG:2100):

1. **Burns:** each season's patches are rasterized, a cell counting once per
   season if its center lies in a patch. Each patch's arable share decides
   likely farm burning or wildfire. June to September 2026 come from the same
   product's monthly files.
2. **Land cover:** CORINE 2018, rasterized on the same grid. "Times its share"
   is a cover's share of the wildfire of 2019-2025 over its share of the land.
3. **Terrain:** slope and aspect from the elevation model, measured on natural
   land only (CORINE 311 to 333), over all 25 seasons. The fires of 2019-2025
   alone give the same pattern.
4. **Buildings:** GHSL's built-up square meters per hectare, summed within 500 m
   of burned cells (a Euclidean distance transform).
5. **Checks:** MODIS's total for 2023, 1,717 km² with the arable patches,
   compares with about 1,750 km² reported nationally
   ([2025, Day 15](/projects/30dmc-2025-day-15-fire)).

The sheet was made in ArcGIS Pro with arcpy, and the page's map is the same grid
at 300 m, colored in the browser.

## Limits

- MODIS sees at 500 m. It misses more than half of the fires between 10 and 100
  hectares and blurs the edges of large ones; the 100 m grid adds no detail. The
  totals are the satellite's, not the Fire Service's.
- The farm rule is simple. Wildfires that run mostly through arable land count
  as farm burning, and field fires that spread into scrub count as wildfire.
- The building figure is exposure, not damage: it counts what stands near land
  that burned, not what burned.
