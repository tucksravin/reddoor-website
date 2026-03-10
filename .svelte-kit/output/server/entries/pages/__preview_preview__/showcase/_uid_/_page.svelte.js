import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute, b as each } from "../../../../../chunks/ssr.js";
import { asLink, isFilled } from "@prismicio/client";
import { P as PrismicImage } from "../../../../../chunks/PrismicImage.js";
import { P as PrismicRichText, S as SliceZone, c as components } from "../../../../../chunks/index4.js";
import { a as arrowButton } from "../../../../../chunks/arrowButton.js";
import { C as ContentWidth, A as AnimateIn } from "../../../../../chunks/ContentWidth.js";
import { D as DefaultButton } from "../../../../../chunks/DefaultButton.js";
function mediumString(project) {
  let servicesArray = [
    project.data.branding,
    project.data.product,
    project.data.print,
    project.data.environmental,
    project.data.packaging,
    project.data.digital
  ];
  return servicesArray.reduce(
    (acc2, service, index) => {
      if (service) {
        if (acc2) acc2 += ", ";
        acc2 += ["Brand", "Product", "Print", "Environmental", "Packaging", "Digital"][index];
      }
      return acc2;
    },
    ""
  );
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let pageData = data.page.data;
  let featuredProject = data.featuredProject;
  let projects = data.projects;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<div class="w-screen h-[80vh] relative">${validate_component(PrismicImage, "PrismicImage").$$render(
    $$result,
    {
      field: pageData.hero,
      class: "w-full h-full absolute object-cover"
    },
    {},
    {}
  )} <div class="w-full h-full absolute " style="background: linear-gradient(rgba(0, 0, 0, 0.42) 0%, rgba(215, 25, 32, 0.86) 100%); z-index: 0;"></div> ${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "h-full flex flex-col justify-between items-start"
    },
    {},
    {
      default: () => {
        return `<div></div> <h5 class="text-white md:w-3/5 md:pr-[10%] mx-auto z-10">${escape(pageData.tagline || "")}</h5> <div class="text-white w-full z-10 mb-12 md:w-3/5 mx-auto"><h1 class="mt-4">${escape(data.title.slice(0, -18) || "")}</h1></div>`;
      }
    }
  )}</div> <section class="w-full py-12">${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-col items-center",
      animateIn: true
    },
    {},
    {
      default: () => {
        return `<div class="w-full md:w-3/5 rich-text">${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: pageData.body }, {}, {})}</div>`;
      }
    }
  )}</section> ${validate_component(ContentWidth, "ContentWidth").$$render($$result, { class: "flex flex-col items-end" }, {}, {
    default: () => {
      return `<div class="w-full md:w-4/5"><div class="w-full md:pr-6 aspect-[4/3] lg:aspect-[16/9] relative"><a${add_attribute("href", "/portfolio/" + data.featuredProject?.uid || "", 0)} class="h-full w-full flex flex-col justify-end items-end relative"><img${add_attribute("src", pageData.featuredImageOverride.url || featuredProject.data.hero.url || "", 0)}${add_attribute("alt", featuredProject.data.title || " Hero Image", 0)} class="absolute w-full h-full object-cover"> <div class="w-full h-full absolute top-0 left-0 hover:opacity-60 transition-opacity duration-700" style="background: linear-gradient(180deg, rgba(12, 19, 35, 0.15) 0%, rgba(12, 19, 35, 0.80) 81.09%) 50% / cover no-repeat;"></div> <div class="w-full flex flex-row justify-between p-6 z-10"><div class="w-4/5"><p class="text-white uppercase">${escape(pageData.featuredTitleOverride || featuredProject.data.title || "")}</p> <p class="text-light">${escape(pageData.featuredSubtitleOverride || mediumString(featuredProject) || "")}</p></div> <dive class="brightness-200 hover:brightness-50 transition bump w-12 h-12" data-svelte-h="svelte-2r62gq"><img${add_attribute("src", arrowButton, 0)} alt="go to page" class="h-full"></dive></div></a></div> <div class="w-full flex flex-col lg:flex-row mt-6 flex-wrap relative">${each(projects, (project, i) => {
        return `<div class="md:pr-6 pb-6 w-full lg:w-1/2 aspect-[4/3] transition-opacity duration-700"><a${add_attribute(
          "href",
          isFilled.link(pageData.projects[i].linkOverride) ? asLink(pageData.projects[i].linkOverride) : "/portfolio/" + project.uid,
          0
        )}${add_attribute(
          "target",
          isFilled.link(pageData.projects[i].linkOverride) ? "_blank" : void 0,
          0
        )} class="h-full w-full flex flex-col justify-end relative"><img${add_attribute("src", pageData.projects[i].imageOverride.url || project.data.hero.url || "", 0)}${add_attribute("alt", project.data.title + " Hero Image", 0)} class="absolute w-full h-full object-cover"> <div class="w-full h-full absolute top-0 left-0 hover:opacity-60 transition-opacity duration-700" style="background: linear-gradient(180deg, rgba(12, 19, 35, 0.15) 0%, rgba(12, 19, 35, 0.80) 81.09%) 50% / cover no-repeat;"></div> ${validate_component(AnimateIn, "AnimateIn").$$render(
          $$result,
          {
            class: "w-full flex flex-row justify-between items-end p-6 z-10",
            transitionDelayMax: 800
          },
          {},
          {
            default: () => {
              return `<div class="w-4/5"><p class="text-white uppercase">${escape(pageData.projects[i].titleOverride || project.data.title)}</p> <p class="text-light">${escape(pageData.projects[i].subtitleOverride || mediumString(project) || "")}</p></div> <div class="brightness-200 hover:brightness-50 transition bump w-12 h-12" data-svelte-h="svelte-1rddv65"><img${add_attribute("src", arrowButton, 0)} alt="go to page" class="w-full"></div> `;
            }
          }
        )}</a> </div>`;
      })}</div></div>`;
    }
  })} <div class="py-12"></div> ${validate_component(SliceZone, "SliceZone").$$render(
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
        return `<h3 class="text-white md:w-3/5" data-svelte-h="svelte-z7n62t">Isn’t it time to arm your brand with a clear story and compelling design?</h3> <a href="/contact">${validate_component(DefaultButton, "DefaultButton").$$render(
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
    }
  )}</div>`;
});
export {
  Page as default
};
