function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "faq",
    path: "/faq",
    component: () => import("../pages/faq.vue.mjs")
  },
  {
    name: "about",
    path: "/about",
    component: () => import("../pages/about.vue.mjs")
  },
  {
    name: "index",
    path: "/",
    component: () => import("../pages/index.vue.mjs")
  },
  {
    name: "contacts",
    path: "/contacts",
    component: () => import("../pages/contacts.vue.mjs")
  }
];
export {
  _routes as default,
  handleHotUpdate
};
//# sourceMappingURL=virtual_nuxt_C__Users_user_Desktop_DevX_12_.nuxt_routes.mjs.map
