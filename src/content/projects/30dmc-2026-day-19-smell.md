---
title: 'Day 19 - Senses: Smell: Something in the Air'
summary: 'Why Thessaloniki''s seafront smells in summer: the bay at the closed end of the Thermaikos Gulf is 43 times greener than the open gulf, and on summer afternoons the wind blows off it onto the city. Step through ten summers, the months and every clear day of 2026.'
date: 2026-11-19
created: 2026-11-13
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 19'
tags: ['ArcGIS Pro', 'Python', 'Leaflet', 'Remote Sensing', 'Copernicus Marine']
image: '/images/30dmc-2026-day-19-wide.webp'
imageFull: '/images/30dmc-2026-day-19-full.webp'
imageAlt: 'Printed A4 sheet titled Something in the Air: the inner Thermaikos Gulf coloured by summer chlorophyll, deep blue in the open gulf to green and brown in the Bay of Thessaloniki and along the river deltas, with the Thessaloniki seafront in red, thin curved lines of the afternoon sea breeze sweeping onto it, and the Sindos and Aineia treatment plants with their outfalls; the side panel holds a legend, a bar chart of the onshore wind by hour, a bar chart of the seafront chlorophyll by month and one of every clear day of 2026, with the June bloom marked'
thumbnail: '/images/30dmc-2026-day-19-square.webp'
thumbnailAlt: 'The inner Thermaikos Gulf coloured by summer chlorophyll, green and brown off Thessaloniki and blue in the open gulf'
dataSource:
  - label: 'Copernicus Marine (CNR) - Mediterranean ocean colour, Sentinel-3 OLCI chlorophyll-a, 300 m, daily, 2016-2026'
    href: 'https://data.marine.copernicus.eu/product/OCEANCOLOUR_MED_BGC_L3_MY_009_143/description'
  - label: 'Copernicus Marine (KNMI) - global hourly winds from scatterometer and model, 2016-2026'
    href: 'https://doi.org/10.48670/moi-00185'
  - label: 'European Environment Agency - urban waste water treatment plants and discharge points (UWWTD, Greece''s 2024 report)'
    href: 'https://water.discomap.eea.europa.eu/arcgis/rest/services/WISE_UWWTD'
  - label: 'Copernicus Land Monitoring Service, EU-Hydro (EEA) - rivers and coastal waters'
    href: 'https://doi.org/10.2909/393359a7-7ebd-4a52-80ac-1a18d5f3db9c'
  - label: 'Hellenic Statistical Authority (ELSTAT) - coast'
    href: 'https://www.statistics.gr/en/digital-cartographical-data'
  - label: 'Copernicus DEM GLO-30 - elevation and hillshade'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-19-map.jpg'
    note: 'JPEG · 7016 × 4961 · 2.6 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-19-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 1.3 MB'
map: '/data/30dmc-2026-day-19-smell.json'
mapComponent: 'smell-map'
mapCaption: 'Choose ten summers, a month, or a single day of 2026; on a day, the arrow shows that afternoon''s wind over the bay. Click the sea for the chlorophyll at a spot. Chlorophyll is measured from space and shows algae, not smell.'
draft: true
---

**Prompt:** Senses: Smell.

On some summer days Thessaloniki's seafront smells of rotten eggs. In June 2026 it did again: the water off the promenade turned brown, from the Concert Hall to the White Tower, and the smell came with it. The cause is algae. When too many of them grow, the ones that die sink and rot, and in warm, shallow water with little oxygen they rot without it and give off hydrogen sulfide and other gases, which the nose picks up at tiny amounts.

The map shows why it happens here. Thessaloniki sits at the closed end of the Thermaikos Gulf, a shallow bay that the open sea flushes slowly. The Axios, the Loudias, the Aliakmonas and the Gallikos bring the nitrogen and phosphorus of the plain of Central Macedonia into it, and the city's waste water, treated at the Sindos plant, a load equal to that of 924,000 people, is piped into the middle of the bay. Algae feed on all of it. In summer the bay off the city is 43 times greener than the open gulf: a median of 3.2 mg/m³ of chlorophyll-a against 0.07.

The wind does the rest. On summer afternoons the sea breeze sets in from the south: between 13:00 and 19:00 the wind over the bay blows from the south-east, south or south-west 72% of the time, straight off the water onto the seafront, against 13% at night. From 16:00 to 21:00, when the promenade fills up, it does so about three hours in four.

The day-by-day map catches the June episode. On 9 June 2026, the day after the brown water made the news, the water within 1.5 km of the seafront had a median of 7.3 mg/m³ of chlorophyll, the highest of any clear day that June, under an afternoon wind from the south-south-west.

The chlorophyll comes from the Sentinel-3 satellites, in the Copernicus Marine Service's Mediterranean ocean-colour product: 300 m cells, every day without cloud from April 2016 to November 2026. It measures the green pigment of algae, not smell, and near the river mouths the mud the rivers carry can make the water read greener than it is. The satellite drops cells right next to the shore, so a band of up to about 1 km there is filled from the nearest readings; cloudy days still have gaps. The summer is June to September, and the figures are medians of every day seen. The winds are Copernicus Marine's hourly winds, from satellites and a weather model, over the bay off the seafront. The treatment plants and their outfalls are the European Environment Agency's, from Greece's 2024 report under the Urban Waste Water Directive.
