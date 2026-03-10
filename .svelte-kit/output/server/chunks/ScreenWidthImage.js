import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape } from "./ssr.js";
import { P as PrismicImage } from "./PrismicImage.js";
const placeholder = "data:image/svg+xml,%3csvg%20width='757'%20height='501'%20viewBox='0%200%20757%20501'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M297.528%20156C340.541%20156%20375.528%20121.013%20375.528%2078.014C375.528%2034.9873%20340.541%200%20297.528%200C254.515%200%20219.528%2034.9873%20219.528%2078C219.528%20121.013%20254.515%20156%20297.528%20156ZM297.528%2028.0122C325.092%2028.0122%20347.516%2050.45%20347.516%2078C347.516%20105.55%20325.092%20127.988%20297.528%20127.988C269.964%20127.988%20247.54%20105.564%20247.54%2078.014C247.54%2050.464%20269.964%2028.0122%20297.528%2028.0122ZM12.1766%20531.652C9.52468%20533.983%206.23074%20535.128%202.96473%20535.128C-0.901457%20535.128%20-4.75368%20533.536%20-7.51724%20530.396C-12.6117%20524.604%20-12.0534%20515.783%20-6.26108%20510.689L414.779%20124.444C420.306%20119.587%20428.653%20119.852%20433.873%20125.058L500.072%20191.256L636.771%2041.54C639.269%2038.8044%20642.758%2037.1715%20646.457%2037.004C650.128%2036.9202%20653.771%2038.1624%20656.506%2040.6607L823.994%20194.187C829.689%20199.393%20830.066%20208.228%20824.86%20213.908C819.654%20219.589%20810.819%20219.98%20805.138%20214.774L647.964%2070.6961L519.822%20211.019L586.915%20278.11C592.372%20283.568%20592.372%20292.388%20586.915%20297.846C581.458%20303.303%20572.637%20303.303%20567.179%20297.846L423.391%20154.075L12.1766%20531.652Z'%20fill='%23E7E8EB'/%3e%3c/svg%3e";
const css = {
  code: '.bg-darken-gradient.svelte-l5tkml{background:linear-gradient(\n      0deg,\n      rgba(0, 0, 0, 0.45) 0%,\n      rgba(0, 0, 0, 0.45) 100%\n    )}img.svelte-l5tkml:not([src]){font-size:0;position:relative}img.svelte-l5tkml:not([src])::after{content:"";display:block;font-size:1rem}',
  map: `{"version":3,"file":"ScreenWidthImage.svelte","sources":["ScreenWidthImage.svelte"],"sourcesContent":["<script lang=\\"ts\\">import placeholder from \\"../../assets/images/background_placeholder.svg\\";\\nimport { PrismicImage } from \\"@prismicio/svelte\\";\\nexport let src = \\"\\";\\nexport let field = void 0;\\nexport let altText = \\"background image\\";\\nexport let placeholderSide = \\"right\\";\\nexport let vimeoId = \\"\\";\\nexport let darken = false;\\nexport let backdrop = false;\\nexport let alt = \\"\\";\\nlet viewportHeight = 1024;\\nlet viewportWidth = 768;\\nlet videoLoaded = false;\\nlet showVideo = true;\\nconst handleVideoError = (error) => {\\n  console.log(error);\\n  showVideo = false;\\n};\\n<\/script>\\n\\n<svelte:window\\n  bind:innerHeight={viewportHeight}\\n  bind:innerWidth={viewportWidth}\\n/>\\n\\n<section\\n  class=\\"h-screen w-screen overflow-clip {$$props.class || ''}\\n  {backdrop\\n    ? 'fixed -z-10 top-0 left-0'\\n    : 'relative'}\\"\\n>\\n  <div\\n    class=\\"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video\\n    {viewportHeight * 16 > viewportWidth * 9 ? 'h-screen min-w-full': 'w-screen min-h-full'}\\"\\n  >\\n    <!-- Image fallback - always present -->\\n     \\n    {#if !field}\\n      <img\\n        {src}\\n        alt={alt||altText}\\n        class=\\"absolute bottom-0 {placeholderSide}-0 h-full w-full object-cover -z-10\\n        {src === placeholder ? 'lg:w-[45%] md:h-auto' : ''}\\n        \\"\\n      />\\n    {:else}\\n      <PrismicImage\\n        {field}\\n        class=\\"absolute h-full w-full object-cover -z-10\\"\\n      />\\n    {/if}\\n\\n    <!-- Video - only show if vimeoId exists and hasn't failed -->\\n    {#if vimeoId}\\n      <iframe\\n        title=\\"background video\\"\\n        src={\`https://player.vimeo.com/video/\${vimeoId}?background=1&muted=1&loop=1&autoplay=1\`}\\n        class=\\"aspect-video absolute {viewportHeight * 16 > viewportWidth * 9\\n          ? 'h-screen min-w-full'\\n          : 'w-screen min-h-full'} contrast-[1.15] -z-10\\n        {showVideo ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300\\"\\n        frameborder=\\"0\\"\\n        allowfullscreen\\n\\t\\ton:error={handleVideoError}\\n      ></iframe>\\n    {/if}\\n\\n    {#if darken}\\n      <div\\n        class=\\"bg-darken-gradient pointer-events-none absolute w-full h-full top-0 left-0 -z-10\\"\\n      ></div>\\n    {/if}\\n  </div>\\n  <slot/>\\n</section>\\n\\n<style>\\n  .bg-darken-gradient {\\n    background: linear-gradient(\\n      0deg,\\n      rgba(0, 0, 0, 0.45) 0%,\\n      rgba(0, 0, 0, 0.45) 100%\\n    );\\n  }\\n\\n  img:not([src]) {\\n  font-size: 0; /* Hide the alt text visually */\\n  position: relative; /* Establish a positioning context for the pseudo-element */\\n}\\n\\nimg:not([src])::after {\\n  content: \\"\\"; /* Or a custom fallback message */\\n  display: block;\\n  font-size: 1rem; /* Reset font size for the custom content */\\n  /* Add styling for your custom fallback element if desired */\\n  /* For example:\\n  border: 1px solid #ccc;\\n  padding: 5px;\\n  background-color: #f0f0f0;\\n  */\\n}\\n</style>"],"names":[],"mappings":"AA6EE,iCAAoB,CAClB,UAAU,CAAE;AAChB,MAAM,IAAI;AACV,MAAM,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,EAAE;AAC5B,MAAM,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC;AAC1B,KACE,CAEA,iBAAG,KAAK,CAAC,GAAG,CAAC,CAAE,CACf,SAAS,CAAE,CAAC,CACZ,QAAQ,CAAE,QACZ,CAEA,iBAAG,KAAK,CAAC,GAAG,CAAC,CAAC,OAAQ,CACpB,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CACd,SAAS,CAAE,IAOb"}`
};
const ScreenWidthImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = "" } = $$props;
  let { field = void 0 } = $$props;
  let { altText = "background image" } = $$props;
  let { placeholderSide = "right" } = $$props;
  let { vimeoId = "" } = $$props;
  let { darken = false } = $$props;
  let { backdrop = false } = $$props;
  let { alt = "" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.altText === void 0 && $$bindings.altText && altText !== void 0) $$bindings.altText(altText);
  if ($$props.placeholderSide === void 0 && $$bindings.placeholderSide && placeholderSide !== void 0) $$bindings.placeholderSide(placeholderSide);
  if ($$props.vimeoId === void 0 && $$bindings.vimeoId && vimeoId !== void 0) $$bindings.vimeoId(vimeoId);
  if ($$props.darken === void 0 && $$bindings.darken && darken !== void 0) $$bindings.darken(darken);
  if ($$props.backdrop === void 0 && $$bindings.backdrop && backdrop !== void 0) $$bindings.backdrop(backdrop);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
  $$result.css.add(css);
  return ` <section class="${"h-screen w-screen overflow-clip " + escape($$props.class || "", true) + " " + escape(backdrop ? "fixed -z-10 top-0 left-0" : "relative", true) + " svelte-l5tkml"}"><div class="${"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video " + escape(
    "h-screen min-w-full",
    true
  )}"> ${!field ? `<img${add_attribute("src", src, 0)}${add_attribute("alt", alt || altText, 0)} class="${"absolute bottom-0 " + escape(placeholderSide, true) + "-0 h-full w-full object-cover -z-10 " + escape(src === placeholder ? "lg:w-[45%] md:h-auto" : "", true) + " svelte-l5tkml"}">` : `${validate_component(PrismicImage, "PrismicImage").$$render(
    $$result,
    {
      field,
      class: "absolute h-full w-full object-cover -z-10"
    },
    {},
    {}
  )}`}  ${vimeoId ? `<iframe title="background video"${add_attribute("src", `https://player.vimeo.com/video/${vimeoId}?background=1&muted=1&loop=1&autoplay=1`, 0)} class="${"aspect-video absolute " + escape(
    "h-screen min-w-full",
    true
  ) + " contrast-[1.15] -z-10 " + escape("opacity-100", true) + " transition-opacity duration-300"}" frameborder="0" allowfullscreen></iframe>` : ``} ${darken ? `<div class="bg-darken-gradient pointer-events-none absolute w-full h-full top-0 left-0 -z-10 svelte-l5tkml"></div>` : ``}</div> ${slots.default ? slots.default({}) : ``} </section>`;
});
export {
  ScreenWidthImage as S
};
