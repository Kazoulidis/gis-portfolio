/**
 * Shared rules for which projects appear where.
 */
import type { CollectionEntry } from 'astro:content';
import type { ProjectCategory } from './site';

type Project = CollectionEntry<'projects'>;

type Publishable = { data: { draft: boolean; category: string; date: Date } };

/**
 * How far ahead a build looks. The scheduled build runs before 10:00 and the
 * server switches to it at 10:00 sharp, so it must already count that day's
 * page as public (see .github/workflows/release.yml).
 */
const BUILD_AHEAD_MS = 60 * 60 * 1000;

/**
 * Whether a project is public. A challenge draft becomes public by itself at
 * 10:00 Athens time on its date. Any other draft (the thesis) waits for
 * `draft: false`. The site is static, so this is decided when it is built.
 */
export const isPublic = ({ data }: Publishable) => {
  if (!data.draft) return true;
  if (data.category !== '30-day-map-challenge') return false;
  // Swedish dates sort as text: '2026-11-06 09:05:00'.
  const athens = new Date(Date.now() + BUILD_AHEAD_MS).toLocaleString('sv-SE', { timeZone: 'Europe/Athens' });
  return athens >= `${data.date.toISOString().slice(0, 10)} 10:00`;
};

/**
 * Whether a project is listed. A project that isn't public yet is unlisted, not
 * hidden: a production build still gives it its page and link-preview image, so
 * it can be shared by link before its day, but leaves it out of the tabs, the
 * category pages, the About page's recent projects and the sitemap, and marks
 * its page noindex. On the dev server (`npm run dev`) drafts are listed too, so
 * a page can be checked in place. Use this as the getCollection filter for
 * anything that lists projects, never `!data.draft` on its own, or dev and
 * production drift apart.
 */
export const isListed = (project: Publishable) =>
  import.meta.env.DEV || isPublic(project);

/** The year a project belongs to. UTC: frontmatter dates parse as UTC midnight. */
export const projectYear = (project: Project) => project.data.date.getUTCFullYear();

/** The distinct years in a set of projects, newest first. */
export const yearsOf = (projects: Project[]) =>
  [...new Set(projects.map(projectYear))].sort((a, b) => b - a);

/** A category's projects in its display order. */
export const sortForCategory = (projects: Project[], category: ProjectCategory) =>
  [...projects].sort((a, b) =>
    category.order === 'asc'
      ? a.data.date.valueOf() - b.data.date.valueOf()
      : b.data.date.valueOf() - a.data.date.valueOf(),
  );

/**
 * Where a year of a by-year category lives: /projects/<category>/<year>, the
 * address that stays put. /projects/<category> also opens on the newest year,
 * but next year it moves on, so the year tabs link to the year pages.
 */
export const yearHref = (category: ProjectCategory, year: number) =>
  `/projects/${category.slug}/${year}`;
