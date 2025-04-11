<template>
  <div class="max-w-3xl mx-auto p-6 bg-slate-50/75 ">
    <h1 class="text-3xl font-bold mb-6">Purchase Order</h1>

    <form @submit.prevent="submitOrder" class="space-y-6">
      <div>
        <label class="block mb-2 font-semibold">What would you like to purchase?</label>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <input v-model="first_name" type="text" placeholder="First Name" class="input" required />
        <input v-model="last_name" type="text" placeholder="Last Name" class="input" required />
      </div>

      <div>
        <label class="block mb-1 font-semibold">Your E-mail</label>
        <input v-model="customer_email" type="email" placeholder="example@example.com" class="input w-full" required />
      </div>
      <div>
        <label class="block mb-1 font-semibold">Your Phone number</label>
        <input v-model="customer_phone" type="text" placeholder="" class="input w-full" required />
      </div>

      <div>
        <label class="block mb-1 font-semibold">Shipping Address</label>
        <input v-model="address.street1" type="text" placeholder="Street Address" class="input w-full mb-2" required />
        <div class="grid grid-cols-3 gap-4">
          <input v-model="address.city" type="text" placeholder="City" class="input" required />
          <input v-model="address.state" type="text" placeholder="State / Province" class="input" required />
          <input v-model="address.zip" type="text" placeholder="Postal / Zip Code" class="input" required />
        </div>
      </div>
      <div>
        <label class="block mb-2 font-semibold">Payment Methods</label>
        <select v-model="payment_method" class="input w-full">
          <option value="cod">Numerar la livrare</option>
          <option disabled value="card">Card - indisponibil momentan</option>

        </select>
      </div>
      <div class="justify-center flex">

        <button type="submit" class="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
          Submit Order
        </button>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-4">My Products</h2>
        <div v-for="product in cartItems" :key="product.name" class="border p-4 rounded mb-4">
          <div class="flex justify-between items-center">
            <div>
              <p class="font-semibold">{{ product.name }}</p>

            </div>
            <div>
              <span class="font-bold">${{ product.price }}</span>
              <input type="number" min="0" class="input ml-4 w-20" v-model.number="product.quantity" />
            </div>
          </div>
        </div>
      </div>

      <div class="text-right text-lg font-semibold">
        Total: ${{ totalPrice }}
      </div>




    </form>
  </div>
</template>

<script setup>
const cart = useCartStore()
let first_name = '';
let last_name = '';
let payment_method = 'cod';
let address = {
  street1: '',
  city: '',
  state: '',
  zip: ''
}
let customer_email = '';
let customer_phone = '';



const cartItems = ref([

])

onMounted(() => {
  const storedItems = localStorage.getItem('cart')
  console.log('Stored items:', storedItems)
  if (storedItems) {
    try {
      cartItems.value = JSON.parse(storedItems)
    } catch (e) {
      console.error('Failed to parse cartItems from localStorage', e)
    }
  }
})

const totalPrice = computed(() =>
  cartItems.value.reduce((sum, p) => sum + p.price * p.quantity, 0)
)

const submitOrder = async () => {
  const payload = {
    customer_name: `${first_name} ${last_name}`,
    customer_address: `${address.street1} ${address.city} ${address.state}, ${address.zip}`,
    customer_email,
    customer_phone,
    products: cartItems.value
      .filter(p => p.quantity > 0)
      .map(p => ({
        quantity: p.quantity,
        product_id: p.id,
        name: p.name,
        unit_price: p.price
      })),
    total_price: totalPrice.value,
    status: 'pending',
  }
  console.log('Payload:', payload)
  try {
    const config = useRuntimeConfig()
    const res = await $fetch(`${config.public.apiBase}/orders`, {
      method: 'POST',
      body: payload
    })

    cart.clear() // ✅ goleşti tot din store și localStorage
    window.location.href = '/'
    alert('Order submitted successfully!')

  } catch (e) {
    console.error('Order submission error:', e);
    if (e.response?._data) {
      console.error('Server said:', e.response._data);
      alert(e.response._data.message);
      window.location.href = '/'
    } else {
      alert('Failed to submit order.');
    }
  }
}
</script>

<style scoped>
.input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
}
</style>