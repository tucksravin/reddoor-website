import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { S as SliceZone, c as components } from "../../../../chunks/index4.js";
import { C as ContentWidth, A as AnimateIn } from "../../../../chunks/ContentWidth.js";
import { D as DefaultButton } from "../../../../chunks/DefaultButton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(SliceZone, "SliceZone").$$render(
    $$result,
    {
      slices: data.page.data.slices,
      components
    },
    {},
    {}
  )}  <div class="w-screen py-40 md:h-[80vh] bg-paper-red flex flex-col items-center justify-center">${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-col md:flex-row items-start justify-between"
    },
    {},
    {
      default: () => {
        return `<h3 class="text-white md:w-3/5" data-svelte-h="svelte-z7n62t">Isn’t it time to arm your brand with a clear story and compelling design?</h3> ${validate_component(AnimateIn, "AnimateIn").$$render($$result, { transitionDelayMax: 1600 }, {}, {
          default: () => {
            return `<a href="/contact">${validate_component(DefaultButton, "DefaultButton").$$render(
              $$result,
              {
                class: "mt-6 text-white border-white border-1 hover:bg-mid hover:bg-opacity-10",
                text: "MEET WITH US",
                filled: false
              },
              {},
              {}
            )}</a>`;
          }
        })}`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
