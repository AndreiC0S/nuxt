import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from 'vue/server-renderer';
import { u as useCartStore } from './cart.mjs';
import { u as useProductStore, a as useRuntimeConfig } from './server.mjs';
import { u as useHead } from './v3.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useCartStore();
    const config = useRuntimeConfig();
    const parentCategories = ref([]);
    const error = ref(null);
    const productStore = useProductStore();
    const selectedCategories = ref([]);
    const search = ref("");
    const maxPrice = ref(0);
    const showFilters = ref(true);
    const filteredProducts = computed(() => {
      return productStore.items.filter((p) => {
        var _a;
        const matchSearch = p.name.toLowerCase().includes(search.value.toLowerCase());
        const matchPrice = maxPrice.value > 0 ? Number(p.price) <= maxPrice.value : true;
        const matchCategory = selectedCategories.value.length === 0 || ((_a = p.categories) == null ? void 0 : _a.some((cat) => selectedCategories.value.includes(cat.id)));
        return matchSearch && matchPrice && matchCategory;
      });
    });
    function getImage(product) {
      return product.image_url ? `${config.public.apiBase}/${product.image_url}` : "";
    }
    useHead({
      title: "Produse - Hidroserv",
      meta: [
        {
          name: "description",
          content: "Vezi lista de produse oferite de Hidroserv Reparatii Capital SRL."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col items-center bg-gray-100" }, _attrs))}><div class="flex p-2 w-full md:w-full lg:w-[75vw] flex-col xs:flex-col sm:flex-col sm:flex-row md:flex-row lg:flex-row sm:gap-4 md:gap-4 lg:gap-8 mt-2 md:mt-10"><aside class="w-full mb-5 sm:w-[30%] md:w-[25%] lg:w-[22%] shrink-0 space-y-6 bg-white p-4 rounded h-fit"><div class="sm:hidden h-[10px] cursor-pointer"><div class="flex justify-between items-center w-full h-[40px]"><h2 class="text-base font-semibold text-gray-800 flex items-center gap-2"><i class="fas fa-sliders-h text-sm"></i> Filtrează </h2><i class="${ssrRenderClass([unref(showFilters) ? "fas fa-chevron-up" : "fas fa-chevron-down", "text-xs text-gray-600"])}"></i></div></div><h2 class="hidden text-base font-semibold text-gray-800 sm:flex items-center gap-2"><i class="fas fa-sliders-h text-sm"></i> Filtrează </h2><div style="${ssrRenderStyle(unref(showFilters) ? null : { display: "none" })}" class="space-y-4 mt-10 sm:mt-0 transition-all duration-300 ease-in-out"><div><label class="text-sm text-gray-600 font-medium">Caută</label><input${ssrRenderAttr("value", unref(search))} type="text" placeholder="Caută produse..." class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600"></div><div><label class="text-sm text-gray-600 font-medium">Preț maxim</label><input${ssrRenderAttr("value", unref(maxPrice))} type="number" min="0" placeholder="Ex: 200" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600"></div><div><div class="flex items-center justify-between mb-1"><h3 class="text-sm font-semibold text-gray-700">Categorii</h3><button class="text-xs text-cyan-600 hover:underline">Resetează</button></div><div class="space-y-1"><!--[-->`);
      ssrRenderList(unref(parentCategories), (parentCat, index) => {
        var _a;
        _push(`<details class="border border-gray-200 rounded-md overflow-hidden"><summary class="flex items-center justify-between cursor-pointer text-sm font-medium text-gray-700 px-3 py-2 hover:bg-gray-50">${ssrInterpolate(parentCat.name)} <span class="text-xs text-gray-400">+</span></summary>`);
        if (parentCat.children && ((_a = parentCat.children[0]) == null ? void 0 : _a.id) !== null) {
          _push(`<div class="space-y-1 px-4 py-2"><!--[-->`);
          ssrRenderList(parentCat.children, (child) => {
            _push(`<label class="flex items-center gap-2 text-sm text-gray-600"><input type="checkbox"${ssrRenderAttr("value", child.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedCategories)) ? ssrLooseContain(unref(selectedCategories), child.id) : unref(selectedCategories)) ? " checked" : ""} class="accent-cyan-600"> ${ssrInterpolate(child.name)}</label>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="px-4 py-2 text-sm text-gray-500">Nicio subcategorie.</div>`);
        }
        _push(`</details>`);
      });
      _push(`<!--]--></div></div></div></aside><div class="sm:w-full flex items-center flex-col">`);
      if (unref(error)) {
        _push(`<div class="text-red-500 text-center mb-4">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid lg:w-[55vw] grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5"><!--[-->`);
      ssrRenderList(unref(filteredProducts), (product) => {
        _push(`<div class="bg-white mb-4 max-w-[170px] sm:max-w-full rounded overflow-hidden shadow-sm hover:shadow-md transition duration-300 group"><div class="relative"><div>`);
        if (Number(product.stock) === 0) {
          _push(`<div class="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-br-lg"> Stoc epuizat </div>`);
        } else if (Number(product.stock) > 1 && Number(product.stock) <= 10) {
          _push(`<div class="absolute top-0 left-0 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-br-lg"> ultimele ${ssrInterpolate(product.stock)} produse </div>`);
        } else if (Number(product.stock) === 1) {
          _push(`<div class="absolute top-0 left-0 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-br-lg"> Ultimul produs </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="overflow-hidden"><img${ssrRenderAttr("src", getImage(product))}${ssrRenderAttr("alt", product.name)} class="aspect-square object-cover w-full transition-transform duration-300"></div><div class="mt-2 md:absolute md:mt-0 inset-0 flex items-center justify-center gap-3 md:opacity-0 md:group-hover:opacity-100 md:transition md:bg-black/40">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/${product.slug}/${product.id}`,
          class: "bg-cyan-600 text-white h-8 w-8 flex items-center justify-center rounded-full hover:bg-cyan-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fas fa-search"${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", { class: "fas fa-search" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<button class="${ssrRenderClass(Number(product.stock) > 0 ? "bg-cyan-600 h-8 w-8 text-white rounded-full hover:bg-cyan-700" : "bg-slate-600 h-8 w-8 text-white rounded-full hover:bg-slate-700 cursor-not-allowed")}"${ssrIncludeBooleanAttr(Number(product.stock) === 0) ? " disabled" : ""}><i class="fas fa-shopping-cart"></i></button></div></div><div class="p-4 text-center"><h2 class="text-md font-semibold text-gray-800 truncate">${ssrInterpolate(product.name)}</h2><p class="text-sm text-gray-500 font-semibold">stoc: ${ssrInterpolate(product.stock)}</p><p class="text-sm text-gray-500 font-semibold">${ssrInterpolate(product.price)} Ron</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/produse/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
