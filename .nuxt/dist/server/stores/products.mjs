import "vue";
import "/Users/andreicos/Desktop/nuxtApp/nuxt/node_modules/hookable/dist/index.mjs";
import { useFetch } from "../node_modules/nuxt/dist/app/composables/fetch.mjs";
import "/Users/andreicos/Desktop/nuxtApp/nuxt/node_modules/destr/dist/index.mjs";
import "/Users/andreicos/Desktop/nuxtApp/nuxt/node_modules/klona/dist/index.mjs";
import "/Users/andreicos/Desktop/nuxtApp/nuxt/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { defineStore } from "pinia";
const useProductStore = defineStore("products", {
  state: () => ({
    items: []
  }),
  actions: {
    async fetchAll(config) {
      if (this.items.length) return;
      const { data } = await useFetch(`${config.public.apiBase}/products`, {
        key: "products",
        // identifică cache-ul
        server: true,
        // rulează și pe server
        initialCache: true,
        // trimite datele spre client
        default: () => []
        // fallback dacă nu vine nimic
      }, "$J04NzwbVpj");
      this.items = data.value || [];
    }
  }
});
defineStore("categories", {
  state: () => ({
    items: []
  }),
  actions: {
    async fetchAll(config) {
      if (this.items.length === 0) {
        const { data } = await useFetch(`${config.public.apiBase}/categories`, "$foYy8ofceQ");
        this.items = data.value || [];
      }
    }
  }
});
export {
  useProductStore
};
//# sourceMappingURL=products.mjs.map
