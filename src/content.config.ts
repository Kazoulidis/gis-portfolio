import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { projectCategorySlugs } from './site';

/**
 * Each project is one Markdown file in src/content/projects/.
 * The filename becomes the URL: `flood-risk.md` -> /projects/flood-risk
 * The schema below is enforced at build time, so a typo in a project's
 * frontmatter fails the build rather than shipping a broken page.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // One or two sentences, shown on the projects index. Keep it short —
    // this is the bit a recruiter actually reads.
    summary: z.string(),
    // Used for ordering. Newest first.
    date: z.coerce.date(),
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

    // --- Map -------------------------------------------------------------
    // A project can show a map two ways. Use ONE of these, not both:
    //
    //   map     one GeoJSON file, no legend or toggle. The simple case.
    //           e.g.  map: '/data/flood-risk.geojson'
    //
    //   layers  several named GeoJSON files, each with its own colour, each
    //           toggleable, together forming the legend. Use this when the
    //           story needs more than one layer — a result over a basemap of
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

    // Optional outbound links (StoryMap, repo, PDF, publication).
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
    // Set true to keep a project out of the index while you draft it.
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
