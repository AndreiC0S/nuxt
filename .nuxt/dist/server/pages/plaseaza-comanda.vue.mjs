import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { useCartStore } from "../stores/cart.mjs";
import "/Users/andreicos/Desktop/nuxtApp/nuxt/node_modules/hookable/dist/index.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "plaseaza-comanda",
  __ssrInlineRender: true,
  setup(__props) {
    useCartStore();
    let first_name = "";
    let last_name = "";
    let payment_method = "cod";
    let address = {
      street1: "",
      city: "",
      state: "",
      zip: ""
    };
    let customer_email = "";
    let customer_phone = "";
    const isSubmitting = ref(false);
    const cartItems = ref([]);
    const totalPrice = computed(
      () => cartItems.value.reduce((sum, p) => sum + p.price * p.quantity, 0)
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl mx-auto p-6 bg-slate-50/75" }, _attrs))} data-v-07479abe><h1 class="text-3xl font-bold mb-6" data-v-07479abe>Purchase Order</h1><form class="space-y-6" data-v-07479abe><div data-v-07479abe><label class="block mb-2 font-semibold" data-v-07479abe>What would you like to purchase?</label></div><div class="grid grid-cols-2 gap-4" data-v-07479abe><input${ssrRenderAttr("value", unref(first_name))} type="text" placeholder="First Name" class="input" required data-v-07479abe><input${ssrRenderAttr("value", unref(last_name))} type="text" placeholder="Last Name" class="input" required data-v-07479abe></div><div data-v-07479abe><label class="block mb-1 font-semibold" data-v-07479abe>Your E-mail</label><input${ssrRenderAttr("value", unref(customer_email))} type="email" placeholder="example@example.com" class="input w-full" required data-v-07479abe></div><div data-v-07479abe><label class="block mb-1 font-semibold" data-v-07479abe>Your Phone number</label><input${ssrRenderAttr("value", unref(customer_phone))} type="text" placeholder="" class="input w-full" required data-v-07479abe></div><div data-v-07479abe><label class="block mb-1 font-semibold" data-v-07479abe>Shipping Address</label><input${ssrRenderAttr("value", unref(address).street1)} type="text" placeholder="Street Address" class="input w-full mb-2" required data-v-07479abe><div class="grid grid-cols-3 gap-4" data-v-07479abe><input${ssrRenderAttr("value", unref(address).city)} type="text" placeholder="City" class="input" required data-v-07479abe><input${ssrRenderAttr("value", unref(address).state)} type="text" placeholder="State / Province" class="input" required data-v-07479abe><input${ssrRenderAttr("value", unref(address).zip)} type="text" placeholder="Postal / Zip Code" class="input" required data-v-07479abe></div></div><div data-v-07479abe><label class="block mb-2 font-semibold" data-v-07479abe>Payment Methods</label><select class="input w-full" data-v-07479abe><option value="cod" data-v-07479abe${ssrIncludeBooleanAttr(Array.isArray(unref(payment_method)) ? ssrLooseContain(unref(payment_method), "cod") : ssrLooseEqual(unref(payment_method), "cod")) ? " selected" : ""}>Numerar la livrare</option><option disabled value="card" data-v-07479abe${ssrIncludeBooleanAttr(Array.isArray(unref(payment_method)) ? ssrLooseContain(unref(payment_method), "card") : ssrLooseEqual(unref(payment_method), "card")) ? " selected" : ""}>Card - indisponibil momentan</option></select></div><div class="justify-center flex" data-v-07479abe><button type="submit"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} class="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700" data-v-07479abe>`);
      if (unref(isSubmitting)) {
        _push(`<span data-v-07479abe><svg class="animate-spin h-5 w-5 mr-2 inline-block text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-07479abe><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-07479abe></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" data-v-07479abe></path></svg> Se trimite... </span>`);
      } else {
        _push(`<span data-v-07479abe> Submit Order </span>`);
      }
      _push(`</button></div><div data-v-07479abe><h2 class="text-xl font-semibold mb-4" data-v-07479abe>My Products</h2><!--[-->`);
      ssrRenderList(unref(cartItems), (product) => {
        _push(`<div class="border p-4 rounded mb-4" data-v-07479abe><div class="flex justify-between items-center" data-v-07479abe><div data-v-07479abe><p class="font-semibold" data-v-07479abe>${ssrInterpolate(product.name)}</p></div><div data-v-07479abe><span class="font-bold" data-v-07479abe>$${ssrInterpolate(product.price)}</span><input type="number" min="0" class="input ml-4 w-20"${ssrRenderAttr("value", product.quantity)} data-v-07479abe></div></div></div>`);
      });
      _push(`<!--]--></div><div class="text-right text-lg font-semibold" data-v-07479abe> Total: $${ssrInterpolate(unref(totalPrice))}</div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/plaseaza-comanda.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const plaseazaComanda = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-07479abe"]]);
export {
  plaseazaComanda as default
};
//# sourceMappingURL=plaseaza-comanda.vue.mjs.map
