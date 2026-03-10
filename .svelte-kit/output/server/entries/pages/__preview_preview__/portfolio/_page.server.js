import { c as createClient } from "../../../../chunks/prismicio.js";
import { filter } from "@prismicio/client";
import { m as metaImage } from "../../../../chunks/printedReddoor.js";
async function load({ params, fetch, cookies }) {
  const client = createClient({ fetch, cookies });
  const allProjects = await client.getAllByType("project", {
    orderings: {
      field: "document.first_publication_date",
      direction: "asc"
    },
    filters: [filter.not("document.tags", ["hide"])]
  });
  return {
    allProjects,
    title: "Portfolio | Reddoor Creative",
    meta_description: "We design beautiful marketing materials that help you thrive. See our work.",
    meta_title: "Portfolio | Reddoor Creative",
    meta_image: metaImage
  };
}
export {
  load
};
