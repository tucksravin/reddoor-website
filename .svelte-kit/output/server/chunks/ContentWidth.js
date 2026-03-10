import { c as create_ssr_component, o as onDestroy, a as add_attribute, e as escape, v as validate_component } from "./ssr.js";
const AnimateIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let el;
  let transitionDelay = 0;
  let { style = "" } = $$props;
  let { href = "" } = $$props;
  let { transitionDelayMax = 200 } = $$props;
  let { transitionDuration = 2400 } = $$props;
  let { isOff = false } = $$props;
  const checkViewport = () => {
  };
  onDestroy(() => {
    if (!isOff) {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", checkViewport);
      }
    }
  });
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.transitionDelayMax === void 0 && $$bindings.transitionDelayMax && transitionDelayMax !== void 0) $$bindings.transitionDelayMax(transitionDelayMax);
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0) $$bindings.transitionDuration(transitionDuration);
  if ($$props.isOff === void 0 && $$bindings.isOff && isOff !== void 0) $$bindings.isOff(isOff);
  return `${isOff ? `<div${add_attribute("class", $$props.class || "", 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${href ? `<a${add_attribute("href", href, 0)} class="${"transition ease-fast-slow " + escape(
    "opacity-0 translate-y-[50%]",
    true
  ) + " " + escape($$props.class || "", true)}" style="${"transition-delay:" + escape(transitionDelay, true) + "ms; transition-duration:" + escape(transitionDuration, true) + "ms; " + escape(style, true)}"${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<div class="${"transition ease-fast-slow " + escape(
    "opacity-0 translate-y-[50%]",
    true
  ) + " " + escape($$props.class || "", true)}" style="${"transition-delay:" + escape(transitionDelay, true) + "ms; transition-duration:" + escape(transitionDuration, true) + "ms; " + escape(style, true)}"${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</div>`}`}`;
});
const ContentWidth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { animateIn = false } = $$props;
  if ($$props.animateIn === void 0 && $$bindings.animateIn && animateIn !== void 0) $$bindings.animateIn(animateIn);
  return `${animateIn ? `${validate_component(AnimateIn, "AnimateIn").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"max-w-[1220px] xl:max-w-[1440px] xl:mx-auto mx-[4%] w-[92%] " + escape($$props.class || "flex flex-col items-center justify-center relative", true)}">${slots.default ? slots.default({}) : ``}</div>`;
    }
  })}` : `<div class="${"max-w-[1220px] xl:max-w-[1440px] xl:mx-auto mx-[4%] w-[92%] " + escape($$props.class || "flex flex-col items-center justify-center relative", true)}">${slots.default ? slots.default({}) : ``}</div>`}`;
});
export {
  AnimateIn as A,
  ContentWidth as C
};
