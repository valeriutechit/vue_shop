export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  ssr: false,
  css: ['@/assets/css/tailwind.css', '@/assets/css/styles.css'],
  compatibilityDate: '2025-04-21'
})