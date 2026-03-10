import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/index3.js";
import { D as DefaultButton } from "../../../../chunks/DefaultButton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-ksb7j_START -->${$$result.title = `<title>${escape("Reddoor Creative | " + page.error?.message)}</title>`, ""}<!-- HEAD_svelte-ksb7j_END -->`, ""} <section class="h-screen w-screen flex items-center justify-center gap-12 flex-col"><h1 data-svelte-h="svelte-1w74owa">This is Our Private Showcase</h1> ${validate_component(DefaultButton, "DefaultButton").$$render(
    $$result,
    {
      href: "/portfolio",
      filled: true,
      red: true
    },
    {},
    {
      default: () => {
        return `View Our Public Portfolio`;
      }
    }
  )} ${validate_component(DefaultButton, "DefaultButton").$$render(
    $$result,
    {
      href: "/contact",
      filled: true,
      red: true
    },
    {},
    {
      default: () => {
        return `Contact Us With Specific Questions`;
      }
    }
  )}</section>`;
});
export {
  Page as default
};
