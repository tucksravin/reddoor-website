import { c as create_ssr_component, a as add_attribute, v as validate_component, b as each, e as escape, m as missing_component, o as onDestroy } from "./ssr.js";
import { C as ContentWidth, A as AnimateIn } from "./ContentWidth.js";
import { isFilled } from "@prismicio/client";
import { P as PrismicImage } from "./PrismicImage.js";
import { asTree } from "@prismicio/richtext";
import { P as PrismicLink } from "./PrismicLink.js";
import "svelte-gestures";
const PrismicEmbed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  return ` ${isFilled.embed(field) ? `<div${add_attribute("data-oembed", field.embed_url, 0)}${add_attribute("data-oembed-type", field.type, 0)}${add_attribute("data-oembed-provider", field.provider_name, 0)}> <!-- HTML_TAG_START -->${field.html}<!-- HTML_TAG_END --></div>` : ``}`;
});
const DefaultComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dir;
  let { node } = $$props;
  if ($$props.node === void 0 && $$bindings.node && node !== void 0) $$bindings.node(node);
  dir = "direction" in node && node.direction === "rtl" ? "rtl" : void 0;
  return `${node.type === "heading1" ? `<h1${add_attribute("dir", dir, 0)}>${slots.default ? slots.default({}) : ``}</h1>` : `${node.type === "heading2" ? `<h2${add_attribute("dir", dir, 0)}>${slots.default ? slots.default({}) : ``}</h2>` : `${node.type === "heading3" ? `<h3${add_attribute("dir", dir, 0)}>${slots.default ? slots.default({}) : ``}</h3>` : `${node.type === "heading4" ? `<h4${add_attribute("dir", dir, 0)}>${slots.default ? slots.default({}) : ``}</h4>` : `${node.type === "heading5" ? `<h5${add_attribute("dir", dir, 0)}>${slots.default ? slots.default({}) : ``}</h5>` : `${node.type === "heading6" ? `<h6${add_attribute("dir", dir, 0)}>${slots.default ? slots.default({}) : ``}</h6>` : `${node.type === "paragraph" ? `<p${add_attribute("dir", dir, 0)}>${slots.default ? slots.default({}) : ``}</p>` : `${node.type === "preformatted" ? `<pre>${slots.default ? slots.default({}) : ``}</pre>` : `${node.type === "strong" ? `<strong>${slots.default ? slots.default({}) : ``}</strong>` : `${node.type === "em" ? `<em>${slots.default ? slots.default({}) : ``}</em>` : `${node.type === "list-item" ? `<li${add_attribute("dir", dir, 0)}>${slots.default ? slots.default({}) : ``}</li>` : `${node.type === "o-list-item" ? `<li${add_attribute("dir", dir, 0)}>${slots.default ? slots.default({}) : ``}</li>` : `${node.type === "group-list-item" ? `<ul>${slots.default ? slots.default({}) : ``}</ul>` : `${node.type === "group-o-list-item" ? `<ol>${slots.default ? slots.default({}) : ``}</ol>` : `${node.type === "image" ? `<p class="block-img">${validate_component(PrismicImage, "PrismicImage").$$render($$result, { field: node }, {}, {})}</p>` : `${node.type === "embed" ? `${validate_component(PrismicEmbed, "PrismicEmbed").$$render($$result, { field: node.oembed }, {}, {})}` : `${node.type === "hyperlink" ? `${validate_component(PrismicLink, "PrismicLink").$$render($$result, { field: node.data }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${node.type === "label" ? `<span${add_attribute("class", node.data.label, 0)}>${slots.default ? slots.default({}) : ``}</span>` : `${each(node.text.split("\n"), (line, index) => {
    return `${index > 0 ? `<br>` : ``}${escape(line)}`;
  })}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`;
});
const Serialize = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { components: components2 = {} } = $$props;
  let { children } = $$props;
  const CHILD_TYPE_RENAMES = {
    "list-item": "listItem",
    "o-list-item": "oListItem",
    "group-list-item": "list",
    "group-o-list-item": "oList"
  };
  function getComponent(child) {
    return components2[CHILD_TYPE_RENAMES[child.type] || child.type] || DefaultComponent;
  }
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0) $$bindings.components(components2);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0) $$bindings.children(children);
  return `${each(children, (child) => {
    return `${validate_component(getComponent(child) || missing_component, "svelte:component").$$render($$result, { node: child.node }, {}, {
      default: () => {
        return ` ${child.children.length > 0 ? `${validate_component(Serialize, "svelte:self").$$render($$result, { children: child.children, components: components2 }, {}, {})}` : ``}`;
      }
    })}`;
  })}`;
});
const PrismicRichText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let children;
  let { field } = $$props;
  let { components: components2 = {} } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0) $$bindings.components(components2);
  children = asTree(field).children;
  return ` ${validate_component(Serialize, "Serialize").$$render($$result, { children, components: components2 }, {}, {})}`;
});
const TodoComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  "slice_type" in slice ? slice.slice_type : slice.type;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0) $$bindings.slice(slice);
  return `${``}`;
});
const SliceZone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slices = [] } = $$props;
  let { components: components2 = {} } = $$props;
  let { context = {} } = $$props;
  let { defaultComponent = void 0 } = $$props;
  if ($$props.slices === void 0 && $$bindings.slices && slices !== void 0) $$bindings.slices(slices);
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0) $$bindings.components(components2);
  if ($$props.context === void 0 && $$bindings.context && context !== void 0) $$bindings.context(context);
  if ($$props.defaultComponent === void 0 && $$bindings.defaultComponent && defaultComponent !== void 0) $$bindings.defaultComponent(defaultComponent);
  return ` ${each(slices, (slice, index) => {
    let type = "slice_type" in slice ? slice.slice_type : slice.type, Component = components2[type] || defaultComponent;
    return `  ${Component ? `${slice.__mapped ? (() => {
      let { __mapped, ...mappedProps } = slice;
      return ` ${validate_component(Component || missing_component, "svelte:component").$$render($$result, Object.assign({}, mappedProps), {}, {})}`;
    })() : `${validate_component(Component || missing_component, "svelte:component").$$render($$result, { slice, slices, context, index }, {}, {})}`}` : `${validate_component(TodoComponent, "TodoComponent").$$render($$result, { slice }, {}, {})}`}`;
  })}`;
});
const ContentWidthMedia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  let backgroundColorString = "bg-" + slice.primary.background;
  let showVideos = new Array(slice.primary.images.length).fill(true);
  let frames = new Array(slice.primary.images.length);
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0) $$bindings.slice(slice);
  return `${!slice.primary.hide ? `<section${add_attribute("data-slice-type", slice.slice_type, 0)}${add_attribute("data-slice-variation", slice.variation, 0)} class="${"w-screen relative " + escape(slice.primary.hasPadding ? "py-12" : "", true) + " " + escape(backgroundColorString, true)}">${validate_component(ContentWidth, "ContentWidth").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"w-full flex flex-col " + escape(slice.primary.isFullContentWidth ? "" : "md:flex-row", true)}">${validate_component(AnimateIn, "AnimateIn").$$render(
        $$result,
        {
          isOff: slice.primary.isAnimated !== null && !slice.primary.isAnimated,
          class: (slice.primary.isFullContentWidth ? "w-full" : "w-full md:w-1/5") + " h-full overflow-hidden pr-6"
        },
        {},
        {
          default: () => {
            return `<h6 class="text-primary">${escape(slice.primary.label || "")}</h6> ${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: slice.primary.body }, {}, {})}`;
          }
        }
      )} <div class="${escape(
        slice.primary.isFullContentWidth ? "w-full" : "w-full md:w-4/5",
        true
      ) + " flex flex-row justify-center flex-wrap"}">${each(slice.primary.images, (item, i) => {
        return `${isFilled.link(item.link) ? `${validate_component(AnimateIn, "AnimateIn").$$render(
          $$result,
          {
            isOff: slice.primary.isAnimated !== null && !slice.primary.isAnimated,
            transitionDelayMax: slice.primary.hasGap ? 400 : 0,
            class: (slice.primary.hasGap ? "pr-6 pb-6" : "") + " relative w-full flex flex-col items-center justify-start cursor-pointer " + (slice.primary.desktopcolumns === "2" ? "lg:w-1/2" : "") + " " + (slice.primary.desktopcolumns === "3" ? "lg:w-1/3" : " ") + " \n                  " + (item.aspect === "square" ? "aspect-square" : item.aspect === "4/3" ? "aspect-[4/3]" : item.aspect === "3/4" ? "aspect-[3/4]" : item.aspect === "16/9" ? "aspect-video" : item.aspect === "9/16" ? "aspect-[9/16]" : "") + "\n                  "
          },
          {},
          {
            default: () => {
              return `<a${add_attribute("href", item.link.url, 0)} class="relative w-full flex flex-col items-center justify-start">${item.label ? `<div class="w-full border-b-1 border-dark label mb-8 cursor-pointer">${escape(item.label)} </div>` : ``} ${item.vimeoid ? `${validate_component(PrismicImage, "PrismicImage").$$render(
                $$result,
                {
                  class: "w-full h-full object-cover absolute top-0 left-0 z-0",
                  field: item.image
                },
                {},
                {}
              )} <iframe title="background video"${add_attribute(
                "src",
                `https://player.vimeo.com/video/${item.vimeoid}?title=0${item.loopvideo ? "&background=1&loop=1&autoplay=1&muted=1" : ""}`,
                0
              )} class="${"object-cover w-full " + escape(item.aspect !== "free" ? "h-full" : "", true) + " mx-auto z-10 " + escape(showVideos[i] ? "opacity-100" : "opacity-0", true) + " transition-opacity duration-300"}" frameborder="0" allow="autoplay"${add_attribute("this", frames[i], 0)}></iframe>` : `${validate_component(PrismicImage, "PrismicImage").$$render(
                $$result,
                {
                  class: "w-full " + (item.aspect !== "free" ? "h-full" : "") + " object-cover cursor-pointer",
                  field: item.image
                },
                {},
                {}
              )}`}</a> `;
            }
          }
        )}` : `${validate_component(AnimateIn, "AnimateIn").$$render(
          $$result,
          {
            isOff: slice.primary.isAnimated !== null && !slice.primary.isAnimated,
            class: (slice.primary.hasGap ? "pr-6 pb-6" : "") + " relative w-full flex flex-col items-center justify-start \n                      " + (slice.primary.desktopcolumns === "2" ? "lg:w-1/2" : "") + " " + (slice.primary.desktopcolumns === "3" ? "lg:w-1/3" : "") + "\n                  " + (item.aspect === "square" ? "aspect-square" : item.aspect === "4/3" ? "aspect-[4/3]" : item.aspect === "3/4" ? "aspect-[3/4]" : item.aspect === "16/9" ? "aspect-video" : item.aspect === "9/16" ? "aspect-[9/16]" : "")
          },
          {},
          {
            default: () => {
              return `${item.label ? `<div class="w-full border-b-1 border-dark label mb-8">${escape(item.label)} </div>` : ``} ${validate_component(PrismicImage, "PrismicImage").$$render(
                $$result,
                {
                  class: "w-full " + (item.aspect !== "free" ? "h-full" : "") + " object-cover",
                  field: item.image
                },
                {},
                {}
              )} ${item.vimeoid ? `${validate_component(PrismicImage, "PrismicImage").$$render(
                $$result,
                {
                  class: "w-full h-full object-cover absolute top-0 left-0 z-0",
                  field: item.image
                },
                {},
                {}
              )} <iframe title="background video"${add_attribute(
                "src",
                `https://player.vimeo.com/video/${item.vimeoid}?title=0${item.loopvideo ? "&background=1&loop=1&autoplay=1&muted=1" : ""}`,
                0
              )} class="${"object-cover w-full " + escape(item.aspect !== "free" ? "h-full" : "", true) + " z-10 " + escape(showVideos[i] ? "opacity-100" : "opacity-0", true) + " transition-opacity duration-300"}" frameborder="0" allow="autoplay"${add_attribute("this", frames[i], 0)}></iframe>` : ``} `;
            }
          }
        )}`}`;
      })}</div></div>`;
    }
  })}</section>` : ``}`;
});
const RichText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  let backgroundColorString = "bg-" + slice.primary.backgroundcolor;
  const float = slice.primary.float;
  const width = slice.primary.width;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0) $$bindings.slice(slice);
  return `${!slice.primary.hide ? `<section class="${"w-full " + escape(slice.primary.hasPadding ? "py-12" : "", true) + " text-" + escape(slice.primary.textColor, true) + " " + escape(backgroundColorString, true)}">${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-col \n		" + (float === "right" ? "items-end" : "") + "\n		" + (float === "center" ? "items-center" : "") + "\n		" + (float === "left" ? "items-start" : "") + "\n		",
      animateIn: slice.primary.isAnimated === null || slice.primary.isAnimated
    },
    {},
    {
      default: () => {
        return `<div class="${"" + escape(width === "4/5" ? "w-full md:w-4/5" : "", true) + " " + escape(width === "3/5" ? "w-full md:w-3/5" : "", true) + " pr-6 rich-text"}">${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: slice.primary.content }, {}, {})}</div>`;
      }
    }
  )}</section>` : ``}`;
});
const ScreenWidthColumns = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  let backgroundColorString = "bg-" + slice.primary.background;
  let showVideos = new Array(slice.primary.media.length).fill(true);
  let frames = new Array(slice.primary.media.length);
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0) $$bindings.slice(slice);
  return `${!slice.primary.hide ? `<section${add_attribute("data-slice-type", slice.slice_type, 0)}${add_attribute("data-slice-variation", slice.variation, 0)} class="${"w-screen flex flex-row justify-center flex-wrap relative " + escape(slice.primary.hasPadding ? "py-12" : "", true) + " " + escape(backgroundColorString, true)}">${each(slice.primary.media, (item, i) => {
    return `${isFilled.link(item.link) ? `${validate_component(AnimateIn, "AnimateIn").$$render(
      $$result,
      {
        isOff: slice.primary.isAnimated !== null && !slice.primary.isAnimated,
        class: "\n            " + (slice.primary.hasGap ? "mr-6 mb-6" : "") + " \n            " + (item.aspect === "square" ? "aspect-square" : item.aspect === "4/3" ? "aspect-[4/3]" : item.aspect === "3/4" ? "aspect-[3/4]" : item.aspect === "16/9" ? "aspect-video" : item.aspect === "9/16" ? "aspect-[9/16]" : "") + " \n            relative w-full flex flex-col items-center justify-start \n            " + (slice.primary.desktopcolumns === "2" ? "lg:w-1/2" : slice.primary.desktopcolumns === "3" ? "lg:w-1/3" : "")
      },
      {},
      {
        default: () => {
          return `<a${add_attribute("href", item.link.url, 0)} class="relative w-full flex flex-col items-center justify-start">${item.label ? `<div class="w-full border-b-1 border-dark label mb-8">${escape(item.label)} </div>` : ``} ${item.vimeoId ? `${validate_component(PrismicImage, "PrismicImage").$$render(
            $$result,
            {
              class: "w-full h-full object-cover absolute top-0 left-0",
              field: item.image
            },
            {},
            {}
          )} <iframe title="background video"${add_attribute(
            "src",
            `https://player.vimeo.com/video/${item.vimeoId}?title=0${item.loopvideo ? "&background=1&loop=1&autoplay=1&muted=1" : ""}`,
            0
          )} class="${"object-cover " + escape(item.aspect !== "free" ? "h-full" : "", true) + " relative w-full mx-auto z-10 " + escape(showVideos[i] ? "opacity-100" : "opacity-0", true) + " transition-opacity duration-200"}" frameborder="0" allow="autoplay"${add_attribute("this", frames[i], 0)}></iframe>` : `${validate_component(PrismicImage, "PrismicImage").$$render(
            $$result,
            {
              class: "w-full " + (item.aspect !== "free" ? "h-full" : "") + " object-cover",
              field: item.image
            },
            {},
            {}
          )}`}</a> `;
        }
      }
    )}` : `${validate_component(AnimateIn, "AnimateIn").$$render(
      $$result,
      {
        isOff: slice.primary.isAnimated !== null && !slice.primary.isAnimated,
        class: (slice.primary.hasGap ? "mr-6 mb-6" : "") + " relative w-full flex flex-col items-center justify-start \n            " + (item.aspect === "square" ? "aspect-square" : item.aspect === "4/3" ? "aspect-[4/3]" : item.aspect === "3/4" ? "aspect-[3/4]" : item.aspect === "16/9" ? "aspect-video" : item.aspect === "9/16" ? "aspect-[9/16]" : "") + " \n            relative w-full flex flex-col items-center justify-start \n            " + (slice.primary.desktopcolumns === "2" ? "lg:w-1/2" : slice.primary.desktopcolumns === "3" ? "lg:w-1/3" : "")
      },
      {},
      {
        default: () => {
          return `${item.label ? `<div class="w-full border-b-1 border-dark label mb-8">${escape(item.label)} </div>` : ``} ${item.vimeoId ? `${validate_component(PrismicImage, "PrismicImage").$$render(
            $$result,
            {
              class: "w-full h-full object-cover absolute top-0 left-0",
              field: item.image
            },
            {},
            {}
          )} <iframe title="background video"${add_attribute(
            "src",
            `https://player.vimeo.com/video/${item.vimeoId}?title=0${item.loopvideo ? "&background=1&loop=1&autoplay=1&muted=1" : ""}`,
            0
          )} class="${"object-cover " + escape(item.aspect !== "free" ? "h-full" : "", true) + " w-full mx-auto z-10 relative " + escape(showVideos[i] ? "opacity-100" : "opacity-0", true) + " transition-opacity duration-200"}" frameborder="0" allow="autoplay"${add_attribute("this", frames[i], 0)}></iframe>` : `${validate_component(PrismicImage, "PrismicImage").$$render(
            $$result,
            {
              class: "w-full " + (item.aspect !== "free" ? "h-full" : "") + " object-cover",
              field: item.image
            },
            {},
            {}
          )}`} `;
        }
      }
    )}`}`;
  })}</section>` : ``}`;
});
const ScreenWidthMedia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  let backgroundColorString = "bg-" + slice.primary.background;
  let iframe;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0) $$bindings.slice(slice);
  return ` ${!slice.primary.hide ? `<section class="${"w-full relative overflow-hidden " + escape(slice.primary.hasPadding ? "py-12" : "", true) + " " + escape(backgroundColorString, true)}">${slice.primary.vimeoid ? `${validate_component(PrismicImage, "PrismicImage").$$render(
    $$result,
    {
      class: "w-screen h-full object-cover absolute " + (slice.primary.hasPadding ? "top-12" : "top-0") + " left-0 z-0",
      field: slice.primary.image
    },
    {},
    {}
  )} <iframe title="background video"${add_attribute(
    "src",
    `https://player.vimeo.com/video/${slice.primary.vimeoid}?title=0${slice.primary.loopvideo ? "&background=1&loop=1&autoplay=1&muted=1" : ""}`,
    0
  )} class="${"object-cover " + escape(
    slice.primary.aspect === "square" ? "aspect-square" : slice.primary.aspect === "4/3" ? "aspect-[4/3]" : slice.primary.aspect === "3/4" ? "aspect-[3/4]" : slice.primary.aspect === "16/9" ? "aspect-video" : slice.primary.aspect === "9/16" ? "aspect-[9/16]" : "",
    true
  ) + " w-screen mx-auto relative z-10 " + escape("opacity-100", true) + " transition-opacity duration-200"}" frameborder="0" allow="autoplay; fullscreen;"${add_attribute("this", iframe, 0)}></iframe>` : `${validate_component(PrismicImage, "PrismicImage").$$render(
    $$result,
    {
      class: "w-screen object-cover " + (slice.primary.aspect === "square" ? "aspect-square" : slice.primary.aspect === "4/3" ? "aspect-[4/3]" : slice.primary.aspect === "3/4" ? "aspect-[3/4]" : slice.primary.aspect === "16/9" ? "aspect-video" : slice.primary.aspect === "9/16" ? "aspect-[9/16]" : ""),
      field: slice.primary.image
    },
    {},
    {}
  )}`}</section>` : ``}`;
});
const Slideshow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let backgroundColorString;
  let translateX;
  let displayIndex;
  let { slice } = $$props;
  const mediaArray = slice.primary.images;
  let currentIndex = 0;
  const tripledArray = [...mediaArray, ...mediaArray, ...mediaArray];
  const slideWidth = 100 / tripledArray.length;
  const getTranslateX = (index) => {
    return -(index + mediaArray.length) * slideWidth;
  };
  onDestroy(() => {
  });
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0) $$bindings.slice(slice);
  backgroundColorString = `bg-${slice.primary.backgroundcolor}`;
  translateX = getTranslateX(currentIndex);
  displayIndex = (currentIndex % mediaArray.length + mediaArray.length) % mediaArray.length;
  return `${!slice.primary.hide ? `${validate_component(AnimateIn, "AnimateIn").$$render(
    $$result,
    {
      isOff: !slice.primary.isAnimated,
      class: "w-full py-12 " + backgroundColorString
    },
    {},
    {
      default: () => {
        return `${validate_component(ContentWidth, "ContentWidth").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="w-full flex flex-col md:flex-row md:w-full"> <div class="${escape(
              slice.primary.isFullContentWidth ? "w-0" : "w-full md:w-1/5",
              true
            ) + " h-full overflow-hidden"}"><h6 class="text-primary">${escape(slice.primary.label || "")}</h6> ${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: slice.primary.body }, {}, {})}</div>  <div class="${escape(
              slice.primary.isFullContentWidth ? "w-full" : "w-full md:w-4/5",
              true
            ) + " flex flex-row flex-wrap"}"><div class="w-full h-full relative overflow-hidden aspect-video"> <div class="flex flex-row flex-nowrap transition-transform ease-[cubic-bezier(0.25,0.1,0.25,1)]" style="${"width: " + escape(tripledArray.length * 100, true) + "%; transform: translateX(" + escape(translateX, true) + "%); transition-duration: " + escape(0, true) + "ms;"}">${each(tripledArray, (media, i) => {
              return `<div class="h-full z-0" style="${"width: " + escape(slideWidth, true) + "%;"}">${validate_component(PrismicImage, "PrismicImage").$$render(
                $$result,
                {
                  field: media.image,
                  class: "h-full w-full object-contain"
                },
                {},
                {}
              )} </div>`;
            })}</div>  <div class="ml-8 h-6 w-[72px] flex justify-between z-10 absolute bottom-2 lg:bottom-6 left-0"><button ${""} class="h-6 w-6 rounded-full border-mid border-2 p-1 flex align-middle justify-center cursor-pointer transition-all duration-300 active:-translate-y-1 hover:bg-primary hover:border-primary hover:text-white disabled:opacity-50 disabled:cursor-default" aria-label="Previous slide"><i class="-translate-y-[1.75px] -translate-x-[0.75px] fa-solid fa-sharp fa-chevron-left scale-90"></i></button> <button ${""} class="h-6 w-6 rounded-full border-mid border-2 p-1 flex align-middle cursor-pointer transition-all duration-300 active:-translate-y-1 justify-center hover:bg-primary hover:border-primary hover:text-white disabled:opacity-50 disabled:cursor-default" aria-label="Next slide"><i class="-translate-y-[1.75px] translate-x-[0.75px] fa-solid fa-sharp fa-chevron-right scale-90"></i></button></div>  <button class="absolute bottom-2 lg:bottom-6 right-2 lg:right-6 h-6 w-6 rounded-full border-mid border-2 p-1 flex align-middle justify-center cursor-pointer transition-all duration-300 active:-translate-y-1 hover:bg-primary hover:border-primary hover:text-white"${add_attribute("aria-label", "Pause slideshow", 0)}>${`<i class="-translate-y-[1.5px] fa-solid fa-sharp fa-pause scale-90"></i>`}</button> ${slice.primary.hasNavDots ? `<div class="absolute bottom-2 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-1.5">${each(mediaArray, (_, i) => {
              return `<button ${displayIndex === i ? "disabled" : ""} class="${"w-2 h-2 rounded-full transition-all duration-300 opacity-60 hover:opacity-100 " + escape(displayIndex === i ? "bg-primary" : "bg-mid", true)}" aria-label="${"Go to slide " + escape(i + 1, true)}"></button>`;
            })}</div>` : ``}</div></div></div>`;
          }
        })}`;
      }
    }
  )}` : ``}`;
});
const ValueBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0) $$bindings.slice(slice);
  return `${!slice.primary.hide ? `<section${add_attribute("data-slice-type", slice.slice_type, 0)}${add_attribute("data-slice-variation", slice.variation, 0)} class="w-screen py-12 bg-paper-red relative">${validate_component(ContentWidth, "ContentWidth").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="w-full flex flex-col xl:flex-row xl:w-full"><div class="w-full xl:w-1/5 h-full overflow-hidden pt-4"><h6 class="text-white">${escape(slice.primary.eyebrow || "")}</h6></div> <div class="w-full xl:w-2/5 text-white flex flex-col gap-2 p-4 rich-text"><h3 class="mb-4">${escape(slice.primary.title || "")}</h3> ${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: slice.primary.body }, {}, {})}</div></div>`;
    }
  })} ${validate_component(PrismicImage, "PrismicImage").$$render(
    $$result,
    {
      field: slice.primary.drawn_image,
      class: "w-3/5 md:w-1/3 absolute right-0 top-1/2 -translate-y-1/2 mix-blend-multiply"
    },
    {},
    {}
  )}</section>` : ``}`;
});
const components = {
  content_width_image: ContentWidthMedia,
  rich_text: RichText,
  screen_width_columns: ScreenWidthColumns,
  screen_width_image: ScreenWidthMedia,
  slideshow: Slideshow,
  value_block: ValueBlock
};
export {
  PrismicRichText as P,
  SliceZone as S,
  components as c
};
