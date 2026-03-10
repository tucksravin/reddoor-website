import { s as stores } from "./client.js";
import { g as getContext } from "./ssr.js";
({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  }
};
const page = page$1;
export {
  page as p
};
