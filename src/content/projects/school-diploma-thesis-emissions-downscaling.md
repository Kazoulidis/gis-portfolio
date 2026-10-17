---
title: 'Downscaling Road-Transport Emissions to the Road Network'
summary: 'Diploma thesis, graded 10/10: spatial downscaling of gridded road-transport emission data to individual road segments, using GPS Floating Car Data and Python.'
# Placeholder date: the degree ran Sep 2020 - Jul 2026. Set the real
# submission or defence date.
date: 2026-07-01
category: 'school'
context: 'Diploma thesis · Aristotle University of Thessaloniki · Graded 10/10'
tags: ['Python', 'Floating Car Data', 'Emissions', 'GIS']
# Kept off the site until checked. Replace every "[Add: ...]" note below, add
# `image`/`thumbnail` (a map or figure from the thesis), then set this to false.
# Publishing it also brings the School tab back.
draft: true
---

Emission inventories give road-transport pollution as values per grid cell,
often kilometres across, but street-level air-quality work needs emissions on
the roads themselves. My diploma thesis at the Aristotle University of
Thessaloniki developed a method to **downscale gridded road-transport
emissions to individual road segments**, using **GPS Floating Car Data (FCD)**
(positions recorded by vehicles in traffic) to split each cell's emissions
between its roads. I implemented it in Python, and it was graded **10/10**.

## The question

[Add: one short paragraph on who needs street-level emissions and why gridded
data alone can't answer it. For example: the local air-quality or planning
question that motivated the thesis.]

## Data

| Source | Use |
| --- | --- |
| [Add: the gridded emission inventory, version and resolution] | Emissions to be distributed |
| [Add: the FCD source and period] | Traffic activity per road segment |
| [Add: the road network, e.g. OpenStreetMap] | The segments emissions are assigned to |

## Method

[Add: the steps in three to five plain sentences. How FCD activity was matched
to road segments, how each cell's emissions were apportioned, and how the
result was checked.]

## Result

[Add: what the output showed, with one figure or map and one or two numbers.
For example, the study area, how many segments, and how the result compared
with a reference.]

## Where it went next

The work continued after the degree as **GRAVEL** (Global Road Allocation of
Vehicle Emission to Links). I presented its road-emission estimation
methodology at the **2nd Scientific Conference on Spatial Planning and
Development (ESXSA2026)** in October 2026: downscaling road emissions by road
segment and vehicle category, processing datasets from 120+ countries with an
automated Python workflow.
