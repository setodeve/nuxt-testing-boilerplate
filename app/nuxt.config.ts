// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    "~": "/app",
    "assets": "/app/assets",
    "public": "/app/public"
  },
  modules: ['@nuxt/test-utils/module', "@nuxtjs/storybook"],
})
