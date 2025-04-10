<template>
  <div class="max-w-5xl mx-auto px-6 py-16 bg-white shadow-xl rounded-xl">
    <h1 class="text-4xl font-extrabold text-center text-blue-800 mb-10">Termeni și Condiții</h1>

    <p class="mb-6 text-lg leading-relaxed text-gray-700">
      Accesarea și utilizarea acestui site implică acceptarea termenilor și condițiilor de mai jos. Vă rugăm să citiți cu atenție.
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-3 text-blue-700">1. Informații generale</h2>
    <p class="mb-4">
      Acest website este operat de S.C. HIDROSERV REPARATII CAPITALE S.R.L. Scopul principal al site-ului este prezentarea produselor comercializate și facilitarea comenzilor online.
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-3 text-blue-700">2. Drepturile de autor</h2>
    <p class="mb-4">
      Conținutul site-ului (texte, imagini, logo-uri) este proprietatea S.C. HIDROSERV REPARATII CAPITALE S.R.L. și nu poate fi folosit fără acordul scris prealabil.
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-3 text-blue-700">3. Comenzi și livrare</h2>
    <p class="mb-4">
      Toate comenzile sunt procesate în cel mai scurt timp posibil. Livrarea este efectuată prin firme de curierat partenere. Ne rezervăm dreptul de a refuza comenzi în cazuri justificate.
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-3 text-blue-700">4. Prețuri și plăți</h2>
    <p class="mb-4">
      Prețurile afișate includ TVA și pot fi modificate fără notificare prealabilă. Plata se poate face ramburs sau prin metodele disponibile online.
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-3 text-blue-700">5. Returnări</h2>
    <p class="mb-4">
      Clienții beneficiază de dreptul de retur conform legislației în vigoare, în termen de 14 zile de la recepționarea produsului. Produsul trebuie să fie în aceeași stare în care a fost livrat.
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-3 text-blue-700">6. Protecția datelor</h2>
    <p class="mb-4">
      Informațiile despre protecția datelor pot fi consultate în pagina <NuxtLink to="/confidentialitate" class="text-blue-600 underline">Politica de Confidențialitate</NuxtLink>.
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-3 text-blue-700">7. Modificări</h2>
    <p class="mb-4">
      Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment, fără notificare prealabilă.
    </p>

    <p class="mt-10 text-sm text-gray-500 italic text-center">
      Ultima actualizare: {{ new Date().toLocaleDateString() }}
    </p>
  </div>
</template>
