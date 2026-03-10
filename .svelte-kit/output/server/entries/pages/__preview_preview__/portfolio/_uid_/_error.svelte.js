import { c as create_ssr_component, v as validate_component, e as escape, b as each, a as add_attribute } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/index3.js";
import { C as ContentWidth, A as AnimateIn } from "../../../../../chunks/ContentWidth.js";
import { a as arrowButton } from "../../../../../chunks/arrowButton.js";
const css = {
  code: "h1.svelte-dlbrqk{font-family:Pragmatica;font-size:200px;font-style:normal;font-weight:400;line-height:100%}@media only screen and (max-width:1024px){h4.svelte-dlbrqk{font-size:36px}}",
  map: `{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from \\"$app/state\\";\\nimport ContentWidth from \\"$lib/components/ContentWidth/ContentWidth.svelte\\";\\nimport AnimateIn from \\"$lib/components/AnimateIn.svelte\\";\\nimport { flip } from \\"svelte/animate\\";\\nimport { expoOut } from \\"svelte/easing\\";\\nimport arrowButton from \\"$lib/assets/icons/arrowButton.svg\\";\\nexport let data;\\nconst projects = data.latestFourProjects.results;\\nfunction mediumString(project) {\\n  let acc = \\"\\";\\n  let servicesArray = [\\n    project.data.branding,\\n    project.data.product,\\n    project.data.print,\\n    project.data.environmental,\\n    project.data.packaging,\\n    project.data.digital\\n  ];\\n  return servicesArray.reduce((acc2, service, index) => {\\n    if (service) {\\n      if (acc2) acc2 += \\", \\";\\n      acc2 += [\\"Brand\\", \\"Product\\", \\"Print\\", \\"Environmental\\", \\"Packaging\\", \\"Digital\\"][index];\\n    }\\n    return acc2;\\n  }, \\"\\");\\n}\\n<\/script>\\n<svelte:head>\\n    <title>{\\"Reddoor Creative | \\" + page.error?.message}</title>\\n</svelte:head>\\n<div class=\\"h-screen w-screen fixed top-0 left-0\\">\\n<ContentWidth class=\\"flex flex-row py-24 md:py-64\\">\\n    <h1 class=\\"text-primary/20\\">404</h1>\\n</ContentWidth>\\n</div>\\n<section class=\\"\\">\\n    <ContentWidth class=\\"py-24 md:py-48 flex flex-col items-end\\">\\n        <h4 class=\\"md:w-4/5\\">Nothing to see here...<br/>Let’s get you back on track.</h4>\\n        \\n          <h6 class=\\"text-primary w-full md:w-4/5  mt-24 md:mt-48\\">Enjoy our most recent work</h6>\\n        <div class=\\"w-full md:ml-[20%] md:w-4/5 flex flex-row flex-wrap mt-12\\" >\\n        {#each projects as project, i (project.uid)}\\n        <div animate:flip={{ duration:4500, easing: expoOut}}  class=\\"md:pr-6 pb-6 w-full lg:w-1/2 aspect-[4/3] transition-opacity duration-700 relative\\">\\n          \\n                <a href={\\"/portfolio/\\"+project.uid} class=\\"h-full w-full flex flex-col justify-end relative\\">\\n                    <img src={project.data.hero.url||''} alt={project.data.title  + \\" Hero Image\\"} class=\\"absolute w-full h-full object-cover\\"/>\\n                    <div class=\\"w-full h-full absolute top-0 left-0 hover:opacity-60 transition-opacity duration-700\\" style=\\"background: linear-gradient(180deg, rgba(12, 19, 35, 0.15) 0%, rgba(12, 19, 35, 0.80) 81.09%) 50% / cover no-repeat;\\" />\\n                   \\n                    \\n                    <AnimateIn class=\\"w-full flex flex-row justify-between p-6 z-10\\" transitionDelayMax={800}>\\n                        <div>\\n                            <p class=\\"text-white uppercase\\">{project.data.title}</p>\\n                            <p class=\\"text-light\\">{mediumString(project)||''}</p>\\n                        </div>\\n                        <a href={\\"/portfolio/\\"+project.uid} class=\\"brightness-200 hover:brightness-50 transition bump\\">\\n                            <img src={arrowButton} alt=\\"go to page\\" class=\\"h-full\\"/>\\n                        </a>\\n                    </AnimateIn>\\n                    \\n                </a>\\n           \\n        </div>\\n        {/each}\\n    </div>\\n      \\n\\n    </ContentWidth>\\n    \\n</section>\\n\\n<style>\\n    h1{\\n        font-family: Pragmatica;\\n        font-size: 200px;\\n        font-style: normal;\\n        font-weight: 400;\\n        line-height: 100%; /* 200px */\\n    }\\n\\n    @media only screen and (max-width:1024px) {\\n        h4{\\n            font-size: 36px;\\n        }\\n    }\\n</style>"],"names":[],"mappings":"AAuEI,gBAAE,CACE,WAAW,CAAE,UAAU,CACvB,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IACjB,CAEA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,WAAW,MAAM,CAAE,CACtC,gBAAE,CACE,SAAS,CAAE,IACf,CACJ"}`
};
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
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const projects = data.latestFourProjects.results;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ksb7j_START -->${$$result.title = `<title>${escape("Reddoor Creative | " + page.error?.message)}</title>`, ""}<!-- HEAD_svelte-ksb7j_END -->`, ""} <div class="h-screen w-screen fixed top-0 left-0">${validate_component(ContentWidth, "ContentWidth").$$render($$result, { class: "flex flex-row py-24 md:py-64" }, {}, {
    default: () => {
      return `<h1 class="text-primary/20 svelte-dlbrqk" data-svelte-h="svelte-1xjl1ni">404</h1>`;
    }
  })}</div> <section class="">${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "py-24 md:py-48 flex flex-col items-end"
    },
    {},
    {
      default: () => {
        return `<h4 class="md:w-4/5 svelte-dlbrqk" data-svelte-h="svelte-sws40j">Nothing to see here...<br>Let’s get you back on track.</h4> <h6 class="text-primary w-full md:w-4/5 mt-24 md:mt-48" data-svelte-h="svelte-12b2km">Enjoy our most recent work</h6> <div class="w-full md:ml-[20%] md:w-4/5 flex flex-row flex-wrap mt-12">${each(projects, (project, i) => {
          return `<div class="md:pr-6 pb-6 w-full lg:w-1/2 aspect-[4/3] transition-opacity duration-700 relative"><a${add_attribute("href", "/portfolio/" + project.uid, 0)} class="h-full w-full flex flex-col justify-end relative"><img${add_attribute("src", project.data.hero.url || "", 0)}${add_attribute("alt", project.data.title + " Hero Image", 0)} class="absolute w-full h-full object-cover"> <div class="w-full h-full absolute top-0 left-0 hover:opacity-60 transition-opacity duration-700" style="background: linear-gradient(180deg, rgba(12, 19, 35, 0.15) 0%, rgba(12, 19, 35, 0.80) 81.09%) 50% / cover no-repeat;"></div> ${validate_component(AnimateIn, "AnimateIn").$$render(
            $$result,
            {
              class: "w-full flex flex-row justify-between p-6 z-10",
              transitionDelayMax: 800
            },
            {},
            {
              default: () => {
                return `<div><p class="text-white uppercase">${escape(project.data.title)}</p> <p class="text-light">${escape(mediumString(project) || "")}</p></div> <a${add_attribute("href", "/portfolio/" + project.uid, 0)} class="brightness-200 hover:brightness-50 transition bump"><img${add_attribute("src", arrowButton, 0)} alt="go to page" class="h-full"></a> `;
              }
            }
          )}</a> </div>`;
        })}</div>`;
      }
    }
  )} </section>`;
});
export {
  Error as default
};
