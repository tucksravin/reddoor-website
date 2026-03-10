import { c as createClient } from "../../../../../chunks/prismicio.js";
import { isFilled } from "@prismicio/client";
import { m as metaImage } from "../../../../../chunks/printedReddoor.js";
import { e as error } from "../../../../../chunks/index.js";
async function load({ params, fetch, cookies }) {
  const client = createClient({ fetch, cookies });
  let page;
  try {
    page = await client.getByUID("showcase", params.uid);
  } catch (err) {
    throw error(404, {
      message: "Showcase not found"
    });
  }
  let featuredProject;
  if (isFilled.contentRelationship(page.data.featuredproject) && page.data.featuredproject.uid)
    featuredProject = await client.getByUID("project", page.data.featuredproject.uid);
  let projects = [];
  for (const project of page.data.projects) {
    if (isFilled.contentRelationship(project.project) && project.project.uid)
      projects.push(await client.getByUID("project", project.project.uid));
  }
  return {
    page,
    featuredProject,
    projects,
    title: page.data.title + " | Reddoor Creative",
    meta_description: page.data.meta_description || page.data.tagline || page.data.title + " | Better design means better business",
    meta_title: page.data.meta_title || page.data.title + " | Reddoor Creative",
    meta_image: page.data.meta_image.url || metaImage
  };
}
async function entries() {
  const client = createClient();
  const pages = await client.getAllByType("showcase");
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
export {
  entries,
  load
};
