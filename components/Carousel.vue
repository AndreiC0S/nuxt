<template>
  <div class="relative overflow-hidden w-full max-w-5xl mx-auto mb-12">
    <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }" style="width: 100%;">
      <div
        v-for="(product, index) in featuredProducts"
        :key="product.id"
        class="w-full flex-shrink-0"
      >
        <div class="bg-white shadow rounded overflow-hidden text-center group relative">
          <NuxtLink :to="`/${product.slug}/${product.id}`">
            <img :src="getImage(product)" :alt="product.name" class="w-full h-64 object-cover group-hover:scale-105 transition" />
            <div class="p-4 absolute bottom-0 w-full bg-white/80 text-gray-800">
              <p class="font-medium">{{ product.name }}</p>
              
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="absolute inset-y-1/2 left-0 flex items-center">
      <button @click="prev" class="bg-white shadow p-2 rounded-full ml-2">&#8592;</button>
    </div>
    <div class="absolute inset-y-1/2 right-0 flex items-center">
      <button @click="next" class="bg-white shadow p-2 rounded-full mr-2">&#8594;</button>
    </div>
  </div>
</template>
<script setup>

const config = useRuntimeConfig()
const productStore = useProductStore()
await productStore.fetchAll(config)

const featuredProducts = computed(() => {
  return [...productStore.items]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)
})

const currentIndex = ref(0)

function getImage(product) {
  return product.image_url
    ? `${config.public.apiBase}/${product.image_url}`
    : '/placeholder.jpg'
}



function next() {
  if (currentIndex.value < featuredProducts.value.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = featuredProducts.value.length - 1
  }
}
</script>