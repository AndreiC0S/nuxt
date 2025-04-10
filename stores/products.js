export const useProductStore = defineStore('products', {


  state: () => ({
    items: []
  }),
  actions: {
    async fetchAll(config) {
      if (this.items.length) return

      const { data } = await useFetch(`${config.public.apiBase}/products`, {
        key: 'products',             // identifică cache-ul
        server: true,                // rulează și pe server
        initialCache: true,          // trimite datele spre client
        default: () => []            // fallback dacă nu vine nimic
      })

      this.items = data.value || []
    }
  }
})

export const useCategoryStore = defineStore('categories', {
  state: () => ({
    items: []
  }),
  actions: {
    async fetchAll(config) {
      if (this.items.length === 0) {
        const { data } = await useFetch(`${config.public.apiBase}/categories`)
        this.items = data.value || []
      }
    }
  }
})