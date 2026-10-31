/**
 * Shared rules for which projects appear where.
 */
import type { CollectionEntry } from 'astro:content';
import type { ProjectCategory } from './site';

type Project = CollectionEntry<'projects'>;

/**
 * Whether a project is listed. A draft is unlisted, not hidden: a production
 * build still gives it its page and link-preview image, so it can be shared by
 * link before its day, but leaves it out of the tabs, the category pages, the
 * About page's recent projects and the sitemap, and marks its page noindex.
 * On the dev server (`npm run dev`) drafts are listed too, so a page can be
 * checked in place. Use this as the getCollection filter for anything that
 * lists projects, never `!data.draft` on its own, or dev and production drift
 * apart.
 */
export const isListed = ({ data }: { data: { draft: boolean } }) =>
  import.meta.env.DEV || !data.draft;

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
 * Where a year of a by-year category lives. The newest year is the category's
 * own page, so /projects/<category> always opens on the current challenge;
 * earlier years get /projects/<category>/<year>.
 */
export const yearHref = (category: ProjectCategory, year: number, newest: number) =>
  year === newest ? `/projects/${category.slug}` : `/projects/${category.slug}/${year}`;
