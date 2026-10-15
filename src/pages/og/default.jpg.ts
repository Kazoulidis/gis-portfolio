/** /og/default.jpg - the link-preview card for pages without a map of their own. */
import type { APIRoute } from 'astro';
import { site } from '../../site';
import { defaultCard } from '../../og';

export const GET: APIRoute = async ({ site: siteUrl }) =>
  new Response(
    new Uint8Array(await defaultCard(site.name, site.role, siteUrl?.host ?? '')),
    { headers: { 'Content-Type': 'image/jpeg' } },
  );
