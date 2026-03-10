import { s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape, b as each } from "../../chunks/ssr.js";
import { getToolbarSrc } from "@prismicio/client";
import "../../chunks/client.js";
import { p as page } from "../../chunks/stores.js";
import { r as repositoryName } from "../../chunks/prismicio.js";
import { C as ContentWidth } from "../../chunks/ContentWidth.js";
import { i as isTop } from "../../chunks/isTop.js";
const PrismicPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toolbarSrc;
  let { repositoryName: repositoryName2 } = $$props;
  let { routePrefix = "preview" } = $$props;
  let { routePrefixName = routePrefix } = $$props;
  if ($$props.repositoryName === void 0 && $$bindings.repositoryName && repositoryName2 !== void 0) $$bindings.repositoryName(repositoryName2);
  if ($$props.routePrefix === void 0 && $$bindings.routePrefix && routePrefix !== void 0) $$bindings.routePrefix(routePrefix);
  if ($$props.routePrefixName === void 0 && $$bindings.routePrefixName && routePrefixName !== void 0) $$bindings.routePrefixName(routePrefixName);
  toolbarSrc = getToolbarSrc(repositoryName2);
  return `${$$result.head += `<!-- HEAD_svelte-92dhp6_START --><script defer${add_attribute("src", toolbarSrc, 0)}><\/script><!-- HEAD_svelte-92dhp6_END -->`, ""}`;
});
const LandscapeModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${``}`;
});
const rotatingReddoor = "/_app/immutable/assets/drawnReddoors.5uLWD5Ai.gif";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $isTop, $$unsubscribe_isTop;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_isTop = subscribe(isTop, (value) => $isTop = value);
  const NAV_LINKS = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    {
      label: "20 for 20",
      href: "/twenty-for-twenty"
    },
    { label: "Meet With Us", href: "/contact" }
  ];
  let showNav = false;
  let scrollY;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  showNav = $page.status === 404 || scrollY > 300 || $page.url.pathname.includes("about");
  $$unsubscribe_page();
  $$unsubscribe_isTop();
  return ` ${$$result.head += `<!-- HEAD_svelte-z3yz2w_START -->${$$result.title = `<title>${escape($page.data.title)}</title>`, ""}${$page.data.meta_description ? `<meta name="description"${add_attribute("content", $page.data.meta_description, 0)}>` : ``}${$page.data.meta_title ? `<meta name="og:title"${add_attribute("content", $page.data.meta_title, 0)}>` : ``}${$page.data.meta_image ? `<meta name="og:image"${add_attribute("content", $page.data.meta_image.url, 0)}> <meta name="twitter:card" content="summary_large_image">` : ``}<meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no"><!-- HEAD_svelte-z3yz2w_END -->`, ""} ${``} ${validate_component(LandscapeModal, "LandscapeModal").$$render($$result, {}, {}, {})} <main>${!showNav && !$isTop ? `<div class="${"h-12 w-screen top-0 absolute z-20 bg-transparent " + escape(
    data.pathname.includes("portfolio/") || data.pathname.includes("about") ? "text-white" : "text-black",
    true
  )}">${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-row justify-between items-center h-full"
    },
    {},
    {
      default: () => {
        return `<a href="/" class="hover:opacity-80 transition-all duration-500 bump label " data-svelte-h="svelte-131bylb">Reddoor Creative</a> <div class="flex flex-row"><div class="hidden lg:flex flex-row justify-between items-center gap-10">${each(NAV_LINKS, (item, i) => {
          return `<a class="label hover:opacity-80 transition-opacity "${add_attribute("href", item.href, 0)}>${escape(item.label)}</a>`;
        })}</div> <button class="lg:hidden ml-6 opacity-60 hover:opacity-100 transition-all">${`<i class="fa-sharp fa-thi fa-bars fa-2xl"></i>`}</button></div>`;
      }
    }
  )}</div>` : ``}  ${showNav && !$isTop ? `<div class="${"h-12 w-screen top-0 fixed z-20 " + escape(
    "bg-white",
    true
  ) + " bg-opacity-80"}">${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-row justify-between items-center h-full"
    },
    {},
    {
      default: () => {
        return `<a href="/" class="hover:opacity-80 transition-all duration-500 bump label" data-svelte-h="svelte-19oudrt">Reddoor Creative</a> <div class="flex flex-row"><div class="hidden lg:flex flex-row justify-between items-center gap-10">${each(NAV_LINKS, (item, i) => {
          return `${i < NAV_LINKS.length - 1 ? `<a class="label"${add_attribute("href", item.href, 0)}>${escape(item.label)}</a>` : `<a class="text-primary label"${add_attribute("href", item.href, 0)}>${escape(item.label)}</a>`}`;
        })}</div> <button class="lg:hidden ml-6 opacity-60 hover:opacity-100 transition-all">${`<i class="fa-sharp fa-bars fa-2xl"></i>`}</button></div>`;
      }
    }
  )}</div>` : ``} ${slots.default ? slots.default({}) : ``} <footer class="relative bg-paper"><div class="w-full h-full absolute top-0 left-0 bg-paper"></div> ${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "pb-4 flex flex-row justify-end items-end z-20 relative"
    },
    {},
    {
      default: () => {
        return `<div class="flex flex-col tracking-wide label gap-8 w-full md:w-1/3 lg:w-1/5"><div class="flex flex-col gap-1" data-svelte-h="svelte-759pf0"><a href="/" class="-translate-x-[8%] w-3/5 md:w-full"><img${add_attribute("src", rotatingReddoor, 0)} alt="reddoor drawn in multiple styles"></a> <a href="/portfolio" class="text-primary underline">Portfolio</a> <a href="/about" class="text-primary underline">About</a> <a href="/contact" class="text-primary underline">Meet with Us</a> <a href="https://www.linkedin.com/company/reddoor-creative" class="text-primary underline">LinkedIn</a> <a href="https://www.instagram.com/reddoorla/" class="text-primary underline">Instagram</a></div> <div class="flex flex-col" data-svelte-h="svelte-xplnds"><div>CONTACT</div> <a href="tel:3103413571" class="text-primary underline">+1 310-341-3571</a> <a href="mailto:info@reddoorla.com" class="text-primary underline">info@reddoorla.com</a></div> <div class="flex flex-col" data-svelte-h="svelte-1pz8qin"><div>HQ MAILING ADDRESS</div> <div>29027 Dapper Dan Dr.</div> <div>Fair Oaks Ranch, TX 78015</div></div> <div class="label text-nowrap">${escape("© Reddoor Creative 2006-" + (/* @__PURE__ */ new Date()).getFullYear() + ", All Rights Reserved")}</div></div>`;
      }
    }
  )}</footer></main> ${validate_component(PrismicPreview, "PrismicPreview").$$render($$result, { repositoryName }, {}, {})}`;
});
export {
  Layout as default
};
