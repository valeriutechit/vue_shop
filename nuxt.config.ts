export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['@/assets/css/tailwind.css', '@/assets/css/styles.css'],
  vite: {
    server: {
      hmr: {
        clientPort: 3000
      }
    }
  },
  ssr: false,
})