// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true ,// sau use static target pentru SSG
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','@fortawesome/fontawesome-free/css/all.min.css'],
  modules: ['@pinia/nuxt'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  runtimeConfig: {
    public: {
      apiBase: 'http://back-test-production-2884.up.railway.app/api' // sau unde rulează backend-ul tău
    }
  },
})
