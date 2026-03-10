import { c as create_ssr_component, a as add_attribute, b as each, v as validate_component, e as escape } from "./ssr.js";
import { P as PrismicImage } from "./PrismicImage.js";
import { P as PrismicLink } from "./PrismicLink.js";
import "./DefaultButton.js";
import { C as ContentWidth, A as AnimateIn } from "./ContentWidth.js";
const LogoSoup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const logoSoupData = data.logoSoup.data;
  const allBrands = logoSoupData.brands;
  allBrands.forEach((brand) => {
    if (brand.isFeatured) ;
  });
  let brands = allBrands;
  let section;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  {
    {
      {
        brands = allBrands;
      }
    }
  }
  return ` <section${add_attribute("this", section, 0)}>${`<section class="h-lvh w-screen relative overflow-hidden"><div class="${"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video transition-opacity duration-500 " + escape("opacity-0", true) + " " + escape(
    "w-screen min-h-full",
    true
  )}">${each(brands, (brand, i) => {
    return `${validate_component(PrismicImage, "PrismicImage").$$render(
      $$result,
      {
        field: brand.active_background,
        class: "absolute h-full w-full object-cover transition-opacity duration-700 ease-fast-slow \n        opacity-0"
      },
      {},
      {}
    )}`;
  })}</div> ${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "h-full py-32 flex flex-row justify-end relative"
    },
    {},
    {
      default: () => {
        return `${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "absolute left-0 top-40" }, {}, {
          default: () => {
            return `<h6 class="${"transition duration-300 ease-fast-slow " + escape("text-red", true)}">Join these brands <br> in fighting mediocrity.</h6>`;
          }
        })} <div class="w-3/5 h-full flex flex-row justify-between items-center flex-wrap gap-12">${each(brands, (brand, i) => {
          return `${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "w-1/4 relative" }, {}, {
            default: () => {
              return ` <div>${validate_component(PrismicLink, "PrismicLink").$$render($$result, { field: brand.project_link }, {}, {
                default: () => {
                  return `${validate_component(PrismicImage, "PrismicImage").$$render(
                    $$result,
                    {
                      field: brand.logo_negative,
                      class: "h-full absolute transition-opacity duration-300 ease-fast-slow opacity-0",
                      loading: "eager"
                    },
                    {},
                    {}
                  )} ${validate_component(PrismicImage, "PrismicImage").$$render(
                    $$result,
                    {
                      field: brand.logo_color,
                      class: "h-full transition-opacity duration-300 ease-fast-slow ",
                      loading: "eager"
                    },
                    {},
                    {}
                  )} `;
                }
              })}</div> `;
            }
          })}`;
        })}</div> ${validate_component(AnimateIn, "AnimateIn").$$render(
          $$result,
          {
            class: "absolute bottom-[20%] left-0 w-64"
          },
          {},
          {
            default: () => {
              return ` <div class="pt-10">${`<p class="text-red transition duration-300 ease-fast-slow" data-svelte-h="svelte-c3bokf">Browse Our Work</p>`} <div class="mt-8 gap-8 flex flex-row w-fit"><button class="${escape(
                "text-primary hover:text-white",
                true
              ) + " bump"}"><i class="fa-sharp fa-regular fa-arrow-left fa-2xl"></i></button> <button class="${escape(
                "text-primary hover:text-white",
                true
              ) + " bump"}"><i class="fa-sharp fa-regular fa-arrow-right fa-2xl"></i></button></div></div>`;
            }
          }
        )}`;
      }
    }
  )}</section>`}</section>`;
});
export {
  LogoSoup as L
};
