// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  ssr: false,
  css: [
    '@/styles/global.css',
    '@/styles/reset.css',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: [
            '@use "@/styles/breakpoints.scss" as *;',
          ].join(""),
        },
      },
    },
  },
})