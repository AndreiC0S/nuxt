<template>
  
  <section class="bg-gray-100 py-25 text-white hero-section relative">
    <div class="absolute inset-0 bg-black/50 z-0"></div>
    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <!-- Introducere scurtă -->
      <div class="pb-12">

        <h1 class="text-3xl font-bold mb-4 text-white">Experți în Bobine și Accesorii Tehnice</h1>
        <div class="w-20 h-1 mx-auto mb-6 bg-cyan-600 rounded-full"></div>
        <p class="text-white max-w-3xl mx-auto text-lg">
          La Hidroserv oferim o gamă variată de produse de înaltă calitate, specializate pentru motoare electrice, automatizări și reparații. 
          Descoperă soluțiile noastre tehnice pentru aplicații industriale și rezidențiale.
        </p>
      </div>
 
      <NuxtLink
        to="/produse"
        class="inline-block bg-cyan-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-cyan-700 transition"
      >
        Vezi Produsele
      </NuxtLink>
    </div>
  
  </section>
 
</template>

<style>
.hero-section {
  background-image: url('@/assets/img/rebobin.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
}

@media (max-width: 768px) {
  .hero-section {
    background-size:cover;
    background-position:left;
   
  }
}
</style>