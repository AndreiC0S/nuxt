<template>
  <HeroSection />
  <!-- Avantaje -->
  <section class="bg-slate-600 text-white py-3">

    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <i class="fas fa-shipping-fast text-3xl mb-4"></i>
        <h3 class="text-xl font-bold mb-2">Livrare Rapidă</h3>
        <p>Expediem comenzi oriunde în țară în cel mai scurt timp posibil.</p>
      </div>
      <div>
        <i class="fas fa-headset text-3xl mb-4"></i>
        <h3 class="text-xl font-bold mb-2">Suport Tehnic</h3>
        <p>Echipa noastră este gata să te ajute cu orice întrebare.</p>
      </div>
      <div>
        <i class="fas fa-star text-3xl mb-4"></i>
        <h3 class="text-xl font-bold mb-2">Produse Premium</h3>
        <p>Comercializăm doar echipamente testate și certificate.</p>
      </div>
    </div>
  </section>

  <!-- Categorii populare -->
  <section class=" py-12">
    <div class="max-w-7xl mx-auto px-6">

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <NuxtLink to="/produse" class="bg-white p-6 shadow rounded text-center hover:shadow-lg transition">
          <i class="fas fa-cogs text-4xl text-blue-600 mb-3"></i>
          <p class="font-medium text-gray-700">Piese Utilaje</p>
        </NuxtLink>
        <NuxtLink to="/produse" class="bg-white p-6 shadow rounded text-center hover:shadow-lg transition">
          <i class="fas fa-tools text-4xl text-purple-600 mb-3"></i>
          <p class="font-medium text-gray-700">Unelte</p>
        </NuxtLink>
        <NuxtLink to="/produse" class="bg-white p-6 shadow rounded text-center hover:shadow-lg transition">
          <i class="fas fa-industry text-4xl text-green-600 mb-3"></i>
          <p class="font-medium text-gray-700">Echipamente</p>
        </NuxtLink>
        <NuxtLink to="/produse" class="bg-white p-6 shadow rounded text-center hover:shadow-lg transition">
          <i class="fas fa-bolt text-4xl text-yellow-500 mb-3"></i>
          <p class="font-medium text-gray-700">Electronice</p>
        </NuxtLink>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 mt-12">

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="product in featuredProducts" :key="product.id"
          class="bg-gray-100 rounded overflow-hidden shadow hover:shadow-lg transition text-center p-4">
          <img :src="getImage(product)" :alt="product.name" class="h-40 object-cover mx-auto mb-4" />
          <h3 class="text-md font-medium text-gray-800 mb-1">{{ product.name }}</h3>
          <p class="text-sm text-gray-500 font-semibold">{{ product.price }} RON</p>
          <NuxtLink :to="`/${product.slug}/${product.id}`"
            class="text-cyan-600 text-sm mt-2 inline-block hover:underline">
            Vezi detalii
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

 

</template>

<script setup>


const config = useRuntimeConfig()
const productStore = useProductStore()
await productStore.fetchAll(config)

const featuredProducts = computed(() => {
  return [...productStore.items]
    .sort(() => 0.5 - Math.random())
    .slice(0, 8)
})

function getImage(product) {
  return product.image_url
    ? `${config.public.apiBase}/${product.image_url}`
    : '/placeholder.jpg'
}
</script>