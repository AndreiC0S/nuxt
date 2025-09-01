<template>
  <!-- Top bar -->
  <div class="hidden bg-slate-600 text-white text-sm py-1 px-4 md:flex justify-center items-center flex-wrap">
    <div class="info flex items-center justify-bethween gap-4 w-[50vw]">
      <div class="flex items-center gap-1">
        <i class="fas fa-phone-alt"></i>
        <a href="tel:07000000" class="hover:underline">07000000</a>
      </div>
      <div class="flex items-center gap-1">
        <i class="fas fa-envelope"></i>
        <a href="mailto:test_test@gmail.com" class="hover:underline">
          test_test@gmail.com
        </a>
      </div>
      <div class=" items-center gap-2 hidden lg:flex mt-0">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
      </div>
    </div>
    <div class="flex gap-4 mt-2  hidden lg:flex mt-0">
      <NuxtLink to="/confidentialitate" class="hover:underline">Politica de confidențialitate</NuxtLink>
      <NuxtLink to="/contact" class="hover:underline font-semibold">Cerere Ofertă Preț</NuxtLink>
    </div>
  </div>
  <!-- <div class=" flex items-center gap-4 md:hidden">
        <img src="../assets/img/S.C.-HIDROSERV-REPARATII-CAPITALE-S.R.L-1.png" alt="logo" class="max-h-19" />

  </div> -->
  <header class="shadow sticky top-0 bg-white opacity-97 z-50">
    <!-- Logo + firm name -->
    <!-- Logo + nav -->
    <div class="  flex  justify-between md:px-4 lg:flex flex-row items-center lg:justify-center py-1 ">
      <div class="flex flex-col w-[100vw] md:flex-row md:justify-between md:items-center lg:gap-0 lg:w-[70vw] lg:justify-between lg:items-center">

        <!-- Logo + firm name -->
        <div class="hidden  items-center gap-4 md:flex">
          <img src="../assets/img/S.C.-HIDROSERV-REPARATII-CAPITALE-S.R.L-1.png" alt="logo" class="max-h-19" />

        </div>

        <!-- Nav links -->
        <div class="flex flex-row sticky top-0 gap-6 py-5 relative justify-between px-10 items-center md:gap-5 lg:justify-center  ">
          <button @click="isOpen = !isOpen" class="lg:hidden text-gray-800 focus:outline-none">
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav class="hidden  lg:flex mt-0 relative">
            <ul class="flex  gap-5  items-center  text-sm font-medium text-gray-700">

              <li>
                <NuxtLink
                  to="/"
                  :class="{
                    'text-cyan-600 font-semibold': $route.path === '/',
                    'hover:text-blue-600': $route.path !== '/'
                  }"
                >
                  Acasă
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/despre-noi"
                  :class="{
                    'text-cyan-600 font-semibold': $route.path === '/despre-noi',
                    'hover:text-blue-600': $route.path !== '/despre-noi'
                  }"
                >
                  Despre Noi
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/produse"
                  :class="{
                    'text-cyan-600 font-semibold': $route.path === '/produse',
                    'hover:text-blue-500': $route.path !== '/produse'
                  }"
                >
                  Produse
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  :class="{
                    'text-cyan-600 font-semibold': $route.path === '/contact',
                    'hover:text-blue-600': $route.path !== '/contact'
                  }"
                >
                  Contact
                </NuxtLink>
              </li>

            </ul>
          </nav>
          <Cart />

        </div>
      </div>
    </div>
    <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <div
      v-show="isOpen"
      ref="dropdown"
      class="lg:hidden  bg-slate-100   rounded px-4   overflow-hidden"
    >
    <ul class="space-y-1 flex flex-col justify-center  items-center ">
    <li v-for="item in menuItems" :key="item.label" class="w-full text-center py-1 ">
      <NuxtLink
        :to="item.to"
        :class="{
          'text-cyan-600 font-semibold': $route.path === item.to,
          'hover:text-blue-600': $route.path !== item.to
        }"
      >
        {{ item.label }}
      </NuxtLink>
    </li>
  </ul>
  
      </div>
  
    </transition>
  </header>
</template>

<script setup>
const menuItems = [
  { label: 'Acasă', to: '/' },
  { label: 'Despre Noi', to: '/despre-noi' },
  { label: 'Produse', to: '/produse' },
  { label: 'Contact', to: '/contact' }
]
const isOpen = ref(false)
const dropdown = ref(null)

function beforeEnter(el) {
  el.style.maxHeight = '0'
  el.style.transition = 'max-height 0.3s ease'
}

function enter(el) {
  requestAnimationFrame(() => {
    el.style.maxHeight = el.scrollHeight + 'px'
  })
}

function leave(el) {
  el.style.maxHeight = '0px'
}
</script>

<style scoped>
.dropdown-enter-active {
  transition: 110px 0.4s ease;
}
.dropdown-leave-active {
  transition: 110px 0.4s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  max-height: 0;
}

@media screen and (min-width: 1043px) and (max-width: 1042px) {
  .test {
    width: 30vw;
  }
}

@media screen and (min-width: 1291px) {
  .test {
    width: 80vw;
    justify-content: space-evenly;
  }
}

@media screen and (max-width: 600px) {
  .info {
    display: block;
  }
}
</style>
