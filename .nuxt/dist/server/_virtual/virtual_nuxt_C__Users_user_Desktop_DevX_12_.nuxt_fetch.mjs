import { $fetch } from "ofetch";
import { baseURL } from "#internal/nuxt/paths";
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
//# sourceMappingURL=virtual_nuxt_C__Users_user_Desktop_DevX_12_.nuxt_fetch.mjs.map
