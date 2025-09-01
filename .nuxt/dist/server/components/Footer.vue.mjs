import __nuxt_component_0$1 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../assets/img/anpc-sal.png.mjs";
import _imports_1 from "../assets/img/anpc-sol-1.png.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 text-white py-10" }, _attrs))} data-v-c394f515><div class="max-w-7xl mx-auto px-6 space-y-10" data-v-c394f515><div class="flex flex-col lg:flex-row justify-between items-center gap-6 text-sm" data-v-c394f515><div class="text-center lg:text-left" data-v-c394f515><p data-v-c394f515>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} S.R.L</p><p class="text-gray-400" data-v-c394f515>Toate drepturile rezervate</p></div><div class="flex flex-wrap justify-center gap-4 text-center" data-v-c394f515>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/confidentialitate",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Politica de confidențialitate`);
          } else {
            return [
              createTextVNode("Politica de confidențialitate")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/termeni-si-conditii",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Termeni și condiții`);
          } else {
            return [
              createTextVNode("Termeni și condiții")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex gap-4 justify-center" data-v-c394f515><a href="https://facebook.com" target="_blank" aria-label="Facebook" data-v-c394f515><i class="fab fa-facebook-f hover:text-blue-400" data-v-c394f515></i></a><a href="https://instagram.com" target="_blank" aria-label="Instagram" data-v-c394f515><i class="fab fa-instagram hover:text-pink-400" data-v-c394f515></i></a></div></div><div class="flex md:flex-row justify-center items-center gap-6 text-sm text-gray-300" data-v-c394f515><div class="flex gap-4 justify-center md:justify-end" data-v-c394f515><a href="https://reclamatiisal.anpc.ro/" target="_blank" rel="noopener noreferrer" data-v-c394f515><img${ssrRenderAttr("src", _imports_0)} alt="ANPC SAL" class="h-12 object-contain" data-v-c394f515></a><a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" data-v-c394f515><img${ssrRenderAttr("src", _imports_1)} alt="ANPC ODR" class="h-12 object-contain" data-v-c394f515></a></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c394f515"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=Footer.vue.mjs.map
