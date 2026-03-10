import { c as create_ssr_component, i as createEventDispatcher, v as validate_component } from "../../../../chunks/ssr.js";
import { C as ContentWidth, A as AnimateIn } from "../../../../chunks/ContentWidth.js";
const css = {
  code: ".svelte-eakpeq:where(.flexible){min-width:300px;width:100%}",
  map: `{"version":3,"file":"Turnstile.svelte","sources":["Turnstile.svelte"],"sourcesContent":["<script>import { createEventDispatcher, onMount } from \\"svelte\\";\\nconst dispatch = createEventDispatcher();\\nlet loaded = typeof window != \\"undefined\\" && \\"turnstile\\" in window;\\nlet mounted = false;\\nexport let widgetId = null;\\nexport let turnstile = null;\\n$: turnstile = loaded && window.turnstile || null;\\nexport let siteKey;\\nexport let appearance = \\"always\\";\\nexport let language = \\"auto\\";\\nexport let execution = \\"render\\";\\nexport let action = void 0;\\nexport let cData = void 0;\\nexport let retryInterval = 8e3;\\nexport let retry = \\"auto\\";\\nexport let refreshExpired = \\"auto\\";\\nexport let theme = \\"auto\\";\\nexport let size = \\"normal\\";\\nexport let tabIndex = 0;\\nexport let forms = void 0;\\nexport let responseField = void 0;\\nexport let formsField = void 0;\\nexport let responseFieldName = void 0;\\nlet _class = void 0;\\nexport { _class as class };\\nexport const reset = () => {\\n  widgetId && window?.turnstile?.reset(widgetId);\\n};\\nconst turnstileAction = (node) => {\\n  const id = window.turnstile.render(node, {\\n    sitekey: siteKey,\\n    callback: (token) => {\\n      dispatch(\\"callback\\", { token });\\n      dispatch(\\"turnstile-callback\\", { token });\\n    },\\n    \\"error-callback\\": (code) => {\\n      dispatch(\\"error\\", { code });\\n      dispatch(\\"turnstile-error\\", { code });\\n    },\\n    \\"timeout-callback\\": () => {\\n      dispatch(\\"timeout\\", {});\\n      dispatch(\\"turnstile-timeout\\", {});\\n    },\\n    \\"expired-callback\\": () => {\\n      dispatch(\\"expired\\", {});\\n      dispatch(\\"turnstile-expired\\", {});\\n    },\\n    \\"before-interactive-callback\\": () => {\\n      dispatch(\\"before-interactive\\", {});\\n    },\\n    \\"after-interactive-callback\\": () => {\\n      dispatch(\\"after-interactive\\", {});\\n    },\\n    \\"unsupported-callback\\": () => dispatch(\\"unsupported\\", {}),\\n    \\"response-field-name\\": responseFieldName ?? formsField ?? \\"cf-turnstile-response\\",\\n    \\"response-field\\": responseField ?? forms ?? true,\\n    \\"refresh-expired\\": refreshExpired,\\n    \\"retry-interval\\": retryInterval,\\n    tabindex: tabIndex,\\n    appearance,\\n    execution,\\n    language,\\n    action,\\n    retry,\\n    theme,\\n    cData,\\n    size\\n  });\\n  widgetId = id;\\n  return {\\n    destroy: () => {\\n      window.turnstile.remove(id);\\n    }\\n  };\\n};\\nonMount(() => {\\n  mounted = true;\\n  if (!loaded) {\\n    const script = document.createElement(\\"script\\");\\n    script.type = \\"text/javascript\\";\\n    script.src = \\"https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit\\";\\n    script.async = true;\\n    script.addEventListener(\\"load\\", () => loaded = true, {\\n      once: true\\n    });\\n    document.head.appendChild(script);\\n  }\\n  return () => {\\n    mounted = false;\\n  };\\n});\\n<\/script>\\n\\n{#if loaded && mounted}\\n    {#key $$props}\\n        <div\\n            use:turnstileAction\\n            class:flexible={size == 'flexible'}\\n            class={_class} />\\n    {/key}\\n{/if}\\n\\n<style>\\n    :where(.flexible) {\\n        min-width: 300px;\\n        width: 100%;\\n    }\\n</style>\\n"],"names":[],"mappings":"cAuGI,OAAO,SAAS,CAAE,CACd,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IACX"}`
};
const Turnstile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let loaded = typeof window != "undefined" && "turnstile" in window;
  let { widgetId = null } = $$props;
  let { turnstile = null } = $$props;
  let { siteKey } = $$props;
  let { appearance = "always" } = $$props;
  let { language = "auto" } = $$props;
  let { execution = "render" } = $$props;
  let { action = void 0 } = $$props;
  let { cData = void 0 } = $$props;
  let { retryInterval = 8e3 } = $$props;
  let { retry = "auto" } = $$props;
  let { refreshExpired = "auto" } = $$props;
  let { theme = "auto" } = $$props;
  let { size = "normal" } = $$props;
  let { tabIndex = 0 } = $$props;
  let { forms = void 0 } = $$props;
  let { responseField = void 0 } = $$props;
  let { formsField = void 0 } = $$props;
  let { responseFieldName = void 0 } = $$props;
  let { class: _class = void 0 } = $$props;
  const reset = () => {
    widgetId && window?.turnstile?.reset(widgetId);
  };
  if ($$props.widgetId === void 0 && $$bindings.widgetId && widgetId !== void 0) $$bindings.widgetId(widgetId);
  if ($$props.turnstile === void 0 && $$bindings.turnstile && turnstile !== void 0) $$bindings.turnstile(turnstile);
  if ($$props.siteKey === void 0 && $$bindings.siteKey && siteKey !== void 0) $$bindings.siteKey(siteKey);
  if ($$props.appearance === void 0 && $$bindings.appearance && appearance !== void 0) $$bindings.appearance(appearance);
  if ($$props.language === void 0 && $$bindings.language && language !== void 0) $$bindings.language(language);
  if ($$props.execution === void 0 && $$bindings.execution && execution !== void 0) $$bindings.execution(execution);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0) $$bindings.action(action);
  if ($$props.cData === void 0 && $$bindings.cData && cData !== void 0) $$bindings.cData(cData);
  if ($$props.retryInterval === void 0 && $$bindings.retryInterval && retryInterval !== void 0) $$bindings.retryInterval(retryInterval);
  if ($$props.retry === void 0 && $$bindings.retry && retry !== void 0) $$bindings.retry(retry);
  if ($$props.refreshExpired === void 0 && $$bindings.refreshExpired && refreshExpired !== void 0) $$bindings.refreshExpired(refreshExpired);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0) $$bindings.theme(theme);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.tabIndex === void 0 && $$bindings.tabIndex && tabIndex !== void 0) $$bindings.tabIndex(tabIndex);
  if ($$props.forms === void 0 && $$bindings.forms && forms !== void 0) $$bindings.forms(forms);
  if ($$props.responseField === void 0 && $$bindings.responseField && responseField !== void 0) $$bindings.responseField(responseField);
  if ($$props.formsField === void 0 && $$bindings.formsField && formsField !== void 0) $$bindings.formsField(formsField);
  if ($$props.responseFieldName === void 0 && $$bindings.responseFieldName && responseFieldName !== void 0) $$bindings.responseFieldName(responseFieldName);
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0) $$bindings.class(_class);
  if ($$props.reset === void 0 && $$bindings.reset && reset !== void 0) $$bindings.reset(reset);
  $$result.css.add(css);
  turnstile = loaded && window.turnstile || null;
  return `${``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-dxfdpl_START -->${$$result.title = `<title>Contact | Reddoor Creative</title>`, ""}<!-- HEAD_svelte-dxfdpl_END -->`, ""} ${``} <div class="w-screen h-[50vh] max-h-96 relative bg-paper">${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "h-full flex flex-col justify-evenly items-start"
    },
    {},
    {
      default: () => {
        return `<div class="h-32"></div> <h4 class="text-primary z-10 md:ml-[20%]" data-svelte-h="svelte-1nvoqw7">We&#39;re excited to hear from you.</h4>`;
      }
    }
  )}</div> <div class="w-screen bg-white py-12">${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-col md:flex-row mb-48",
      animateIn: true
    },
    {},
    {
      default: () => {
        return `<h6 class="md:w-1/5 text-primary my-4" data-svelte-h="svelte-ti7jo8">Via Phone</h6> <div class="w-full md:w-4/5 flex flex-col"><h5 data-svelte-h="svelte-hfir8g">Give us a ring to set something up:</h5> <div class="w-full flex flex-col md:flex-row">${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "flex flex-col md:w-1/2" }, {}, {
          default: () => {
            return `<div class="large-body text-primary my-8" data-svelte-h="svelte-1ngnip6">California Office</div> <p data-svelte-h="svelte-1dvwqr9">Tim Holmes <br>
                        Creative Director <br>
                        +1  310-341-3571</p>`;
          }
        })} ${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "flex flex-col w-1/2" }, {}, {
          default: () => {
            return `<div class="large-body text-primary my-8" data-svelte-h="svelte-1wrwmo9">Texas Office</div> <p data-svelte-h="svelte-1734d6">Erik Svendsen <br>
                        Creative Director <br>
                        +1 310-418-9976</p>`;
          }
        })}</div></div>`;
      }
    }
  )} ${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-col md:flex-row mb-48",
      animateIn: true
    },
    {},
    {
      default: () => {
        return `<h6 class="md:w-1/5 text-primary my-4" data-svelte-h="svelte-1x3kibg">Via Email</h6> <div class="w-full md:w-4/5 flex flex-col gap-8"><h5 data-svelte-h="svelte-1xaccb2">Complete this form and we&#39;ll get back to you.</h5> <form class="h-full w-full mt-8 md:mt-0 md:w-2/3 flex flex-col gap-2 items-start md:pr-24" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">${validate_component(Turnstile, "Turnstile").$$render($$result, { siteKey: "0x4AAAAAAAh2fGW6xIcdsqNr" }, {}, {})} <input type="hidden" name="form-name" value="contact"> ${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "w-full" }, {}, {
          default: () => {
            return `<p data-svelte-h="svelte-6omub1">Name</p> <input type="text" name="name" required placeholder="first and last name" class="w-full border-1 border-mid p-2 mb-4">`;
          }
        })} ${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "w-full" }, {}, {
          default: () => {
            return `<p data-svelte-h="svelte-9txoqy">Company Name</p> <input type="text" name="company" placeholder="company name" class="w-full border-1 border-mid p-2 mb-4">`;
          }
        })} ${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "w-full" }, {}, {
          default: () => {
            return `<p data-svelte-h="svelte-1re75ec">Phone</p> <input type="phone" name="phone" required placeholder="000-000-0000" class="w-full border-1 border-mid p-2 mb-4">`;
          }
        })} ${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "w-full" }, {}, {
          default: () => {
            return `<p data-svelte-h="svelte-1dww0qg">Email</p> <input type="email" name="email" required placeholder="you@domain.com" class="w-full border-1 border-mid p-2 mb-4">`;
          }
        })} <p class="hidden" data-svelte-h="svelte-mfuuxn"><label>Don’t fill this out if you’re human: <input name="bot-field"></label></p> ${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "w-full" }, {}, {
          default: () => {
            return `<p data-svelte-h="svelte-i17m83">Message</p> <textarea name="message" required placeholder="how can we help?" class="min-h-24 w-full border-1 border-mid p-1 mb-4"></textarea>`;
          }
        })} ${validate_component(AnimateIn, "AnimateIn").$$render($$result, {}, {}, {
          default: () => {
            return `<input type="submit" value="LET'S CONNECT" class="text-primary border-b-2 hover:bg-primary hover:text-white p-3 font-bold border-primary bump cursor-pointer">`;
          }
        })}</form></div>`;
      }
    }
  )}</div>  <div class="w-screen py-40 md:h-[80vh] bg-paper-red flex flex-col items-center justify-center">${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-col md:flex-row items-start justify-between"
    },
    {},
    {
      default: () => {
        return `${validate_component(AnimateIn, "AnimateIn").$$render($$result, {}, {}, {
          default: () => {
            return `<h3 class="text-white md:w-3/5" data-svelte-h="svelte-z7n62t">Isn’t it time to arm your brand with a clear story and compelling design?</h3>`;
          }
        })}`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
