function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import("../pages/index.vue.mjs")
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import("../pages/contact.vue.mjs")
  },
  {
    name: "despre-noi",
    path: "/despre-noi",
    component: () => import("../pages/despre-noi.vue.mjs")
  },
  {
    name: "slug-id",
    path: "/:slug()/:id()",
    component: () => import("../pages/_slug_/_id_.vue.mjs")
  },
  {
    name: "produse",
    path: "/produse",
    component: () => import("../pages/produse/index.vue.mjs")
  },
  {
    name: "plaseaza-comanda",
    path: "/plaseaza-comanda",
    component: () => import("../pages/plaseaza-comanda.vue.mjs")
  },
  {
    name: "confidentialitate",
    path: "/confidentialitate",
    component: () => import("../pages/confidentialitate.vue.mjs")
  },
  {
    name: "termeni-si-conditii",
    path: "/termeni-si-conditii",
    component: () => import("../pages/termeni-si-conditii.vue.mjs")
  }
];
export {
  _routes as default,
  handleHotUpdate
};
//# sourceMappingURL=virtual_nuxt__Users_andreicos_Desktop_nuxtApp_nuxt_.nuxt_routes.mjs.map
