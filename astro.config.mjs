// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Change this to your real domain before deploying. It is used for
  // canonical URLs and the sitemap.
  site: 'https://example.com',
  build: {
    // Emits /projects/foo.html instead of /projects/foo/index.html.
    // Slightly simpler to serve from nginx; see deploy/nginx.conf.
    format: 'file',
  },

  // There is no combined projects index — the Projects nav item points straight
  // at the first category (see `projectsHref` in src/site.ts). This only catches
  // anyone who types or bookmarks the bare /projects. Nothing on the site links
  // here, so the redirect hop is never on a real navigation path.
  // Keep the target in step with the first entry of `projectCategories`.
  redirects: {
    '/projects': '/projects/30-day-map-challenge',
  },

  // Fetch a page before it is clicked, so navigation is instant rather than
  // merely fast. This is the one piece of JavaScript on the text-only pages
  // (~1 KB) and it is invisible: no animation, no interception of the click,
  // still a normal browser navigation to a real URL. The nav links opt up to
  // the 'viewport' strategy in BaseLayout.astro, which prefetches them on load.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },

  // The dev toolbar accounts for most of the dev server's per-page overhead
  // (it pulls in its own UI library, settings and audit machinery on every
  // page load). It is a debugging aid for client islands, which this site does
  // not use, so it costs more than it gives here. Nothing about this affects
  // the production build.
  devToolbar: {
    enabled: false,
  },
});
