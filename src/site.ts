/**
 * Everything about you that appears in more than one place.
 * Edit this file first - the header, footer, contact page and metadata all
 * read from it.
 */
export const site = {
  name: 'Antonios Kazoulidis',
  role: 'GIS Specialist | Spatial Planning and Development Engineer',
  // One or two sentences. This is the meta description and the line under your
  // name on the About page. Recruiters read this and nothing else, sometimes.
  tagline:
    'GIS and cartographic work backed by Python and containerised Linux environments, applied to emissions modelling, remote sensing and EU regional-policy research.',
  email: 'antonis@kazoulidis.com',
  // Shown on the Contact page only. `null` hides it.
  phone: '+30 697 385 7887',
  location: 'Thessaloniki, Greece',
  linkedin: 'https://www.linkedin.com/in/kazoulidis',
  // No GitHub on the CV; the link hides itself while this is null.
  github: null,
  // Drop the file at public/cv.pdf, or set to null to hide the CV links.
  cv: '/cv.pdf',
  // Self-hosted Umami (the stack in E:\Claude\umami). The tracker is only
  // added once `websiteId` is filled in - copy it from Umami after adding the
  // site there. `script` must match TRACKER_SCRIPT_NAME in that compose file,
  // and `endpoint` its COLLECT_API_ENDPOINT.
  analytics: {
    script: 'https://analytics.kazoulidis.com/site.js',
    endpoint: 'https://analytics.kazoulidis.com/api/k',
    websiteId: '',
    // Only count visits on the live site, never local previews.
    domains: 'portfolio.kazoulidis.com',
  },
};

/**
 * The tabs on the Projects page. Each becomes /projects/<slug>, listing the
 * projects whose `category` frontmatter matches.
 *
 * This is the single source of truth: the tabs, the routes, the allowed values
 * of `category` in a project's frontmatter, where the Projects nav item points,
 * and what the About page highlights all derive from it. Adding a category here
 * is the whole job.
 *
 *   blurb     the line under the heading on that category's page
 *   link      optional, renders beside the blurb; null for none
 *   order     'desc' newest first - the right default for a portfolio
 *             'asc'  oldest first - right for a sequence, where Day 1 leads
 *   homepage  whether these projects can appear in "Recent projects" on the
 *             About page, which lists the newest few across every category with
 *             this flag set. Turn a category off once it has more entries than
 *             it deserves on the one page a recruiter is guaranteed to see.
 *
 * The first category is where the Projects nav item lands, so put the work you
 * most want seen at the top.
 *
 * Changing a `slug` changes that category's URL - fine now, worth avoiding once
 * the site is public and links to it exist.
 */
export const projectCategories = [
  {
    slug: '30-day-map-challenge',
    label: '30 Day Map Challenge',
    blurb:
      'Maps made for the #30DayMapChallenge - a daily mapping prompt running through November each year.',
    link: { href: 'https://30daymapchallenge.com', label: '30daymapchallenge.com' },
    // A challenge reads as a sequence: Day 1 first, not Day 30.
    order: 'asc',
    homepage: true,
  },
  {
    slug: 'school',
    label: 'School',
    blurb: 'Coursework, thesis work, and projects from my studies.',
    link: null,
    order: 'desc',
    homepage: true,
  },
  {
    slug: 'misc',
    label: 'Miscellaneous',
    blurb: 'Everything else - client work, experiments, and one-off maps.',
    link: null,
    order: 'desc',
    homepage: true,
  },
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

/** The `category` values a project may declare. Used by the content schema. */
export const projectCategorySlugs = projectCategories.map((c) => c.slug) as unknown as [
  string,
  ...string[],
];

/** Where "Projects" goes. There is no combined index - the first tab is home. */
export const projectsHref = `/projects/${projectCategories[0].slug}`;

export const nav = [
  { href: '/', label: 'About' },
  // `match` rather than `href` decides whether the tab is highlighted, so
  // Projects stays lit on every /projects/* page, not just the one it links to.
  { href: projectsHref, label: 'Projects', match: '/projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/education', label: 'Education' },
  { href: '/contact', label: 'Contact' },
];
