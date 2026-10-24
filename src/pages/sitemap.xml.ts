/**
 * /sitemap.xml - every public page, for search engines. Built here rather than
 * with @astrojs/sitemap so it follows this site's own rules: extensionless URLs
 * (what the canonical links use), no empty category pages, no drafts, and
 * project dates from when the map was actually made.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { projectCategories } from '../site';
import { isVisible, yearsOf } from '../projects';

export const GET: APIRoute = async ({ site }) => {
  const projects = await getCollection('projects', isVisible);
  const day = (d: Date) => d.toISOString().slice(0, 10);

  const entries: { path: string; lastmod?: string }[] = [
    { path: '/' },
    { path: '/experience' },
    { path: '/education' },
    { path: '/contact' },
    { path: '/privacy' },
    // Category pages exist only when something is published in them.
    ...projectCategories
      .filter((c) => projects.some((p) => p.data.category === c.slug))
      .map((c) => ({ path: `/projects/${c.slug}` })),
    // Earlier years of a by-year category (the newest year is the page above).
    ...projectCategories
      .filter((c) => c.byYear)
      .flatMap((c) =>
        yearsOf(projects.filter((p) => p.data.category === c.slug))
          .slice(1)
          .map((year) => ({ path: `/projects/${c.slug}/${year}` })),
      ),
    ...projects.map((p) => ({
      path: `/projects/${p.id}`,
      lastmod: day(p.data.created ?? p.data.date),
    })),
  ];

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries
      .map(
        (e) =>
          `  <url><loc>${new URL(e.path, site)}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}</url>`,
      )
      .join('\n') +
    '\n</urlset>\n';

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
