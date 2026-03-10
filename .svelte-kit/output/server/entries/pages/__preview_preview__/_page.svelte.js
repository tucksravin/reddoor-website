import { c as create_ssr_component, b as each, a as add_attribute, e as escape, v as validate_component, d as spread, f as escape_object, h as escape_attribute_value } from "../../../chunks/ssr.js";
import { C as ContentWidth, A as AnimateIn } from "../../../chunks/ContentWidth.js";
import { D as DefaultButton } from "../../../chunks/DefaultButton.js";
import { c as compute_rest_props, s as subscribe } from "../../../chunks/utils.js";
import { i as isTop } from "../../../chunks/isTop.js";
import { L as LogoSoup } from "../../../chunks/LogoSoup.js";
import { S as ScreenWidthImage } from "../../../chunks/ScreenWidthImage.js";
const sources$3 = {
  avif: "/_app/immutable/assets/stJamesBg.CIN5xav8.avif 480w, /_app/immutable/assets/stJamesBg.cogSZqJK.avif 1024w, /_app/immutable/assets/stJamesBg.CgfRcAYp.avif 1920w",
  webp: "/_app/immutable/assets/stJamesBg.2MoK1BSH.webp 480w, /_app/immutable/assets/stJamesBg.P7NtzCNd.webp 1024w, /_app/immutable/assets/stJamesBg.cflbJyR_.webp 1920w",
  jpeg: "/_app/immutable/assets/stJamesBg.BvVI7gY2.jpg 480w, /_app/immutable/assets/stJamesBg.CDnu9dU1.jpg 1024w, /_app/immutable/assets/stJamesBg.owkeAzBO.jpg 1920w"
};
const img$3 = {
  src: "/_app/immutable/assets/stJamesBg.owkeAzBO.jpg",
  w: 1920,
  h: 1280,
  lqip: "UklGRlgAAABXRUJQVlA4IEwAAADwAQCdASoQAAsABUB8JbACdH8AEwUEPJwA/lJweIS4Nm+V2p+/tVUNBhrecKOzJivQNQcleGsOMRtztvGN/lyZcLMYPcHnfzRKBVgA"
};
const stJames = {
  sources: sources$3,
  img: img$3
};
const sources$2 = {
  avif: "/_app/immutable/assets/enzosBg.BE8Twhug.avif 480w, /_app/immutable/assets/enzosBg.08xK5X-1.avif 1024w, /_app/immutable/assets/enzosBg.DZ7J47TB.avif 1920w",
  webp: "/_app/immutable/assets/enzosBg.CFQbaqZQ.webp 480w, /_app/immutable/assets/enzosBg.DUNv9mSA.webp 1024w, /_app/immutable/assets/enzosBg.Q_0Evhbj.webp 1920w",
  jpeg: "/_app/immutable/assets/enzosBg.CvJX6tif.jpg 480w, /_app/immutable/assets/enzosBg.DMAdbPtz.jpg 1024w, /_app/immutable/assets/enzosBg.Ba7UuJeP.jpg 1920w"
};
const img$2 = {
  src: "/_app/immutable/assets/enzosBg.Ba7UuJeP.jpg",
  w: 1920,
  h: 1440,
  lqip: "UklGRkoAAABXRUJQVlA4ID4AAADwAQCdASoQAAwABUB8JZgCdADR2UXbyAAA/eKbXjsj25JVTThwt4UbXYPh3H1VqX5rdJVOmJyXSUSf0XbgAA=="
};
const enzos = {
  sources: sources$2,
  img: img$2
};
const sources$1 = {
  avif: "/_app/immutable/assets/fyfBg.D4uxO8xV.avif 480w, /_app/immutable/assets/fyfBg.CgHebObS.avif 1024w, /_app/immutable/assets/fyfBg.OuK6VMui.avif 1920w",
  webp: "/_app/immutable/assets/fyfBg.CuveGkpG.webp 480w, /_app/immutable/assets/fyfBg.CvbEk1Dl.webp 1024w, /_app/immutable/assets/fyfBg.BaNDbsT5.webp 1920w",
  jpeg: "/_app/immutable/assets/fyfBg.x9YnUd6S.jpg 480w, /_app/immutable/assets/fyfBg.3WF6NhWF.jpg 1024w, /_app/immutable/assets/fyfBg.BI58kaBu.jpg 1920w"
};
const img$1 = {
  src: "/_app/immutable/assets/fyfBg.BI58kaBu.jpg",
  w: 1920,
  h: 1440,
  lqip: "UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoQAAwABUB8JbAC7AEG91hZAAD+dTV2WT3vkCccAuuV3WGNxmAktT96tGRdcfeyWPabyeVHAyehlQMtJoQcPKzWgAA="
};
const fyf = {
  sources: sources$1,
  img: img$1
};
const sources = {
  avif: "/_app/immutable/assets/sonderBg.DjrMJJua.avif 480w, /_app/immutable/assets/sonderBg.CoNTfXTG.avif 1024w, /_app/immutable/assets/sonderBg.BZo9V1hY.avif 1920w",
  webp: "/_app/immutable/assets/sonderBg.Dy7EM2Uz.webp 480w, /_app/immutable/assets/sonderBg.nNCtZ53Y.webp 1024w, /_app/immutable/assets/sonderBg.DwtCmGpS.webp 1920w",
  jpeg: "/_app/immutable/assets/sonderBg.BddxHXG-.jpg 480w, /_app/immutable/assets/sonderBg.BFGjoOLH.jpg 1024w, /_app/immutable/assets/sonderBg.Cf2p0Y-3.jpg 1920w"
};
const img = {
  src: "/_app/immutable/assets/sonderBg.Cf2p0Y-3.jpg",
  w: 1920,
  h: 1280,
  lqip: "UklGRlgAAABXRUJQVlA4IEwAAAAQAgCdASoQAAsABUB8JQBOgB9laTJkWp9AAP7qMJCE6pIRY/p1w3qWyeHS1SdithpFd3i7QpIp04Dwxjora00gRe2ZxR5rCa8NNAAA"
};
const sonder = {
  sources,
  img
};
const printedReddoorLogo = "/_app/immutable/assets/reddoor_logo.DHVsBtMY.png";
const Picture = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sources: sources2 = {} } = $$props;
  let { sizes = void 0 } = $$props;
  let srcs = [];
  if ($$props.sources === void 0 && $$bindings.sources && sources2 !== void 0) $$bindings.sources(sources2);
  if ($$props.sizes === void 0 && $$bindings.sizes && sizes !== void 0) $$bindings.sizes(sizes);
  srcs = Object.entries(sources2);
  return `${srcs.length ? `<picture>${each(srcs, ([format, srcset]) => {
    return `<source type="${"image/" + escape(format, true)}"${add_attribute("sizes", sizes, 0)}${add_attribute("srcset", srcset, 0)}>`;
  })} ${slots.default ? slots.default({}) : ``}</picture>` : `${slots.default ? slots.default({}) : ``}`}`;
});
function len(obj) {
  return obj && Object.keys(obj).length;
}
function lqipToBackground(lqip) {
  return lqip[0] === "#" ? lqip : `url(data:image/webp;base64,${lqip}) no-repeat center/cover`;
}
const SvelteImg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["src", "sizes", "width", "height", "loading", "decoding", "ref"]);
  let { src = {} } = $$props;
  let { sizes = void 0 } = $$props;
  let { width = void 0 } = $$props;
  let { height = void 0 } = $$props;
  let { loading = "lazy" } = $$props;
  let { decoding = "async" } = $$props;
  let { ref = void 0 } = $$props;
  let sources2 = [];
  let img2 = {};
  let background = void 0;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.sizes === void 0 && $$bindings.sizes && sizes !== void 0) $$bindings.sizes(sizes);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.decoding === void 0 && $$bindings.decoding && decoding !== void 0) $$bindings.decoding(decoding);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0) $$bindings.ref(ref);
  sources2 = src.sources || {};
  img2 = src.img || {};
  {
    if (len(img2)) {
      const { lqip } = img2;
      background = lqip ? lqipToBackground(lqip) : void 0;
    }
  }
  return ` ${len(img2) ? `${validate_component(Picture, "Picture").$$render($$result, { sources: sources2, sizes }, {}, {
    default: () => {
      return ` <img${spread(
        [
          escape_object($$restProps),
          { loading: escape_attribute_value(loading) },
          {
            decoding: escape_attribute_value(decoding)
          },
          {
            width: escape_attribute_value(width || img2.w || void 0)
          },
          {
            height: escape_attribute_value(height || img2.h || void 0)
          },
          { src: escape_attribute_value(img2.src) }
        ],
        { styles: { background } }
      )}${add_attribute("this", ref, 0)}>`;
    }
  })}` : ``}`;
});
const drawnLogo = "/_app/immutable/assets/staticReddoor.DpGmCttz.png";
const OpeningAnimation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isTop, $$unsubscribe_isTop;
  $$unsubscribe_isTop = subscribe(isTop, (value) => $isTop = value);
  let viewportHeight;
  let viewportWidth;
  let openingSection;
  let maskScale = 0.2;
  const backgrounds = [
    {
      name: "St James' School",
      src: stJames,
      media: "Branding, Print",
      link: "/portfolio/st-james-episcopal-school"
    },
    {
      name: "Enzo's Hand Wash",
      src: enzos,
      media: "Branding, Print, Digital",
      link: "/portfolio/enzos"
    },
    {
      name: "Freedom Youth Foundation",
      src: fyf,
      media: "Branding, Print",
      link: "/portfolio/freedom-youth-foundation"
    },
    {
      name: "Gallery Sonder",
      src: sonder,
      media: "Branding, Print, Digital",
      link: "/portfolio/gallery-sonder"
    }
  ];
  let currentImageIndex = 0;
  {
    {
      setTimeout(
        () => {
        },
        5e3
      );
    }
  }
  $$unsubscribe_isTop();
  return `${$$result.head += `<!-- HEAD_svelte-1hot0f2_START -->${$$result.title = `<title>Reddoor Creative | Home</title>`, ""}<!-- HEAD_svelte-1hot0f2_END -->`, ""}  ${`<div class="bg-white w-screen h-dvh fixed top-0 left-0 z-50"></div>`} <div class="w-screen"${add_attribute("this", openingSection, 0)}><div class="h-dvh w-screen fixed bottom-0 left-0 bg-paper-red">${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-col justify-center items-center h-full z-10 relative opacity-100"
    },
    {},
    {
      default: () => {
        return `<div class="absolute w-fit lg:w-1/2 right-0 top-1/2 lg:-translate-x-12 translate-y-20 h-full" data-svelte-h="svelte-a48kmg"><h1 class="text-white text-left w-fit opacity-0">Arm your brand with</h1> <h1 class="text-white text-left w-fit">a clear story...</h1></div> <i class="fa-light fa-arrow-down fa-2xl opacity-50 absolute bottom-12 text-white bob-always"></i>`;
      }
    }
  )} ${``} <div class="fixed top-0 left-0 w-screen h-dvh overflow-hidden z-20">${validate_component(ContentWidth, "ContentWidth").$$render($$result, {}, {}, {
    default: () => {
      return `<img${add_attribute("src", drawnLogo, 0)} class="absolute top-8 left-0 h-20" alt="reddoor">`;
    }
  })} <div class="fixed top-0 left-0 w-lvw h-dvh z-20" style="clip-path: url(#mask-path);">${each(backgrounds, (background, index) => {
    return `${validate_component(SvelteImg, "Img").$$render(
      $$result,
      {
        src: background.src,
        alt: background.name,
        class: "absolute h-full w-full object-cover will-change-contents transition-opacity duration-1000 ease-fast-slow " + (index === currentImageIndex ? "opacity-100" : " delay-1000 opacity-0")
      },
      {},
      {}
    )}`;
  })} <div class="w-screen h-dvh bg-black opacity-25 fixed"></div> <div class="hidden lg:block h-dvh w-screen fixed top-0 left-0">${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-col items-start justify-end h-full pb-4 lg:pb-16"
    },
    {},
    {
      default: () => {
        return `<a${add_attribute("href", backgrounds[currentImageIndex].link, 0)}><p class="text-white text-left underline underline-offset-4">${escape(backgrounds[currentImageIndex].name)}</p></a> <p class="text-white text-left">${escape(backgrounds[currentImageIndex].media)}</p>`;
      }
    }
  )}</div> ${$isTop ? `${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-row justify-between items-center absolute top-8 left-0 right-0"
    },
    {},
    {
      default: () => {
        return `<img${add_attribute("src", printedReddoorLogo, 0)} alt="reddoor logo" class="w-12"> <button class="opacity-60 hover:opacity-100 transition-all" data-svelte-h="svelte-4daj7z"><i class="fa-sharp fa-bars fa-2xl text-white"></i></button>`;
      }
    }
  )}` : ``} ${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-col justify-center items-center h-full pointer-events-auto z-30"
    },
    {},
    {
      default: () => {
        return `<div class="absolute w-fit lg:w-1/2 right-0 top-1/2 lg:-translate-x-12 translate-y-20 h-full z-20"><h1 class="text-white text-left md:translate-x-[14.5px] lg:translate-x-[7.5px] opacity-0" data-svelte-h="svelte-1cv2rr3">Arm your brand with</h1> <h1 class="${"text-white text-left transition duration-1000 ease-fast-slow " + escape(
          "opacity-0 translate-y-[50%]",
          true
        )}">compelling design</h1> <div class="${"w-full flex flex-col md:flex-row md:gap-4 mt-8 transition duration-1000 ease-fast-slow " + escape(
          "opacity-0 translate-y-[50%]",
          true
        )}">${validate_component(DefaultButton, "DefaultButton").$$render(
          $$result,
          {
            class: "",
            href: "/portfolio",
            text: "View Our Work"
          },
          {},
          {}
        )}</div></div> <div data-svelte-h="svelte-10svtlc"></div>`;
      }
    }
  )}</div> <svg class="pointer-events-none w-0 h-0"><defs><clipPath id="mask-path"><path d="M 0,183.85 V 78.73 L 126.46,0 H 290.72 V 183.85 Z" transform="${"translate(" + escape(viewportWidth / 2, true) + ", " + escape(viewportHeight / 2, true) + ") scale(" + escape(maskScale, true) + ") translate(-145.36, -91.93)"}"></path></clipPath></defs></svg></div></div> <div class="h-dvh w-screen fixed bottom-0 left-0 pointer-events-none">${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-col justify-center items-center h-full relative"
    },
    {},
    {
      default: () => {
        return `<div class="absolute w-fit lg:w-1/2 right-0 top-1/2 lg:-translate-x-12 translate-y-20 h-full" data-svelte-h="svelte-gmszqa"><h1 class="text-white text-left w-fit ">Arm your brand with</h1></div> <i class="fa-light fa-arrow-down fa-2xl opacity-50 absolute bottom-12 text-white bob-always"></i>`;
      }
    }
  )}</div>  <div class="h-dvh w-screen"></div> <div class="h-dvh w-screen"></div> <div class="h-dvh w-screen"></div> <div class="h-dvh w-screen"></div> <div class="lg:h-dvh w-screen"></div></div>`;
});
const megaphone = "/_app/immutable/assets/megaphone.fsq9Og7z.png";
const pencil = "/_app/immutable/assets/RD_TakeAction-02.DsYw6ArI.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-11hsp4e_START -->${$$result.title = `<title>Reddoor Creative | Home</title>`, ""}<!-- HEAD_svelte-11hsp4e_END -->`, ""}  ${validate_component(OpeningAnimation, "OpeningAnimation").$$render($$result, {}, {}, {})} <div class="relative w-screen bg-paper"><section class="w-screen py-32">${validate_component(ContentWidth, "ContentWidth").$$render($$result, { class: "flex flex-col relative" }, {}, {
    default: () => {
      return `<img${add_attribute("src", megaphone, 0)} alt="megaphone" class="w-4/5 md:w-1/4 lg:w-1/5 mix-blend-multiply opacity-50"> ${validate_component(AnimateIn, "AnimateIn").$$render(
        $$result,
        {
          class: "-mt-24 w-4/5 md:w-2/5 text-primary"
        },
        {},
        {
          default: () => {
            return `<h2 data-svelte-h="svelte-12w8eq0">Better Design Means Better Business</h2>`;
          }
        }
      )} ${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "h-[1px] bg-primary w-full my-8" }, {}, {})} <div class="w-full flex flex-col md:flex-row justify-end">${validate_component(AnimateIn, "AnimateIn").$$render(
        $$result,
        {
          class: "w-full md:w-1/3 lg:w-1/5 pr-6 pb-6"
        },
        {},
        {
          default: () => {
            return `<h5 class="text-primary" data-svelte-h="svelte-j1dns3">Stand Out</h5> <p class="mt-2" data-svelte-h="svelte-oo47tu">The best brands have a story worth telling. With compelling design,
            you can stand out and succeed in this noisy world.</p>`;
          }
        }
      )} ${validate_component(AnimateIn, "AnimateIn").$$render(
        $$result,
        {
          class: "w-full md:w-1/3 lg:w-1/5 pr-6 pb-6"
        },
        {},
        {
          default: () => {
            return `<h5 class="text-primary" data-svelte-h="svelte-1pn3xl">Feel Confident</h5> <p class="mt-2" data-svelte-h="svelte-ddwcd">When you have a brand that is clear and compelling, you can&#39;t help
            but be confident in any situation. Your clients sense this and are
            attracted to your offering.</p>`;
          }
        }
      )} ${validate_component(AnimateIn, "AnimateIn").$$render(
        $$result,
        {
          class: "w-full md:w-1/3 lg:w-1/5 pr-6 pb-6"
        },
        {},
        {
          default: () => {
            return `<h5 class="text-primary" data-svelte-h="svelte-1k6lnv7">Be Energized</h5> <p class="mt-2" data-svelte-h="svelte-vdu28j">You have something great to offer and when your audience clearly
            understands how you can solve their problem, it will help you close
            more deals.</p>`;
          }
        }
      )}</div>`;
    }
  })}</section> ${validate_component(LogoSoup, "LogoSoup").$$render($$result, { data }, {}, {})} <section class="w-screen pb-32">${validate_component(ContentWidth, "ContentWidth").$$render($$result, { class: "flex flex-col relative" }, {}, {
    default: () => {
      return `<img${add_attribute("src", pencil, 0)} alt="pencil" class="w-3/5 md:w-1/4 lg:w-1/5 mix-blend-multiply opacity-50"> <div class="w-full flex flex-row justify-end">${validate_component(AnimateIn, "AnimateIn").$$render(
        $$result,
        {
          class: "md:mt-12 w-full md:w-2/5 text-primary"
        },
        {},
        {
          default: () => {
            return `<h2 data-svelte-h="svelte-1rpxw92">Let’s Begin</h2>`;
          }
        }
      )} <div class="w-full lg:w-3/5 md:flex flex-row items-end hidden">${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "w-1/3" }, {}, {
        default: () => {
          return `<p data-svelte-h="svelte-18s4x2x"><span class="text-primary">01</span> / 03</p>`;
        }
      })} ${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "w-1/3" }, {}, {
        default: () => {
          return `<p data-svelte-h="svelte-81oxyk"><span class="text-primary">02</span> / 03</p>`;
        }
      })} ${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "w-1/3" }, {}, {
        default: () => {
          return `<p data-svelte-h="svelte-wlq657"><span class="text-primary">03</span> / 03</p>`;
        }
      })}</div></div> ${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "h-[1px] bg-primary w-full my-8" }, {}, {})} <div class="w-full flex flex-col md:flex-row justify-end">${validate_component(AnimateIn, "AnimateIn").$$render(
        $$result,
        {
          class: "w-full md:w-1/3 lg:w-1/5 pr-8 pb-8"
        },
        {},
        {
          default: () => {
            return `<h5 class="text-primary" data-svelte-h="svelte-jceern">Call us, <br> let’s talk.</h5> <p class="mt-2" data-svelte-h="svelte-v7cftr">Everything we do starts and ends with you. Your problems, your
            goals, your story. We begin with a conversation to see how we can
            help you succeed.</p>`;
          }
        }
      )} ${validate_component(AnimateIn, "AnimateIn").$$render(
        $$result,
        {
          class: "w-full md:w-1/3 lg:w-1/5 pr-8 pb-8"
        },
        {},
        {
          default: () => {
            return `<h5 class="text-primary" data-svelte-h="svelte-d2t100">We help solve <br> your problem.</h5> <p class="mt-2" data-svelte-h="svelte-12slvo4">After establishing clear goals that solve your brand’s problem we
            get to work on establishing a clear story and developing a
            compelling design.</p>`;
          }
        }
      )} ${validate_component(AnimateIn, "AnimateIn").$$render(
        $$result,
        {
          class: "w-full md:w-1/3 lg:w-1/5 pr-8 pb-8"
        },
        {},
        {
          default: () => {
            return `<h5 class="text-primary" data-svelte-h="svelte-i39in5">Stand out <br> from the noise.</h5> <p class="mt-2" data-svelte-h="svelte-1ak23o6">You envisioned success and now you finally have confidence in your
            brand. We’ve equipped you to increase sales the way you’ve always
            hoped..</p>`;
          }
        }
      )}</div>`;
    }
  })}</section></div> <section class="w-screen bg-paper-red relative">${validate_component(ContentWidth, "ContentWidth").$$render($$result, { class: "z-20 h-0", animateIn: true }, {}, {
    default: () => {
      return `<div class="absolute top-32 w-72 z-20"><h6 class="text-white" data-svelte-h="svelte-obau14">We pride ourselves in a hands-on approach to producing compelling design
        that excites our clients.</h6> ${validate_component(DefaultButton, "DefaultButton").$$render($$result, { href: "/about", class: "mt-8" }, {}, {
        default: () => {
          return `About Us`;
        }
      })}</div>`;
    }
  })} ${validate_component(ScreenWidthImage, "ScreenWidthImage").$$render(
    $$result,
    {
      vimeoId: "1082293395",
      altText: "sonder brand drawinf",
      class: "mix-blend-multiply opacity-60 pointer-events-none"
    },
    {},
    {}
  )}</section> <section class="relative w-screen bg-paper py-16 md:py-32">${validate_component(ContentWidth, "ContentWidth").$$render($$result, { class: "flex flex-col", animateIn: true }, {}, {
    default: () => {
      return `<h2 class="text-primary md:w-3/5" data-svelte-h="svelte-s03i46">Feel confidence when you share your story with the world.</h2> <div class="flex flex-row mt-16 gap-8">${validate_component(DefaultButton, "DefaultButton").$$render($$result, { red: true, href: "/contact" }, {}, {
        default: () => {
          return `Meet with Us`;
        }
      })} ${validate_component(DefaultButton, "DefaultButton").$$render($$result, { red: true, href: "/portfolio" }, {}, {
        default: () => {
          return `View Our Work`;
        }
      })}</div>`;
    }
  })}</section>`;
});
export {
  Page as default
};
