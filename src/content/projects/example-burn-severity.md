---
title: 'EXAMPLE — Burn Severity Mapping, Attica'
summary: 'This is a placeholder project showing the layout. Replace the text, the map data and the frontmatter with a real project of yours, then delete this notice.'
date: 2024-09-01
category: 'school'
context: 'Example entry'
tags: ['Sentinel-2', 'Google Earth Engine', 'Python', 'QGIS']
# Two toggleable layers, so this example also shows the legend. For a single
# layer with no legend, use `map: '/data/one-file.geojson'` instead.
layers:
  - name: 'Burn severity'
    src: '/data/EXAMPLE-burn-severity.geojson'
    color: '#a8452f'
  - name: 'Field validation'
    src: '/data/EXAMPLE-burn-severity-points.geojson'
    color: '#1c5d5d'
    visible: false
mapCaption: 'Placeholder geometry — replace with your own GeoJSON exports. Toggle the field validation layer with the legend, and click a feature for its attributes.'
links:
  - label: 'Example link (StoryMap, repo, or PDF)'
    href: 'https://example.com'
draft: false
---

> **This is example content.** It exists so you can see the page working before
> you have real material in it. Nothing below describes real work. Delete this
> file once you've written your first project.

## What the question was

Open with the problem, not the method. One short paragraph: who needed to know
what, and why the answer wasn't already available. A recruiter skimming should
be able to stop reading here and still know what the project was.

## Data

State your sources plainly and give the resolution or date range — a GIS reader
judges the work partly on whether you knew which data to reach for.

| Source | Use |
| --- | --- |
| Sentinel-2 L2A | Pre- and post-event imagery |
| Copernicus DEM | Slope and aspect derivation |
| Field survey points | Validation |

## Method

Two or three sentences, or a short list. Name the technique, not every click.
If there's a repo or notebook, link it in the `links` frontmatter rather than
pasting code here.

- Computed a normalised burn ratio from pre- and post-event scenes.
- Classified the difference into severity bands.
- Validated against field points and reported agreement.

## What came out

The part people skip to. Give a number if you have one. Say what the map was
actually used for, and — if it's honest — say what you'd do differently.
