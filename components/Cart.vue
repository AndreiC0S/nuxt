<template>
    <div class="cartContent relative z-50">
        <div class="relative ">

            <div class="relative cursor-pointer" @click="toggleCart">
                <i class="fas fa-shopping-cart text-2xl text-gray-700"></i>
                <span v-if="cart.cartCount > 0"
                    class="absolute -top-2 -right-2 bg-cyan-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {{ cart.cartCount }}
                </span>

            </div>
            <!-- Cart Dropdown -->
            <div class="   sm:rounded-none sm:top-full md:absolute md:right-0 md:w-100">

                <div v-if="cartOpen"
                class="absolute top-10 right-[-40px] w-[100vw]  bg-slate-200 shadow-lg rounded p-4  z-50 cart flex flex-col max-h-[500px] overflow-y-auto md:w-[500px] md:right-0 md:top-0 ">
                    <button @click.stop="toggleCart()" class="text-red-500 absolute right-4 top-3 cursor-pointer">
                        <i class="fas fa-times text-xl font-bold"></i>
                    </button>
                    <h3 class="text-lg font-semibold mb-2">Coșul tău</h3>
                    <div v-if="cart.items.length === 0" class="text-sm text-gray-500">Coșul este gol.</div>
                    <div v-else class="space-y-4 overflow-y-auto flex-grow pr-2">
                        <div v-for="(item, index) in cart.items" :key="index"
                            class="flex items-center gap-3 border-b pb-2">
                            <div>
                                <img :src="`${config.public.apiBase}/${item.image_url}`" alt="img"
                                    class="h-20 w-45 md:h-25  rounded" />
                            </div>
                            <div class="flex flex-col justify-between  w-full">
                                <p class="text-sm font-medium">{{ item.name }}</p>
                                <div class="flex items-center gap-2 text-xs text-gray-500">
                                    <button @click.stop="cart.changeQty(index, -1)"
                                        class="px-2 py-1 bg-cyan-600 text-white rounded">-</button>
                                    <span>Qty: {{ item.quantity }}</span>
                                    <button @click.stop="cart.changeQty(index, 1)"
                                        class="px-2 py-1 bg-cyan-600 text-white rounded">+</button>
                                </div>
                                <div class="text-right">
                                    <p class="text-sm font-semibold">{{ (item.price * item.quantity).toFixed(2) }} RON</p>
                                    <button @click.stop="cart.remove(index)"
                                        class="text-cyan-600 text-xs mt-1 hover:underline">Șterge</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <p class="font-semibold text-right mb-2 text-cyan-600">Total: {{ cart.totalPrice }} RON</p>
                        
                        <div v-if="cart.items.length >= 1" @click.stop="toggleCart()"
                            class="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 transition">
                            <NuxtLink :to="`/plaseaza-comanda`"
                                class="flex items-center justify-center gap-2">
                                <i class="fas fa-check"></i>
                            <p>Finalizeaza Comanda</p>
                        
                        </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const cart = useCartStore()

onMounted(() => cart.load())
const config = useRuntimeConfig()
const cartOpen = ref(false)

function toggleCart() {
    cartOpen.value = !cartOpen.value
}
</script>


<style scoped></style>