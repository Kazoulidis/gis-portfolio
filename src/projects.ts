/**
 * Shared rules for which projects appear where.
 */
import type { CollectionEntry } from 'astro:content';
import type { ProjectCategory } from './site';

type Project = CollectionEntry<'projects'>;

type Publishable = { data: { draft: boolean; category: string; date: Date } };

/** 10:00 Athens time on a date, as a timestamp. Swedish dates parse as ISO. */
const tenInAthens = (date: Date) => {
  const utc = new Date(`${date.toISOString().slice(0, 10)}T10:00:00Z`);
  const athens = utc.toLocaleString('sv-SE', { timeZone: 'Europe/Athens' }).replace(' ', 'T');
  return 2 * utc.valueOf() - Date.parse(`${athens}Z`);
};

/**
 * Whether a project was public when the site was built. A challenge draft
 * becomes public by itself at 10:00 Athens time on its date. Any other draft
 * (the thesis) waits for `draft: false`.
 */
export const isPublic = ({ data }: Publishable) =>
  !data.draft || (data.category === '30-day-map-challenge' && Date.now() >= tenInAthens(data.date));

/**
 * When a project still to come goes public, or undefined for any other. Lists
 * carry these projects hidden, with this time, and the script at the end of
 * BaseLayout shows them once it has passed, so no new build is needed. The
 * sitemap and the page's noindex only catch up at the next build.
 */
export const publicAt = (project: Publishable) =>
  !import.meta.env.DEV && project.data.draft && project.data.category === '30-day-map-challenge' && !isPublic(project)
    ? tenInAthens(project.data.date)
    : undefined;

/** The attributes that hide a listed project until it goes public. */
export const untilPublic = (project: Publishable) => {
  const at = publicAt(project);
  return at === undefined ? {} : { hidden: true, 'data-public-at': at };
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

/** What a list's markup holds: the listed projects and, hidden, those to come. */
export const isInList = (project: Publishable) =>
  isListed(project) || publicAt(project) !== undefined;

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
