---
title: 'Day 29 - Raster: What Burns'
summary: 'Twenty-five fire seasons of MODIS burned area over Greece, laid on land cover, terrain and buildings. 38% of what the satellite marks as burned turns out to be farm burning; of the wildfire, shrubland burns most and broad-leaved forest least, and in Attica 27% of the land has burned since 2001. Pick a land cover or a slope and see where it burned.'
date: 2026-11-29
created: 2026-11-22
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 29'
tags: ['ArcGIS Pro', 'Python', 'Leaflet', 'Wildfire', 'Remote sensing']
image: '/images/30dmc-2026-day-29-wide.webp'
imageFull: '/images/30dmc-2026-day-29-full.webp'
imageAlt: 'Printed A4 sheet titled What Burns: Greece in grey relief with land burned by wildfire in 2001-2025 in pale to deep orange, farm burning in khaki on the plains of Thessaly and Thrace, and the 2026 wildfires hatched purple; notes name Evros 2023, North Evia 2021, the Peloponnese fires of 2007 and Rhodes 2023; a close-up of Attica shows burns reaching the edge of Athens, and a column charts the burned area of every year; the side panel holds a legend, a bar chart of how often each land cover burns against its share, a rose and bars for slope direction and steepness, and a chart of the burned area by month'
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
mapCaption: 'Pick a land cover, a slope direction or a slope band: the land it covers is tinted blue and the wildfire on it shows in orange, the rest in grey. Click anywhere for its cover, slope and fire record.'
draft: true
---

**Prompt:** Raster.

Every Greek summer burns, and since November 2000 a NASA satellite product,
MODIS MCD64A1, has mapped where: 17,972 burn patches over Greece, each the land
that burned on one day, at 500 m. This sheet lays twenty-five complete fire
seasons, 2001 to 2025, on a 100 m grid of the land and asks what burns: which
land cover, which slopes, and how close to people.

## Not every burn is a wildfire

The first result was wrong. Counted as they come, the burns made non-irrigated
arable land burn 2.6 times its share of the land and rice fields 5.6 times,
while forest burned less than half its share. MODIS sees every fire, including
the stubble farmers burn off after the harvest, and some fields on the plains
of Thessaly and Thrace burned in 12 of the 25 seasons.

So every patch is sorted first. A patch at least half on arable land (CORINE
classes 211 to 213) counts as farm burning, the rest as wildfire. By that rule
11,183 of the 17,916 patches, and **38% of the burned area, are farm burning**.
The share moves little with the threshold: 36% at a third, 40% at seven
tenths.

The split is made from land cover alone, so the fires' own heat can test it.
The active-fire detections of MODIS and VIIRS measure each fire pixel's
radiative power:

| Sensor | Farm burning, median | Wildfire, median | Farm burning, top 10% from | Wildfire, top 10% from |
| --- | ---: | ---: | ---: | ---: |
| MODIS (Terra, Aqua) | 13 MW | 56 MW | 46 MW | 409 MW |
| VIIRS (Suomi NPP) | 4 MW | 10 MW | 13 MW | 70 MW |
| VIIRS (NOAA-20) | 4 MW | 10 MW | 11 MW | 84 MW |

Farm burns are weaker by four times at the median on MODIS and by five to
nine times at the top. The seasons part too: farm burning peaks in October,
after the autumn harvests, wildfire in August. And farm burning all
but stopped after 2020, from about 300 km² a year to under 50.

## What burns

Of the wildfire, **9,052 km² of land burned at least once** in 2001-2025, 7%
of Greece; 1,062 km² burned twice and 74 km² three times or more, up to seven.
Panel A sets each land cover's share of the burned land against its share of
all land:

| Land cover | Share of the land | Share of the wildfire | Burns |
| --- | ---: | ---: | ---: |
| Transitional woodland-shrub | 8.3% | 18.4% | 2.2× its share |
| Sparse vegetation | 2.1% | 3.9% | 1.8× |
| Sclerophyllous scrub (maquis) | 17.9% | 22.4% | 1.3× |
| Olive groves | 6.3% | 6.9% | 1.1× |
| Coniferous forest | 5.9% | 4.8% | 0.8× |
| Broad-leaved forest | 9.8% | 3.0% | 0.3× |
| Arable land, not irrigated | 9.0% | 2.8% | 0.3× |

Shrub burns most. It is dry, fine and continuous fuel, and much of it is land
that burned before and grew back as shrub. Broad-leaved forest, mostly oak and
beech high in the north, burns least.

## Terrain

On natural land, slopes facing south and south-west burn 1.14 and 1.12 times
the average, those facing north 0.91 times: they dry out more. Steepness goes
the other way from what fire physics alone would suggest. Fire runs faster
uphill, yet slopes under 5 degrees burn 1.4 times the average and slopes over
35 degrees only 0.4 times. The steep land is mostly high, cooler and wetter
mountain, far from where fires start; the low hills are drier and next to
people. The map does not claim that steepness protects.

## Where it meets buildings

GHSL's built-up surface for 2020 puts **76 km² of buildings within 500 m of
land that burned** since 2001, 6.5% of all the built-up area in Greece; 11 km²
stand within 500 m of land that burned twice or more. Attica stands out: 27%
of its land has burned since 2001, a rate 4.3 times the country's, and 24 km²
of its buildings, 11%, are within 500 m of a burn. The close-up shows the
burns of Parnitha in 2007, Varnavas in 2009 and again in 2024, and Mati in
2018, all at the edge of the city.

The largest single fires in the record are Evros in August 2023, 883 km², reported
as the largest wildfire on record in the European Union, and North Evia in August 2021,
520 km². In August 2007 five fires in the Peloponnese burned 1,696 km²
together. 2026 to September added 314 km² of wildfire, an ordinary year
against the 410 km² average.

## Method

Everything runs as a Python pipeline (GeoPandas, rasterio, NumPy, SciPy) on the
100 m grid of the Copernicus GLO-90 elevation model in the Greek Grid
(EPSG:2100):

1. **Burns:** each season's patches are rasterized, a cell counting once per
   season if its centre lies in a patch. Each patch's arable share decides
   farm burning or wildfire. The 2026 months come from the same product's
   monthly files.
2. **Land cover:** CORINE 2018, rasterized on the same grid. A cover's rate is
   its burned hectare-seasons over its area and twenty-five seasons; "times its
   share" divides that by the rate of all land.
3. **Terrain:** slope and aspect from the elevation model, measured on natural
   land only (CORINE 311 to 333), so the result is not just the fuel map again.
4. **Buildings:** GHSL's built-up square metres per hectare, summed within 100
   m and 500 m of burned cells (a Euclidean distance transform).
5. **Checks:** the yearly wildfire totals follow the known years (2007, 2021,
   2023 the largest); MODIS's total for 2023, 1,717 km², compares with
   about 1,750 km² reported nationally; the heat test above.

The sheet was made in ArcGIS Pro with arcpy, and the page's map is the same
grid at 300 m, coloured in the browser.

## Limits

- MODIS sees at 500 m: it misses most fires under 100 ha and blurs the edges of
  large ones. The totals are the satellite's, not the Fire Service's.
- CORINE 2018 shows the land after many of these fires. Forest that burned in
  2007 may be shrub by 2018, which makes shrub look more flammable and forest
  less than the cover before the fire would.
- The farm rule is simple. Wildfires that run through farmland count as farm
  burning when the farmland is most of the patch, and stubble fires that spread
  into scrub count as wildfire.
- The building figure is exposure, not damage: it counts what stands near land
  that burned, not what burned.
