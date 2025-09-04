import { createClient } from '$lib/prismicio';
import { isFilled } from '@prismicio/client';
import type { ProjectDocument } from '../../../../prismicio-types.js';
import metaImage from "$lib/assets/icons/logos/printedReddoor.png"

export async function load({ params, fetch, cookies }) {
  const client = createClient({ fetch, cookies });
  let page = await client.getByUID('showcase', params.uid);
  let featuredProject;
  if (isFilled.contentRelationship(page.data.featuredproject) && page.data.featuredproject.uid)
    featuredProject = await client.getByUID('project', page.data.featuredproject.uid);

  let projects: ProjectDocument[] = [];
  for (const project of page.data.projects) {
    if (isFilled.contentRelationship(project.project) && project.project.uid)
      projects.push(await client.getByUID('project', project.project.uid));
  }

  return {
    page,
    featuredProject,
    projects,
    title: page.data.title + " | Reddoor Creative",
    meta_description: page.data.meta_description || page.data.title + " | Better design means better business",
    meta_title: page.data.meta_title || page.data.title + " | Reddoor Creative",
    meta_image: page.data.meta_image.url || metaImage
  }
}

export async function entries() {
  const client = createClient();
  const pages = await client.getAllByType('showcase');
  return pages.map((page) => {
    return { uid: page.uid };
  });
}