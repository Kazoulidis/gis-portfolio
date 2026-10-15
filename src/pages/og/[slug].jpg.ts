/**
 * /og/<project>.jpg - each project's link-preview image, cut from its finished
 * map (the wide print image, else the square thumbnail).
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { projectCard } from '../../og';

export async function getStaticPaths() {
  const projects = await getCollection(
    'projects',
    ({ data }) => !data.draft && Boolean(data.image || data.thumbnail),
  );
  return projects.map((project) => ({
    params: { slug: project.id },
    props: { source: (project.data.image ?? project.data.thumbnail)! },
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(new Uint8Array(await projectCard(props.source as string)), {
    headers: { 'Content-Type': 'image/jpeg' },
  });
