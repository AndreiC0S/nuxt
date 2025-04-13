<template>
<!-- Carousel recomandări -->
<p>Recomandate</p>
    <div class="flex overflow-x-auto gap-4 mt-6 pb-2 scrollbar-hide scroll-smooth snap-x snap-mandatory">
      <div v-for="item in items" :key="item.id"
        class="w-[250px] flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-md snap-start">
        <a href="#" @click.prevent="loadProduct(item)">
            <img :src="getImage(item)" :alt="item.name" class="w-[250px] h-30 object-cover" />
            <div class="p-4 space-y-1">
              <p class="text-base font-medium text-gray-800 truncate">{{ item.name }}</p>
              <p class="text-sm text-gray-500">{{ item.price }} RON</p>
            </div>
          </a>
      </div>
    </div>
</template>

<script setup>
const { items, loadProduct } = defineProps({
  items: {
    type: Array,
    required: true
  },
  loadProduct: {
    type: Function,
    required: true
  }
})

function getImage(product) {
  if (!product?.image_url) return ''
  
  // dacă deja e url complet, returnează direct
  if (product.image_url.startsWith('http')) return product.image_url

  // altfel, concatenează corect
  return `${config.public.apiBase.replace(/\/$/, '')}/${product.image_url.replace(/^\//, '')}`
}
</script>