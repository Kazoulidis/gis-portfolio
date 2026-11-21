---
title: 'Day 25 - Is This a Map?: A Map You Can Hear'
summary: 'A 1904 piece for flute and piano with a map of Greece hidden in its first minute. The shaded relief of the land and the seabed was turned into sound, too high and too quiet to notice, so the music sounds as it always did. Press play and the page listens and draws what it hears: Greece appears, west to east.'
date: 2026-11-25
created: 2026-11-21
category: '30-day-map-challenge'
context: '#30DayMapChallenge 2026 · Day 25'
tags: ['ArcGIS Pro', 'Python', 'Signal processing', 'Audio', 'Copernicus', 'EMODnet']
image: '/images/30dmc-2026-day-25-wide.webp'
imageFull: '/images/30dmc-2026-day-25-full.webp'
imageAlt: 'Printed A4 sheet titled A Map You Can Hear: a spectrogram in purple, orange and pale yellow, in which a shaded map of Greece with its islands, its seabed and the faint coasts of its neighbors stands out among short bright dashes of flute and piano notes, with a grid in Greek Grid meters, a scale bar, and seconds and kilohertz along the edges; the side panel holds how to read it, the grey image that was hidden, the opening bars of the score and the sound wave of the whole piece'
thumbnail: '/images/30dmc-2026-day-25-square.webp'
thumbnailAlt: 'A spectrogram in which a map of Greece glows orange among the dashes of musical notes'
dataSource:
  - label: 'George Enescu, Cantabile et Presto (1904), performed by Alexander Murray (flute) and Martha Goldstein (piano), Al Goldstein Archive, via IMSLP - EFF Open Audio License; this version is shared under the same license'
    href: 'https://imslp.org/wiki/Cantabile_et_presto_(Enescu,_George)'
  - label: 'George Enescu, Cantabile et Presto, first edition (Paris: Enoch & Cie, 1904), via IMSLP - public domain'
    href: 'https://imslp.org/wiki/Cantabile_et_presto_(Enescu,_George)'
  - label: 'Copernicus DEM GLO-90 - the land'
    href: 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM'
  - label: 'EMODnet Bathymetry DTM 2024 - the seabed'
    href: 'https://emodnet.ec.europa.eu/en/bathymetry'
downloads:
  - label: 'Full-resolution map'
    href: '/downloads/30dmc-2026-day-25-map.jpg'
    note: 'JPEG · 7016 × 4961 · 8.6 MB'
  - label: 'Square map'
    href: '/downloads/30dmc-2026-day-25-map-square.jpg'
    note: 'JPEG · 4724 × 4724 · 7.1 MB'
  - label: 'The recording with the hidden map'
    href: '/downloads/30dmc-2026-day-25-recording.flac'
    note: 'FLAC · 5:42 · 14.8 MB · open it in any spectrogram viewer'
map: '/data/30dmc-2026-day-25-spectro.json'
mapComponent: 'hidden-map-player'
mapCaption: 'The spectrogram is drawn by your browser as it plays the recording: it splits the sound into pitches about sixty times a second and paints how loud each one is. Nothing is drawn in advance unless you ask for it.'
draft: true
---

**Prompt:** Is this a map?

It is a recording of *Cantabile et Presto*, a short piece George Enescu wrote
in 1904 for flute and piano. It sounds like one, too. But in its first minute,
in pitches too high and too quiet to notice, it carries a shaded map of Greece:
the mountains, the islands, the seabed and, very faintly, the coasts of the
countries around it.

I chose the piece after hearing it live, played by Fani Valtadorou (flute)
and Nikolay Marinov (piano). The recording here is a different one, by
Alexander Murray and Martha Goldstein, the only one I could find that is free
to reuse and change.

You hear the map without knowing. You can see it, by drawing the sound the way acousticians
do, as a spectrogram: time runs from left to right, pitch from bottom to top,
and the louder a pitch is at a moment, the brighter that point. Draw this
recording that way and Greece appears.

## A spectrogram is a map

The spectrogram on the sheet is georeferenced. Time is easting and pitch is
northing, so one second of music is 14.3 km of Greece from west to east, and
one kilohertz is 99.4 km from south to north. The hidden Greece lies exactly
on the real one, so the grid, the scale bar and the north arrow on the sheet
are all true. Greece plays from 0:05 to 1:10, between 10 and 19 kHz.

## How it was made

- **The recording** is from IMSLP, the free music library, under a license
  that allows changes. It was cleaned of its hiss first: the steady noise of
  the old recording was learned from the whole piece and turned down wherever
  no note rises above it.
- **The image** is a shaded relief of Greece at one pixel per square
  kilometer, from the Copernicus elevation model on land and the EMODnet
  bathymetry at sea. Brightness was chosen to become loudness: the coastline
  loudest, the land louder the higher it is, the seabed softer the deeper it
  goes, the neighbors a faint murmur.
- **Into sound**: each column of the image became the pitches of a few
  hundredths of a second. An image only says how loud each pitch is, not how
  its waves line up, so the alignment was found by repeated guessing and
  correcting (the Griffin-Lim method) until the sound drew the image back.
- **Into the music**: the result was mixed in 36 dB below the music, between
  10 and 19 kHz, where the flute and piano are quietest and the ear is least
  sensitive. In a listening test the two versions could not be told apart.
- **For the web**, the recording is an MP3 at 256 kbit/s, the smallest file
  tested that keeps the map sharp. AAC and Opus, at the sizes tried, blurred
  it. The lossless FLAC is in the downloads.

The printed map was made in ArcGIS Pro and the sound in Python. Enescu
dedicated the piece to Paul Taffanel, who taught the flute at the Paris
Conservatoire; it was written as a test piece for its students.
