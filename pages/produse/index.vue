<template>
  <div class="min-h-screen ">
    <div class="flex flex-col w-[90vw] xs:flex-row  sm:flex-row lg:flex-row gap-8 py-12 ml-4 ">
      <!-- Sidebar Filters -->
      <aside
        class="w-full w-[30vw] xs:w-[30vw] lg:w-72 shrink-0 space-y-6 bg-white p-4 rounded h-fit"
      >
        <div class=" xs:hidden flex items-center justify-between cursor-pointer" @click="showFilters = !showFilters">
          <h2 class="text-base font-semibold text-gray-800 flex items-center gap-2">
            <i class="fas fa-sliders-h text-sm"></i> Filtrează
          </h2>
          <i :class="showFilters ? 'fas fa-chevron-up' : 'fas fa-chevron-down'" class="text-xs text-gray-600"></i>
        </div>
        <h2 class=" hidden text-base font-semibold text-gray-800 xs:flex items-center gap-2">
            <i class="fas fa-sliders-h text-sm"></i> Filtrează
          </h2>
        <div v-show="showFilters" class="space-y-4 transition-all duration-300 ease-in-out">
          <!-- Search -->
          <div>
            <label class="text-sm text-gray-600 font-medium">Caută</label>
            <input
              v-model="search"
              type="text"
              placeholder="Caută produse..."
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
          </div>

          <!-- Max price -->
          <div>
            <label class="text-sm text-gray-600 font-medium">Preț maxim</label>
            <input
              v-model="maxPrice"
              type="number"
              min="0"
              placeholder="Ex: 200"
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
          </div>

          <!-- Categories -->
          <div>
            <div class="flex items-center justify-between mb-1">
              <h3 class="text-sm font-semibold text-gray-700">Categorii</h3>
              <button @click="resetFilters" class="text-xs text-cyan-600 hover:underline">Resetează</button>
            </div>
            <div class="space-y-1">
              <details
                v-for="(parentCat, index) in parentCategories"
                :key="parentCat?.id"
                class="border border-gray-200 rounded-md overflow-hidden"
              >
                <summary
                  class="flex items-center justify-between cursor-pointer text-sm font-medium text-gray-700 px-3 py-2 hover:bg-gray-50"
                >
                  {{ parentCat.name }}
                  <span class="text-xs text-gray-400">+</span>
                </summary>
                <div
                  v-if="parentCat.children && parentCat.children[0]?.id !== null"
                  class="space-y-1 px-4 py-2"
                >
                  <label
                    v-for="child in parentCat.children"
                    :key="child.id"
                    class="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <input
                      type="checkbox"
                      :value="child.id"
                      v-model="selectedCategories"
                      class="accent-cyan-600"
                    />
                    {{ child.name }}
                  </label>
                </div>
                <div v-else class="px-4 py-2 text-sm text-gray-500">Nicio subcategorie.</div>
              </details>
            </div>
          </div>
        </div>
      </aside>

      <!-- Products Grid -->
      <div class="">
        <!-- Display error message if any -->
        <div v-if="error" class="text-red-500 text-center mb-4">
          {{ error }}
        </div>
        <div class="grid grid-cols-2 xs:grid-cols-2  sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
          <div v-for="product in filteredProducts" :key="product.id"
            class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 group ">
            <div class="relative">
              <div class="overflow-hidden ">
                <img :src="getImage(product)" :alt="product.name"
                  class="aspect-square object-cover w-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div
                class="mt-2 md:absolute md:mt-0 inset-0 flex items-center justify-center gap-3 md:opacity-0 md:group-hover:opacity-100 md:transition md:bg-black/40">
                <NuxtLink :to="`/${product.slug}/${product.id}`"
                  class="bg-cyan-600 text-white  h-8 w-8 flex items-center justify-center rounded-full hover:bg-cyan-600">
                  <i class="fas fa-search"></i>
                </NuxtLink>
                <button @click="addToCart(product)" class="bg-cyan-600 h-8 w-8 text-white  rounded-full hover:bg-cyan-700">
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
            <div class="p-4 text-center">
              <h2 class="text-md font-semibold text-gray-800 truncate">{{ product.name }}</h2>
              <p class="text-sm text-gray-500 font-semibold">stoc: {{ product.stock }}</p>
              <p class="text-sm text-gray-500 font-semibold">{{ product.price }} Ron</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cart = useCartStore()
const config = useRuntimeConfig()
const parentCategories = ref([])
const error = ref(null)

const productStore = useProductStore()

onMounted(async () => {
  try {
    const res = await $fetch(`${config.public.apiBase}/parent-categories`);
    if (Array.isArray(res)) {
      parentCategories.value = res;
    } else if (res && Array.isArray(res.data)) {
      parentCategories.value = res.data;
    } else {
      parentCategories.value = [];
    }
    console.log('Parent categories:', parentCategories.value);
  } catch (err) {
    console.error('Error fetching parent categories:', err);
    error.value = 'Eroare la încărcarea categoriilor.';
  }
})

const selectedCategories = ref([])
const search = ref('')
const maxPrice = ref(0)
const showFilters = ref(true)

const filteredProducts = computed(() => {
  return productStore.items.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.value.toLowerCase())
    const matchPrice = maxPrice.value > 0 ? Number(p.price) <= maxPrice.value : true
    const matchCategory =
      selectedCategories.value.length === 0 ||
      p.categories?.some(cat => selectedCategories.value.includes(cat.id))
    return matchSearch && matchPrice && matchCategory
  })
})

function getImage(product) {
  return product.image_url
    ? `${config.public.apiBase}/${product.image_url}`
    : ''
}

function addToCart(product) {
  cart.add(product)
}

function resetFilters() {
  search.value = ''
  maxPrice.value = 0
  selectedCategories.value = []
}

useHead({
  title: 'Produse - Hidroserv',
  meta: [
    {
      name: 'description',
      content: 'Vezi lista de produse oferite de Hidroserv Reparatii Capital SRL.'
    }
  ]
})
</script>

<style scoped></style>