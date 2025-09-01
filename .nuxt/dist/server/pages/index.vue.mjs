import __nuxt_component_0 from "../components/HeroSection.vue.mjs";
import __nuxt_component_0$1 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { withAsyncContext, computed, withCtx, createVNode, unref, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useRuntimeConfig } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import { useProductStore } from "../stores/products.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const productStore = useProductStore();
    [__temp, __restore] = withAsyncContext(() => productStore.fetchAll(config)), await __temp, __restore();
    const featuredProducts = computed(() => {
      return [...productStore.items].sort(() => 0.5 - Math.random()).slice(0, 8);
    });
    function getImage(product) {
      return product.image_url ? `${config.public.apiBase}/${product.image_url}` : "/placeholder.jpg";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSection = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(`<section class="bg-slate-600 text-white py-3"><div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"><div><i class="fas fa-shipping-fast text-3xl mb-4"></i><h3 class="text-xl font-bold mb-2">Livrare Rapidă</h3><p>Expediem comenzi oriunde în țară în cel mai scurt timp posibil.</p></div><div><i class="fas fa-headset text-3xl mb-4"></i><h3 class="text-xl font-bold mb-2">Suport Tehnic</h3><p>Echipa noastră este gata să te ajute cu orice întrebare.</p></div><div><i class="fas fa-star text-3xl mb-4"></i><h3 class="text-xl font-bold mb-2">Produse Premium</h3><p>Comercializăm doar echipamente testate și certificate.</p></div></div></section><section class="py-12"><div class="max-w-7xl mx-auto px-6"><div class="grid grid-cols-2 md:grid-cols-4 gap-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/produse",
        class: "bg-white p-6 shadow rounded text-center hover:shadow-lg transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-cogs text-4xl text-blue-600 mb-3"${_scopeId}></i><p class="font-medium text-gray-700"${_scopeId}>Piese Utilaje</p>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-cogs text-4xl text-blue-600 mb-3" }),
              createVNode("p", { class: "font-medium text-gray-700" }, "Piese Utilaje")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/produse",
        class: "bg-white p-6 shadow rounded text-center hover:shadow-lg transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-tools text-4xl text-purple-600 mb-3"${_scopeId}></i><p class="font-medium text-gray-700"${_scopeId}>Unelte</p>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-tools text-4xl text-purple-600 mb-3" }),
              createVNode("p", { class: "font-medium text-gray-700" }, "Unelte")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/produse",
        class: "bg-white p-6 shadow rounded text-center hover:shadow-lg transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-industry text-4xl text-green-600 mb-3"${_scopeId}></i><p class="font-medium text-gray-700"${_scopeId}>Echipamente</p>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-industry text-4xl text-green-600 mb-3" }),
              createVNode("p", { class: "font-medium text-gray-700" }, "Echipamente")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/produse",
        class: "bg-white p-6 shadow rounded text-center hover:shadow-lg transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-bolt text-4xl text-yellow-500 mb-3"${_scopeId}></i><p class="font-medium text-gray-700"${_scopeId}>Electronice</p>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-bolt text-4xl text-yellow-500 mb-3" }),
              createVNode("p", { class: "font-medium text-gray-700" }, "Electronice")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="max-w-7xl mx-auto px-6 mt-12"><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"><!--[-->`);
      ssrRenderList(unref(featuredProducts), (product) => {
        _push(`<div class="bg-gray-100 rounded overflow-hidden shadow hover:shadow-lg transition text-center p-4"><img${ssrRenderAttr("src", getImage(product))}${ssrRenderAttr("alt", product.name)} class="h-40 object-cover mx-auto mb-4"><h3 class="text-md font-medium text-gray-800 mb-1">${ssrInterpolate(product.name)}</h3><p class="text-sm text-gray-500 font-semibold">${ssrInterpolate(product.price)} RON</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/${product.slug}/${product.id}`,
          class: "text-cyan-600 text-sm mt-2 inline-block hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Vezi detalii `);
            } else {
              return [
                createTextVNode(" Vezi detalii ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue.mjs.map
