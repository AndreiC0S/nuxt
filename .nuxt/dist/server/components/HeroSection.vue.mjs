import __nuxt_component_0$1 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
/* empty css                  */
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 py-25 text-white hero-section relative" }, _attrs))}><div class="absolute inset-0 bg-black/50 z-0"></div><div class="relative z-10 max-w-4xl mx-auto px-6 text-center"><div class="pb-12"><h1 class="text-3xl font-bold mb-4 text-white">Experți în Bobine și Accesorii Tehnice</h1><div class="w-20 h-1 mx-auto mb-6 bg-cyan-600 rounded-full"></div><p class="text-white max-w-3xl mx-auto text-lg"> La Hidroserv oferim o gamă variată de produse de înaltă calitate, specializate pentru motoare electrice, automatizări și reparații. Descoperă soluțiile noastre tehnice pentru aplicații industriale și rezidențiale. </p></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/produse",
    class: "inline-block bg-cyan-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-cyan-700 transition"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Vezi Produsele `);
      } else {
        return [
          createTextVNode(" Vezi Produsele ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=HeroSection.vue.mjs.map
