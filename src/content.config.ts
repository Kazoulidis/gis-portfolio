import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { projectCategorySlugs } from './site';

/**
 * Each project is one Markdown file in src/content/projects/.
 * The filename becomes the URL: `flood-risk.md` -> /projects/flood-risk
 * The schema below is enforced at build time, so a typo in a project's
 * frontmatter fails the build rather than shipping a broken page.
 */
const dataSourceItem = z.object({
  label: z.string(),
  href: z.string().optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // One or two sentences, shown on the projects index. Keep it short -
    // this is the bit a recruiter actually reads.
    summary: z.string(),
    // Used for ordering within a category. For the challenge this is the
    // prompt's day, which is what makes Day 1 - Day 30 read in sequence, not
    // when the map was actually made.
    date: z.coerce.date(),
    // When the map was really produced. The challenge dates all fall in one
    // month, so "Recent projects" on the About page would otherwise show the
    // same label against every entry and order them by prompt number rather
    // than by what was made most recently. Falls back to `date` when absent.
    created: z.coerce.date().optional(),
    // Which sub-tab this project appears under. The allowed values come from
    // `projectCategories` in src/site.ts; an unrecognised one fails the build
    // rather than quietly hiding the project. Defaults to 'misc'.
    category: z.enum(projectCategorySlugs).default('misc'),
    // Free text: "Thessaloniki, Greece", "MSc thesis", "Client work".
    context: z.string().optional(),
    // Software and methods. Shown as pills.
    tags: z.array(z.string()).default([]),
    // Path under public/, e.g. /images/flood-risk.png
    thumbnail: z.string().optional(),
    thumbnailAlt: z.string().optional(),

    // A finished, static map image shown at the top of the project - above the
    // interactive map if there is one. This is where a print layout goes (the
    // A4 export from ArcGIS Pro, say), so the considered version leads and the
    // interactive one supports it.
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    // A larger copy of `image` for the zoom viewer, fetched only when someone
    // opens it - the page itself loads the light `image`. Without it the
    // viewer zooms into `image`.
    imageFull: z.string().optional(),

    // Files a reader can take away: the full-resolution map, the source data,
    // a PDF. Rendered as buttons after the maps. Paths are under public/, so
    // /downloads/foo.png lives at public/downloads/foo.png.
    // Put the format and size in `note` - people deserve to know before they
    // click a 5 MB file.
    downloads: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
          note: z.string().optional(),
        }),
      )
      .default([]),

    // --- Map -------------------------------------------------------------
    // A project can show a map two ways. Use ONE of these, not both:
    //
    //   map     one GeoJSON file, no legend or toggle. The simple case.
    //           e.g.  map: '/data/flood-risk.geojson'
    //
    //   layers  several named GeoJSON files, each with its own colour, each
    //           toggleable, together forming the legend. Use this when the
    //           story needs more than one layer - a result over a basemap of
    //           context, points you can switch on and off, and so on.
    //
    // Both draw the same way; `layers` just adds the legend and the toggles.
    map: z.string().optional(),
    // Opt a project into a bespoke map component instead of the generic layer
    // map. The value is a key in the CUSTOM_MAPS registry in
    // src/pages/projects/[...slug].astro; an unknown key falls back to the
    // plain map. Used with `map:` as the data source path.
    mapComponent: z.string().optional(),
    layers: z
      .array(
        z.object({
          // Shown in the legend and as the toggle label.
          name: z.string(),
          // Path under public/, e.g. /data/flood-extent.geojson
          src: z.string(),
          // Legend swatch and feature colour. A feature's own `color`
          // property still wins over this, per layer. Defaults to the site
          // accent if omitted.
          color: z.string().optional(),
          // Whether the layer starts switched on. Default true.
          visible: z.boolean().default(true),
        }),
      )
      .min(1)
      .optional(),
    mapCaption: z.string().optional(),

    // Who produced the underlying data. Kept separate from `links` because
    // provenance is a credit, not a "see also" - in GIS work it is often the
    // first thing a knowledgeable reader looks for. `href` is optional; some
    // sources have no public URL. One source or a list of them; either way
    // the page gets a list, so a map built from five datasets can credit
    // (and link) all five.
    dataSource: z
      .union([dataSourceItem, z.array(dataSourceItem).min(1)])
      .transform((value) => (Array.isArray(value) ? value : [value]))
      .optional(),

    // Optional outbound links (StoryMap, repo, PDF, publication).
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
    // Set true to unlist a project: its page is built and reachable by link,
    // but no list, tab or sitemap shows it (see isListed in src/projects.ts). A
    // challenge draft becomes public by itself on its date (see isPublic there).
    draft: z.boolean().default(false),
  })
    .refine((data) => !(data.map && data.layers), {
      message:
        'Use either `map` (one file) or `layers` (several), not both. ' +
        'To give a single layer a legend, move it into `layers`.',
      path: ['layers'],
    }),
});

export const collections = { projects };
