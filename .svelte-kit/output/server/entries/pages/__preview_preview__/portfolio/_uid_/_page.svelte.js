import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute } from "../../../../../chunks/ssr.js";
import { P as PrismicImage } from "../../../../../chunks/PrismicImage.js";
import { S as SliceZone, c as components } from "../../../../../chunks/index4.js";
import { C as ContentWidth, A as AnimateIn } from "../../../../../chunks/ContentWidth.js";
import { D as DefaultButton } from "../../../../../chunks/DefaultButton.js";
import { a as arrowButton } from "../../../../../chunks/arrowButton.js";
function mediumString(project) {
  let servicesArray2 = [
    project.data.branding,
    project.data.product,
    project.data.print,
    project.data.environmental,
    project.data.packaging,
    project.data.digital
  ];
  return servicesArray2.reduce(
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
  let pageData;
  let servicesArray;
  let services;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  pageData = data.page.data;
  servicesArray = [
    pageData.branding,
    pageData.product,
    pageData.print,
    pageData.environmental,
    pageData.packaging,
    pageData.digital
  ];
  services = servicesArray.reduce(
    (acc, service, index) => {
      if (service) {
        if (acc) acc += ", ";
        acc += ["Brand", "Product", "Print", "Environmental", "Packaging", "Digital"][index];
      }
      return acc;
    },
    ""
  );
  return `<div class="w-screen h-[80vh] relative">${validate_component(PrismicImage, "PrismicImage").$$render(
    $$result,
    {
      field: data.page.data.hero,
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
        return `<div></div> <h5 class="text-white md:w-3/5 md:pr-[10%] mx-auto z-10">${escape(data.page.data.tagline || "")}</h5> <div class="text-white w-full z-10 mb-12 md:w-3/5 mx-auto"><div class="w-full border-b-1 border-b-white flex justify-between pb-4"><div class="font-extralight">${escape(services)}</div> <div class="h-6 w-20 flex flex-row justify-between text-white">${data.prevProject ? `<a${add_attribute("href", "/portfolio/" + data.prevProject.uid, 0)}><i class="fa-thin fa-sharp fa-chevron-left fa-2xl bump hover:text-light"></i></a>` : ``} ${data.nextProject ? `<a${add_attribute("href", "/portfolio/" + data.nextProject.uid, 0)}><i class="fa-thin fa-sharp fa-chevron-right fa-2xl bump hover:text-light"></i></a>` : ``}</div></div> <h1 class="mt-4">${escape(data.heroHeading || "")}</h1></div>`;
      }
    }
  )}</div> ${validate_component(SliceZone, "SliceZone").$$render(
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
      class: "flex flex-col md:flex-row items-start justify-between",
      animateIn: true
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
  )}</div> <div class="bg-paper w-screen py-24">${validate_component(ContentWidth, "ContentWidth").$$render($$result, {}, {}, {
    default: () => {
      return `<h4 class="text-primary text-left w-full" data-svelte-h="svelte-bkssha">Related Projects</h4> <div class="w-full mt-12 flex flex-col md:flex-row gap-12 md:gap-0"><div class="w-1/5"></div> <div class="w-full md:w-2/5 md:pr-2 aspect-[4/3] relative"><a${add_attribute("href", "/portfolio/" + (data.relatedProjectOne.uid || ""), 0)} class="h-full w-full flex flex-col justify-end relative"><img${add_attribute("src", data.relatedProjectOne.data.hero.url || "", 0)}${add_attribute("alt", data.relatedProjectOne.data.title || " Hero Image", 0)} class="absolute w-full h-full object-cover"> <div class="w-full h-full absolute top-0 left-0 hover:opacity-60 transition-opacity duration-700" style="background: linear-gradient(180deg, rgba(12, 19, 35, 0.15) 0%, rgba(12, 19, 35, 0.80) 81.09%) 50% / cover no-repeat;"></div> <div class="w-full flex flex-row justify-between p-6 z-10"><div><p class="text-white uppercase">${escape(data.relatedProjectOne.data.title || "")}</p> <p class="text-light">${escape(mediumString(data.relatedProjectOne) || "")}</p></div> <a${add_attribute("href", "/portfolio/" + (data.relatedProjectOne.uid || ""), 0)} class="brightness-200 hover:brightness-50 transition bump"><img${add_attribute("src", arrowButton, 0)} alt="go to page" class="h-full"></a></div></a></div> <div class="w-full md:w-2/5 md:pl-2 aspect-[4/3] relative"><a${add_attribute("href", "/portfolio/" + data.relatedProjectTwo.uid, 0)} class="h-full w-full flex flex-col justify-end relative"><img${add_attribute("src", data.relatedProjectTwo.data.hero.url || "", 0)}${add_attribute("alt", data.relatedProjectTwo.data.title || " Hero Image", 0)} class="absolute w-full h-full object-cover"> <div class="w-full h-full absolute top-0 left-0 hover:opacity-60 transition-opacity duration-700" style="background: linear-gradient(180deg, rgba(12, 19, 35, 0.15) 0%, rgba(12, 19, 35, 0.80) 81.09%) 50% / cover no-repeat;"></div> <div class="w-full flex flex-row justify-between p-6 z-10"><div><p class="text-white uppercase">${escape(data.relatedProjectTwo.data.title || "")}</p> <p class="text-light">${escape(mediumString(data.relatedProjectTwo) || "")}</p></div> <a${add_attribute("href", "/portfolio/" + data.relatedProjectTwo.uid || "", 0)} class="brightness-200 hover:brightness-50 transition bump"><img${add_attribute("src", arrowButton, 0)} alt="go to page" class="h-full"></a></div></a></div></div>`;
    }
  })}</div>`;
});
export {
  Page as default
};
