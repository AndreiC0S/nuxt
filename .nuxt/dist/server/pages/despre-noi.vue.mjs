import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl mx-auto px-6 py-16 bg-white shadow-xl rounded-xl" }, _attrs))}><h1 class="text-4xl font-extrabold text-center text-blue-800 mb-10">Despre Noi</h1><p class="mb-6 text-lg leading-relaxed text-gray-700 text-center"> La <strong>S.C. HIDROSERV REPARATII CAPITALE S.R.L.</strong>, ne dedicăm excelenței în domeniul reparațiilor de motoare electrice și distribuției de bobine, piese și echipamente pentru diverse aplicații industriale și rezidențiale. </p><div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 text-gray-700"><div><h2 class="text-2xl font-semibold text-blue-700 mb-3">Experiență și Expertiză</h2><p> Cu o experiență vastă în domeniu, echipa noastră oferă servicii de înaltă calitate, adaptate nevoilor fiecărui client. Suntem specializați în reparații capitale și mentenanță pentru echipamente electrice. </p></div><div><h2 class="text-2xl font-semibold text-blue-700 mb-3">Garanția Calității</h2><p> Ne angajăm să folosim doar piese și bobine premium, oferind soluții durabile și sigure. Fiecare comandă este tratată cu profesionalism și atenție la detalii. </p></div></div><div class="mt-12 text-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contactează-ne `);
      } else {
        return [
          createTextVNode(" Contactează-ne ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/despre-noi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const despreNoi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  despreNoi as default
};
//# sourceMappingURL=despre-noi.vue.mjs.map
