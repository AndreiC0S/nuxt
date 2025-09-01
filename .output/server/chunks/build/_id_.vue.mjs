import { ref, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';
import { u as useCartStore } from './cart.mjs';
import { b as useRoute, c as useRouter, a as useRuntimeConfig } from './server.mjs';
import { u as useHead } from './v3.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import 'pinia';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d;
    let __temp, __restore;
    useCartStore();
    const route = useRoute();
    useRouter();
    const config = useRuntimeConfig();
    const product = ref(null);
    const all = ([__temp, __restore] = withAsyncContext(() => $fetch(`${config.public.apiBase}/products`)), __temp = await __temp, __restore(), __temp);
    product.value = all.find((p) => p.id === Number(route.params.id));
    const currentCatIds = ((_b = (_a = product.value) == null ? void 0 : _a.categories) == null ? void 0 : _b.map((cat) => cat.id)) || [];
    const relatedProducts = ref([]);
    const sameCategoryProducts = all.filter((p) => {
      if (p.id === product.value.id || !p.categories) return false;
      const pCatIds = p.categories.map((cat) => cat.id);
      return pCatIds.some((id) => currentCatIds.includes(id));
    });
    relatedProducts.value = sameCategoryProducts.sort(() => 0.5 - Math.random()).slice(0, 4);
    useHead({
      title: `${(_c = product.value) == null ? void 0 : _c.name} - MyShop`,
      meta: [
        {
          name: "description",
          content: ((_d = product.value) == null ? void 0 : _d.description) || "Vezi detalii despre acest produs."
        }
      ]
    });
    function getImage(product2) {
      return (product2 == null ? void 0 : product2.image_url) ? `${config.public.apiBase}/${product2.image_url}` : "";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-6 py-12 max-w-7xl mx-auto" }, _attrs))} data-v-22c8d446><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-v-22c8d446><div class="relative group overflow-hidden rounded-xl shadow-xl" data-v-22c8d446><div class="zoom-wrapper relative w-full h-full overflow-hidden rounded-xl" data-v-22c8d446><img${ssrRenderAttr("src", getImage(unref(product)))}${ssrRenderAttr("alt", unref(product).name)} class="zoom-image w-full max-h-96 object-contain transition-transform duration-500 ease-in-out" data-v-22c8d446></div></div><div class="space-y-6 relative z-20" data-v-22c8d446><h1 class="text-4xl font-extrabold tracking-tight text-gray-900" data-v-22c8d446>${ssrInterpolate(unref(product).name)}</h1><p class="text-3xl text-cyan-600 font-bold" data-v-22c8d446>${ssrInterpolate(unref(product).price)} RON</p><p class="text-sm text-gray-500 font-semibold" data-v-22c8d446>${ssrInterpolate(unref(product).stock > 0 ? `În stoc: ${unref(product).stock} produse` : "Stoc epuizat")}</p><p class="text-gray-700 text-base leading-relaxed border-l-4 pl-4 border-gray-300" data-v-22c8d446>${ssrInterpolate(unref(product).description || "Acest produs nu are o descriere, dar e probabil genial.")}</p><button class="${ssrRenderClass(Number(unref(product).stock) > 0 ? "inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white text-lg font-semibold rounded-xl shadow-md hover:scale-105 transition-transform" : "inline-flex items-center gap-2 px-6 py-3 bg-slate-600 text-white text-lg font-semibold rounded-xl shadow-md  cursor-not-allowed")}"${ssrIncludeBooleanAttr(Number(unref(product).stock) === 0) ? " disabled" : ""} data-v-22c8d446><i class="fas fa-cart-plus" data-v-22c8d446></i> Adaugă în coș </button></div></div><p class="mt-16 text-center text-sm text-gray-500 italic" data-v-22c8d446> * Pentru comenzi de peste 20 de unități, oferim reduceri. Sună-ne sau scrie-ne ✨ </p><p data-v-22c8d446>Recomandate</p><div class="flex overflow-x-auto gap-4 mt-6 pb-2 scrollbar-hide scroll-smooth snap-x snap-mandatory" data-v-22c8d446><!--[-->`);
      ssrRenderList(unref(relatedProducts), (item) => {
        _push(`<div class="w-[250px] flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-md snap-start" data-v-22c8d446><a href="#" data-v-22c8d446><img${ssrRenderAttr("src", getImage(item))}${ssrRenderAttr("alt", item.name)} class="w-[250px] h-30 object-cover" data-v-22c8d446><div class="p-4 space-y-1" data-v-22c8d446><p class="text-base font-medium text-gray-800 truncate" data-v-22c8d446>${ssrInterpolate(item.name)}</p><p class="text-sm text-gray-500" data-v-22c8d446>${ssrInterpolate(item.price)} RON</p></div></a></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug]/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-22c8d446"]]);

export { _id_ as default };
//# sourceMappingURL=_id_.vue.mjs.map
