import { c as create_ssr_component, e as escape, a as add_attribute } from "./ssr.js";
const css = {
  code: "button.svelte-pm6jvd{padding:10px 15px;font-size:14px;line-height:normal}",
  map: `{"version":3,"file":"DefaultButton.svelte","sources":["DefaultButton.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let text = \\"\\";\\nexport let click = () => {\\n};\\nexport let filled = false;\\nexport let red = false;\\nexport let bold = false;\\nexport let href = \\"\\";\\n<\/script>\\n\\n<style>\\n    button{\\n        padding: 10px 15px;\\n        font-size: 14px;\\n        line-height: normal;\\n    }\\n\\n    \\n\\n\\n</style>\\n\\n    {#if !href}\\n    <button on:click={click} \\n            class=\\"\\n            {filled && red ?\\n                \\"bg-primary border-primary hover:bg-primary-dark active:bg-black text-white\\" \\n            : red ?\\n            'border-primary hover:bg-primary-dark active:bg-black text-primary hover:text-white' \\n            : filled ?\\n                \\"bg-white border-white hover:opacity-80 active:bg-black text-white\\"\\n            :\\n                \\" border-white hover:bg-white active:bg-black text-white hover:text-black\\"\\n            }\\n            \\n            {bold ?\\n            \\"font-semibold\\":\\n            \\"font-extralight\\"\\n            } \\n            pointer-events-auto border-1 tracking-wider rounded-[4px] text-center mb-5 sm:mb-0 cursor-pointer text-nowrap transition-all duration-300 active:-translate-y-2 {$$props.class || ''}\\">\\n            {text} <slot/>\\n    </button>\\n    {:else}\\n    <a href={href} rel=\\"noopener noreferrer\\">\\n        <button \\n            class=\\"\\n            {filled && red ?\\n                \\"bg-primary border-primary hover:bg-primary-dark active:bg-black text-white\\" \\n            : red ?\\n            'border-primary hover:bg-primary-dark active:bg-black text-primary hover:text-white' \\n            : filled ?\\n                \\"bg-white border-white hover:opacity-80 active:bg-black text-white\\"\\n            :\\n                \\" border-white hover:bg-white active:bg-black text-white hover:text-black\\"\\n            }\\n            {bold ?\\n            \\"font-semibold\\":\\n            \\"font-extralight\\"\\n            } \\n            pointer-events-auto tracking-wider border-1 rounded-[4px] text-center mb-5 sm:mb-0 cursor-pointer text-nowrap transition-all duration-300 active:-translate-y-2 {$$props.class || ''}\\">\\n            {text} <slot/>\\n        </button>\\n    </a>\\n    {/if}\\n"],"names":[],"mappings":"AAUI,oBAAM,CACF,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MACjB"}`
};
const DefaultButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { click = () => {
  } } = $$props;
  let { filled = false } = $$props;
  let { red = false } = $$props;
  let { bold = false } = $$props;
  let { href = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.click === void 0 && $$bindings.click && click !== void 0) $$bindings.click(click);
  if ($$props.filled === void 0 && $$bindings.filled && filled !== void 0) $$bindings.filled(filled);
  if ($$props.red === void 0 && $$bindings.red && red !== void 0) $$bindings.red(red);
  if ($$props.bold === void 0 && $$bindings.bold && bold !== void 0) $$bindings.bold(bold);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  $$result.css.add(css);
  return `${!href ? `<button class="${"" + escape(
    filled && red ? "bg-primary border-primary hover:bg-primary-dark active:bg-black text-white" : red ? "border-primary hover:bg-primary-dark active:bg-black text-primary hover:text-white" : filled ? "bg-white border-white hover:opacity-80 active:bg-black text-white" : " border-white hover:bg-white active:bg-black text-white hover:text-black",
    true
  ) + " " + escape(bold ? "font-semibold" : "font-extralight", true) + " pointer-events-auto border-1 tracking-wider rounded-[4px] text-center mb-5 sm:mb-0 cursor-pointer text-nowrap transition-all duration-300 active:-translate-y-2 " + escape($$props.class || "", true) + " svelte-pm6jvd"}">${escape(text)} ${slots.default ? slots.default({}) : ``}</button>` : `<a${add_attribute("href", href, 0)} rel="noopener noreferrer"><button class="${"" + escape(
    filled && red ? "bg-primary border-primary hover:bg-primary-dark active:bg-black text-white" : red ? "border-primary hover:bg-primary-dark active:bg-black text-primary hover:text-white" : filled ? "bg-white border-white hover:opacity-80 active:bg-black text-white" : " border-white hover:bg-white active:bg-black text-white hover:text-black",
    true
  ) + " " + escape(bold ? "font-semibold" : "font-extralight", true) + " pointer-events-auto tracking-wider border-1 rounded-[4px] text-center mb-5 sm:mb-0 cursor-pointer text-nowrap transition-all duration-300 active:-translate-y-2 " + escape($$props.class || "", true) + " svelte-pm6jvd"}">${escape(text)} ${slots.default ? slots.default({}) : ``}</button></a>`}`;
});
export {
  DefaultButton as D
};
