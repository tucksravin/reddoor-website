import { c as compute_rest_props } from "./utils.js";
import { c as create_ssr_component, d as spread, h as escape_attribute_value, f as escape_object } from "./ssr.js";
import { isFilled, asImageWidthSrcSet, asImagePixelDensitySrcSet } from "@prismicio/client";
const PrismicImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "field",
    "imgixParams",
    "alt",
    "fallbackAlt",
    "width",
    "height",
    "widths",
    "pixelDensities"
  ]);
  let { field } = $$props;
  let { imgixParams = {} } = $$props;
  let { alt = void 0 } = $$props;
  let { fallbackAlt = void 0 } = $$props;
  let { width = void 0 } = $$props;
  let { height = void 0 } = $$props;
  let { widths = void 0 } = $$props;
  let { pixelDensities = void 0 } = $$props;
  let src = void 0;
  let srcset = void 0;
  let resolvedWidth = void 0;
  let resolvedHeight = void 0;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.imgixParams === void 0 && $$bindings.imgixParams && imgixParams !== void 0) $$bindings.imgixParams(imgixParams);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
  if ($$props.fallbackAlt === void 0 && $$bindings.fallbackAlt && fallbackAlt !== void 0) $$bindings.fallbackAlt(fallbackAlt);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.widths === void 0 && $$bindings.widths && widths !== void 0) $$bindings.widths(widths);
  if ($$props.pixelDensities === void 0 && $$bindings.pixelDensities && pixelDensities !== void 0) $$bindings.pixelDensities(pixelDensities);
  {
    {
      if (isFilled.imageThumbnail(field)) {
        const castInt = (input) => {
          if (typeof input === "number" || typeof input === "undefined" || input === null) {
            return input;
          } else {
            const parsed = Number.parseInt(input);
            if (Number.isNaN(parsed)) {
              return void 0;
            } else {
              return parsed;
            }
          }
        };
        const ar = field.dimensions.width / field.dimensions.height;
        const castedWidth = castInt(width);
        const castedHeight = castInt(height);
        resolvedWidth = castedWidth ?? field.dimensions.width;
        resolvedHeight = castedHeight ?? field.dimensions.height;
        if (castedWidth != null && castedHeight == null) {
          resolvedHeight = castedWidth / ar;
        } else if (castedWidth == null && castedHeight != null) {
          resolvedWidth = castedHeight * ar;
        }
        if (widths || !pixelDensities) {
          const res = asImageWidthSrcSet(field, {
            ...imgixParams,
            widths: widths === "defaults" ? void 0 : widths
          });
          src = res.src;
          srcset = res.srcset;
        } else if (pixelDensities) {
          const res = asImagePixelDensitySrcSet(field, {
            ...imgixParams,
            pixelDensities: pixelDensities === "defaults" ? void 0 : pixelDensities
          });
          src = res.src;
          srcset = res.srcset;
        }
      }
    }
  }
  return ` ${isFilled.imageThumbnail(field) ? `<img${spread(
    [
      { src: escape_attribute_value(src) },
      { srcset: escape_attribute_value(srcset) },
      {
        alt: escape_attribute_value(alt ?? (field.alt || fallbackAlt))
      },
      {
        width: escape_attribute_value(resolvedWidth)
      },
      {
        height: escape_attribute_value(resolvedHeight)
      },
      escape_object($$restProps)
    ],
    {}
  )}>` : ``}`;
});
export {
  PrismicImage as P
};
