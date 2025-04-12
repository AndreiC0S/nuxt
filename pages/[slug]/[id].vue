<template>
  <section class="px-6 py-12 max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <!-- Imagine fancy -->
      <div class="relative group overflow-hidden rounded-xl shadow-xl">
        <div class="zoom-wrapper relative w-full h-full overflow-hidden rounded-xl">
          <img :src="getImage(product)" :alt="product.name"
            class="zoom-image w-full max-h-96 object-contain transition-transform duration-500 ease-in-out" />
        </div>
      </div>

      <!-- Detalii fancy -->
      <div class="space-y-6 relative z-20">
        <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">{{ product.name }}</h1>
        <p class="text-3xl text-cyan-600 font-bold">{{ product.price }} RON</p>

        <p class="text-sm text-gray-500 font-semibold">
          {{ product.stock > 0 ? `În stoc: ${product.stock} produse` : 'Stoc epuizat' }}
        </p>

        <p class="text-gray-700 text-base leading-relaxed border-l-4 pl-4 border-gray-300">
          {{ product.description || 'Acest produs nu are o descriere, dar e probabil genial.' }}
        </p>

        <button @click="addToCart(product)" :class="Number(product.stock) > 0
                  ? 'inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white text-lg font-semibold rounded-xl shadow-md hover:scale-105 transition-transform'
                  : 'inline-flex items-center gap-2 px-6 py-3 bg-slate-600 text-white text-lg font-semibold rounded-xl shadow-md  cursor-not-allowed'"
                  :disabled="Number(product.stock) === 0">
                  <i class="fas fa-cart-plus"></i> Adaugă în coș
          </button>
      </div>
    </div>

    <!-- Notă jos -->
    <p class="mt-16 text-center text-sm text-gray-500 italic">
      * Pentru comenzi de peste 20 de unități, oferim reduceri. Sună-ne sau scrie-ne ✨
    </p>

    <!-- Carousel recomandări -->
    <p>Recomandate</p>
    <div class="flex overflow-x-auto gap-4 mt-6 pb-2 scrollbar-hide scroll-smooth snap-x snap-mandatory">
      <div v-for="item in relatedProducts" :key="item.id"
        class="min-w-[250px] flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-md snap-start">
        <NuxtLink :to="`/${item.slug}/${item.id}`">
          <img :src="getImage(item)" :alt="item.name" class="w-full h-40 object-cover" />
          <div class="p-4 space-y-1">
            <p class="text-base font-medium text-gray-800 truncate">{{ item.name }}</p>
            <p class="text-sm text-gray-500">{{ item.price }} RON</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const cart = useCartStore()
const route = useRoute()
const config = useRuntimeConfig()

const { data: product } = await useFetch(`${config.public.apiBase}/products/${route.params.id}`)

useHead({
  title: `${product.value?.name} - MyShop`,
  meta: [
    {
      name: 'description',
      content: product.value?.description || 'Vezi detalii despre acest produs.'
    }
  ]
})

function getImage(product) {
  return product?.image_url
    ? `${config.public.apiBase}/${product.image_url}`
    : ''
}

function addToCart(product) {
  cart.add(product)
}

const relatedProducts = ref([])

if (product.value?.categories?.length) {
  const all = await $fetch(`${config.public.apiBase}/products`)

  const currentCatIds = product.value.categories.map(cat => cat.id)

  const sameCategoryProducts = all.filter(p => {
    if (p.id === product.value.id || !p.categories) return false
    const pCatIds = p.categories.map(cat => cat.id)
    return pCatIds.some(id => currentCatIds.includes(id))
  })

  relatedProducts.value = sameCategoryProducts.sort(() => 0.5 - Math.random()).slice(0, 4)
}
</script>
<style scoped>
.zoom-wrapper {
  position: relative;
  overflow: hidden;
}

.zoom-image {
  transition: transform 0.4s ease;
  transform-origin: center center;
}

.zoom-wrapper:hover .zoom-image {
  transform: scale(1.3);

}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>