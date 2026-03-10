import { c as compute_rest_props } from "./utils.js";
import { c as create_ssr_component, d as spread, e as escape, f as escape_object, h as escape_attribute_value } from "./ssr.js";
import { asLinkAttrs } from "@prismicio/client";
const PrismicLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let linkAttrs;
  let resolvedRel;
  let $$restProps = compute_rest_props($$props, ["field", "document", "rel"]);
  let { field = void 0 } = $$props;
  let { document = void 0 } = $$props;
  let { rel = void 0 } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.document === void 0 && $$bindings.document && document !== void 0) $$bindings.document(document);
  if ($$props.rel === void 0 && $$bindings.rel && rel !== void 0) $$bindings.rel(rel);
  linkAttrs = asLinkAttrs(field ?? document, {
    rel: typeof rel === "function" ? rel : void 0
  });
  resolvedRel = typeof rel === "string" ? rel : linkAttrs.rel;
  return ` <a${spread(
    [
      escape_object(linkAttrs),
      { rel: escape_attribute_value(resolvedRel) },
      {
        href: escape_attribute_value(linkAttrs.href)
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : `${escape(field?.text)}`}</a>`;
});
export {
  PrismicLink as P
};
