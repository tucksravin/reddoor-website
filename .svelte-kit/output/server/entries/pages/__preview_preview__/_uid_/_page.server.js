import { asText } from "@prismicio/client";
import { c as createClient } from "../../../../chunks/prismicio.js";
import { e as error } from "../../../../chunks/index.js";
async function load({ params, fetch, cookies }) {
  const client = createClient({ fetch, cookies });
  let page;
  try {
    page = await client.getByUID("page", params.uid);
  } catch (err) {
    throw error(404, {
      message: "Page Not Found"
    });
  }
  return {
    page,
    title: asText(page.data.title),
    meta_description: page.data.meta_description,
    meta_title: page.data.meta_title,
    meta_image: page.data.meta_image.url
  };
}
async function entries() {
  const client = createClient();
  const pages = await client.getAllByType("page");
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
export {
  entries,
  load
};
