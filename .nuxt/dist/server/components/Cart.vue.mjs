import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { useCartStore } from "../stores/cart.mjs";
import { useRuntimeConfig } from "../node_modules/nuxt/dist/app/nuxt.mjs";
const _sfc_main = {
  __name: "Cart",
  __ssrInlineRender: true,
  setup(__props) {
    const cart = useCartStore();
    const config = useRuntimeConfig();
    const cartOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Cart.vue.mjs.map
