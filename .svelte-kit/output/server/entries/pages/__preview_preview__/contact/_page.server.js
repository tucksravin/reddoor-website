import { m as metaImage } from "../../../../chunks/printedReddoor.js";
async function load({ params, fetch, cookies }) {
  return {
    title: "Contact | Reddoor Creative",
    meta_description: "We design beautiful marketing materials that help you thrive. Talk to us.",
    meta_title: "Contact | Reddoor Creative",
    meta_image: metaImage
  };
}
export {
  load
};
