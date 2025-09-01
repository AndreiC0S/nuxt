import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import _sfc_main$1 from "./Cart.vue.mjs";
import { ref, withCtx, createTextVNode, unref, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import _imports_0 from "../assets/img/S.C.-HIDROSERV-REPARATII-CAPITALE-S.R.L-1.png.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const menuItems = [
      { label: "Acasă", to: "/" },
      { label: "Despre Noi", to: "/despre-noi" },
      { label: "Produse", to: "/produse" },
      { label: "Contact", to: "/contact" }
    ];
    const isOpen = ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Cart = _sfc_main$1;
      _push(`<!--[--><div class="hidden bg-slate-600 text-white text-sm py-1 px-4 md:flex justify-center items-center flex-wrap" data-v-507618ad><div class="info flex items-center justify-bethween gap-4 w-[50vw]" data-v-507618ad><div class="flex items-center gap-1" data-v-507618ad><i class="fas fa-phone-alt" data-v-507618ad></i><a href="tel:07000000" class="hover:underline" data-v-507618ad>07000000</a></div><div class="flex items-center gap-1" data-v-507618ad><i class="fas fa-envelope" data-v-507618ad></i><a href="mailto:test_test@gmail.com" class="hover:underline" data-v-507618ad> test_test@gmail.com </a></div><div class="items-center gap-2 hidden lg:flex mt-0" data-v-507618ad><i class="fab fa-facebook-f" data-v-507618ad></i><i class="fab fa-instagram" data-v-507618ad></i></div></div><div class="flex gap-4 mt-2 hidden lg:flex mt-0" data-v-507618ad>`);
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
        to: "/contact",
        class: "hover:underline font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cerere Ofertă Preț`);
          } else {
            return [
              createTextVNode("Cerere Ofertă Preț")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><header class="shadow sticky top-0 bg-white opacity-97 z-50" data-v-507618ad><div class="flex justify-between md:px-4 lg:flex flex-row items-center lg:justify-center py-1" data-v-507618ad><div class="flex flex-col w-[100vw] md:flex-row md:justify-between md:items-center lg:gap-0 lg:w-[70vw] lg:justify-between lg:items-center" data-v-507618ad><div class="hidden items-center gap-4 md:flex" data-v-507618ad><img${ssrRenderAttr("src", _imports_0)} alt="logo" class="max-h-19" data-v-507618ad></div><div class="flex flex-row sticky top-0 gap-6 py-5 relative justify-between px-10 items-center md:gap-5 lg:justify-center" data-v-507618ad><button class="lg:hidden text-gray-800 focus:outline-none" data-v-507618ad>`);
      if (!unref(isOpen)) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-507618ad><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-507618ad></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-507618ad><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-507618ad></path></svg>`);
      }
      _push(`</button><nav class="hidden lg:flex mt-0 relative" data-v-507618ad><ul class="flex gap-5 items-center text-sm font-medium text-gray-700" data-v-507618ad><li data-v-507618ad>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: {
          "text-cyan-600 font-semibold": _ctx.$route.path === "/",
          "hover:text-blue-600": _ctx.$route.path !== "/"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Acasă `);
          } else {
            return [
              createTextVNode(" Acasă ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-507618ad>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/despre-noi",
        class: {
          "text-cyan-600 font-semibold": _ctx.$route.path === "/despre-noi",
          "hover:text-blue-600": _ctx.$route.path !== "/despre-noi"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Despre Noi `);
          } else {
            return [
              createTextVNode(" Despre Noi ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-507618ad>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/produse",
        class: {
          "text-cyan-600 font-semibold": _ctx.$route.path === "/produse",
          "hover:text-blue-500": _ctx.$route.path !== "/produse"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Produse `);
          } else {
            return [
              createTextVNode(" Produse ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-507618ad>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: {
          "text-cyan-600 font-semibold": _ctx.$route.path === "/contact",
          "hover:text-blue-600": _ctx.$route.path !== "/contact"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact `);
          } else {
            return [
              createTextVNode(" Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav>`);
      _push(ssrRenderComponent(_component_Cart, null, null, _parent));
      _push(`</div></div></div><div style="${ssrRenderStyle(unref(isOpen) ? null : { display: "none" })}" class="lg:hidden bg-slate-100 rounded px-4 overflow-hidden" data-v-507618ad><ul class="space-y-1 flex flex-col justify-center items-center" data-v-507618ad><!--[-->`);
      ssrRenderList(menuItems, (item) => {
        _push(`<li class="w-full text-center py-1" data-v-507618ad>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.to,
          class: {
            "text-cyan-600 font-semibold": _ctx.$route.path === item.to,
            "hover:text-blue-600": _ctx.$route.path !== item.to
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></header><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-507618ad"]]);
export {
  Navbar as default
};
//# sourceMappingURL=Navbar.vue.mjs.map
