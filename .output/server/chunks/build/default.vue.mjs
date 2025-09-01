import { _ as __nuxt_component_0$1 } from './nuxt-link.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext, ref, unref, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { u as useCartStore } from './cart.mjs';
import { a as useRuntimeConfig } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'pinia';
import 'vue-router';

const _imports_0$1 = "" + __buildAssetsURL("anpc-sal.DRU4Ob2K.png");

const _imports_1 = "" + __buildAssetsURL("anpc-sol-1.MfjABJ0v.png");

const _sfc_main$3 = {
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
      _push(`</div><div class="flex gap-4 justify-center" data-v-c394f515><a href="https://facebook.com" target="_blank" aria-label="Facebook" data-v-c394f515><i class="fab fa-facebook-f hover:text-blue-400" data-v-c394f515></i></a><a href="https://instagram.com" target="_blank" aria-label="Instagram" data-v-c394f515><i class="fab fa-instagram hover:text-pink-400" data-v-c394f515></i></a></div></div><div class="flex md:flex-row justify-center items-center gap-6 text-sm text-gray-300" data-v-c394f515><div class="flex gap-4 justify-center md:justify-end" data-v-c394f515><a href="https://reclamatiisal.anpc.ro/" target="_blank" rel="noopener noreferrer" data-v-c394f515><img${ssrRenderAttr("src", _imports_0$1)} alt="ANPC SAL" class="h-12 object-contain" data-v-c394f515></a><a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" data-v-c394f515><img${ssrRenderAttr("src", _imports_1)} alt="ANPC ODR" class="h-12 object-contain" data-v-c394f515></a></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c394f515"]]);

const _sfc_main$2 = {
  __name: "Cart",
  __ssrInlineRender: true,
  setup(__props) {
    const cart = useCartStore();
    const config = useRuntimeConfig();
    const cartOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cartContent relative z-50" }, _attrs))}><div class="relative"><div class="relative cursor-pointer"><i class="fas fa-shopping-cart text-2xl text-gray-700"></i>`);
      if (unref(cart).cartCount > 0) {
        _push(`<span class="absolute -top-2 -right-2 bg-cyan-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">${ssrInterpolate(unref(cart).cartCount)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sm:rounded-none sm:top-full md:absolute md:right-0 md:w-100">`);
      if (unref(cartOpen)) {
        _push(`<div class="absolute top-10 right-[-40px] w-[100vw] bg-slate-200 shadow-lg rounded p-4 z-50 cart flex flex-col max-h-[500px] overflow-y-auto md:w-[500px] md:right-0 md:top-0"><button class="text-red-500 absolute right-4 top-3 cursor-pointer"><i class="fas fa-times text-xl font-bold"></i></button><h3 class="text-lg font-semibold mb-2">Coșul tău</h3>`);
        if (unref(cart).items.length === 0) {
          _push(`<div class="text-sm text-gray-500">Coșul este gol.</div>`);
        } else {
          _push(`<div class="space-y-4 overflow-y-auto flex-grow pr-2"><!--[-->`);
          ssrRenderList(unref(cart).items, (item, index) => {
            _push(`<div class="flex items-center gap-3 border-b pb-2"><div><img${ssrRenderAttr("src", `${unref(config).public.apiBase}/${item.image_url}`)} alt="img" class="h-20 w-45 md:h-25 rounded"></div><div class="flex flex-col justify-between w-full"><p class="text-sm font-medium">${ssrInterpolate(item.name)}</p><div class="flex items-center gap-2 text-xs text-gray-500"><button class="px-2 py-1 bg-cyan-600 text-white rounded">-</button><span>Qty: ${ssrInterpolate(item.quantity)}</span><button class="px-2 py-1 bg-cyan-600 text-white rounded">+</button></div><div class="text-right"><p class="text-sm font-semibold">${ssrInterpolate((item.price * item.quantity).toFixed(2))} RON</p><button class="text-cyan-600 text-xs mt-1 hover:underline">Șterge</button></div></div></div>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`<div class="mt-4"><p class="font-semibold text-right mb-2 text-cyan-600">Total: ${ssrInterpolate(unref(cart).totalPrice)} RON</p>`);
        if (unref(cart).items.length >= 1) {
          _push(`<div class="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 transition">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/plaseaza-comanda`,
            class: "flex items-center justify-center gap-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="fas fa-check"${_scopeId}></i><p${_scopeId}>Finalizeaza Comanda</p>`);
              } else {
                return [
                  createVNode("i", { class: "fas fa-check" }),
                  createVNode("p", null, "Finalizeaza Comanda")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cart.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _imports_0 = "" + __buildAssetsURL("S.C.-HIDROSERV-REPARATII-CAPITALE-S.R.L-1.Cqrb75T-.png");

const _sfc_main$1 = {
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
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Cart = _sfc_main$2;
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-507618ad"]]);

/* empty css              */
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Footer = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<main class="flex-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.vue.mjs.map
