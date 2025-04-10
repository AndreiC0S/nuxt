<template>
  <footer class="bg-gray-900 text-white py-10">
    <div class="max-w-7xl mx-auto px-6 space-y-10">

      <!-- Prima linie: Links & social -->
      <div class="flex flex-col lg:flex-row justify-between items-center gap-6 text-sm">
        <!-- Text legal -->
        <div class="text-center lg:text-left">
          <p>&copy; {{ new Date().getFullYear() }} HIDROSERV REPARATII CAPITALE S.R.L</p>
          <p class="text-gray-400">Toate drepturile rezervate</p>
        </div>

        <!-- Linkuri -->
        <div class="flex flex-wrap justify-center gap-4 text-center">
          <NuxtLink to="/confidentialitate" class="hover:underline">Politica de confidențialitate</NuxtLink>
          <NuxtLink to="/termeni-si-conditii" class="hover:underline">Termeni și condiții</NuxtLink>
          <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
        </div>

        <!-- Social media -->
        <div class="flex gap-4 justify-center">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <i class="fab fa-facebook-f hover:text-blue-400"></i>
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram hover:text-pink-400"></i>
          </a>
        </div>
      </div>

      <!-- Linie adresă și sigle ANPC -->
      <div class="flex  md:flex-row justify-center items-center gap-6 text-sm text-gray-300">
        

        <div class="flex gap-4 justify-center md:justify-end">
          <a href="https://reclamatiisal.anpc.ro/" target="_blank" rel="noopener noreferrer">
            <img src="../assets/img/anpc-sal.png" alt="ANPC SAL" class="h-12 object-contain" />
          </a>
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
            <img src="../assets/img/anpc-sol-1.png" alt="ANPC ODR" class="h-12 object-contain" />
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
// No logic needed for now
</script>

<style scoped>
i {
  font-size: 1.2rem;
}
</style>
