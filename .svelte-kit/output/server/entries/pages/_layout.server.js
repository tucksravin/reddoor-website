import { c as createClient } from "../../chunks/prismicio.js";
import { filter } from "@prismicio/client";
const prerender = "auto";
const load = async ({ url, fetch, cookies }) => {
  const { pathname } = url;
  const client = createClient({ fetch, cookies });
  const latestFourProjects = await client.getByType(
    "project",
    {
      orderings: {
        field: "document.first_publication_date",
        direction: "desc"
      },
      filters: [filter.not("document.tags", ["hide"])],
      pageSize: 4
    }
  );
  return {
    pathname,
    latestFourProjects
  };
};
export {
  load,
  prerender
};
